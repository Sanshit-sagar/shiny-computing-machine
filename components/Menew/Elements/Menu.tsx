import React, { useContext, ReactElement } from 'react' 
import { styled, VariantProps } from '../../../stitches.config'

import { useDOMRef } from '@/utils/useRefs'
import { DOMRef } from '@react-types/shared'

import { useMenu } from '@react-aria/menu'
import { useTreeState } from '@react-stately/tree'
import { SpectrumMenuProps } from '@react-types/menu'
import { mergeProps, useSyncRef } from '@react-aria/utils'

import { MenuItem } from './MenuItem'
import { MenuSection } from './MenuSection'
import { MenuContext } from './MenuContext'

const List = styled('ul', {
    border: '1px solid $accentBorder',
    bc: '$accentBg',
    m: 0,
    px: 0,
    py: '$1',
    br: '$1',
    listStyle: 'none',
    minWidth: '125px',
})


type MenuProps<T> =  SpectrumMenuProps<T> & React.ComponentProps<typeof List>

export function NMenu<T extends object>(props: MenuProps<T>, ref: DOMRef<HTMLUListElement>) {
    const contextProps = useContext(MenuContext)
    const completeProps = { ...mergeProps(contextProps, props)}
    const domRef = useDOMRef<HTMLUListElement>(ref)
    
    const state = useTreeState(completeProps)
    let { menuProps } = useMenu(completeProps, state, domRef)

    useSyncRef(contextProps, domRef)

    return (
        <List {...menuProps} ref={domRef}>
             {[...state.collection].map(item => {
                if (item.type === 'section') {
                    return (
                        <MenuSection
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={completeProps.onAction} />
                    )
                }
                
                let menuItem = (
                    <MenuItem
                      key={item.key}
                      item={item}
                      state={state}
                      onAction={completeProps.onAction} 
                    />
                )
          
                if (item.wrapper) {
                    menuItem = item.wrapper(menuItem);
                }
          
                return menuItem;
            })}
        </List>
    )
}

const _Menu = React.forwardRef(NMenu) as <T>(props: SpectrumMenuProps<T> & {ref?: DOMRef<HTMLUListElement>}) => ReactElement;
export {_Menu as Menu};


