import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'

import { useTooltip } from './useTooltip'

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
    isDisabled?: boolean; 
}

export const FloatingTooltip = ({ 
    tooltipPlacement = 'bottom',
    isOpen,
    isDisabled = false,
    autoFocus = false
}: FloatingTooltipProps) => {

    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true })

    const {
        triggerRef,
        floatingRef,
        arrowRef,
        tooltipLeft,
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
    const isFocusWithin = isFocused || isFocusVisible

    return (
        <>
            <StyledTrigger {...mergedProps} ref={triggerRef}> 
                {TRIGGER_CONTENT} 
            </StyledTrigger>

            <StyledContainer
                isVisible={isHovered || isFocusWithin || isOpen}
                ref={floatingRef}
                css={{
                    position: 'absolute',
                    top: tooltipTop,
                    left: tooltipLeft,
                    ...tooltipSize          
                }}
            >
                <StyledContent css={{ ...tooltipSize }}>
                    {TOOLTIP_CONTENT}
                </StyledContent>

                <StyledArrow 
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
