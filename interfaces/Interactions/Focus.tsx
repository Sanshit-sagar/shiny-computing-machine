import { HTMLAttributes, FocusEvent } from 'react' 
import { KeyboardEvents } from './index'

export interface FocusEvents {
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onFocusChange?: (isFocused: boolean) => void;
}

export interface FocusableProps extends FocusEvents, KeyboardEvents {
    autoFocus?: boolean; 
}

export interface FocusResult {
    focusProps: HTMLAttributes<HTMLElement>;
}
