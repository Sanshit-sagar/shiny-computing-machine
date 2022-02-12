import { RefObject, HTMLAttributes } from 'react'
import { CSS } from 'stitches.config' 
import { Scope } from '@/hooks/createContextScope'
import { OpenableDOMProps } from '@/interfaces/Shared'

export type ScopedProps<P> = P &  { __scopeTooltip?: Scope; }
// 
// export interface TooltipTriggerState {
    // isOpen: boolean;
    // open: (immediate: boolean) => void;
    // close: (immediate: boolean) => void;
// }

export type TooltipDefaultProps = Partial<{
    placement: 'left' | 'top' | 'bottom' | 'right';
    isDisabled: boolean;
    isLoading: boolean;
    delayMs: number; 
}>

export interface TooltipProps extends OpenableDOMProps, TooltipDefaultProps {}

export interface TooltipStyles {
    triggerStyles: CSS;
    floatingStyles: CSS;
    contentStyles: CSS;
    arrowStyles: CSS;
}

export interface TooltipInteractions {
    interactionProps: HTMLAttributes<HTMLElement>;
    isHovered: boolean;
    isFocused: boolean;
    isPressed: boolean;
    isVisible: boolean; 
}

export interface TooltipRefs {
    triggerRef: (node: Element) => void;
    floatingRef: (node: HTMLElement) => void;
    arrowRef: RefObject<HTMLDivElement>;
}

export interface UseTooltipProps extends Pick<TooltipProps, 'isDisabled' | 'isLoading' | 'isOpen' | 'placement'> {}
export interface UseTooltipReturnValue extends TooltipInteractions, TooltipStyles, TooltipRefs {}
export interface TooltipInteractionsProps extends Required<Omit<TooltipProps, 'placement'>> {}
export interface TooltipInteractionsReturnValue extends TooltipInteractions {}

export interface TooltipState extends TooltipProps, TooltipRefs, TooltipInteractions, TooltipStyles {}
export interface ITooltipContext extends TooltipState {}