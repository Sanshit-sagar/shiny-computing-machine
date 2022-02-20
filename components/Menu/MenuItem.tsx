import { useRef } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useMenuItem } from '@react-aria/menu' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'


export const MenuItem = ({ item, state, onAction, onClose, autoFocus = false, isDisabled = false }) => {
    const itemRef = useRef<HTMLLIElement | null>(null)

    const { menuItemProps } = useMenuItem({
        key: item.key,
        isDisabled: item.isDisabled,
        onAction,
        onClose
    }, state, itemRef)


    const { isHovered, hoverProps } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({
        within: true,
        isTextInput: false,
        autoFocus
    })

    const mergedProps = mergeProps(menuItemProps, hoverProps, focusProps)

    return (
        <li {...mergedProps} ref={itemRef}>
            {item.rendered}
        </li>
    )
}