import type { AnimatableProperties, AnimatableTime, AnimationHOCProps } from './types'


export const defaultAnimatableProperties: AnimatableProperties  = {
    '--transform-x': '20px',
    '--transform-y': '20px',
    '--transform-scale': 'scale(1.0)',
    '--transform-rotate': 'rotate(0deg)',
    '--animation-duration': '1000ms',
    '--animation-delay': '1000ms',
    '--animation-timing-function': 'infinite',
    '--animation-bg': 'transparent'
}

export const getDefaultIfEmpty = (defaultKey: keyof AnimatableProperties, providedValue: string) => (
    providedValue?.length ? providedValue : defaultAnimatableProperties[defaultKey]
)

export const useAnimationDefaults = ({ ...props }: Omit<AnimationHOCProps, 'children'>) => {
    const propsWithDefaults = {
        '--transform-x': props.x || defaultAnimatableProperties['--transform-x'],
        '--transform-y': props.y || defaultAnimatableProperties['--transform-y'], 
        '--transform-scale': props.scale || defaultAnimatableProperties['--transform-scale'], 
        '--transform-rotate': props.delay || defaultAnimatableProperties['--transform-duration'], 
        '--animation-duration': props.duration || defaultAnimatableProperties['--transform-delay'], 
        '--animation-function': defaultAnimatableProperties['--transform-timing-function'],
        '--animation-bg': props.color || defaultAnimatableProperties['--animation-bg']
    }
    return propsWithDefaults
}

export const useTimestringConverter = (duration: AnimatableTime): number => {
    let timeoutValue: number

    if(typeof duration === 'string' && duration?.length) {
        if(duration.endsWith('ms')) {
            timeoutValue = Number(duration.substring(0, duration.length - 2)) 
        } else if(duration.endsWith('s')) {
            timeoutValue =  Number(duration.substring(0, duration.length - 1))
        }
    } else {
        timeoutValue = Math.max(Math.min(5000, duration.length), 0)
    }

    return timeoutValue
}