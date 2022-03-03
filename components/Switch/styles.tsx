import { styled, CSS } from 'stitches.config'


export const Checker = styled('label', {
    display: 'block',
    fontSize: '2em',
    height: '2em',
    padding: 0,
    margin: 0,
    width: '4.4em',
    boxSizing: 'content-box',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
   
    borderRadius: '999px',
    transition: 'transform 300ms cubic-bezier(.23,1,.32,1)',
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
                transform: 'scale(0.95)',
                transition: 'transform 300ms cubic-bezier(.23,1,.32,1)'
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


export const InnerContentWrapper = styled('div', {
    position: 'absolute',
    width: 'calc(2em - $2 - 4px)',
    height: 'calc(2em - $2 - 4px)',
    top: 0,
    bottom: 2,
    marginTop: 'auto',
    marginBottom: 'auto',
    lineHeight: 0,
    opacity: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',

    verticalAlign: 'middle',
    
    transition: 'opacity 300ms cubic-bezier(.23,1,.32,1)',

    variants: {
        isChecked: {
            true: {
                opacity: 1,
                left: '5%'
            },
            false: {
                opacity: 1,
                right: '5%'
            }
        }
    },
    defaultVariants: {
        isChecked: false
    }
})

export const InnerContent = styled('span', {
    position: 'relative',
    height: 'inherit',
    width: 'inherit',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    textOverflow: 'clip',
    textDecoration: 'none',

   
    fontWeight: 500,

    '& svg': {
        height: '50%',
        width: '50%',
        strokeWidth: '0.5px',
        aspectRatio: '1 / 1',

    },

    variants: {
        isChecked: {
            true: {
                '& svg': {
                    stroke: 'green',
                    color: 'green',
                    fill: 'currentColor'
                }
            },
            false: {
                '& svg': {
                    stroke: 'red',
                    color: 'red',
                    fill: 'currentColor'
                }
            }
        }
    },
    defaultVariants: {
        isChecked: false
    }
})

export const CheckBg = styled('div', {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '0.2em',
    borderRadius: 'inherit',
   
    border: '2px solid $accentBorder',
    zIndex: '$0',

    backgroundColor: '$accentBg',

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
                    // transform: 'translateY(0) scale(0.9)',
                    // opacity: 0.2
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
                backgroundColor: '$infoBase',
                color: '$infoTextContrast',
                borderColor: '$infoBorder'
            },
            false: {}
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
    height: '1.5em',
    width: '1.5em',
    margin: 0,
    padding: 0,
    borderRadius: 'inherit',
    aspectRatio: '1/1',
    transform: 'translateX(-0.8em)',
    transition: 'transform 400ms cubic-bezier(.23, 1,.32,1)',
    zIndex: 999,

    '& svg': {
        display: 'block',
        background: 'transparent',
        transform: 'translateX(0.8em)',
        borderRadius: 'inherit',
        transition: `
            background-color 400ms cubic-bezier(.23,1,.32,1), 
            transform 400ms cubic-bezier(.23,1,.32,1)
        `,
        '& path': {
            fill: 'none',
            stroke: '$accentText',
            strokeWidth: '5px',
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
                transform: 'translate(2.8em)',
                '& svg': {
                    background: '$infoSolid',
                    border: '1px solid $accentBorder',
                    transform: 'translate(-.4em)',

                    '& path': {
                        strokeDashoffset: 0,
                        stroke: '$accentText'
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









































































