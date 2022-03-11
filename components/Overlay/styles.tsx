import { styled, keyframes, CSS } from 'stitches.config'
import { DEFAULT_TAG } from './constants'

const appear = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

const cssVariables: CSS = {
    '--animation-duration': '300ms',
    '--animation-function': 'ease-in-out'
}

const StyledOverlay = styled(DEFAULT_TAG, {
    ...cssVariables,

    appearance: 'none',
    position: 'relative',
    overflow: 'hidden',
    outline: 'none',

    minWidth: '192px',
    maxWidth: '640px',

    backgroundColor: 'rgba(0,0,200,0.5)',
    border: '0',
    borderRadius: '12px',
    boxShadow: 'rgba(200,0,0,0.5)',
   
    animation: `${appear} var(--animation-duration) var(--animation-function)`,

    '&:hover': { outline: 'none' },
    '&:focus': { outline: 'none' },

    variants: {
        height: {
            'xsmall': { height: '192px' },
            'small': { height: '256px' },
            'medium': { height: '320px' },
            'large': { height: '432px' },
            'xlarge': { height: '600px' },
            'xxlarge': { height: '918px' },
            'auto': { height: 'auto' },
            'initial': { height: 'auto' } 
        },
        width: { 
            'xsmall': { width: '220px' },
            'small': { width: '256px' },
            'medium': { width: '320px' },
            'large': { width: '480px' },
            'xlarge': { width: '640px' },
            'xxlarge': { width: '960px' },
            'auto': { width: 'auto' },
            'initial': { width: 'auto' } 
        },
        maxHeight: {
            'xsmall': { height: '192px' },
            'small': { height: '256px' },
            'medium': { height: '320px' },
            'large': { height: '432px' },
            'xlarge': { height: '600px' },
            'xxlarge': { height: '918px' },
        },
        visibility: {
            'visible': { visibility: 'visible' },
            'hidden': { visibility: 'visible' }
        },
        anchorSide: {
            
        }
    },
    defaultVariants: {
        height: 'medium',
        width: 'medium',
        visibility: 'visible',
        maxHeight: 'auto',
        anchorSide: 'bottom'
    }
})


export {
    StyledOverlay
}