import { 
    StyledTooltipArrow,
    StyledTooltipContent, 
    StyledTooltipTrigger,
    StyledTooltipContainer
} from './styles'

const TRIGGER_CONTENT = 'Hover me!'
const TOOLTIP_CONTENT = `The evil rabbit jumped over the fence`

type FloatingTooltipProps = {
    placement?: 'left' | 'top' | 'bottom' | 'right'; 
    isOpen: boolean;
    isDisabled?: boolean; 
    isLoading?: boolean;
}

import { useTooltip } from './useTooltip'

export const FloatingTooltip = ({ 
    placement = 'bottom',
    isOpen = false,
    isDisabled = false,
    isLoading = false
}: FloatingTooltipProps) => {

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


    return (
        <>
            <StyledTooltipTrigger {...interactionProps} {...rest} ref={triggerRef} css={triggerStyles}>
                {TRIGGER_CONTENT} 
            </StyledTooltipTrigger>

            <StyledTooltipContainer isVisible={isVisible} ref={floatingRef} css={floatingStyles}>
                <StyledTooltipContent css={contentStyles}> {TOOLTIP_CONTENT} </StyledTooltipContent>
                <StyledTooltipArrow placement={placement} ref={arrowRef} css={arrowStyles} />
            </StyledTooltipContainer>  
        </>
    )
}