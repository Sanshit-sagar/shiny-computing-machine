import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react'
import { CSS } from 'stitches.config'

import { TooltipProvider } from './TooltipContext'
import { useTooltip } from './useTooltip'
import { DEFAULT_NAME, DEFAULT_ROOT_TAG } from './constants' 
import { ScopedProps, TooltipProps } from './types' 
import { StyledTooltipRoot } from './styles' 

const TOOLTIP_ROOT_NAME = `${DEFAULT_NAME}Root`

interface TooltipRootElement extends ElementRef<typeof DEFAULT_ROOT_TAG> {}
interface TooltipRootProps extends ComponentPropsWithoutRef<typeof DEFAULT_ROOT_TAG>, TooltipProps {
    element?: ElementType<any>; 
    css?: CSS; 
}

const TooltipRoot = forwardRef<TooltipRootElement, TooltipRootProps>(({
    __scopeTooltip,
    delayMs = 0,
    element: Component = DEFAULT_ROOT_TAG,
    isDisabled = false,
    isLoading = false,
    isOpen, 
    placement = 'top',
    children, 
    ...props
}: ScopedProps<TooltipRootProps>, forwardedRef) => {

    const tooltipContextValue = useTooltip({ isDisabled, isLoading, isOpen, placement })
    const tooltipState = { ...tooltipContextValue, delayMs, isDisabled, isLoading, isOpen, placement, ...props }

    return (
        <TooltipProvider scope={__scopeTooltip} {...tooltipState}>
            <StyledTooltipRoot ref={forwardedRef}>
                {children}
            </StyledTooltipRoot>
        </TooltipProvider>
    )
})

TooltipRoot.displayName = TOOLTIP_ROOT_NAME
export default TooltipRoot

