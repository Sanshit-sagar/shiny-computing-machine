import { useRef, forwardRef, useEffect, useLayoutEffect } from 'react'

import { Portal } from './Portal'
import { useOverlay } from './useOverlay'
import { StyledOverlay } from './styles'
import { getSlideAnimationStartingVector } from './utils'
import type { OverlayElement, OverlayProps } from './types'

import { useCombinedRefs } from '@/hooks/useRef'

const animationDuration = '300ms'
const slideAnimationDistance = 8
const slideAnimationEasing = 'easeOutCubic'

const Overlay = forwardRef<OverlayElement, OverlayProps>((props, forwardedRef) => {
    const {
        role = 'none',
        height,
        top,
        left,
        anchorSide,
        visibility,
        onEscape,
        onClickOutside,
        initialFocusRef,
        returnFocusRef,
        ignoreClickRefs,
        preventFocusOnOpen,
        portalContainerName,
        ...rest
    } = props 

    const overlayRef = useRef<HTMLDivElement>(null)
    const combinedRef = useCombinedRefs(overlayRef, forwardedRef)

    useOverlay({
        overlayRef,
        onEscape,
        onClickOutside,
        initialFocusRef,
        returnFocusRef,
        ignoreClickRefs,
        preventFocusOnOpen
    })

    useEffect(() => {
        if(height === 'initial' && combinedRef.current?.clientHeight) {
            combinedRef.current.style.height = `${combinedRef.current.clientHeight}px`
        }    
    }, [height, combinedRef])

    useLayoutEffect(() => {
        const {x, y} = getSlideAnimationStartingVector(anchorSide)
        
        if ((!x && !y) || !overlayRef.current?.animate || visibility === 'hidden') {
            return
        }

        overlayRef.current.animate(
            { transform: [`translate(${slideAnimationDistance * x}px, ${slideAnimationDistance * y}px)`, `translate(0, 0)`]},
            {
              duration: animationDuration,
              easing: slideAnimationEasing
            }
        )
    }, [anchorSide, slideAnimationDistance, slideAnimationEasing, visibility])

    return (
        <Portal containerName={portalContainerName}>
            <StyledOverlay 
                {...rest}
                role={role}
                height={height} 
                visibility={visibility}
                ref={combinedRef}
                css={{ top: `${top || 0}px`, left: `${left || 0}px`, }}
            />
        </Portal>
    )
})

export {
    Overlay 
}