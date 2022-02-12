import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react' 
import { CSS } from 'stitches.config'
 
import { 
    TooltipSpinner,
    StyledTooltipArrow,
    StyledTooltipContent, 
    StyledTooltipContainer
} from './styles'

import { ScopedProps } from './types'
import { useTooltipContext } from './TooltipContext'
import { DEFAULT_NAME, DEFAULT_CONTENT_TAG } from './constants' 


const TOOLTIP_CONTENT_NAME = `${DEFAULT_NAME}Content`

interface TooltipContentElement extends ElementRef<typeof DEFAULT_CONTENT_TAG> {}
interface TooltipContentProps extends ComponentPropsWithoutRef<typeof DEFAULT_CONTENT_TAG> {
    element?: ElementType<any>; 
    css?: CSS;
}

const TooltipContent = forwardRef<TooltipContentElement, TooltipContentProps>(({ 
    __scopeTooltip,
    element: Component = 'span',
    children, 
    css,
    ...props 
}: ScopedProps<TooltipContentProps>, forwardedRef) => {

    const { 
        placement, 
        isLoading, 
        isVisible, 
        floatingRef, 
        arrowRef, 
        floatingStyles, 
        arrowStyles 
    } = useTooltipContext(TOOLTIP_CONTENT_NAME, __scopeTooltip)

    return (
        <StyledTooltipContainer 
            isVisible={isVisible} 
            placement={placement} 
            ref={floatingRef} 
            css={floatingStyles}
        >
            <StyledTooltipContent>
                {children}

                {isLoading && (
                    <TooltipSpinner /> 
                )}
            </StyledTooltipContent>

            <StyledTooltipArrow placement={placement} ref={arrowRef} css={arrowStyles} />
        </StyledTooltipContainer>
    )
})

TooltipContent.displayName = TOOLTIP_CONTENT_NAME
export default TooltipContent