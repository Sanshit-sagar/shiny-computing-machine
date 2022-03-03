import { styled } from 'stitches.config'

export const StyledAccordion = styled('div', {
    appearance: 'none',

    margin: '0em',
    padding: '0em',

    border: '2px solid transparent',
    borderRadius: '$5',

    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch', 
    gap: '$2',

    variants: {
        isFocused: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px',
                '& h3': {
                    // backgroundColor: 'hsl(0, 0%, 97%)',
                }
            },
            false: null
        },
    },
    defaultVariants: {
        isFocused: false
    }
})

export const StyledAccordionItem = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap',
    margin: '0em',
    padding: '0em',


    variants: {
        isFirst: {
            true: null,
            false: null
        },
        isLast: {
            true: null,
            false: null
        },
        isMiddle: {
            true: null,
            false: null
        }
    },
    defaultVariants: {
        isFirst: false,
        isLast: false,
        isMiddle: true
    }
})

export const StyledButton = styled('button', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap',

    position: 'relative',
    width: '100%',
    outline: 'none',

    margin: '0rem',
    padding: '0.5em 0.25em',
    backgroundColor: '$accentBase',
    color: '$accentText',


    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0em',

    '&::moz-focus-inner': {
        border: '0'
    },

    border: '1px solid $accentBorder',
    btlr: '$2',
    btrr: '$2',
    bblr: '$2',
    bbrr: '$2',

    variants: {
        isFirst: {
            true: {
                btlr: '$5',    
                btrr: '$5'
            },
            false: null
        },
        isLast: {
            true: {
                bblr: '$5',
                bbrr: '$5'
            },
            false: null
        },
        isHovered: {
            true: {
                backgroundColor: '$accentTextContrast',
                color: '$accentBase',
                borderColor: '$accentBorderHover'
            },
            false: null
        },
        isFocused: {
            true: {
                backgroundColor: '$accentBgActive',
                color: '$accentTextContrast',
                borderColor: '$accentBorderActive'
            },
            false: null
        },
        isPressed: {
            true: {

            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        isSelected: {
            true: {
                bblr: '0em',
                bbrr: '0em',
                borderBottomColor: 'transparent'
            },
            false: null
        },
        isDisabled: {
            true: {
                backgroundColor: '$disabledBg',
                borderColor: '$disabledBorder',
                color: '$disabledText',
                cursor: 'not-allowed'
            },
            false: null
        }
    },
    compoundVariants: [
        {
            isHovered: true,
            isSelected: true,
            css: {
                borderBottomColor: 'transparent'
            }
        },
        {
            isHovered: true,
            isSelected: true,
            css: {
                borderBottomColor: 'transparent'
            }
        }
    ],
    defaultVariants: {
        isFirst: false,
        isLast: false,
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isFocusVisible: false,
        isDisabled: false,
        isSelected: false
    }
})

export const StyledTitle = styled('span', {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    pointerEvents: 'none',

    width: '100%',
    height: '100%',
    margin: '0em',
    padding: '$2',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0em',

    color: 'inherit',
    fontSize: '$3',
    fontFamily: '$plexsans',
    fontStyle: 'normal',
    fontWeight: 300,
    verticalAlign: 'start',
    textOverflow: 'ellipsis',
    textDecoration: 'none',

    border: '1px solid transparent',
    borderRadius: 'inherit',
    outline: 'none',
    
    variants: {
        isHovered: {
            true: {
                color: 'inherit'
            },
            false: null
        },
        isFocused: {
            true: {
               color: 'inherit'
            },
            false: null
        },
        isPressed: {
            true: null,
            false: null
        },
        isFocusVisible: {
            true: null,
            false: null
        },
        isSelected: {
            true: {
                
            },
            false: null
        },
        isDisabled: {
            true: {
                
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isFocusVisible: false,
        isSelected: false,
        isDisabled: false
    }
})

export const StyledHeading = styled('h3', {
    all: 'unset',

    margin: '0em',
    padding: '0em'
})

export const StyledPanel = styled('section', {
    margin: '0em',
    padding: '1em 1.5em',
    background: '$accentBg',

    btrr: '0em', 
    btlr: '0em',
    bblr: '$3', 
    bbrr: '$3', 


    variants: {
        isFirst: {
            true: {
                bblr: '$3',
                bbrr: '$3'
            },
            false: null
        },
        isLast: {
            true: {
                bblr: '$5',
                bbrr: '$5'
            },
            false: null
        },
        isSelected: {
            true: {
                visibility: 'visible',
                display: 'block',
                opacity: 1,
                pointerEvents: 'all',
                height: 'fit-content',
                overflow: 'hidden',
                border: '1px solid $accentBorder',
                borderTopColor: 'transparent'
            },
            false: {
                visibility: 'hidden',
                opacity: 0,
                height: '1px',
                padding: '0em',
                border: 'none',
                outline: 'none',
                display: 'none',
                pointerEvents: 'none',
                overflow: 'hidden'
            }
        },
        isFocusWithin: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        }
    },
    defaultVariants: {
        isFirst: false,
        isLast: false,
        isSelected: false,
        isFocusWithin: false
    }
})

export const StyledIcon = styled('span', {
    appearance: 'none',
    userSelect: 'none',
    pointerEvents: 'none',
    

    border: 'none',
    outline: 'none',

    variants: {
        isSelected: {
            true: {
                transform: 'rotate(+180deg)',
                opacity: 0.8
            },
            false: null
        }
    },
    defaultVariants: {
        isSelected: false
    }
})
