import { useState, useEffect, HTMLAttributes } from 'react'
import { styled, CSS } from 'stitches.config'
import { useIsSSR } from '@react-aria/ssr'
import { useHover } from '@react-aria/interactions'
import { HoverEvent } from '@/interfaces/Interactions'

import type { 
    AnimatableHOCProps 
} from './types'
import { 
    useTimestringConverter,
    useAnimationDefaults 
} from './utils'

const StyledSlide = styled('span', {
    backfaceVisibility: 'hidden',

    display: 'inline-flex', 
    size: 'fit-content',
    padding: 0,
    mx: 'var(--transform-x)',

    variants: {
        slide: {
            true: {
                transition: 'all 0.6s ease-in',
                transform: 'translateX(var(--transform-x))'
            },
            false: {
                transition: 'all 0.6s ease-out',
                transform: 'translateX(-var(--transform-x))'
            },
        }
    },
    defaultVariants: {
        slide: false
    }
})

type SlideHookProps = Omit<AnimatableHOCProps, 'children'>
type SlideProps = AnimatableHOCProps & { 
    css?: CSS; 
}

type SlideHookResult = {
    revert: () => void;
    trigger: () => void; 
    isSliding: boolean;
    isHovered: boolean;
    hoverProps: HTMLAttributes<HTMLElement>; 
    css: CSS; 
}

export const useSlide = (props: SlideHookProps): SlideHookResult => {
    const isSSR = useIsSSR()

    const [slideable, setSlideable] = useState<boolean>(true)
    const [isSliding, setIsSliding] = useState<boolean>(false)

    const revert = () => {
        setSlideable(true)
        setIsSliding(false)
    }

    const trigger = () => {
        if(!slideable) return
        setSlideable(false)
        setIsSliding(true)
    }

    const { hoverProps, isHovered } = useHover({
        onHoverStart: (_event: HoverEvent) => trigger()
    })

    const styles: CSS = useAnimationDefaults(props)
    const timeoutDuration: number = useTimestringConverter(props.duration)
 
    useEffect(() => {
        if (isSSR || !isSliding || slideable) return
        
        const timeoutId = window.setTimeout(() => {
            revert()
        }, timeoutDuration)

        return () => { 
            window.clearTimeout(timeoutId) 
        }
    }, [isSSR, timeoutDuration, slideable, isSliding])

    return {
        revert,
        trigger, 
        isSliding,
        isHovered,
        hoverProps,
        css: styles
    }
}

// on hoverstart -> start, on hoverend -> revert
// on hoverstart -> start, on hoverend -> nothing, on animationend -> revert
// on hoverstart -> start / delay, on hoverend -> nothing / delay / end, on animationend -> nothing / delay / revert

export const Slide = ({ children, ...props }: SlideProps) => {
    const { trigger, isSliding, isHovered, hoverProps, css } = useSlide({ ...props })

    return (
        <StyledSlide {...hoverProps} slide={isHovered} css={{ ...css }}>
            {children} 
        </StyledSlide>
    )
}