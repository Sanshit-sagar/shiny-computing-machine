import { RefObject } from 'react'
import type { OverlaySettings } from './types' 

import { useProvidedRefOrCreate } from '@/hooks/useRef'

import {
    useOnEscapePress,
    useOnOutsideClick,
    useOpenAndCloseFocus
} from './hooks/index'

type OverlayHookProps = OverlaySettings & { overlayRef: RefObject<HTMLDivElement>; }
type OverlayHookReturnValue = { ref: RefObject<HTMLDivElement>; }


const useOverlay = ({ overlayRef: _overlayRef, ...props }: OverlayHookProps): OverlayHookReturnValue => {

    const {
        onEscape,
        initialFocusRef,
        returnFocusRef,
        preventFocusOnOpen,
        ignoreClickRefs,
        onClickOutside,
        ...rest
    } = props

    const overlayRef = useProvidedRefOrCreate(_overlayRef)

    useOpenAndCloseFocus({
        containerRef: overlayRef,
        initialFocusRef,
        returnFocusRef,
        preventFocusOnOpen
    })

    useOnOutsideClick({
        containerRef: overlayRef,
        ignoreClickRefs,
        onClickOutside
    })

    const preventedDefaultOnEscape: OverlaySettings['onEscape'] = (event: KeyboardEvent): void => {
        onEscape(event)
        event.preventDefault()
    }

    useOnEscapePress(preventedDefaultOnEscape)

    return {
        ref: overlayRef 
    }
}

export {
    useOverlay
}