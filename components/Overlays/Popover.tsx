import React, { forwardRef, HTMLAttributes, ReactNode, RefObject } from 'react'

import { useModal, useOverlay } from '@react-aria/overlays'
import { mergeProps } from '@react-aria/utils'

import { PlacementAxis, PopoverProps } from '@react-types/overlays'
import { DOMRef } from '@react-types/shared'

import { useDOMRef } from '@/utils/useRefs'
import { Overlay } from './Overlay'

interface PopoverWrapperProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    placement?: PlacementAxis,
    arrowProps?: HTMLAttributes<HTMLElement>,
    hideArrow?: boolean,
    isOpen?: boolean,
    onClose?: () => void,
    shouldCloseOnBlur?: boolean,
    isKeyboardDismissDisabled?: boolean,
    isNonModal?: boolean,
    isDismissable?: boolean
}

const PopoverWrapper = forwardRef((props: PopoverWrapperProps, ref: RefObject<HTMLDivElement>) => {
    const {
        children,
        placement = 'bottom',
        arrowProps,
        isOpen,
        hideArrow,
        shouldCloseOnBlur,
        isKeyboardDismissDisabled,
        isNonModal,
        isDismissable,
        ...otherProps
    } = props;

    const { overlayProps } = useOverlay({
        ...props,
        isDismissable: isDismissable && isOpen, 
    }, ref)

    const { modalProps } = useModal({ isDisabled: isNonModal })

    return (
        <div {...mergeProps(props, overlayProps, modalProps)} ref={ref}>
            {children}
        </div>
    )
});


export const StyledPopover = (props: PopoverProps, ref: DOMRef<HTMLDivElement>) => {
    const {
        children,
        placement,
        arrowProps,
        onClose,
        shouldCloseOnBlur,
        hideArrow,
        isKeyboardDismissDisabled,
        isNonModal,
        isDismissable = true,
        ...otherProps
    } = props

    const domRef = useDOMRef<HTMLDivElement>(ref)

    return (
        <Overlay {...otherProps}>
             <PopoverWrapper
                ref={domRef}
                placement={placement}
                arrowProps={arrowProps}
                onClose={onClose}
                shouldCloseOnBlur={shouldCloseOnBlur}
                isKeyboardDismissDisabled={isKeyboardDismissDisabled}
                hideArrow={hideArrow}
                isNonModal={isNonModal}
                isDismissable={isDismissable}
            >
                {children}
            </PopoverWrapper>
        </Overlay>
    )
}


let _Popover = forwardRef(StyledPopover);
export {_Popover as Popover};