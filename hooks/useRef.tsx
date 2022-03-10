import React from 'react' 

const useProvidedRefOrCreate = <T extends any>(providedRef?: React.RefObject<T>): React.RefObject<T>  => {
    const createdRef = React.useRef<T | null>(null)
    return providedRef ?? createdRef
}

const useRenderForcingRef = <T extends any>(value?: T) => {
    const [refCurrent, setRefCurrent] = React.useState<T | null>(value || null)
    const ref = React.useRef<T | null>(null) as React.MutableRefObject<T | null>
    ref.current = refCurrent
    
    const setRef = React.useCallback((newRef: T | null) => {
        ref.current = newRef
        setRefCurrent(newRef)
    }, [ref])

    return [ref as React.RefObject<T>, setRef] as const
}

const useCombinedRefs =<T extends any>(...refs: (React.ForwardedRef<T> | null | undefined)[]) => {
    const combinedRef = React.useRef<T | null>()

    React.useLayoutEffect(() => {
        function setRefs(current: T | null): void {
            for(const ref of refs) {
                if(!ref) return
                
                if(typeof ref === 'function') {
                    ref(current) 
                } else {
                    ref.current = current 
                }
            }
        }

        setRefs(combinedRef.current)

        return () => { setRefs(combinedRef.current) }
    }, [...refs, combinedRef.current]) 

    return combinedRef
}

export {
    useCombinedRefs,
    useRenderForcingRef,
    useProvidedRefOrCreate
}