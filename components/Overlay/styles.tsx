import React, { forwardRef, ReactNode, ElementType, useRef } from 'react' 
import { styled } from '../../stitches.config'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button'


import {
  useOverlay,
  useOverlayTrigger,
  useOverlayPosition,
  useModal,
  OverlayProvider,
  OverlayContainer,
  DismissButton
} from '@react-aria/overlays'
import { useOverlayTriggerState } from '@react-stately/overlays'

import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator' 
import { Heading } from '@/components/Typography'
import { useFocusableRef, FocusableRef } from '@/utils/useRefs'
import { useInteractions } from '@/hooks/useInteractions'

import { PopoverProps, PopoverState, OverlayProps, OverlayTriggerProps } from './interfaces'

const StyledOverlay = styled('div', {
    bc: '$light1',
    color: '$dark1',
    p: '$4'
})

const PopoverContents = styled('div', {
    width: '100%',
    minWidth: '200px',
    maxWidth: '500px',
    borderTop: '1px solid $accentBorder',
    outline: 'none',
    bc: '$accentBg',
    color: '$accentTextContrast',
    p: '$2',
    m: 0,
})

const ExtendedOverlay = forwardRef<HTMLDivElement, OverlayProps>(
    ({ children, css, ...props }, forwardedRef) => (
        <StyledOverlay {...props} ref={forwardedRef} css={{ ...css }}>
            {children}
        </StyledOverlay>
    )
)

const Popover = forwardRef(
    ({ 
        title = "", 
        children, 
        isOpen, 
        onClose, 
        css,
        ...otherProps
    }: PopoverProps, ref) => {
    
        const { overlayProps } = useOverlay({ onClose, isOpen, isDismissable: true }, ref)  
        const { modalProps } = useModal()
        const { dialogProps, titleProps } = useDialog({}, ref)

        return (
            <FocusScope restoreFocus>
                <ExtendedOverlay 
                    {...mergeProps(overlayProps, modalProps, dialogProps, titleProps)} 
                    ref={ref} 
                    css={{...css}}
                >
                    <Heading> {title} </Heading>
                    <Separator size="full" /> 
                    <PopoverContents> {children} </PopoverContents>
                    <DismissButton onDismiss={onClose} />
                </ExtendedOverlay>
            </FocusScope>
        )
    }
)

export const PopoverTrigger = (props) => {

    const state: PopoverState = useOverlayTriggerState(props)

    const triggerRef = useRef<HTMLButtonElement>()
    const overlayRef = useRef<HTMLDivElement>()
    

    const { triggerProps, overlayProps } = useOverlayTrigger({ 
        type: 'dialog' 
    }, state, triggerRef)

    const { overlayProps: positionProps } = useOverlayPosition({
        targetRef: triggerRef,
        overlayRef,
        placement: 'top',
        offset: 5,
        isOpen: state.isOpen
    })

    let {buttonProps} = useButton({ onPress: () => state.open() }, triggerRef)

    return (
        <>
            <Button onClick={(event) => alert('hihihi')} {...mergeProps(buttonProps, triggerProps)} ref={triggerRef}>
                Open Popover
            </Button>
        
            {state.isOpen && (
                <OverlayContainer>
                    <Popover 
                        {...overlayProps}
                        {...positionProps}
                        title="Poppin it over"
                        isOpen={state.isOpen}
                        onClose={state.close}
                        ref={overlayRef}
                    >
                        Popover content here
                    </Popover>
                </OverlayContainer>
            )}
        </>
    )
}

export default PopoverTrigger



// export const PopoverTrigger = React.forwardRef(PopoverWrapper) as <
//     T extends ElementType = 'button'
// >(props: OverlayTriggerProps & { 
//     ref?: FocusableRef<HTMLElement>
// }) => React.ReactElement
