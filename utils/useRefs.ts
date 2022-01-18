import { LegacyRef, useImperativeHandle, useRef, useMemo, Ref, RefObject } from 'react'

export interface DOMRefValue<T extends HTMLElement = HTMLElement> {
    UNSAFE_getDOMNode(): T
}
export interface FocusableRefValue<
    T extends HTMLElement = HTMLElement, 
    D extends HTMLElement = T
> extends DOMRefValue<D> {
    focus(): void
}

export type DOMRef<T extends HTMLElement = HTMLElement> = LegacyRef<DOMRefValue<T>>
export type FocusableRef<T extends HTMLElement = HTMLElement> = LegacyRef<FocusableRefValue<T>>

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