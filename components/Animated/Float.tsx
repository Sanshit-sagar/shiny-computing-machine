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

const StyledFloat = styled('span', {
    backfaceVisibility: 'hidden',

    display: 'inline-flex', 
    size: 'fit-content',
    padding: 0,
    br: '$2',
   
    willChange: 'box-shadow',
    

    variants: {
        float: {
            true: {
                transition: 'all 0.6s ease-in',
                transform: 'translateY(-3px)',
                boxShadow: '$medium'
            },
            false: {
                transition: 'all 0.6s ease-out',
                transform: 'translateY(3px)',
                boxShadow: 'none'
            },
        }
    },
    defaultVariants: {
        float: false
    }
})

type FloatHookProps = Omit<AnimatableHOCProps, 'children'>
type FloatProps = AnimatableHOCProps & { 
    css?: CSS; 
}

type FloatHookResult = {
    revert: () => void;
    trigger: () => void; 
    float: boolean;
    isHovered: boolean; 
    hoverProps: HTMLAttributes<HTMLElement>; 
    css: CSS; 
}

export const useFloat = (props: FloatHookProps): FloatHookResult => {
    const isSSR = useIsSSR()
    const [float, setFloat] = useState<boolean>(false)

    const revert = () => setFloat(false)
    const trigger = () => setFloat(true)

    const { hoverProps, isHovered } = useHover({
        onHoverStart: (_event: HoverEvent) => trigger()
    })

    const styles: CSS = useAnimationDefaults(props)
    const timeoutDuration: number = useTimestringConverter(props.duration)
 
    useEffect(() => {
        if (isSSR || !float) return
        
        const timeoutId = window.setTimeout(() => {
            revert()
        }, timeoutDuration)

        return () => { 
            window.clearTimeout(timeoutId) 
        }
    }, [isSSR, timeoutDuration, float])

    return {
        revert,
        trigger, 
        float,
        isHovered,
        hoverProps,
        css: styles
    }
}

// on hoverstart -> start, on hoverend -> revert
// on hoverstart -> start, on hoverend -> nothing, on animationend -> revert
// on hoverstart -> start / delay, on hoverend -> nothing / delay / end, on animationend -> nothing / delay / revert

export const Float = ({ children, ...props }: FloatProps) => {
    const { float, trigger, revert, isHovered, hoverProps, css } = useFloat({ ...props })

    return (
        <StyledFloat {...hoverProps} float={isHovered} css={{ ...css }}>
            {children} 
        </StyledFloat>
    )
}