import { keyframes } from 'stitches.config'


export const ripple = keyframes({
    '0%': { 
        top: '45%',
        left: '45%',
        width: '0%',
        height: '0%',
        opacity: 1
    },
    '100%': {
        top: '0px',
        left: '0px',
        width: '90%',
        height: '90%',
        opacity: 0
    }
})


export const spin = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
})

export const staggeredSpin = keyframes({
    '0%': {
        transform: 'rotate(0turn)'
    },
    '25%': {
        transform: 'rotate(0.25turn)'
    },
    '50%': {
        transform: 'rotate(0.5turn)'
    },
    '75%': {
        transform: 'rotate(0.75turn)'
    },
    '100%': {
        transform: 'rotate(1turn)'
    }
})

export const pulse = keyframes({
    '0%': {
        height: '48px'
    },
    '50%': {
        height: '24px',
    },
    '100%': {
        height: '48px'
    }
})

export const reversePulse = keyframes({
    '0%': {
        height: '24px'
    },
    '50%': {
        height: '48px'
    },
    '100%': {
        height: '24px'
    }
})