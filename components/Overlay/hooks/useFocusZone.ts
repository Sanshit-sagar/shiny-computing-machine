import { useRef, useEffect, RefObject, DependencyList } from 'react'
import { useProvidedRefOrCreate } from '@/hooks/useRef'
import { FocusZoneSettings } from './types'

import { focusZone } from '@primer/behaviours'

export interface FocusZoneHookProps extends Omit<FocusZoneSettings, 'activeDescendantControl'> {
    containerRef?: RefObject<HTMLElement>;
    activeDescendantFocus?: boolean | React.RefObject<HTMLElement>;
    disabled?: boolean;
}

export interface FocusZoneHookReturnValue {
    containerRef: RefObject<HTMLElement>;
    activeDescendantControlRef: RefObject<HTMLElement>;
}

const useFocusZone = (
    settings: FocusZoneHookProps = {},
    dependencies: DependencyList = []
): FocusZoneHookReturnValue => {

    const containerRef = useProvidedRefOrCreate(settings.containerRef) 
    const useActiveDescendant = !!settings.activeDescendantFocus
    
    const passedActiveDescendantRef = typeof settings.activeDescendantFocus === 'boolean' || !settings.activeDescendantFocus
    ? undefined
    : settings.activeDescendantFocus

    const activeDescendantControlRef = useProvidedRefOrCreate(passedActiveDescendantRef)
    const disabled = settings.disabled 
    const abortController = useRef<AbortController>()

    useEffect(() => {
        if(containerRef.current instanceof HTMLElement && (!useActiveDescendant || activeDescendantControlRef.current instanceof HTMLElement))

        if (!disabled) {
            const vanillaSettings: FocusZoneSettings = {
                ...settings,
                activeDescendantControl: activeDescendantControlRef.current ?? undefined
            }

            abortController.current = focusZone(containerRef.current, vanillaSettings)

            return () => { abortController.current?.abort() }

        } else {
            abortController.current?.abort()
        }
    }, [disabled, ...dependencies])

    return {
        containerRef,
        activeDescendantControlRef
    }
}

export {
    useFocusZone
}

export type {
    FocusZoneSettings,
}