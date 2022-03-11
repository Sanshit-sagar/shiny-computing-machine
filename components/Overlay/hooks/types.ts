import { RefObject } from 'react'

type TouchOrMouseEvent = MouseEvent | TouchEvent

type KeyboardEventCallback = (event: KeyboardEvent) => void
type TouchOrMouseEventCallback = (event: TouchOrMouseEvent) => boolean | undefined

type ContainerRefProps = { containerRef: RefObject<HTMLElement>; }

type Direction = 'previous' | 'next' | 'start' | 'end'
type AnchorAlignment = 'start' | 'end' | 'center'
type AnchorSide =
  | 'inside-top'
  | 'inside-bottom'
  | 'inside-left'
  | 'inside-right'
  | 'inside-center'
  | 'outside-top'
  | 'outside-bottom'
  | 'outside-left'
  | 'outside-right'

export interface AnchorPosition {
    top: number
    left: number
    anchorSide: AnchorSide
}
  
enum FocusKeys {
    ArrowHorizontal = 0b000000001,

    // Up and down arrow keys (previous and next, respectively)
    ArrowVertical = 0b000000010,
  
    // The "J" and "K" keys (next and previous, respectively)
    JK = 0b000000100,
  
    // The "H" and "L" keys (previous and next, respectively)
    HL = 0b000001000,
  
    // The Home and End keys (previous and next, respectively, to end)
    HomeAndEnd = 0b000010000,
  
    // The PgUp and PgDn keys (previous and next, respectively, to end)
    PageUpDown = 0b100000000,
  
    // The "W" and "S" keys (previous and next, respectively)
    WS = 0b000100000,
  
    // The "A" and "D" keys (previous and next, respectively)
    AD = 0b001000000,
  
    // The Tab key (next)
    Tab = 0b010000000,
  
    ArrowAll = FocusKeys.ArrowHorizontal | FocusKeys.ArrowVertical,
    HJKL = FocusKeys.HL | FocusKeys.JK,
    WASD = FocusKeys.WS | FocusKeys.AD,
    All = FocusKeys.ArrowAll |
      FocusKeys.HJKL |
      FocusKeys.HomeAndEnd |
      FocusKeys.PageUpDown |
      FocusKeys.WASD |
      FocusKeys.Tab
}

interface FocusZoneSettings {
    focusOutBehaviour?: 'stop' | 'wrap';
    getNextFocusable?: (direction: Direction, from: Element | undefined, event: KeyboardEvent) => HTMLElement | undefined;
    focusableElementFilter?: (element: HTMLElement) => boolean;
    bindKeys?: FocusKeys;
    abortSignal?: AbortSignal;
    activeDescendantControl?: HTMLElement;
    onActiveDescendantChanged?: (newActiveDescendant: HTMLElement | undefined, previousActiveDescendant: HTMLElement | undefined, directlyActivated: boolean) => void; 
    focusInStrategy?: 'first' | 'closest' | 'previous' | ((previousFocusedElement: Element) => HTMLElement | undefined);
}

export {
    FocusKeys
}

export type {
    Direction,
    AnchorSide,
    AnchorAlignment,
    FocusZoneSettings,
    ContainerRefProps,
    TouchOrMouseEvent,
    KeyboardEventCallback,
    TouchOrMouseEventCallback
}