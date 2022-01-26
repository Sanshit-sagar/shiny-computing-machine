import { HTMLAttributes } from 'react'

export interface ScrollEvent {
    deltaX: number;
    deltaY: number;
}

export interface ScrollEvents {
    onScroll?: (e: ScrollEvent) => void
}

export interface ScrollableProps extends ScrollEvents {}

export interface ScrollResult {
    scrollProps: HTMLAttributes<HTMLElement>; 
}