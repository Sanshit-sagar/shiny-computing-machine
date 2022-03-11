import React, { useState, useCallback, RefObject, DependencyList, useLayoutEffect } from 'react'

import { useProvidedRefOrCreate } from '@/hooks/useRef'
import { useResizeObserver } from './useResizeObserver'

import { getAnchoredPosition } from '@primer/behaviors'
import type { AnchorPosition, PositionSettings } from '@primer/behaviors' 
    
interface AnchoredPositionHookSettings extends Partial<PositionSettings> {
    floatingElementRef?: RefObject<Element>
    anchorElementRef?: RefObject<Element>
}

interface AnchoredPositionHookReturnValue {
    floatingElementRef: RefObject<Element>;
    anchorElementRef: RefObject<Element>;
    position: AnchorPosition | undefined;
}

const useAnchoredPosition = (
    settings?: AnchoredPositionHookSettings,
    dependencies: DependencyList = []
): AnchoredPositionHookReturnValue => {

    const floatingElementRef = useProvidedRefOrCreate(settings?.floatingElementRef)
    const anchorElementRef = useProvidedRefOrCreate(settings?.anchorElementRef)
    const [position, setPosition] = useState<AnchorPosition | undefined>(undefined)

    const updatePosition = useCallback(() => {
        if (floatingElementRef.current instanceof Element && anchorElementRef.current instanceof Element) {
            setPosition(getAnchoredPosition(floatingElementRef.current, anchorElementRef.current, settings))
        } else {
            setPosition(undefined)
        }
    }, [floatingElementRef, anchorElementRef, ...dependencies])

    useLayoutEffect(updatePosition, [updatePosition])
    useResizeObserver(updatePosition)

    return {
        floatingElementRef,
        anchorElementRef,
        position
    }
}

export {
    useAnchoredPosition
}

export type {
    AnchoredPositionHookSettings,
    AnchoredPositionHookReturnValue
}