import React, { ReactNode, MouseEvent } from 'react'
import { strEnum } from '@/interfaces/Guards'
import { CSS, VariantProps } from '../../stitches.config'
import { StyledTile } from './Styles'

export const SplitDirections = strEnum([
    'HORIZONTAL',
    'VERTICAL'
])
export type SplitDirection = keyof typeof SplitDirections

export interface Pair {
    key: React.Key; 
    index: number;
    antecedent: HTMLElement;
    consequent: HTMLElement;
    antecedentPct: number;
    consequentPct: number; 
    size?: number;
    start?: number;
    end?: number;
    gutterSize: number; 
    parent: HTMLElement; 
    gutter: HTMLElement; 
}

export type ReducerState = {
    isReady: boolean;
    isDragging: boolean;
    draggingIndex?: number;
    pairs: Pair[]; 
}

export interface GutterProps {
    className?: string;
    draggerClassName?: string;
    direction?: SplitDirection;
    onMouseDown?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface SplitProps {
    direction?: SplitDirection;
    minWidths?: number[]; // in px 
    minHeights?: number[]; // in px
    initialSizes?: number[]; // in %
    gutterClassName?: string;
    draggerClassName?: string;
    children?: ReactNode;
    onResizeStarted?: (pairIndex: number) => void;
    onResizeEnded?: (pairIndex: number, newSize: number[]) => void;
    classes?: string[]; 
}

type TileVariants = VariantProps<typeof StyledTile> 
type CSSProps = { css?: CSS }
export type TileProps = {
    children?: ReactNode;   
} & CSSProps & TileVariants

