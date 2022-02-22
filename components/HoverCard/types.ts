import { RefObject, HTMLAttributes } from 'react'
import { CSS } from 'stitches.config' 
import { Scope } from '@/hooks/createContextScope'
import type { Placement } from './constants'

export type ScopedProps<P> = P &  { __scopePopover?: Scope; }

export interface OpenableDOMProps {
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export type PopoverDefaultProps = Partial<{
    placement: Placement; 
    isDisabled: boolean;
    isLoading: boolean;
    delayMs: number; 
}>

export interface PopoverProps extends OpenableDOMProps, PopoverDefaultProps {}

export interface PopoverInteractions extends Pick<PopoverProps, 'isLoading' | 'isDisabled'> {
    interactionProps: HTMLAttributes<HTMLElement>;
    isHovered: boolean;
    isFocused: boolean;
    isFocusVisible: boolean;
    isPressed: boolean;
    isVisible: boolean; 
}

export interface PopoverStyles {
    triggerStyles: CSS;
    popoverStyles: CSS;
    contentStyles: CSS;
    arrowStyles: CSS;
}

export interface PopoverRefs {
    triggerRef: (node: Element) => void;
    popoverRef: (node: HTMLElement) => void;
    arrowRef: RefObject<HTMLDivElement>;
}

export interface UsePopoverProps extends Pick<PopoverProps, 'isDisabled' | 'isLoading' | 'isOpen' | 'placement'> {
    offset?: number;
    crossOffset?: number;
}

export interface UsePopoverReturnValue extends PopoverInteractions, PopoverStyles, PopoverRefs {}
export interface PopoverInteractionsProps extends Required<Omit<PopoverProps, 'placement'>> {}
export interface PopoverInteractionsReturnValue extends PopoverInteractions {}

export interface PopoverState extends PopoverProps, PopoverRefs, PopoverInteractions, PopoverStyles {}
export interface IPopoverContext extends PopoverState {}