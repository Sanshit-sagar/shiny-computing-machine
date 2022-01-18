import { useState } from 'react'

const EMPTY_STATE_ERR = 'Invalid state. Cannot bind a function to an empty state.'
const STATE_TYPE_MISMATCH_ERR = 'The typeof the given state object doesnt match the actual type.'
const INVALID_PROP_ERR = 'The provided state doesnt contain the field that the new mutator should refeerence.'

function StateFactory<T>(init: () => T) {
    const [state, setState] = useState<T>({
        ...init()
    }); 

    const update = (key: keyof T, value: T[keyof T]) => {
        setState({
            ...state,
            [key]: value
        });
    }

    return { state, update };
}


export interface HandlerBinderProps<T> {
    state: T;
    handler: (prop: string, val: T[keyof T]) => void; 
    handledProp: string;
}

export function bindHandlerToState<T>(props: HandlerBinderProps<T>) {
    let {
        state, // state object returned by the factory method
        handler, // update function returned by the factory method
        handledProp // fieldName that needs to be updated
    } = props;
    
    if(!state) throw new Error(EMPTY_STATE_ERR)
    if(state[handledProp]===undefined) throw new Error(INVALID_PROP_ERR)
    
    return {
        ...state,
        onChange: (value: T[keyof T]) => handler(handledProp, value)
    }
}



export default StateFactory