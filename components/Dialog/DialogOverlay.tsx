import { useRef } from 'react'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useModal, useOverlay, usePreventScroll } from '@react-aria/overlays'

import { useAtomValue } from 'jotai/utils'
import { activeThemeClassAtom } from '@/atoms/darkMode'

import DialogBody from './DialogBody'
import { DialogOverlayProps } from './types'
import { StyledOverlay, StyledContainer } from './styles'
import { useDialogContext } from './utils'



const DialogOverlay = ({ children, element: Component = 'div', css }: DialogOverlayProps) => {
    const { state, title, subtitle, onClose, isOpen, isDismissible } = useDialogContext()
    const activeThemeClass = useAtomValue(activeThemeClassAtom)

    const ref = useRef<HTMLDivElement>()
    const { overlayProps, underlayProps } = useOverlay({ subtitle,  onClose, isOpen, isDismissible, children }, ref)
  
    usePreventScroll()
    const { modalProps } = useModal()
    const { dialogProps, titleProps } = useDialog({ subtitle, children }, ref)

    const mergedProps = { ...mergeProps(overlayProps, modalProps, dialogProps)}

    return (
        <StyledOverlay {...underlayProps}>
            <FocusScope contain restoreFocus autoFocus>
                <StyledContainer {...mergedProps} className={activeThemeClass} ref={ref}>
                    <DialogBody titleProps={titleProps} css={{ ...css }}>
                        {children}
                    </DialogBody>
                </StyledContainer>
            </FocusScope>
        </StyledOverlay>
    )
}

DialogOverlay.displayName = 'DialogOverlay'
export default DialogOverlay