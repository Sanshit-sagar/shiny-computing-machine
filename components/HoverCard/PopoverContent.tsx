import { forwardRef, cloneElement, ElementType, Children, ComponentPropsWithoutRef, ElementRef } from 'react' 
import { CSS, VariantProps } from 'stitches.config'

import { DismissButton, useOverlay } from '@react-aria/overlays'
import { FocusScope } from '@react-aria/focus'
 
import { StyledPopoverCard } from './styles'

import { ScopedProps } from './types'
import { usePopoverContext } from './PopoverContext'
import { DEFAULT_NAME, DEFAULT_CONTENT_TAG } from './constants' 

import  PopoverArrow from './PopoverArrow'

const POPOVER_CONTENT_NAME = `${DEFAULT_NAME}Content`

interface PopoverContentElement extends ElementRef<typeof DEFAULT_CONTENT_TAG> {}
interface PopoverContentProps extends ComponentPropsWithoutRef<typeof DEFAULT_CONTENT_TAG> {
    element?: ElementType<any>; 
    onClose?: () => void; 
    color?: Pick<VariantProps<typeof StyledPopoverCard>, 'color'>['color']; 
    css?: CSS;
}

const PopoverContent = forwardRef<PopoverContentElement, PopoverContentProps>(({ 
    __scopePopover,
    element: Component = DEFAULT_CONTENT_TAG,
    children, 
    onClose = () => {},
    color = 'default',
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
        arrowStyles,
        menuProps
    } = usePopoverContext(POPOVER_CONTENT_NAME, __scopePopover)

    const { overlayProps } = useOverlay({
        onClose,
        shouldCloseOnBlur: true,
        isDismissable: true,
        isKeyboardDismissDisabled: false,
    }, popoverRef)

    return (
        <FocusScope restoreFocus>
            <StyledPopoverCard 
                {...overlayProps}
                isVisible={isVisible} 
                placement={placement} 
                ref={popoverRef} 
                color={color}
                css={popoverStyles}
            >
                <DismissButton onDismiss={onClose} /> 
                    {Children.toArray(children).map((child, index: number) => {
                        if(index == 0) {
                            return cloneElement(child, {
                                ...menuProps
                            })
                        }
                    })}
                <DismissButton onDismiss={onClose} /> 

                <PopoverArrow placement={placement} ref={arrowRef} css={arrowStyles} />
            </StyledPopoverCard>
        </FocusScope>
    )
})

PopoverContent.displayName = POPOVER_CONTENT_NAME
export default PopoverContent