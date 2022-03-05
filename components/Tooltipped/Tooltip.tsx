import { styled, keyframes, CSS } from 'stitches.config'
import {
    bottom_TooltipStyles as bottomStyles,
    bottomLeft_TooltipStyles as bottomLeftStyles,
    bottomRight_TooltipStyles as bottomRightStyles,
    top_TooltipStyles as topStyles,
    topLeft_TooltipStyles as topLeftStyles,
    topRight_TooltipStyles as topRightStyles,
    left_tooltipStyles as leftStyles,
    right_tooltipStyles as rightStyles
} from './styles'

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
    '--tooltip-bg': '$colors$tooltipBackground',
    '--tooltip-fg': '$colors$tooltipForeground',

    '--tooltip-min-width': '100px',
    '--tooltip-max-width': '250px',
    '--tooltip-padding-y': '$space$1',
    '--tooltip-padding-x': '$space$2',

    '--tooltip-duration': '300ms',
    '--tooltip-delay': '500ms'
}

const sharedRevealTooltipStyles: CSS = {
    ...vars, 
    display: 'inline-block',
    textDecoration: 'none',
    animationName: `${appear}`,
    animationDuration: 'var(--tooltip-duration)',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in'
}

const delayedTooltipStyles: CSS = {
    '&::after': { ...vars, ...sharedRevealTooltipStyles,  animationDelay: 'var(--tooltip-delay)' },
    '&::before': { ...vars, ...sharedRevealTooltipStyles,  animationDelay: 'var(--tooltip-delay)' }
}

const instantTooltipStyles: CSS = {
    '&::after': { ...vars, ...sharedRevealTooltipStyles, animationDelay: '0ms' }, // <- add a variable for no-delay ??
    '&::before': { ...vars, ...sharedRevealTooltipStyles, animationDelay: '0ms' }
}

const stickyTooltipStyles: CSS = {
    '&::after': { display: 'inline-block' },
    '&::before': { display: 'inline-block' }
}
const stickyMultilineTooltipStyles: CSS = {
    '&::after': { display: 'table-cell' },
    '&::before': { }
}

const multilineTooltipStyles: CSS = {
    ...vars,
    '&::after': { 
        display: 'table-cell',
        width: 'max-content',
        maxWidth: 'var(--tooltip-max-width)',
        wordWrap: 'break-word',
        whiteSpace: 'pre-line',
        borderCollapse: 'separate'
    },
    '@media screen and (min-width: 0/0)': {
        '&::after': {
            maxWidth: 'var(--tooltip-max-width)'
        }
    }
}

const alignLeftStyles: CSS = {
    '&::after': { left: '0em', marginLeft: '0em' },
    '&::before': { left: '10px' }
}

const alignRightStyles: CSS = {
    '&::after': { right: '0em', marginRight: '0em' },
    '&::before': { right: '10px' }
}

const alignTopMultilineStyles: CSS = {
    '&::after': { right: 'auto', left: '50%', transform: 'translateX(-50%)' },
    '&::before': {}
}
const alignBottomMultilineStyles: CSS = {
    '&::after': { right: 'auto', left: '50%', transform: 'translateX(-50%)' },
    '&::before': {}
}
const alignRightMultilineStyles: CSS = {
    '&::after': { right: '100%' },
    '&::before': {  }
}
const alignLeftMultilineStyles: CSS = {
    '&::after': { right: '100%' },
    '&::before': { }
}

export const StyledTooltip = styled('div', {
    ...vars,
    position: 'relative',

    '&::after': {
        display: 'none',
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'pre',

        minWidth: 'var(--tooltip-min-width)',
        maxWidth: 'var(--tooltip-max-width)',
        zIndex: 1000000,
      
        background: 'var(--tooltip-bg)',
        color: 'var(--tooltip-fg)',
        WebkitFontSmoothing: 'subpixel-antialiased',
        padding: 'var(--tooltip-padding-y) var(--tooltip-padding-x)',
        margin: '0em',

        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '13px',
        fontFamily: '$jetbrains',
        fontVariant: 'tabular',
   
        textAlign: 'center',
        textDecoration: 'none',
        textShadow: 'none',
        textTransform: 'none',
        textOverflow: 'ellipsis',
        letterSpacing: 'normal',
        wordWrap: 'break-word',

        pointerEvents: 'none',
        content: 'attr(aria-label)',
      
        borderRadius: '$1',
        opacity: 0
    },

    // tooltip arrow
    '&::before': {
        position: 'absolute',
        zIndex: 1000009,
        display: 'none',
        height: '0em',
        width: '0em',
        color: 'var(--tooltip-bg)',
        pointerEvents: 'none',
        content: '',
        border: '6px solid transparent',
        opacity: 0
    },

    variants: {
        noDelay: {
            true: {
                '&:hover': instantTooltipStyles,
                '&:focus': instantTooltipStyles,
                '&:active': instantTooltipStyles
            },
            false: {
                '&:hover': delayedTooltipStyles,
                '&:focus': delayedTooltipStyles,
                '&:active': delayedTooltipStyles,
            }
        },
        multiline: {
            true: {
                '&:hover': multilineTooltipStyles,
                '&:focus': multilineTooltipStyles,
                '&:active': multilineTooltipStyles 
            },
            false: null
        },
        sticky: {
            true: stickyTooltipStyles,
            false: null
        },
        align: {
            'left': alignLeftStyles,
            'right': alignRightStyles,
            'center': null
        },
        placement: {
            'top': topStyles,
            'top-left': topLeftStyles,
            'top-right': topRightStyles,
            'bottom': bottomStyles,
            'bottom-left': bottomLeftStyles,
            'bottom-right': bottomRightStyles,
            'left': leftStyles,
            'right': rightStyles
        }
    },
    compoundVariants: [
        { multiline: true, placement: 'top',          css: alignTopMultilineStyles      },
        { multiline: true, placement: 'top-left',     css: { }                          },
        { multiline: true, placement: 'top-right',    css: { }                          },
        { multiline: true, placement: 'bottom',       css: alignBottomMultilineStyles   },
        { multiline: true, placement: 'bottom-left',  css: { }                          },
        { multiline: true, placement: 'bottom-right', css: { }                          },
        { multiline: true, placement: 'left',         css: alignLeftMultilineStyles     },
        { multiline: true, placement: 'right',        css: alignRightMultilineStyles    },
        { multiline: true, sticky: true,              css: stickyMultilineTooltipStyles }
    ],
    defaultVariants: {
        noDelay: false,
        multiline: false,
        sticky: false,
        align: 'center',
        placement: 'top'
    }
})