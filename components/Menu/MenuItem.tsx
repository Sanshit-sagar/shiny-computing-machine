import { useRef } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useMenuItem } from '@react-aria/menu' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { StyledMenuItem } from './styles'
import type { MenuItemProps } from './types'

export const MenuItem = <T extends object>(props: MenuItemProps<T>) => {

    const { 
        item, 
        state, 
        onAction, 
        onClose,
    } = props

    const itemRef = useRef<HTMLLIElement | null>(null)

    const isDisabled = state.disabledKeys.has(item.key)
    const isFocused = state.selectionManager.focusedKey === item.key

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
            isHovered={isHovered}
            isFocused={isFocused}
            isFocusVisible={isFocused}
            isDisabled={isDisabled}
            ref={itemRef}
        >
            {item.rendered}
        </StyledMenuItem>
    )
}