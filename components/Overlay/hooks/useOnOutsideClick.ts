
import { useEffect, useMemo, useCallback, RefObject } from 'react'

import type { OverlaySettings } from '../types'
import type { TouchOrMouseEventCallback } from './types'

type UseOnOutsideClickSettings = Pick<OverlaySettings, 'ignoreClickRefs' | 'onClickOutside'> & {
    containerRef?: RefObject<HTMLDivElement>; 
}

let handlerId = 0
const stopPropagation = true

const registry: { [id: number]: TouchOrMouseEventCallback } = {}
function register (id: number, handler: TouchOrMouseEventCallback): void { registry[id] = handler }
function deregister (id: number) { delete registry[id] }

function handleClick(event: MouseEvent) {
    if (!event.defaultPrevented) {
        for (const handler of Object.values(registry).reverse()) {
            if (handler(event) === stopPropagation || event.defaultPrevented) {
                break
            }
        }
    }
}

const useOnOutsideClick = (props: UseOnOutsideClickSettings) => {
    const {
        containerRef,
        onClickOutside,
        ignoreClickRefs
    } = props

    const id = useMemo(() => handlerId++, [])

    const handler = useCallback<TouchOrMouseEventCallback>((event) => {
        if (event instanceof MouseEvent && event.button > 0) {
            return stopPropagation
        }

        if (containerRef.current?.contains(event.target as Node)) {
            return stopPropagation
        }

        if (ignoreClickRefs && ignoreClickRefs.some(({current}) => current?.contains(event.target as Node))) {
            return stopPropagation
        }

        onClickOutside(event) 
    }, [containerRef, ignoreClickRefs, onClickOutside])


    useEffect(() => {
        if (Object.keys(registry).length === 0) {
            document.addEventListener('mousedown', handleClick, { capture: true })
        }
        register(id, handler)

        return () => {
            deregister(id)

            if (Object.keys(registry).length === 0) {
                document.removeEventListener('mousedown', handleClick, { capture: true })
            }
        }
    }, [id, handler])
}

export {
    useOnOutsideClick
}

export type {
    UseOnOutsideClickSettings
}