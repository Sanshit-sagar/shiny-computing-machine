import { useRef, forwardRef, RefObject, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useMenuItem } from '@react-aria/menu' 
import { useHover } from '@react-aria/interactions'

import { StyledMenuItem } from './styles'
import type { MenuItemProps } from './types'

export const AriaMenuItem = <T extends object>(props: MenuItemProps<T>) => {

    const { 
        item, 
        state, 
        onAction, 
        onClose,
    } = props

    const itemRef = useRef<HTMLLIElement | null>(null)

    const isDisabled = state.disabledKeys.has(item.key)
    const isFocused = state.selectionManager.focusedKey === item.key
    const isSelected = state.selectionManager.selectedKeys.has(item.key)

    const { menuItemProps } = useMenuItem({
        key: item.key,
        isDisabled,
        onAction,
        onClose
    }, state, itemRef)

    const { isHovered, hoverProps } = useHover({ isDisabled })

    const mergedProps = mergeProps(menuItemProps, hoverProps)

    return (
        <StyledMenuItem 
            {...mergedProps} 
            isHovered={state.selectionManager.focusedKey !== item.key ? false : isHovered}
            isFocused={isFocused}
            isDisabled={isDisabled}
            isSelected={isSelected}
            ref={itemRef}
        >
            {item.rendered}
        </StyledMenuItem>
    )
}

AriaMenuItem.displayName = 'MenuItem'
const _MenuItem = forwardRef(AriaMenuItem) as <T>(props: MenuItemProps<T> & { 
    ref?: RefObject<HTMLLIElement>; 
}) => ReactElement;

export { _MenuItem as MenuItem }