import { 
    useRef, 
    useLayoutEffect, 
    useState, 
    useCallback, 
    Dispatch,
    RefObject, 
    MutableRefObject,
    SetStateAction
} from 'react'

import {
    MutableSelectionState,
    SelectionState
} from './types'


export type TransformedSelection = MutableSelectionState | null

export type TransformInput = {
    current: Readonly<SelectionState>;
    previous: Readonly<SelectionState>;
    value: string; 
    direction: 'forward' | 'backward' | 'none' | null; 
}

export type CodeInputHookProps = {
    inputRef: RefObject<HTMLElement>;
}

export type CodeInputHandlerProps = {
    inputRef: RefObject<HTMLInputElement>;
    previousRef: MutableRefObject<SelectionState | undefined>;
    setSelection: Dispatch<SetStateAction<SelectionState>>;
}
export type CodeInputEffectProps = Omit<CodeInputHandlerProps, 'setSelection'> & {
    handler: (event: Event) => void; 
}

const isEqual = (a: SelectionState, b: SelectionState): boolean => a[0] === b[0] && a[1] === b[1]
const isZero = (a: SelectionState): boolean => a[0] === 0 && a[1] === 0

const getSelectionState = (input: HTMLInputElement): SelectionState => {
    return [+input.selectionStart!, +input.selectionEnd!]
}

const transform = ({ current, previous, value, ...rest }: TransformInput): TransformedSelection => {
    if(current[0] !== current[1]) return null
    if(typeof current[0] !== 'number') return null
    if(typeof current[1] !== 'number') return null

    const [start, end] = current
    if(start > 0 && previous[0] === start && previous[1] === start + 1) {
        return [start - 1, end]
    }

    if(value[start]?.length) {
        return [start, end + 1]
    }

    return null
}


type CallbackType = { type: string; }

const useCodeInputHandler = ({ inputRef, previousRef, setSelection }: CodeInputHandlerProps) => {

    return useCallback(({ type }: CallbackType) => {
        const input = inputRef.current
        const previous = previousRef.current

        if(!input || !previous) return

        const { selectionDirection: direction, value } = input
        const current = getSelectionState(input)

        const save = (selection: SelectionState): void => {
            if(isEqual(selection, previous)) {
                if(isZero(selection)) return
                if(isEqual(selection, getSelectionState(input))) return
            }

            previousRef.current = selection
            setSelection((state) => (
                isEqual(selection, state) ? state : selection
            ))

            input.setSelectionRange(...selection, direction || undefined)
        }
        
        if(type === 'selectionchange' && document.activeElement !== input) {
            return save([value.length, value.length] as const)
        }

        save(transform({ previous, current, direction, value }) || current)
    }, [inputRef, previousRef, setSelection])  
}


export const useCodeInputEffect = ({ inputRef, previousRef, handler }: CodeInputEffectProps): void => {
    return useLayoutEffect(() => {
        const input = inputRef.current

        if(previousRef.current === undefined && input) {
            previousRef.current = getSelectionState(input)
        }

        const handlerRef = handler
        input.addEventListener('input', handlerRef)
        document.addEventListener('selectionchange', handlerRef)
    }, [inputRef, previousRef, handler])
}

export const useCodeInput = (inputRef: RefObject<HTMLInputElement>) => {
    const [selection, setSelection] = useState<SelectionState>([0,0])
    const previousRef = useRef<SelectionState>()
    
    const handler = useCodeInputHandler({ inputRef, previousRef, setSelection })
    useCodeInputEffect({ inputRef, previousRef, handler })

    return selection
}