import { useRef, forwardRef, cloneElement, RefObject, ReactNode, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useMenuItem } from '@react-aria/menu' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { useMenuContext } from './utils'
import { StyledMenuItem } from './styles'
import type { MenuItemProps } from './types'

export function AriaMenuItem<T>({
    item, 
    state, 
    isVirtualized,
    onAction, 
    children
}: MenuItemProps<T> & { children: ReactNode; }) {

    const itemRef = useRef<HTMLLIElement | null>(null)
    const isSelected = state.selectionManager.selectedKeys.has(item.key)
    const isDisabled = state.disabledKeys.has(item.key)

    const { onClose, closeOnSelect } = useMenuContext()

    const { labelProps, menuItemProps, descriptionProps, keyboardShortcutProps } = useMenuItem({
        key: item.key,
        onClose,
        onAction,
        isSelected,
        isDisabled,
        isVirtualized,
        closeOnSelect,
        'aria-label': item['aria-label']
    }, state, itemRef)

    const [prefix, title, shortcut] = item.rendered
    
    const itemPrefix = cloneElement(prefix, {}) 
    const itemTitle = cloneElement(title, labelProps)
    const itemShortcut = cloneElement(shortcut, keyboardShortcutProps)

    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { focusProps, ...focusStates } = useFocusRing({ within: true })
    const mergedProps = mergeProps(menuItemProps, hoverProps, focusProps)

    const menuStates = { isHovered, isSelected, isDisabled, ...focusStates }

    return (
        <StyledMenuItem {...mergedProps} {...menuStates} ref={itemRef}>
            <> {itemPrefix} </> 
            <> {itemTitle} </>
            <> {itemShortcut} </>
        </StyledMenuItem>
    )
}

AriaMenuItem.displayName = 'MenuItem'
const _MenuItem = forwardRef(AriaMenuItem) as <T>(props: MenuItemProps<T> & { 
    ref?: RefObject<HTMLLIElement>; 
}) => ReactElement;

export { _MenuItem as MenuItem }