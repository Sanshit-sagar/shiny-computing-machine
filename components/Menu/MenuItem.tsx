import { useRef, forwardRef, RefObject, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useMenuItem } from '@react-aria/menu' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { useMenuContext } from './utils'
import { StyledMenuItem } from './styles'
import type { MenuItemProps } from './types'

import { useInteractions } from '@/hooks/useInteractions'

export function AriaMenuItem<T>(props: MenuItemProps<T>) {

    const { 
        item, 
        state, 
        isVirtualized,
        onAction, 
    } = props

    const {
        onClose,
        closeOnSelect
    } = useMenuContext()

    const { rendered, key } = item

    const itemRef = useRef<HTMLLIElement | null>(null)

    const isDisabled = state.disabledKeys.has(item.key)
    const isSelected = state.selectionManager.selectedKeys.has(item.key)

    const { labelProps, menuItemProps, descriptionProps, keyboardShortcutProps } = useMenuItem({
        key,
        onClose,
        onAction,
        isSelected,
        isDisabled,
        isVirtualized,
        closeOnSelect,
        'aria-label': item['aria-label']
    }, state, itemRef)

    const { interactionProps, ...interactionStates } = useInteractions({ isDisabled })

    return (
        
        <StyledMenuItem {...mergeProps(menuItemProps, interactionProps)} {...interactionStates} ref={itemRef}>
            {item.rendered}
        </StyledMenuItem>
    )
}

AriaMenuItem.displayName = 'MenuItem'
const _MenuItem = forwardRef(AriaMenuItem) as <T>(props: MenuItemProps<T> & { 
    ref?: RefObject<HTMLLIElement>; 
}) => ReactElement;

export { _MenuItem as MenuItem }