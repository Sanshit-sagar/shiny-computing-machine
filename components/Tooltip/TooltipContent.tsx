import React from 'react' 

import { mergeProps } from '@react-aria/utils'
import { useTooltip } from '@react-aria/tooltip'

import { StyledTooltipContainer } from './styles'
import { TooltipProps } from './interfaces'


const TooltipContent = React.forwardRef<HTMLSpanElement, TooltipProps>(({ 
    children, 
    state, 
    isVisible,
    floatingStyles,
    ...props 
}, floatingRef) => {
    
       
        const { tooltipProps } = useTooltip(rest, state)

        return (
            <StyledTooltipContainer isVisible={isVisible} ref={floatingRef} css={floatingStyles}>
                {children}
            </StyledTooltipContainer>
        )
    }
)

TooltipContent.displayName = 'TooltipContent'
export default TooltipContent