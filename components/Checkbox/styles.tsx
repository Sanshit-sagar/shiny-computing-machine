import { styled, CSS, keyframes } from 'stitches.config'

const pop = keyframes({
    '0%': {
        transform: 'scale(1.00)'
    },
    '10%': {
        transform: 'scale(1.02)'
    },
    '25%': {
        transform: 'scale(1.00)'
    },
    '50%': {
        transform: 'scale(0.92)'
    },
    '75%': {
        transform: 'scale(1.00)',
    },
    '90%': {
        transform: 'scale(1.04)',
    },
    '100%': {
        transform: 'scale(1.00)'
    }
})

export const StyledFieldset = styled('fieldset', {
    maxWidth: '400px',
    minWidth: '200px',
    margin: '20px',
    fontSize: '$3',
    border: '1px solid $accentBorder',
    br: '$2'
})

export const StyledLegend = styled('legend', {

})

export const StyledLabel = styled('label', {
    height: 'fit-content',
    width: 'fit-content',
    padding: '$1',
    margin: '$1',

    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$3',

    fontSize: '$2',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    verticalAlign: 'middle',

    color: '$accentText',

    variants: {
        strikethrough: {
            true: {
                textDecoration: 'line-through',
                textDecorationColor: '$accentText'
            }
        },
        direction: {
            'ltr': {
                flexDirection: 'row',
                textAlign: 'end',
            },
            'rtl': {
                flexDirection: 'row-reverse',
                textAlign: 'start',
            }
        }
    },
    defaultVariants: {
        strikethrough: false,
        direction: 'ltr'
    }
})

const sharedStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    margin: '0em',
    padding: '0em',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',

    borderWidth: '1px',
    borderStyle: 'solid',
    
    transition: 'all 0.3s ease'
}


const size1: CSS = { size: '22px', fontSize: '$1' }
const size2: CSS = { size: '24px', fontSize: '$2' }
const size3: CSS = { size: '26px', fontSize: '$3' }
const squaredCheckbox: CSS = { borderColor: '$accentBorder', borderRadius: '$2' }
const circledCheckbox: CSS = { borderColor: '$accentBorder', borderRadius: '50%' }
const borderlessCheckbox: CSS = { borderColor: 'transparent', borderRadius: '0em' }

type CheckboxSize = 1 | 2 | "1" | "2" | "3" | 3;
type CheckboxShape = "circle" | "none" | "square";
type CheckboxDefaultVariants = Partial<{ size: CheckboxSize; shape: CheckboxShape; }> 

const defaults: CheckboxDefaultVariants = {
    size: '1',
    shape: 'none'
}

export const StyledOn = styled('span', {
    ...sharedStyles,
    bc: '$accentBg',

    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover',
        color: '$accentSolid',
        boxShadow: '$small'
    },

    animation: `${pop} 0.5s ease-in-out`,
    animationDirection: 'alternate',
    animationIterationCount: '1',

    variants: {
        size: {
            1: size1,
            2: size2,
            3: size3
        },
        shape: {
            square: squaredCheckbox,
            circle: circledCheckbox,
            none: borderlessCheckbox
        }
    },
    defaultVariants: defaults
})

export const StyledOff = styled('span', {
    ...sharedStyles, 

    variants: {
        size: {
            1: size1,
            2: size2,
            3: size3
        },
        shape: {
            square: squaredCheckbox,
            circle: circledCheckbox,
            none: borderlessCheckbox
        }
    },
    defaultVariants: defaults
})

export const StyledIndeterminate = styled('span', {

})


export const CheckboxBgAndIcon = () => (
    <svg 
        width="32" 
        height="32" 
        viewBox="-4 -4 39 39" 
        aria-hidden="true" 
        focusable="false"
    >
        <rect 
            className="cb-bg" 
            width="35" 
            height="35" 
            x="-2" 
            y="-2" 
            stroke="currentColor" 
            fill="none" 
            stroke-width="3"
            rx="6" 
            ry="6" 
        />
        <polyline 
            className="cb-cm" 
            points="4,14 12,23 28,5" 
            stroke="transparent" 
            stroke-width="4" 
            fill="none" 
        /> 
    </svg>
)

const cssVariables: CSS = {
    '--checked-bg-color': 'hsl(350, 95%, 58%)',
    '--checked-icon-color': '#fff',
    '--outline-color': '$colors$infoSolid',
    '--outline-offset': '2px',
    '--transition-duration': '300ms'
}

export const StyledAccessibleCheckbox = styled('label', {
    ...cssVariables,

    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-start',

    position: 'absolute',
    height: '1em',
    width: '1em',
    opacity: 0.000001,

    '& svg': {
        height: '1em',
        width: '1em',
        marginRight: '0.5em',
        marginTop: '0.1em',

        '& *': {
            transition: 'all var(--transition-duration) ease'
        }
    },

    '&:checked': {
        '& + svg': {
            '&.cb-bg': {
                fill: 'var(--checked-bg-color)',
                stroke: 'var(--checked-bg-color)'
            },
            '&.cb-cm': {
                stroke: 'var(--checked-icon-color)'
            }
        }
    },

    '&:focus': {
        '& + svg': {
            outline: '2px solid dodgerblue',
            outlineOffset: '2px'
        },
        '&:not(:focus-visible)': {
            '& + svg': {
                outline: 'none',
            }
        }
    },

    '@media screen and (-ms-high-contrast: active)': {
        '&:checked': {
            '& ~ svg': {
                'rect': {
                    fill: 'windowText'
                },
                'polyline': {
                    stroke: 'highlight'
                }
            }
        }
    }
})

