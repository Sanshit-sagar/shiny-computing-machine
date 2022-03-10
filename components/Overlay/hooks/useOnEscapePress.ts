import { useEffect, useMemo, useCallback, DependencyList } from 'react'
import { KeyboardEventCallback } from './types'

let handlerId = 0

const registry: { [id: number]: KeyboardEventCallback } = {}
const register = (id: number, handler: KeyboardEventCallback): void => { registry[id] = handler }
const deregister = (id: number) => { delete registry[id] }

function handleEscape(event: KeyboardEvent) {
    if (!event.defaultPrevented) {
        for (const handler of Object.values(registry).reverse()) {
            handler(event)
            if (event.defaultPrevented) break
        }
    }
}

const useOnEscapePress = (
    onEscape: (event: KeyboardEvent) => void,
    callbackDependencies: DependencyList = [onEscape]
): void => {
    const escapeCallback = useCallback(onEscape, callbackDependencies)

    const handler = useCallback<KeyboardEventCallback>((event) => {
        if(event.key === 'Escape') escapeCallback(event)
    }, [escapeCallback])

    const id = useMemo(() => handlerId++, [])

    useEffect(() => {
        if (Object.keys(registry).length === 0) {
            document.addEventListener('keydown', handleEscape)
        }

        register(id, handler)

        return () => {
            deregister(id)
            if (Object.keys(registry).length === 0) {
                document.removeEventListener('keydown', handleEscape)
            }
        }
    }, [id, handler])
}

export {
    useOnEscapePress
}