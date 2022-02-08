import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'


import { 
    StyledArrow,
    StyledContent, 
    StyledTrigger,
    StyledContainer
} from './styles'

const TRIGGER_CONTENT = 'Hover me!'
const TOOLTIP_CONTENT = `The evil rabbit jumped over the fence`

type FloatingTooltipProps = {
    tooltipPlacement?: 'left' | 'top' | 'bottom' | 'right'; 
    isOpen?: boolean;
    autoFocus?: boolean; 
}

export const FloatingTooltip = ({ 
    tooltipPlacement = 'bottom',
    isOpen,
    isDisabled = false,
    autoFocus = false
}: FloatingTooltipProps) => {

    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ isWithin: true })

    const {
        triggerRef,
        floatingRef,
        arrowRef,
        tooltipLef,
        tooltipTop,
        arrowLeft,
        arrowTop,
        arrowOffset,
        placement,
        strategy,
        update,
        staticSide,
        tooltipSize
    } = useTooltip({ placement: tooltipPlacement, isDisabled })

    const mergedProps = {...mergeProps(hoverProps, focusProps)}

    return (
        <>
            <StyledTooltipTrigger {...mergedProps} ref={triggerRef}> 
                {TRIGGER_CONTENT} 
            </StyledTooltipTrigger>

            <StyledContainer
                isVisible={isHovered || isFocused || isOpen}
                ref={floatingRef}
                css={{
                    position: 'absolute',
                    top: tooltipTop,
                    left: tooltipLeft,
                    ...tooltipSize          
                }}
            >
                <StyledTooltipContent css={{ height: tooltipHeight, width: tooltipWidth }}>
                    {TOOLTIP_CONTENT}
                </StyledTooltipContent>

                <StyledTooltipArrow 
                    ref={arrowRef} 
                    placement={placement}
                    css={{ 
                        position: 'absolute',
                        top: arrowTop,
                        left: arrowLeft,
                        right: '',
                        bottom: '',
                        [staticSide]: '-4px',
                    }} 
                />
            </StyledContainer>  
        </>
    )
}
