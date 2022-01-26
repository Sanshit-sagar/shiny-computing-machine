import React, { useState, useEffect, ReactNode } from 'react' 
import { boop } from '@/styles/keyframes'
import { useIsSSR } from '@react-aria/ssr'
import { styled } from 'stitches.config' 

interface BoopProps {
    rotation?: number;
    timing?: number;
    children: ReactNode; 
}

const StyledBoop = styled('span', {
    display: 'inline-block',
    backfaceVisibility: 'hidden',

    '& .boop': {
        animation: `${boop} 0.6s forward`
    }
})

const isBoopable = (boopifier: 'boop' | 'noboop'): boolean => boopifier === 'boop'

export const NuBoop = ({ children }: { children: ReactNode; }) => {
    const [timing, setTiming] = useState<boolean>(200) 
    const [boopableClass, setBoopableClass] = useState<'boop' | 'noboop'>('noboop')
    const isSSR = useIsSSR()

    useEffect(() => {
        if (isSSR) return
        if (isBoopable(boopableClass)) return

        const timeoutId = window.setTimeout(() => {
            setBoopableClass('noboop')
        }, timing) 

         return () => window.clearTimeout(timeoutId)
    }, [isBooped, timing]) 

    const boopify = (_event: MouseEvent) => {
        setBoopableClass((prev) => isBoopable(prev) ? 'boop' : 'noboop')
    }

    return (
        <StyledBoop onMouseEnter={boopify}>
            <span className={boopableClass}>
                {children}
            </span>
        </StyledBoop>
    )
}


// export const Boop = ({ rotation = 25, timing = 150, children }: BoopProps) => {
    // const [isBooped, setIsBooped] = useState<boolean>(false) 
    // useEffect(() => {
        // if (!isBooped) return
        // 
        // const timeoutId = window.setTimeout(() => {
            // setIsBooped(false)
        // }, timing) 
        // return () => window.clearTimeout(timeoutId)
    // }, [isBooped, timing]) 
    // const trigger = () => setIsBooped(true)
    // return (
        // <span 
            // onMouseEnter={trigger} 
            // style={{
                // display: 'inline-block',
                // backfaceVisibility: 'hidden',
                // transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
                // transition: `0.6s transform ${timing}ms`
            // }}
        // >
            {/* {children} */}
        {/* </span> */}
    // )
// }