import { ReactNode, MouseEvent, ElementType, MutableRefObject } from 'react'
import { CSS } from '../../stitches.config'

type Nullable<T> = T | null | undefined

export interface ISplitPaneContext {
    clientWidth: number;
    clientHeight: number;
    yDividerPos: MutableRefObject<number>;
    xDividerPos: MutableRefObject<number>;
    onMouseHoldUp: (event: MouseEvent) => void;
    onMouseHoldDown: (event: MouseEvent) => void;
    onMouseHoldMove: (event: MouseEvent) => void;
    setClientWidth: (clientWidth: number) => void;
    setClientHeight: (clientHeight: number) => void; 
}

export type NullableNotUndefinable<T> = T | null
export type MousePosition = NullableNotUndefinable<number>

export interface SplitPaneProps {
    element?: ElementType;
    children: ReactNode;
    type?: 'row' | 'column';
    css?: CSS;
    outer?: boolean;
}

// type CSSProps = { css?: CSS }
// type Coordinate = { 
    // x: number; 
    // y: number; 
// }
// export interface ISplitViewContext {
    // left?: Nullable<ReactNode>;
    // right?: Nullable<ReactNode>;
    // top?: Nullable<ReactNode>;
    // bottom?: Nullable<ReactNode>;
// }
// type PointerType =  'mouse' | 'virtual' | 'keyboard' | 'pen' | 'touch';
// type MouseMoveEvent = {
    // type: 'move';
    // deltaX: number;
    // deltaY: number; 
    // pointerType: PointerType;
// }
// export type ISplitPaneContext = {
    // color: 'red' | 'black';
    // position: Coordinate; 
    // mouseProps: HTMLAttributes<HTMLElement>;
// }
// type NullableNotUndefinable<T> = T | null
// type MousePosition = NullableNotUndefinable<number>
// interface SplitPaneContext {
    // children: ReactNode;
    // type?: 'row' | 'column';
    // css?: CSS;
    // outer?: boolean;
// }