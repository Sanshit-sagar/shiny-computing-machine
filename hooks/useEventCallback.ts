import { useCallback, useRef } from "react"
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

export const useEventCallback = <T extends (...args: any[]) => any>(fn: T) => {
    const ref: any = useRef(fn)

    useIsomorphicLayoutEffect(() => {
        ref.current = fn
    })

    return useCallback((...args: any[]) => 
        ref.current.apply(void 0, args),
    []) as T
}