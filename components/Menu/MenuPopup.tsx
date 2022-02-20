import { useRef } from 'react'

import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'
import { Menu } from './Menu'

interface MenuPopupProps {
    domProps: DOMProps;
    
}

export const MenuPopup = ({ domProps, ...props }: MenuPopupProps) => {
    // const menuRef = useRef<HTMLUListElement | null>(null)
    const overlayRef = useRef<HTMLDivElement | null>(null)

    const { overlayProps } = useOverlay({
        onClose: props.onClose,
        shouldCloseOnBlur: true,
        isDismissable: true,
        isOpen: false
    }, overlayRef)

    return (
        <FocusScope restoreFocus>
            <div {...overlayProps} ref={overlayRef}>
                <DismissButton onDismiss={props.onClose} /> 

                
                <DismissButton onDismiss={props.onClose} /> 
            </div>
        </FocusScope>
    )
}