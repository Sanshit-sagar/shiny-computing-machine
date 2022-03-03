import { forwardRef, ElementType, ComponentPropsWithoutRef, ElementRef } from 'react'
import { CSS } from 'stitches.config'

import { usePopover } from './usePopover'
import { PopoverProvider } from './PopoverContext'
import { DEFAULT_NAME, DEFAULT_ROOT_TAG } from './constants' 
import { IPopoverContext, ScopedProps, PopoverProps } from './types' 
import { StyledPopoverRoot } from './styles' 

import { mergeProps } from '@react-aria/utils'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

const Popover_ROOT_NAME = `${DEFAULT_NAME}Root`

interface PopoverRootElement extends ElementRef<typeof DEFAULT_ROOT_TAG> {}
interface PopoverRootProps extends ComponentPropsWithoutRef<typeof DEFAULT_ROOT_TAG>, PopoverProps {
    height?: number; 
    width?: number; 
    element?: ElementType<any>; 
    css?: CSS; 
}

const PopoverRoot = forwardRef<PopoverRootElement, PopoverRootProps>(({
    __scopePopover,
    delayMs = 0,
    placement = 'top',
    isOpen, 
    element: Component = DEFAULT_ROOT_TAG,
    isDisabled = false,
    isLoading = false,
    children, 
    height = 10,
    width = 10,
    offset,
    ...props
}: ScopedProps<PopoverRootProps>, forwardedRef) => {
    const state = useMenuTriggerState({ defaultOpen: false, placement: 'top', align: 'start' })

    const { interactionProps, triggerRef, ...popoverResult } = usePopover({ 
        isDisabled, 
        isLoading, 
        isOpen: state.isOpen, 
        placement,
        height,
        width,
        offset
    })
    const { menuTriggerProps, menuProps } = useMenuTrigger({ type: 'menu' }, state, triggerRef)

    const popoverState: IPopoverContext = { 
        state, 
        delayMs, 
        placement, 
        triggerProps: mergeProps(popoverResult, menuTriggerProps),
        triggerRef,
        menuProps,
        ...popoverResult, 
        ...props
    }

    return (
        <PopoverProvider scope={__scopePopover} {...popoverState}>
            <StyledPopoverRoot ref={forwardedRef}>
                {children}
            </StyledPopoverRoot>
        </PopoverProvider>
    )
})

PopoverRoot.displayName = Popover_ROOT_NAME
export default PopoverRoot

