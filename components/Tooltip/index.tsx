import React, { forwardRef, ElementType, useState, useEffect, useCallback, RefObject, ReactElement } from 'react' 

import { mergeProps } from '@react-aria/utils'
import { useTooltipTrigger, useTooltip } from '@react-aria/tooltip'
import { useTooltipTriggerState } from '@react-stately/tooltip'

import { Text } from '@/components/Text/Text'
import { useInteractions } from '@/hooks/useInteractions'
import { FocusableRef, useFocusableRef } from '@/utils/useRefs'

import { StyledTooltip } from './styles'
import {
    TooltipProps,
    TooltipTriggerProps,
    TooltipTriggerState 
} from './interfaces'

export const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(({ 
    children, isHovered, isFocused, isPressed, isLoading = false, state, ...props 
}, forwardedRef) => {
        
        const { tooltipProps } = useTooltip(props, state)

        return (
            <StyledTooltip {...mergeProps(props, tooltipProps)} ref={forwardedRef}>
                {children}
            </StyledTooltip>
        )
    }
)
Tooltip.displayName = "Tooltip"

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
                <Tooltip state={state} {...mergeProps(tooltipProps, interactionStates)}>
                    {typeof content === 'string' ? (
                        <Text css={{ color: 'inherit' }}> {content} </Text> 
                    ) : ( 
                        <span> {content} </span> 
                    )}
                </Tooltip>
            )}
        </span>
    )
}

ExtTooltipTrigger.displayName = 'TooltipTrigger'

export const TooltipTrigger = forwardRef(ExtTooltipTrigger) as <T extends ElementType = 'button'>(
    props: TooltipTriggerProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
