






import {
    HoverEvent,
    PressEvent,
    KeyboardEvent
} from './Event'



export type PressProps = { isDisabled: boolean; } & PressEvents; 
export type HoverProps = { isDisabled: boolean; } & HoverEvents; 
export type FocusWithinProps = { isDisabled: boolean; } & FocusEvents; 

// export interface FocusableProps extends FocusEvents, KeyboardEvent {
//     autoFocus: boolean;
// }