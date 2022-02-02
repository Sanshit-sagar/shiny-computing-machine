import { useEffect, useCallback, useReducer } from 'react'
import { strEnum } from '@/interfaces/Guards'

const Actions = strEnum([ 'resolve', 'reject', 'await', 'clear' ])
const AsyncStatus = strEnum([ 'resolved', 'rejected', 'awaiting', 'idle' ])

type ActionType = keyof typeof Actions
type AsyncStatusType = keyof typeof AsyncStatus

type Action<T, E> = {
    type: ActionType;
    data?: T;
    error?: E;
}

type State<T, E> = {
    status: AsyncStatusType;
    error: E | null;
    data: T | null; 
}


type DispatchActions<T, E> = {
    reject: (error: E) => void;
    resolve: (data: T) => void; 
    await: () => void;
    clear: () => void;
}

export const asyncReducer = <T extends object, E = string>(state: State<T, E>, action: Action<T, E>) => {
    switch (action.type) {
        case 'reject': {
            return {
                ...state,
                status: 'rejected',
                error: action.error
            }
        }
        case 'resolve': {
            return {
                ...state,
                status: 'resolved',
                data: action.data
            }
        }
        case 'await': {
            return {
                ...state,
                status: 'awaiting'
            }
        }
        case 'clear': {
            return {
                ...state,
                status: 'idle'
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const initialStateValue = { status: 'idle', data: null, error: null }

const useAsync = <T extends any, E = string>(
    asyncFunction: () => Promise<T>, 
    immediate: boolean = true
) => {
    const [{ status, error, data }, dispatch] = useReducer(asyncReducer, initialStateValue)

    const execute = useCallback(() => { 
        dispatch({ type: 'await' })

        return asyncFunction().then((response) => dispatch({ 
            type: 'resolve', 
            data: response 
        })).catch((error) =>  dispatch({ 
            type: 'reject', 
            error 
    }))}, [asyncFunction])

    useEffect(() => {
        if (immediate) execute()
    }, [execute, immediate])

    return { 
        execute, 
        isResolved: status === 'resolved',
        isAwaiting: status === 'awaiting',
        isRejected: status === 'rejected',
        isIdle: status === 'idle',
        resolve: (data: T) => dispatch({ type: 'resolve', data, error: null }),
        reject: (error: E) => dispatch({ type: 'reject',  data: null, error }),
        status,
        error,
        data
    }
}

type AsyncReturnType = ReturnType<typeof useAsync>

export {
    useAsync,
    Actions,
    AsyncStatus
}

export type {
    ActionType,
    AsyncStatusType,
    State,
    Action,
    AsyncReturnType
}