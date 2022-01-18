import { Ref, MutableRefObject, useCallback } from 'react'
// import { Nullable } from '@/interfaces/Guards'

export type NullableRef<T> = Ref<T> | undefined

export function setRef<T>(ref: NullableRef<T>, value: T) {
    if(typeof ref === 'function') {
        ref(value) 
    } else if(ref !== undefined && ref !== null) {
        (ref as MutableRefObject<T>).current = value 
    }
}

export function composeRefs<T>(...refs: NullableRef<T>[]) {
    return (node: T) => refs.forEach((ref: NullableRef<T>) => 
        setRef(ref, node)
    )
}

export function useComposableRefs<T>(...refs: NullableRef<T>[]) {
    return useCallback(composeRefs(...refs), refs)
}