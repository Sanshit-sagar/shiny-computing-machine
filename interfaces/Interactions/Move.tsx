import { HTMLAttributes } from 'react'
import { PointerType } from '@/interfaces/Shared'

interface BaseMoveEvent {
    pointerType: PointerType;
}
  
export interface MoveStartEvent extends BaseMoveEvent {
    type: 'movestart';
}
  
export interface MoveMoveEvent extends BaseMoveEvent {
    type: 'move';
    deltaX: number;
    deltaY: number;
}
  
export interface MoveEndEvent extends BaseMoveEvent {
    type: 'moveend';
}
  
export type MoveEvent = MoveStartEvent | MoveMoveEvent | MoveEndEvent;

export interface MoveEvents {
    onMoveStart?: (event: MoveMoveEvent) => void;
    onMoveEnd?: (event: MoveMoveEvent) => void;
    onMove?: (event: MoveMoveEvent) => void;
}

export interface MoveableProps extends MoveEvents {}

export interface MoveResult {
    moveResult: HTMLAttributes<HTMLElement>; 
}