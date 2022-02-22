import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react' 
import { CSS } from 'stitches.config'
 
import { StyledPopoverCard } from './styles'
import { useInteractions } from '@/hooks/useInteractions'

import { ScopedProps } from './types'
import { usePopoverContext } from './PopoverContext'
import { DEFAULT_NAME, DEFAULT_CONTENT_TAG } from './constants' 

import  PopoverArrow from './PopoverArrow'

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
        popoverStyles, 
        arrowStyles 
    } = usePopoverContext(POPOVER_CONTENT_NAME, __scopePopover)

    const { interactionProps, isFocusVisible, ...interactionsStates } = useInteractions({ isLoading })

    return (
        <StyledPopoverCard 
            isVisible={isVisible} 
            isFocusVisible={isFocusVisible}
            placement={placement} 
            ref={popoverRef} 
            css={popoverStyles}
        >
           
            {children}
            <PopoverArrow placement={placement} ref={arrowRef} css={arrowStyles} />
        </StyledPopoverCard>
    )
})

PopoverContent.displayName = POPOVER_CONTENT_NAME
export default PopoverContent