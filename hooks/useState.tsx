import React from 'react'

export const useProvidedStateOrCreate = <T extends any>(
    externalState: T | undefined,
    setExternalState: ((state: T) => void) | undefined,
    defaultState: T
) => {
    const [internalState, setInternalState] = React.useState<T>(defaultState)
    const state = externalState ?? internalState

    const setState = React.useCallback((state: T) => {
        setInternalState(state)
        if(setExternalState) {
            setExternalState(state)
        }
    }, [setExternalState])

    return [state, setState] as const
}