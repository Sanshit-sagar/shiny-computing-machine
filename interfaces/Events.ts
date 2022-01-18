import {
    FocusEvent,
    FormEventHandler,
    ClipboardEventHandler,
    CompositionEventHandler
} from 'react'

import {
    HoverEvent,
    PressEvent,
    KeyboardEvent
} from './Event'


export interface KeyboardEvents {
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void; 
}

export interface PressEvents {
    onPress?: (event: PressEvent) => void;
    onPressStart?: (event: PressEvent) => void;
    onPressEnd?:(event: PressEvent) => void;
    onPressChange?: (isPressed: boolean)  => void;
    onPressUp?: (event: PressEvent)  => void;
}

export interface FocusEvents {
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onFocusChange?: (isFocused: boolean) => void;
}

export interface HoverEvents {
    onHoverStart?: (event: HoverEvent) => void;
    onHoverEnd?: (event: HoverEvent) => void;
    onHoverChange?: (isHovering: boolean) => void;
}

export interface ClipboardEvents {
    onCopy: ClipboardEventHandler<HTMLInputElement>;
    onCut: ClipboardEventHandler<HTMLInputElement>;
    onPaste: ClipboardEventHandler<HTMLInputElement>;
}

export interface CompositionEvents {
    onCompositionStart: CompositionEventHandler<HTMLInputElement>;
    onCompositionEnd: CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdate: CompositionEventHandler<HTMLInputElement>;
}

export interface FormEvents {
    onBeforeInput: FormEventHandler<HTMLInputElement>;
    onInput: FormEventHandler<HTMLInputElement>;
}


export type PressProps = { isDisabled: boolean; } & PressEvents; 
export type HoverProps = { isDisabled: boolean; } & HoverEvents; 
export type FocusWithinProps = { isDisabled: boolean; } & FocusEvents; 

// export interface FocusableProps extends FocusEvents, KeyboardEvent {
//     autoFocus: boolean;
// }