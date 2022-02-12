import { forwardRef, ElementType, ElementRef, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config'

import { ScopedProps } from './types'
import { useTooltipContext } from './TooltipContext'
import { DEFAULT_NAME, DEFAULT_TRIGGER_TAG } from './constants' 

const TOOLTIP_TRIGGER_NAME = `${DEFAULT_NAME}Trigger`

interface TooltipTriggerElement extends ElementRef<typeof DEFAULT_TRIGGER_TAG> {}
interface TooltipTriggerProps extends ComponentPropsWithoutRef<typeof DEFAULT_TRIGGER_TAG> {
    element?: ElementType<any>; 
    css?: CSS;
}

export const TooltipTrigger = forwardRef<TooltipTriggerElement, TooltipTriggerProps>(({ 
    __scopeTooltip,
    element: Component = 'button', 
    children, 
    ...rest  
}: ScopedProps<TooltipTriggerProps>, forwardedRef) => {

    const { 
        interactionProps, 
        triggerRef, 
        triggerStyles 
    } = useTooltipContext(TOOLTIP_TRIGGER_NAME, __scopeTooltip)

    return (
        <Component {...interactionProps} {...rest} ref={triggerRef} css={triggerStyles}>
            {children}
        </Component>
    )
})

TooltipTrigger.displayName = 'TooltipTrigger'
export default TooltipTrigger