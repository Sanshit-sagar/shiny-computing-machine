import { strEnum } from '@/interfaces/Guards'
import { SplitDirection } from '../interfaces'

export const Actions = strEnum([
    'SetIsReadyToCompute',
    'CreatePairs',
    'CalculateSizes',
    'StartDragging',
    'StopDragging'
])

export type ActionType = keyof typeof Actions

export type SetIsReadyToCompute = {
    type: Extract<ActionType, 'SetIsReadyToCompute'>
    payload: {
        isReady: boolean; 
        gutterIdx?: number;
        gutters?: never;
        children?: never;
        direction?: never; 
    }
}

export type CreatePairs = {
    type: Extract<ActionType, 'CreatePairs'>;
    payload: {
        isReady?: never;
        gutterIdx?: never; 
        direction?: SplitDirection;
        gutters?: HTMLElement[];
        children?: HTMLElement[];
    }
}

export type CalculateSizes = {
    type: Extract<ActionType, "CalculateSizes">;
    payload: {
        isReady?: never;
        direction: SplitDirection;
        gutterIdx: number;
        gutters?: never;
        children?: never;
    }
}

export type StartDragging = {
    type: Extract<ActionType, "StartDragging">;
    payload: {
        isReady?: never;
        gutterIdx: number;
        gutters?: never;
        children?: never;
        direction?: never; 
    }
}

export type StopDragging = {
    type: Extract<ActionType, "StopDragging">;
    payload: {
        isReady?: boolean; 
        gutterIdx: number;
        gutters?: never;
        children?: never;
        direction?: never; 
    }
}

export type Action = 
                    | SetIsReadyToCompute 
                    | CreatePairs 
                    | CalculateSizes 
                    | StartDragging 
                    | StopDragging
