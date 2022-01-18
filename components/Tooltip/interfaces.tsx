import React, { ReactNode, ElementType, ComponentProps } from 'react'
import { OpenableDOMProps } from '@/interfaces/Shared'
import { StyledTooltip } from './styles'

export interface TooltipTriggerState {
    isOpen: boolean;
    open: (immediate: boolean) => void;
    close: (immediate: boolean) => void;
}

export interface TooltipTriggerProps extends OpenableDOMProps {
    elementType?: ElementType;
    isDisabled?: boolean;
    delay?: number;
    trigger?: 'focus';
    content: ReactNode | string; 
    children: ReactNode;
}

type TooltipOwnProps = ComponentProps<typeof StyledTooltip> 
type TooltipStateProps = {
    state: TooltipTriggerState;
    isHovered: boolean;
    isFocused: boolean;
    isPressed: boolean;
    isLoading?: boolean; 
    children: ReactNode;
}
export type TooltipProps = TooltipOwnProps & TooltipStateProps
