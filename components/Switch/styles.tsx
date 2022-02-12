import { styled, CSS } from 'stitches.config'


export const Checker = styled('label', {
    display: 'block',
    fontSize: '2em',
    height: '1em',
    padding: 0,
    margin: 0,
    width: '2.5em',
    boxSizing: 'content-box',

    borderRadius: '20px',
    transition: 'transform 0.4s ease',
    cursor: 'pointer',

    variants: {
        isHovered: {
            true: {

            },
            false: null
        },
        isFocused: {
            true: null,
            false: null
        },
        isPressed: {
            true: {
                transform: 'scale(0.925)',
                transitionDuration: '200ms'
            },
            false: null
        },
        isDisabled: {
            true: {
                cursor: 'not-allowed',
            },
            false: null
        },
        isLoading: {
            true: null,
            false: null
        },
        showFocusRing: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '1px'
            },
            false: null
        },
        direction: {
            'ltr': {

            },
            'rtl': {

            }
        },
        isValid: {
            true: {
            },
            false: null
        },
        isInvalid: {
            true: {
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false, 
        isDisabled: false,
        isLoading: false,
        showFocusRing: false,
        direction: 'ltr',
        isValid: false,
        isInvalid: false
    }
})

const sharedBgStyles: CSS = {
    content: "",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit'
}

export const CheckBg = styled('div', {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '0.1em',
    borderRadius: 'inherit',
    backgroundColor: '$accentBg',
    border: '1px solid $accentBorder',
    zIndex: '$0',

    '&::after': {
        ...sharedBgStyles
    },
    '&::before': {
        ...sharedBgStyles,
        transition: 'transform 0.4s ease',
        transform: 'translateY(30%)',
        transformOrigin: 'bottom center',
        background: '$accentLine',
        filter: 'blur(0.25em)',
        opacity: 0.2,
        zIndex: '$min'
    },

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$accentBgHover'
            },
            false: null
        },
        isFocused: {
            true: {
                '&::before': {
                    transform: 'translateY(0) scale(0.9)',
                    opacity: 0.2
                }
            },
            false: null
        },
        isPressed: {
            true: null,
            false: null
        },
        isChecked: {
            true: {
                '&::after': {
                    background: 'transparent'
                }
            },
            false: {
                '&::after': {
                    background: 'transparent'
                }
            }
        },
        isDisabled: {
            true: {

            },
            false: null
        },
        isLoading: {
            true: {

            },
            false: null
        },
        direction: {
            'ltr': {

            },
            'rtl': {

            }
        },
        isValid: {
            true: {
            },
            false: null
        },
        isInvalid: {
            true: {
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false, 
        isDisabled: false,
        isLoading: false,
        direction: 'ltr',
        isValid: false,
        isInvalid: false
    }
})

export const Checkmark = styled('div', {
    height: '0.75em',
    width: '0.75em',
    margin: 0,
    padding: 0,
    borderRadius: 'inherit',
    aspectRatio: '1/1',
    transition: 'transform 0.4s ease',
    transform: 'translateX(-0.4em)',
    zIndex: '$max',

    '& svg': {
        display: 'block',
        background: 'transparent',
        transform: 'translateX(0.4em)',
        borderRadius: 'inherit',
        transition: `
            background-color 0.4s ease, 
            transform 0.4s ease
        `,
        '& path': {
            fill: 'none',
            stroke: '$accentText',
            strokeWidth: 15,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: '90 90',
            strokeDashoffset: '90',
            transition: 'stroke-dashoffset 133ms linear 133ms'
        }
    },

    variants: {
        isChecked: {
            true: {
                transform: 'translate(1.9em)',
                '& svg': {
                    background: '$accentSolid',
                    transform: 'translate(-.4em)',

                    '& path': {
                        strokeDashoffset: 0
                    }
                }
            },
            false: {
                '& svg': {
                    background: '$accentBgSubtle',
                    border: '1px solid $accentBorder'
                }
            }
        },
        isHovered: {
            true: {
                '& svg': {
                    border: '1px solid $accentBorderHover',
                    '& path': {
                        stroke: '$accentTextContrast'
                    }
                }
            },
            false: null
        },
        isFocused: {
            true: {

            },
            false: null
        },
        isPressed: {
            true: null,
            false: null
        },
        isDisabled: {
            true: {

            },
            false: null
        },
        isLoading: {
            true: {

            },
            false: null
        },
        direction: {
            'ltr': {

            },
            'rtl': {

            }
        },
        isValid: {
            true: {

            },
            false: null
        },
        isInvalid: {
            true: {

            },
            false: null
        },
        isNotValidated: {
            true: {

            }
        }
    },
    defaultVariants: {
        isChecked: false,
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isDisabled: false,
        isLoading: false,
        direction: 'ltr',
        isValid: false,
        isInvalid: false,
        isNotValidated: true
    }
})









































































