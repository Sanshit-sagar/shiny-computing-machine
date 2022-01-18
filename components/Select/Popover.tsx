import { ReactNode, RefObject, useRef } from 'react'
import { FocusScope, DismissButton, useOverlay } from 'react-aria'

import { StyledPopoverWrapper } from './styles'

interface PopoverProps {
    popoverRef?: RefObject<HTMLDivElement>;
    children: ReactNode; 
    isOpen?: boolean;
    onClose?: () => void; 
}

export function Popover(props: PopoverProps) {
    const ref = useRef<HTMLDivElement>(null)
    const {
        popoverRef = ref,
        isOpen, 
        onClose,
        children
    } = props

    const { overlayProps } = useOverlay({ 
        isOpen, 
        onClose, 
        shouldCloseOnBlur: true,
        isDismissable: false 
    }, popoverRef)

    return (
        <FocusScope restoreFocus>
            <StyledPopoverWrapper {...overlayProps} ref={popoverRef}>
                {children}
                <DismissButton onDismiss={onClose} />
            </StyledPopoverWrapper>
        </FocusScope>
    )
}
