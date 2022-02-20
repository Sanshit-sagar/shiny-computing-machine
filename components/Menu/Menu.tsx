
import { MenuItem } from './MenuItem'
import { StyledMenu } from './styles'
import { MenuSeparator } from './MenuSeparator'

import { SpectrumMenuProps } from '@react-types/menu'


import { useMenu } from '@react-aria/menu'
import { useTreeState } from '@react-stately/tree'
import { mergeProps } from '@react-aria/utils'


type MenuProps<T> =  SpectrumMenuProps<T> 

const MenuList = <T extends object>(props: MenuProps<T>, ref: DOMRef<HTMLUListElement>) => {
    const contextProps = useContext(MenuContext)
    const completeProps = { ...mergeProps(contextProps, props)}
    const domRef = useDOMRef<HTMLUListElement>(ref)
        

    useSyncRef(contextProps, domRef)

    const state = useTreeState({ ...props, selectionMode: 'none' })
    const { menuProps } = useMenu(props, state, menuRef)

    return (
        <StyledMenu {...mergedProps} ref={menuRef}>
            {[...state.collection].map((item) => {
                if(item.type === 'section') return (
                   <MenuSection
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={onAction}
                    />
                )

                let menuItem = (
                    <MenuItem
                        key={item.key}
                        item={item}
                        state={state}
                        onAction={props.onAction}
                        onClose={props.onClose} 
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

{/* // let { menuProps } = useMenu(completeProps, state, domRef) */}
{/* const state = useTreeState(completeProps) */}