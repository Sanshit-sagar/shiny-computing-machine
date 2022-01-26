import { useReducer, useCallback, Dispatch } from "react"
import { strEnum } from '@/interfaces/Guards'

export const ActionsEnum = strEnum([ 
    'UNDO', 
    'REDO', 
    'RESET', 
    'SET' 
])

export type ActionType = keyof typeof ActionsEnum

export type State<T> = {
    past: T[];
    present: T | null; 
    future: T[]; 
}

export type Action<T> = {
    type: ActionType;
    revision?: T;
}

export type Actions<T> = {
    set: (revision: T) => void;
    reset: (revision: T) => void;
    redo: () => void;
    undo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

type MutableState<T> = [State<T>, Actions<T>]

const initialState = {
    past: [], 
    present: null, 
    future: []
}

const reducer = <T>(state: State<T>, action: Action<T>) => {
    const { past, present, future } = state

    switch(action.type) {
        case ActionsEnum.UNDO: {
            if(!past?.length) return state;
            
            const previous = past[past.length - 1]
            const newPast = past.slice(0, past.length - 1) 

            return {
                past: newPast,
                present: previous,
                future: [present, ...future]
            }
        };
        case ActionsEnum.REDO: {
            if(!future?.length) return state;

            const next = future[0]
            const newFuture = future.slice(1)

            return {
                past: [...past, present],
                present: next,
                future: newFuture
            }
        }
        case ActionsEnum.SET: {
            if(action.revision === present) return state

            return {
                past: [...past, present],
                present: action.revision,
                future: []
            }
        }
        case ActionsEnum.RESET: {
            return {
                past: [],
                present: action?.revision ?? [],
                future: [] 
            }
        }
        default: {
            return state
        }
    }
}

export const useHistory = <T>(initialHistory?: T): MutableState<T> => {

    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        present: initialHistory
    }) as [State<T>, Dispatch<Action<T>>]

    const canUndo: boolean = (state?.past    ?? []).length !== 0
    const canRedo: boolean = (state?.future  ?? []).length !== 0

    const redo = useCallback(() => {
        if(canRedo) {
            dispatch({
                type: ActionsEnum.REDO,
            })
        }
    }, [canRedo, dispatch])    

    const undo = useCallback(() => {
        if(canUndo) {
            dispatch({
                type: ActionsEnum.UNDO,
            })
        }
    }, [canUndo, dispatch])

    const set = useCallback((revision: T) => {
        dispatch({
            type: ActionsEnum.SET,
            revision
        }
    )}, [dispatch])

    const reset = useCallback((revision: T) => {
        dispatch({
            type: ActionsEnum.RESET,
            revision
        }
    )}, [dispatch])

    return [
        state, {
        redo,
        undo, 
        set, 
        reset, 
        canUndo,
        canRedo
    }]
}