import { useRef, ReactChild, createElement } from 'react'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useModal, useOverlay, usePreventScroll } from '@react-aria/overlays'

import { useAtomValue } from 'jotai/utils'
import { activeThemeClassAtom } from '@/atoms/darkMode'
import { flattenChildren } from '@/utils/flattenChildren'

import DialogBody from './DialogBody'
import DialogTitle from './DialogTitle'
import DialogSubtitle from './DialogSubtitle'

import { DialogOverlayProps } from './types'
import { StyledOverlay, StyledContainer, StyledActionArea, StyledActionButton } from './styles'
import { isDialogTitle, isDialogSubtitle, isDialogAction, useDialogContext } from './utils'


const CheckIcon = () => <i className="bi bi-check-lg"></i>
const CrossIcon = () => <i className="bi bi-x-lg"></i>


const DialogOverlay = ({ children, element: Component = 'div', css }: DialogOverlayProps) => {
    const { state, title, subtitle } = useDialogContext()
    const activeThemeClass = useAtomValue(activeThemeClassAtom)

    const ref = useRef<HTMLDivElement>()
    const { overlayProps, underlayProps } = useOverlay({ title, subtitle, children }, ref)
  
    usePreventScroll()
    const { modalProps } = useModal()
    const { dialogProps, titleProps } = useDialog({ title, subtitle, children }, ref)

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