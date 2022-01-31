import React, { ReactElement, forwardRef, ElementType } from 'react' 

import { mergeProps } from '@react-aria/utils'
import { useTooltipTrigger } from '@react-aria/tooltip'
import { useTooltipTriggerState } from '@react-stately/tooltip'
import { useInteractions } from '@/hooks/useInteractions'
import { FocusableRef, useFocusableRef } from '@/utils/useRefs'

import { TooltipTriggerProps, TooltipTriggerState } from './interfaces'

import TooltipContent from './TooltipContent'

export const ExtTooltipTrigger = ({ children, content, elementType: ElementType = 'button', ...props  }: TooltipTriggerProps, ref: FocusableRef<HTMLElement>) => {

    const state: TooltipTriggerState = useTooltipTriggerState(props)
    const buttonRef = useFocusableRef<HTMLElement>(ref) 

    const { tooltipProps, triggerProps } = useTooltipTrigger(props, state, buttonRef)
    const { interactionProps, ...interactionStates } = useInteractions({ 
        isDisabled: props.isDisabled 
    })

    return (
        <span style={{ position: 'relative' }}>

            <ElementType {...mergeProps(triggerProps, interactionProps)} ref={buttonRef}>
                {children}
            </ElementType>

            {state.isOpen && (
                <TooltipContent state={state} {...mergeProps(tooltipProps, interactionStates)}>
                    {content}
                </TooltipContent>
            )}
        </span>
    )
}

ExtTooltipTrigger.displayName = 'TooltipTrigger'

const TooltipTrigger = forwardRef(ExtTooltipTrigger) as <T extends ElementType = 'button'>(
    props: TooltipTriggerProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement

export default TooltipTrigger