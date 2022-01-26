import { HTMLAttributes } from 'react' 

export type HoveredPointerType = 'mouse' | 'pen'
export type HoverEventType = 'hoverstart' | 'hoverend'

export interface HoverEvent {
    type: HoverEventType;
    pointerType: HoveredPointerType;
    target: HTMLElement;
}

export interface HoverEvents {
    onHoverStart?: (event: HoverEvent) => void;
    onHoverEnd?: (event: HoverEvent) => void;
    onHoverChange?: (isHovering: boolean) => void;
}

export interface HoverableProps extends HoverEvents {}

export interface HoverResult {
    hoverProps: HTMLAttributes<HTMLElement>;
}