import { styled, keyframes } from '../../../stitches.config'

export const rotate = keyframes({
    '100%': { 
        transform: `rotate(360deg)`,
        '-webkit-transform': `rotate(360deg)`
    }
})

export const bounce = keyframes({
    '0%': {
        transform: 'scale(0.0)',
        '-webkit-transform': 'scale(0.0)'
    },
    '50%': {
        transform: 'scale(1.0)',
        '-webkit-transform': 'scale(1.0)'
    },
    '100%': {
        transform: 'scale(0.0)',
        '-webkit-transform': 'scale(0.0)'
    }
})

export const DancingBalls = styled('div', {
    margin: '100px auto',
    width: '40px',
    height: '40px',
    position: 'relative',
    textAlign: 'center',

    '-webkit-animation': `${rotate} 2.0s infinite linear`,
    animation: `${rotate} 2.0s infinite linear`
})

export const BallDancer = styled('div', {
    width: '60%',
    height: '60%',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    bc: '$accentSolid',
    br: '100%',

    '-webkit-animation': `${bounce} 2.0s infinite ease-in-out`,
    animation: `${bounce} 2.0s infinite ease-in-out`,

    variants: {
        delay: {
            '0': {
                '-webkit-animation-delay': '0s',
                animationDelay: '0s'
            },
            '1': {
                top: 'auto',
                bottom: 0,
                '-webkit-animation-delay': '1.0s',
                animationDelay: '1.0s'
            }
        }
    },
    defaultVariants: {
        delay: '0'
    }
});