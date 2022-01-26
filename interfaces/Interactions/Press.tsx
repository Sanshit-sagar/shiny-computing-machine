import { HTMLAttributes } from 'react'
import { PointerType } from '@/interfaces/Shared'

export type PressEventType =  'pressstart' | 'presend' | 'pressup' | 'press'
export type LongPressEventType = 'longpressstart' | 'longpressend' | 'longpress'

export interface PressEvent {
    type: PressEventType;
    pointerType: PointerType; 
    target: HTMLElement;
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
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

export interface PressEvents {
    onPress?: (event: PressEvent) => void;
    onPressStart?: (event: PressEvent) => void;
    onPressEnd?:(event: PressEvent) => void;
    onPressChange?: (isPressed: boolean)  => void;
    onPressUp?: (event: PressEvent)  => void;
}

export interface PressableProps extends PressEvents {}


export interface PressResult {
    keyboardProps: HTMLAttributes<HTMLElement>;
}
