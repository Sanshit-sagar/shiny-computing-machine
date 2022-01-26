import { 
    HTMLAttributes,
    KeyboardEvent as ReactKeyboardEvent,
    SyntheticEvent
} from 'react' 

export type BaseEvent<T extends SyntheticEvent> = T & {
    stopPropagation: () => void;
    continuePropagation: () => void;
}

export type KeyboardEvent = BaseEvent<ReactKeyboardEvent<any>>

export type KeyboardEvents = {
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
}

export interface KeyboardResult {
    keyboardProps: HTMLAttributes<HTMLElement>;
}