import { keyframes } from 'stitches.config'

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
