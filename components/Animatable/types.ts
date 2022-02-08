import { ReactNode } from 'react' 
import { CSS } from 'stitches.config'

export type AnimatableDistance = Pick<CSS, 'height'>['height']

type Secs = 0 | 1 | 2 | 3 
type Millis = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type AnimatableTime  =  `${Secs}s`  
    |   `${Secs}.${Millis}s` 
    |   `${1 | 2 | 3}${Millis}${Millis}${Millis}ms`
    |   `${Secs}${Millis}${Millis}ms`

export type RotationAngle   =  `${Millis}` 
    |   `${Exclude<Millis, 0>}${Millis}` 
    |   `${1 | 2}${Millis}${Millis}` 
    |   `3${Secs}${Millis}` 
    |   `3${4 | 5}${Millis}`

export type AnimatableRotation     =   `rotate(${RotationAngle}deg)`

type ScaleFactor            =   `${Secs}.${Millis}`
export type AnimatableScale =   `scale(${ScaleFactor})` 
    |   `scaleX(${ScaleFactor})` 
    |   `scaleY(${ScaleFactor})`


export type AnimationFunction = Pick<CSS, 'animationFunction'>['animationFunction']

export interface AnimationVars {
    '--transform-x': AnimatableDistance;
    '--transform-y': AnimatableDistance;
    '--transform-scale': AnimatableScale;
    '--transform-rotate': AnimatableRotation;
    '--animation-duration': AnimatableTime;
    '--animation-delay': AnimatableTime;
    '--animation-timing-function': AnimationFunction;
    '--animation-bg': string; 
}

export interface AnimationProps {
    x?: AnimatableDistance;
    y?: AnimatableDistance;
    scale?: AnimatableScale;
    rotate?: AnimatableRotation;
    duration?: AnimatableTime;
    delay?: AnimatableTime;
    function?: AnimationFunction; 
    color?: string; 
    children: ReactNode; 
}

export interface IAnimatableContext extends Omit<AnimationProps, 'children'> {
    isAnimating: boolean;
    revert: () => void;
    trigger: () => void; 
}