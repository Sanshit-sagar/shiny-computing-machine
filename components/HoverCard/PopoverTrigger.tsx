import { forwardRef, ElementType, ElementRef, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config'

import { ScopedProps } from './types'
import { StyledPopoverTrigger } from './styles'
import { usePopoverContext } from './PopoverContext'
import { DEFAULT_NAME, DEFAULT_TRIGGER_TAG } from './constants' 

const POPOVER_TRIGGER_NAME = `${DEFAULT_NAME}Trigger`

interface PopoverTriggerElement extends ElementRef<typeof DEFAULT_TRIGGER_TAG> {}
interface PopoverTriggerProps extends ComponentPropsWithoutRef<typeof DEFAULT_TRIGGER_TAG> {
    element?: ElementType<any>; 
    css?: CSS;
}

export const PopoverTrigger = forwardRef<PopoverTriggerElement, PopoverTriggerProps>(({ 
    __scopePopover,
    element: Component = StyledPopoverTrigger, 
    children, 
    ...rest  
}: ScopedProps<PopoverTriggerProps>, forwardedRef) => {

    const { 
        interactionProps, 
        triggerRef, 
        triggerStyles 
    } = usePopoverContext(POPOVER_TRIGGER_NAME, __scopePopover)

    return (
        <Component {...interactionProps} {...rest} ref={triggerRef} css={triggerStyles}>
            {children}
        </Component>
    )
})

PopoverTrigger.displayName = 'PopoverTrigger'
export default PopoverTrigger