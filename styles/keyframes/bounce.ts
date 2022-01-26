import { keyframes } from 'stitches.config'

export const bounce = keyframes({
    '0%': {
        top: '100px',
        height: '80px',
        borderRadius: '50px / 40px'
    },
    '44%': {
        top: 0,
        height: '120px',
        borderRadius: '50px / 60px'
    },
    '60%': {
        top: 0,
        height: '120px',
        borderRadius: '50px / 60px'
    },
    '100%': {
        top: '100px',
        height: '80px',
        borderRadius: '50px / 40px'
    }
}) 