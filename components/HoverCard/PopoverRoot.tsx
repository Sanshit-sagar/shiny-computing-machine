import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react'
import { CSS } from 'stitches.config'

import { PopoverProvider } from './PopoverContext'
import { usePopover } from './usePopover'
import { DEFAULT_NAME, DEFAULT_ROOT_TAG } from './constants' 
import { ScopedProps, PopoverProps } from './types' 
import { StyledPopoverRoot } from './styles' 

const Popover_ROOT_NAME = `${DEFAULT_NAME}Root`

interface PopoverRootElement extends ElementRef<typeof DEFAULT_ROOT_TAG> {}
interface PopoverRootProps extends ComponentPropsWithoutRef<typeof DEFAULT_ROOT_TAG>, PopoverProps {
    element?: ElementType<any>; 
    css?: CSS; 
}

const PopoverRoot = forwardRef<PopoverRootElement, PopoverRootProps>(({
    __scopePopover,
    delayMs = 0,
    element: Component = DEFAULT_ROOT_TAG,
    isDisabled = false,
    isLoading = false,
    isOpen, 
    placement = 'top',
    children, 
    ...props
}: ScopedProps<PopoverRootProps>, forwardedRef) => {

    const PopoverContextValue = usePopover({ isDisabled, isLoading, isOpen, placement })
    const PopoverState = { ...PopoverContextValue, delayMs, isDisabled, isLoading, isOpen, placement, ...props }

    return (
        <PopoverProvider scope={__scopePopover} {...PopoverState}>
            <StyledPopoverRoot ref={forwardedRef}>
                {children}
            </StyledPopoverRoot>
        </PopoverProvider>
    )
})

PopoverRoot.displayName = Popover_ROOT_NAME
export default PopoverRoot

