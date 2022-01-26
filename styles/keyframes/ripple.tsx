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