import { styled } from 'stitches.config'

export const StyledAccordion = styled('div', {
    appearance: 'none',

    margin: '0em',
    padding: '$1',

    border: '1.25px solid transparent',
    borderRadius: '$2',
    bc: '$tooltipForeground',

    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch', 
    gap: '$1',

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

    m: '0rem',
    py: '$2',
    px: '$1',
    backgroundColor: '$accentBgSubtle',
    color: '$accentText',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0em',

    '&::moz-focus-inner': {
        border: '0'
    },

    border: '1.25px solid transparent',
    borderRadius: '$1',

    transition: 'all 300ms ease',

    variants: {
        isFirst: {
            true: null,
            false: null
        },
        isLast: {
            true: null,
            false: null
        },
        isHovered: {
            true: {
                bc: '$accentBgHover',
                color: '$accentText',
                borderColor: '#2260ff',
            },
            false: null
        },
        isFocused: {
            true: {
                backgroundColor: '$accentBgHover',
                color: '$accentTextContrast',
                borderColor: '#2260ff'
            },
            false: null
        },
        isPressed: {
            true: {
                backgroundColor: '#2260ff',
                color: '$accentTextContrast',
                borderColor: '#2260ff'
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
                bc: '#2260ff',
                borderColor: '#2260ff',
                color: '$accentTextContrast',
                bblr: '0em',
                bbrr: '0em'
               
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
                bc: '#2260ff',
                color: '$infoTextContrast',
                borderColor: '#2260ff',
                borderBottomColor: 'transparent'
            }
        },
        {
            isFocused: true,
            isSelected: true,
            css: {
                bc: '#2260ff',
                color: '$infoTextContrast',
                borderColor: '#2260ff',
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
    m: '0em',

    px: '$2',
    py: '$1',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0em',

    color: 'inherit',
    fontSize: '$2',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    fontWeight: '$3',
    verticalAlign: 'start',
    textOverflow: 'ellipsis',
    textDecoration: 'none',

    border: '1.25px solid transparent',
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
    m: '0em',
    px: '$2',
    pt: '$1',
    pb: '$2',
    background: '$infoBgHover',

    btrr: '0em', 
    btlr: '0em',
    bblr: '$2', 
    bbrr: '$2', 

    fontSize: '$2',
    fontFamily: '$jetbrains',

    transition: 'all 300ms ease',
    transitionDelay: '300ms',

    variants: {
        isFirst: {
            true: null,
            false: null
        },
        isLast: {
            true: null,
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
                bc: '#2260ff',
                borderColor: '#2260ff',
                color: '$accentTextContrast',
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
