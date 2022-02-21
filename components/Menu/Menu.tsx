import { HTMLAttributes, ComponentProps, forwardRef, ReactElement } from 'react'

import { StyledMenu } from './styles'
import { AriaMenuOptions } from './types'
import { MenuItem } from './MenuItem'
import { MenuSection } from './MenuSection'

import { useDOMRef } from '@/utils/useRefs'

import { DOMRef } from '@react-types/shared'
import { useTreeState } from '@react-stately/tree'
import { useMenu } from '@react-aria/menu'
import { useSyncRef } from '@react-aria/utils'


const DEFAULT_TAG = 'ul'
type MenuProps<T> =  AriaMenuOptions<T> & ComponentProps<typeof DEFAULT_TAG>

export const AriaMenu = <T extends object>(props: MenuProps<T>, ref: DOMRef<HTMLUListElement>) => {
     
    const domRef = useDOMRef<HTMLUListElement>(ref)
    const state = useTreeState({ ...props, selectionMode: 'none' })
    const { menuProps } = useMenu(props, state, domRef)

    return (
        <StyledMenu {...menuProps} ref={domRef}>
            {[...state.collection].map((item) => {

                if(item.type === 'section') return (
                   <MenuSection
                        key={item.key}
                        section={item}
                        state={state}
                        onAction={props.onAction}
                    />
                )

                let menuItem = (
                    <MenuItem
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={props.onAction}
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


const _Menu = forwardRef(AriaMenu) as <T>(props: MenuProps<T> & { ref?: DOMRef<HTMLUListElement> }) => ReactElement
export { _Menu as Menu }
