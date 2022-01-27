import React, { useState, useEffect, ReactNode } from 'react' 
import { useIsSSR } from '@react-aria/ssr'

import { styled, CSS } from 'stitches.config' 
import { boop } from 'styles/keyframes'
import type { 
    AnimatableProperties, 
    AnimatableHOCProps 
} from './types'
import { useAnimationDefaults, useTimestringConverter } from './utils'

export type BoopProps = Omit<AnimatableHOCProps, 'rotate'> 
export type BoopHookProps = Omit<BoopProps, 'children'>

const StyledBoop = styled('span', {
    backfaceVisibility: 'hidden',
   
    d: 'inline-flex', 
    size: 'fit-content',
    p: 0,
    mx: '$1',

    variants: {
        boop: {
            true: {
                animationName: `${boop}`,
                animationDuration: 'var(--animation-duration)',
                animationTimingFunction: `infinite`
            },
            false: null
        }
    },
    defaultVariants: {
        boop: false
    }
})

export const useBoop = (props: BoopHookProps) => {
    const isSSR = useIsSSR()
    const [isBooped, setIsBooped] = useState<boolean>(false)
    
    const revert  = () => setIsBooped(false)
    const trigger = () => setIsBooped(true)

    const styles: CSS = useAnimationDefaults({ ...props })
    const timeoutDuration: number = useTimestringConverter(props.duration)


    useEffect(() => {
        if (isSSR || !isBooped) return
        
        const timeoutId = window.setTimeout(() => revert(), timeoutDuration)
        return () => { 
            window.clearTimeout(timeoutId) 
        }
    }, [isSSR, timeoutDuration, isBooped, setIsBooped])

    return {
        revert,
        trigger,
        isBooped,
        styles
    }
}

export const Boop = ({ children, ...props }: BoopProps) => {
    const { trigger, revert, isBooped, styles } = useBoop({ ...props })

    return (
        <StyledBoop onMouseEnter={trigger} boop={isBooped} css={{ ...styles }}>
            {children}
        </StyledBoop>
    )
}

export default Boop