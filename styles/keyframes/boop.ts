import { keyframes } from 'stitches.config'

export const boop = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '25%': {
        transform: 'rotate(10deg)'
    },
    '50%': {
        transform: 'rotate(-10deg)'
    },
    '75%': {
        transform: 'rotate(10deg)'
    },
    '100%': {
        transform: 'rotate(0deg)'
    }
}) 