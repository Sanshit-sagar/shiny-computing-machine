import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react' 
import { CSS } from 'stitches.config'
 
import { 
    PopoverSpinner,
    StyledPopoverArrow,
    StyledPopoverContent, 
    StyledPopoverContainer
} from './styles'

import { ScopedProps } from './types'
import { usePopoverContext } from './PopoverContext'
import { DEFAULT_NAME, DEFAULT_CONTENT_TAG } from './constants' 


const POPOVER_CONTENT_NAME = `${DEFAULT_NAME}Content`

interface PopoverContentElement extends ElementRef<typeof DEFAULT_CONTENT_TAG> {}
interface PopoverContentProps extends ComponentPropsWithoutRef<typeof DEFAULT_CONTENT_TAG> {
    element?: ElementType<any>; 
    css?: CSS;
}

const PopoverContent = forwardRef<PopoverContentElement, PopoverContentProps>(({ 
    __scopePopover,
    element: Component = DEFAULT_CONTENT_TAG,
    children, 
    css,
    ...props 
}: ScopedProps<PopoverContentProps>, forwardedRef) => {

    const { 
        placement, 
        isLoading, 
        isVisible, 
        popoverRef, 
        arrowRef, 
        floatingStyles, 
        arrowStyles 
    } = usePopoverContext(POPOVER_CONTENT_NAME, __scopePopover)

    return (
        <StyledPopoverContainer 
            isLoading={isLoading}
            isVisible={isVisible} 
            placement={placement} 
            ref={floatingRef} 
            css={floatingStyles}
        >
            <StyledPopoverContent isLoading={isLoading}>
                {children}

                {isLoading && (
                    <PopoverSpinner /> 
                )}
            </StyledPopoverContent>

            <StyledPopoverArrow placement={placement} ref={arrowRef} css={arrowStyles} />
        </StyledPopoverContainer>
    )
})

PopoverContent.displayName = POPOVER_CONTENT_NAME
export default PopoverContent