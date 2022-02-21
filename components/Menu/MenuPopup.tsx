import { useRef, HTMLAttributes } from 'react'

import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'
import { Menu } from './Menu'
import type { MenuPopupProps } from './types'

const noop = () => {}

export const MenuPopup = ({ 
    onClose = noop, 
    autoFocus = false, 
    ...props 
}: MenuPopupProps) => {

    const overlayRef = useRef<HTMLDivElement | null>(null)

    const { overlayProps } = useOverlay({
        onClose,
        shouldCloseOnBlur: true,
        isDismissable: true,
        isKeyboardDismissDisabled: false,
    }, overlayRef)

    return (
        <FocusScope restoreFocus>
            <div {...overlayProps} ref={overlayRef}>
                <DismissButton onDismiss={onClose} /> 
                    <Menu onClose={onClose} autoFocus={autoFocus} {...props} /> 
                <DismissButton onDismiss={onClose} /> 
            </div>
        </FocusScope>
    )
}

MenuPopup.displayName = 'MenuPopup'