import { useEffect } from 'react'
import type { OverlaySettings } from '../types'
import type { ContainerRefProps } from './types'

type UseOpenCloseFocusHookProps = Pick<
    OverlaySettings, 
    'initialFocusRef' | 'returnFocusRef' | 'preventFocusOnOpen'
> & ContainerRefProps

const useOpenAndCloseFocus = (props: UseOpenCloseFocusHookProps) => {
    
    const {
        containerRef,
        returnFocusRef,
        initialFocusRef,
        preventFocusOnOpen
    } = props

    useEffect(() => {
        if(preventFocusOnOpen) return

        const returnRef = returnFocusRef.current

        if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus()
        } else if (containerRef.current) {
            const firstItem = iterateFocusableElements(containerRef.current).next().value
            firstItem?.focus()
        }

        return () => { returnRef.focus() }
    }, [initialFocusRef, returnFocusRef, containerRef, preventFocusOnOpen])
}

export {
    useOpenAndCloseFocus
}