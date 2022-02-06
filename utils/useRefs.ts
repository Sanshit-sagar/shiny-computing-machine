import { useImperativeHandle, useRef, useMemo, RefObject } from 'react'
import { DOMRef, DOMRefValue, FocusableRef, FocusableRefValue } from '@/interfaces/Shared/index'

export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T>): DOMRefValue<T> {
    return {
        UNSAFE_getDOMNode() {
            return ref.current
        }
    };
}

export function useDOMRef<T extends HTMLElement = HTMLElement>(ref: DOMRef<T>): RefObject<T> {
    let domRef = useRef<T>(null);

    useImperativeHandle(ref, () => {
        return createDOMRef(domRef)
    });

    return domRef;
}

export function createFocusableRef<T extends HTMLElement = HTMLElement>(domRef: RefObject<T>, focusableRef: RefObject<HTMLElement> = domRef): FocusableRefValue<T> {

    return {
        ...createDOMRef(domRef),
        focus() {
            if (focusableRef.current) {
                focusableRef.current.focus()
            }
        }
    };
}

export function useFocusableRef<T extends HTMLElement = HTMLElement>(ref: FocusableRef<T>, focusableRef?: RefObject<HTMLElement>): RefObject<T> {

    let domRef = useRef<T>(null);

    useImperativeHandle(ref, () => {
        return createFocusableRef(domRef, focusableRef)
    });

    return domRef;
}


export function unwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T>>): RefObject<T> {
    return {
        get current() {
            return ref.current && ref.current.UNSAFE_getDOMNode();
        }
    };
}
  
export function useUnwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T>>) : RefObject<T> {
    return useMemo(() => unwrapDOMRef(ref), [ref]);
}