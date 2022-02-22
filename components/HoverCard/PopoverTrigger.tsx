import { forwardRef, ElementType, ElementRef, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button'

import { ScopedProps } from './types'
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
    element: Component = 'button', 
    children, 
    ...rest  
}: ScopedProps<PopoverTriggerProps>, forwardedRef) => {

    const { 
        triggerProps, 
        triggerRef, 
        triggerStyles,
        state
    } = usePopoverContext(POPOVER_TRIGGER_NAME, __scopePopover)
  
    const { buttonProps } = useButton({ 
        onPress: (_event) => state.toggle(state.focusStrategy) 
    }, triggerRef)

    const mergedProps = mergeProps(triggerProps, buttonProps, rest)

    return (
        <Component {...mergedProps} ref={triggerRef} css={triggerStyles}>
            {children}
        </Component>
    )
})

PopoverTrigger.displayName = 'PopoverTrigger'
export default PopoverTrigger