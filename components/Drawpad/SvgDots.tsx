import React from 'react'
import { useAtom } from 'jotai'
import { dotsAtom } from "./atoms"

const SvgDots = () => {
    const [dots] = useAtom(dotsAtom)

    return (
        <> 
            {dots.map((dot, index) => (
                <circle key={index} cx={dot[0]} cy={dot[1]} r="2" fill="orange" />
            ))}
        </>
    );
}

export default React.memo(SvgDots);
