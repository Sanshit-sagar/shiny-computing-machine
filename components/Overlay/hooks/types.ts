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
  
enum FocusKeys {
    ArrowHorizontal = 0b000000001,
    ArrowVertical = 0b000000010,
    JK = 0b000000100,
    HL = 0b000001000,
    HomeAndEnd = 0b000010000,
    PageUpDown = 0b100000000,
    WS = 0b000100000,
    AD = 0b001000000,
    Tab = 0b010000000,
    ArrowAll = FocusKeys.ArrowHorizontal | FocusKeys.ArrowVertical,
    HJKL = FocusKeys.HL | FocusKeys.JK,
    WASD = FocusKeys.WS | FocusKeys.AD,
    All = FocusKeys.ArrowAll | FocusKeys.HJKL | FocusKeys.HomeAndEnd | FocusKeys.PageUpDown | FocusKeys.WASD | FocusKeys.Tab
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

export type {
    FocusKeys,
    Direction,
    AnchorSide,
    AnchorAlignment,
    FocusZoneSettings,
    ContainerRefProps,
    TouchOrMouseEvent,
    KeyboardEventCallback,
    TouchOrMouseEventCallback
}