import { useRef, useEffect, RefObject, DependencyList } from 'react' 
import { useProvidedRefOrCreate } from '@/hooks/useRef'
import { focusTrap } from '@primer/behaviors'


interface FocusTrapHookSettings {
    containerRef?: RefObject<HTMLElement>;
    initialFocusRef?: RefObject<HTMLElement>;
    disabled?: boolean;
    restoreFocusOnCleanUp?: boolean
}

interface FocusTrapReturnValue {
    containerRef: RefObject<HTMLElement>;
    initialFocusRef: RefObject<HTMLElement>;
}

const useFocusTrap = (
    settings?: FocusTrapHookSettings = {},
    dependencies: DependencyList = []
): FocusTrapReturnValue => {

    const disabled = settings?.disabled
    const abortController = useRef<AbortController>()
    const previousFocusedElement = useRef<Element | null>(null)

    const containerRef = useProvidedRefOrCreate(settings?.containerRef)
    const initialFocusRef = useProvidedRefOrCreate(settings?.initialFocusRef)

    function disableTrap() {
        abortController.current?.abort()
        if (settings?.restoreFocusOnCleanUp && previousFocusedElement.current instanceof HTMLElement) {
            previousFocusedElement.current.focus()
            previousFocusedElement.current = null
        }
    }

    useEffect(() => {
        if (containerRef.current instanceof HTMLElement) {
            if(!disabled) {

                abortController.current = focusTrap(
                    containerRef.current, 
                    initialFocusRef.current ?? undefined
                )

                return () => { disableTrap() }
            }
        } else { disableTrap() }
        
    }, [containerRef, initialFocusRef, disabled, ...dependencies])

    return { containerRef, initialFocusRef }
}

export {
    useFocusTrap
}

export type {
    FocusTrapHookSettings,
    FocusTrapReturnValue
}