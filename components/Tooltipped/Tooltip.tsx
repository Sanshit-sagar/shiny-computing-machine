import { styled, keyframes, CSS, VariantProps } from 'stitches.config'

const disappear = keyframes({
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
})

const appear = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

const vars: CSS = {
    '--color-neutral-emphasis-plus': '',
    '--color-fg-on-emphasis': '',

    '--tooltip-animation-duration': '',
    '--tooltip-delay': 'var(--tooltip-animation-duration)'
}

const shownTooltipStyles: CSS = {
    display: 'inline-block',
    textDecoration: 'none',
    animationName: 'appear',
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in',
    animationDelay: 'var(--tooltip-delay)'
}

const instantTooltipStyles: CSS = {
    '&::after': {
        'tooltip-delay': '0ms',
        animationDelay: 'var(--tooltip-delay)'
    },
    '&::before': {
        'tooltip-delay': '0ms',
        animationDelay: 'var(--tooltip-delay)'
    }
}

const multilineTooltipStyles: CSS = {
    '&::after': {
        display: 'table-cell'
    }
}

const StyledTooltip = styled('div', {
    position: 'relative',

    '&::after': {
        position: 'absolute',
        zIndex: 1000000,
        display: 'none',
        padding: '$5 $6',
        font: 'normal normal 11px/1.5 inherit',
        WebkitFontSmoothing: 'subpixel-antialiased',
        color: 'var(--color-fg-on-emphasis)',
        textAlign: 'center',
        textDecoration: 'none',
        textShadow: 'none',
        textTransform: 'none',
        letterSpacing: 'normal',
        wordWrap: 'break-word',
        whiteSpace: 'pre',
        pointerEvents: 'none',
        content: 'attr(aria-label)',
        background: 'var(--color-neutral-emphasis-plus)',
        borderRadius: '$2'
    },
    '&::before': {
        position: 'absolute',
        zIndex: 1000001,
        display: 'none',
        height: '0em',
        width: '0em',
        color: 'var(--color-neutral-emphasis-plus)',
        pointerEvents: 'none',
        content: '',
        border: '6px solid transparent',
        opacity: '0em'
    },

    '&:hover': { 
        '&::after': {
            ...shownTooltipStyles,
        },
        '&::before': {
            ...shownTooltipStyles,
        }
    },
    '&:focus': { 
        '&::after': {
            ...shownTooltipStyles,
        },
        '&::before': {
            ...shownTooltipStyles,
        }
    },
    '&:active': { 
        '&::after': {
            ...shownTooltipStyles,
        },
        '&::before': {
            ...shownTooltipStyles,
        }
    },

    
    variants: {
        noDelay: {
            true: {
                '&:hover': { ...instantTooltipStyles },
                '&:focus': { ...instantTooltipStyles },
                '&:active': { ...instantTooltipStyles }
            },
            false: null
        },
        multiline: {
            true: {
                '&:hover': { ...multilineTooltipStyles },
                '&:focus': { ...multilineTooltipStyles },
                '&:active': { ...multilineTooltipStyles }
            },
            false: null
        }
    },
    defaultVariants: {
        noDelay: false,
        multiline: false
    }
})