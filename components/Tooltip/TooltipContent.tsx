import React from 'react' 

import { mergeProps } from '@react-aria/utils'
import { useTooltip } from '@react-aria/tooltip'

import { StyledTooltip } from './styles'
import { TooltipProps } from './interfaces'


const TooltipContent = React.forwardRef<HTMLSpanElement, TooltipProps>(({ 
    children, 
    state, 
    ...props 
}, forwardedRef) => {
    
        const { isHovered, isFocused, isPressed, isLoading = false, ...rest } = props
        const { tooltipProps } = useTooltip(rest, state)

        return (
            <StyledTooltip {...mergeProps(props, tooltipProps)} ref={forwardedRef}>
                {children}
            </StyledTooltip>
        )
    }
)

TooltipContent.displayName = 'TooltipContent'
export default TooltipContent