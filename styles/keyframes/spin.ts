import { keyframes } from 'stitches.config'

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