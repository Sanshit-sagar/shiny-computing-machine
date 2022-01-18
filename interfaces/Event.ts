import React from 'react'

export type HoverEventType = 'hoverstart' | 'hoverend';
export type PressEventType =  'pressstart' | 'presend' | 'pressup' | 'press';
export type LongPressEventType = 'longpressstart' | 'longpressend' | 'longpress';


export type HoveredPointerType = 'mouse' | 'pen';
export type PointerType = 'mouse' | 'pen' | 'touch' | 'virtual' | 'keyboard';

// Event bubbling can be problematic in real-world applications, so the default for React Spectrum components
// is not to propagate. This can be overridden by calling continuePropagation() on the event.
// SOURCE: https://github.com/adobe/react-spectrum/blob/4b5f4a9cdf9e3e4d6fde6f85a14767d1e6cba1dd/packages/%40react-types/shared/src/events.d.ts#L106
export type BaseEvent<T extends React.SyntheticEvent> = T & {
    /** @deprecated Use continuePropagation. */
    stopPropagation(): void,
    continuePropagation(): void
}

export type KeyboardEvent = BaseEvent<React.KeyboardEvent<any>>

export interface PressEvent {
    type: PressEventType;
    pointerType: PointerType; 
    target: HTMLElement;
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
}

export interface HoverEvent {
    type: HoverEventType;
    pointerType: HoveredPointerType;
    target: HTMLElement;
}

export interface LongPressEvent {
    type: LongPressEventType;
    pointerType: PointerType;
    target: HTMLElement;
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean; 
}
