import React, { ReactElement, forwardRef, Ref, ElementType } from 'react' 

import { mergeProps } from '@react-aria/utils'
import { useTooltipTrigger } from '@react-aria/tooltip'
import { useTooltipTriggerState } from '@react-stately/tooltip'

import TooltipContent from './TooltipContent'
import { useInteractions } from '@/hooks/useInteractions'
import { FocusableRef, useFocusableRef } from '@/utils/useRefs'
import { TooltipTriggerProps, TooltipTriggerState } from './interfaces'

import {
    StyledTooltipContainer,
    StyledTooltipArrow
} from './styles'

export const ExtTooltipTrigger = ({ 
    elementType: ElementType = 'button', 
    placement = 'left',
    isDisabled = false,
    isLoading = false,
    isOpen,
    content, 
    children, 
    ...props  
}: TooltipTriggerProps, ref: Ref<HTMLElement>) => {

    // const state: TooltipTriggerState = useTooltipTriggerState(props)
    
    // const { tooltipProps, triggerProps } = useTooltipTrigger(props, state, buttonRef)
    const {
        triggerRef,
        floatingRef,
        arrowRef,
        triggerStyles,
        floatingStyles,
        contentStyles,
        arrowStyles,
        isVisible,
        interactionProps,  
        ...rest
    } = useTooltip({ placement, isDisabled, isLoading, isOpen })

    // const buttonRef = useFocusableRef<HTMLElement>(ref) 

    return (
        <span style={{ position: 'relative' }}>

            <ElementType {...interactionProps} {...rest} ref={triggerRef} css={triggerStyles}>
                {children}
            </ElementType>

          
            <StyledTooltipContainer isVisible={isVisible} ref={floatingRef} css={floatingStyles}>
                <TooltipContent css={contentStyles}> {content} </TooltipContent>
                <StyledTooltipArrow placement={placement} ref={arrowRef} css={arrowStyles} />
            </StyledTooltipContainer>
        
        </span>
    )
}

ExtTooltipTrigger.displayName = 'TooltipTrigger'

const TooltipTrigger = forwardRef(ExtTooltipTrigger) as <T extends ElementType = 'button'>(
    props: TooltipTriggerProps & { ref?: Ref<HTMLElement> }
) => ReactElement

export default TooltipTrigger