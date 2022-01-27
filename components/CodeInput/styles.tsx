import { styled, keyframes, CSS } from 'stitches.config'

const blinkCaret = keyframes({
    '50%': {
        background: 'transparent'
    }
})

const shake = keyframes({
    '25%': {
        transform: 'translateX(10px)'
    },
    '75%': {
        transform: 'translateX(-10px)'
    }
})

const pulseBorder = keyframes({
    '50%': {
        borderColor: 'var(--segment-color)',
        boxShadow: `
            rbg(255,255,255) 0px 0px 0px 0px,
            var(--segment-color) 0px 0px 0px 1px, 
            rgba(0,0,0,0) 0px 0px 0px 0px
        `
    }
})

export const StyledLabel = styled('label', {
    display: 'block',
    paddingBottom: '10px',
    textAlign: 'end',

    '& > span': {
        opacity: 0.5
    }
})

export const StyledRoot = styled('div', {
    '--character-width': '1ch',
    '--padding-x': '0.25rem',
    '--segment-width': 'calc(1ch + 0.5rem)',

    position: 'relative',
    width: 'calc(var(--segment-width) * 6 + 3rem)',
    fontFamily: '$jetbrains',
    fontSize: '2rem',
    textIndex: '0.25rem',
    letterSpacing: 'calc(var(--padding-x) * 2 + 0.5rem)',
    lineHeight: 'calc(2rem + var(--padding-y) * 2)',
    zIndex: 0
})


export const StyledAbsolute = styled('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: -1
})

export const StyledScrollArea = styled('div', {
    height: '100%',
    overflow: 'hidden'  
})

export const StyledCodeInputField = styled('input', {
    appearance: 'none',
    userSelect: 'none',

    fontFamily: '$jetbrains',
    fontSize: '2rem',
    letterSpacing: 'inherit',
    textIndent: 'inherit',

    background: 'transparent',
    display: 'block',
    width: '200%',
    py: '0.25rem',
    px: '0.25rem',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    margin: '0',
    border: '1px solid transparent',
    outline: 'none',

    color: '$accentTextContrast',
    caretColor: 'transparent',

    '&::selection': {
        backgroundColor: 'transparent'  
    },

    variants: {
        error: {
            true: {
                animation: `${shake} 0.15s ease-in-out 0s 2`
            }
        },
        success: {
            true: {

            },
            false: null
        }
    },
    defaultVariants: {
        error: false,
        success: false
    }
})

const sharedSegmentStyles: CSS = {
    outline: '2px solid transparent',
    outlineOffset: '2px',
    borderColor: 'var(--segment-color)',
    boxShadow: `
        rbg(255,255,255) 0px 0px 0px 0px,
        var(--segment-color) 0px 0px 0px 1px, 
        rgba(0,0,0,0) 0px 0px 0px 0px
    `
}

export const StyledSegment = styled('span', {
    appearance: 'none',
    background: '$accentBg',
    border: '2px solid $accentBorder',
    borderRadius: '0.375rem',
    display: 'flex',

    variants: {
        isFocused: {
            true: {
                '--segment-color':  '$colors$panelSolid',
                ...sharedSegmentStyles
            },
            false: null
        },
        error: {
            true: {
                '--segment-color': '$colors$dangerSolid',
                ...sharedSegmentStyles
            },
            false: null
        },
        success: {
            true: {
                '--segment-color': '$colors$successSolid',
                ...sharedSegmentStyles
            },
            false: null
        },
        loading: {
            true: {
                animation: `${pulseBorder} 1s ease-in-out 0s infinite`,
                ...sharedSegmentStyles
            },
            false: null
        },
        cursor: {
            true: {
                '--segment-color':  '$colors$infoSolid',
                ...sharedSegmentStyles
            },
            false: null
        },
        selected: {
            true: {
                '--segment-color':  '$colors$warningSolid',
                ...sharedSegmentStyles
            },
            false: null
        }
    },
    defaultVariants: {
        isFocused: false,
        error: false,
        success: false,
        loading: false,
        cursor: false,
        selected: false
    }
})

const sharedContentStyles: CSS = {
    flex: 1,
    margin: '3.5px',
    borderRadius: '0px',
    bc: 'var(--segment-color)',
    opacity: 1,
}

export const StyledSegmentContent = styled('div', {
    

    variants: {
        isFocused: {
            true: { },
            false: null
        },
        success: {
            true: {
                '--segment-color': '$colors$successSolid',
                ...sharedContentStyles,
            },
            false: null
        },
        error: {
            true: {
                '--segment-color': '$colors$dangerSolid',
                ...sharedContentStyles,
            },
            false: null
        },
        selected: {
            true: {
                '--segment-color':  'pink',
                ...sharedContentStyles
            },
            false: null
        },
        cursor: {
            true: { },
            false: null
        }
    },
    compoundComponents: [
        {
            cursor: true,
            isFocused: true,
            css: {
                flex: '0 0 2px',
                justifySelf: 'center',
                margin: '8px auto',
                width: '2px',
                background: 'purple',
                animation: `${blinkCaret} 1.2s step-end infinite`
            }
        }

    ],
    defaultVariants: {
        isFocused: false,
        success: false,
        error: false,
        selected: false,
        cursor: false,
    }
})

