import React, { useState, useEffect, ReactNode } from 'react' 

interface BoopProps {
    rotation?: number;
    timing?: number;
    children: ReactNode; 
}

export const Boop = ({ rotation = 0, timing = 150, children }: BoopProps) => {
    const [isBooped, setIsBooped] = useState<boolean>(false)

    useEffect(() => {
        if (!isBooped) return
        
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false)
        }, timing)

        return () => window.clearTimeout(timeoutId)
    }, [isBooped, timing])

    const trigger = () => setIsBooped(true)
    
    return (
        <span 
            onMouseEnter={trigger} 
            style={{
                display: 'inline-block',
                backfaceVisibility: 'hidden',
                transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
                transition: `transform ${timing}ms`
            }}
        >
            {children}
        </span>
    )
}