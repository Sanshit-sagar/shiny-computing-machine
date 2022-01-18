import React, { RefObject, ReactNode, ElementType } from 'react'
import { VariantProps, CSS } from 'stitches.config'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useModal, useOverlay, DismissButton } from '@react-aria/overlays'

import { useTheme } from '@/hooks/useTheme'
import { isElementOfType } from '@/interfaces/Guards'

import OverlayHeading from './OverlayHeading'
import OverlayDescription from './OverlayDescription'
import { Separator } from '@/components/Separator'

import { useOverlayContext } from './utils'
import { StyledOverlay, StyledOverlayContents } from './styles'

type OverlayDialogProps = {
    element?: ElementType;
    children: ReactNode; 
    css?: CSS;
} & VariantProps<typeof StyledOverlayContents> 

const OverlayDialog = ({ element: Component = 'div', children, ...props }: OverlayDialogProps) => {
    const activeThemeClass = useTheme()
    const { modalProps } = useModal()

    const { state, subtitle, mergedOverlayProps, overlayRef, ...remainingContext } = useOverlayContext()
    
    const { dialogProps, titleProps } = useDialog({ }, overlayRef as RefObject<HTMLElement>)
    const { overlayProps } = useOverlay({ 
        onClose: () => state.close(),
        isOpen: state.isOpen,
        ...remainingContext
    }, overlayRef as RefObject<HTMLElement>)  

    const mergedProps =  mergeProps(overlayProps, dialogProps, mergedOverlayProps, modalProps)

    const filteredHeading = React.Children.toArray(children).filter((child) => isElementOfType(child, OverlayHeading))
    const filteredDescription = React.Children.toArray(children).filter((child) => isElementOfType(child, OverlayDescription))

    const dialogHeading = filteredHeading?.length ? filteredHeading[0] : null
    const dialogDescription = filteredDescription?.length ? filteredDescription[0] : null

    const filteredContent = React.Children.toArray(children).filter((child) => (
        !isElementOfType(child, OverlayHeading) && !isElementOfType(child, OverlayDescription)
    ))
   
    return (
        <FocusScope restoreFocus>
            <StyledOverlay {...mergedProps} ref={overlayRef} css={{ ...mergedOverlayProps.style }}>
                <StyledOverlayContents className={activeThemeClass} {...props}>
                    <Component>

                        {dialogHeading && (
                            <OverlayHeading {...titleProps} css={{ ...dialogHeading.props?.css }}> 
                                {dialogHeading.props?.children} 
                            </OverlayHeading> 
                        )}

                        {dialogDescription && (
                            <OverlayDescription> 
                                {dialogDescription.props?.children} 
                            </OverlayDescription>
                        )}

                        {filteredContent}

                        <DismissButton onDismiss={state.close} />  
                    </Component> 
                </StyledOverlayContents>
            </StyledOverlay>
        </FocusScope>
    )
}

OverlayDialog.displayName = 'OverlayDialog'
export default OverlayDialog