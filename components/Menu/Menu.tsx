import { forwardRef, ReactElement } from 'react'

import { useMenu } from '@react-aria/menu'
import { useDOMRef } from '@/utils/useRefs'
import { DOMRef } from '@react-types/shared'
import { useTreeState } from '@react-stately/tree'
import { useSyncRef, mergeProps } from '@react-aria/utils'

import { MenuProps } from './types'
import { StyledMenu } from './styles'
import { useMenuContext } from './utils'
import { MenuItem } from './MenuItem'
import { MenuSection } from './MenuSection'

export const AriaMenu = <T extends object>(props: MenuProps<T>, ref: DOMRef<HTMLUListElement>) => {
    const contextProps = useMenuContext()
    const completeProps = { ...mergeProps(contextProps, props) }

    const domRef = useDOMRef<HTMLUListElement>(ref)
    const state = useTreeState(completeProps)
    const { menuProps } = useMenu(completeProps, state, domRef)

    useSyncRef(contextProps, domRef)

    return (
        <StyledMenu {...menuProps} ref={domRef}>
            {[...state.collection].map((item) => {

                if(item.type === 'section') return (
                   <MenuSection
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={completeProps.onAction}
                    />
                )

                let menuItem = (
                    <MenuItem
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={completeProps.onAction}
                    />
                )

                if(item.wrapper) {
                    menuItem = item.wrapper(menuItem)
                }
                
                return menuItem
            })}
        </StyledMenu>
    )
}


const _Menu = forwardRef(AriaMenu) as <T>(props: MenuProps<T> & { 
    ref?: DOMRef<HTMLUListElement> 
}) => ReactElement
export { _Menu as Menu }
