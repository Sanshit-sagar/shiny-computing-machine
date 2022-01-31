import { styled } from 'stitches.config'


export const StyledSelectDropdown = styled('div', {
    position: 'absolute',
    borderRadius: '$2',
    boxShadow: '0 5px 10px rgba(0,0,0,0.12)',
    backgroundColor: '#fff',
    maxHeight: '15rem',
    width: '100%',
    overflowY: 'auto',
    overflowAnchor: 'none',
    padding: '$1',
    top: '25px',
    right: '0',
    zIndex: 1100,
    transform: 'opacity 0.2s, transform 0.2s, bottom 0.2s ease',

    variants: {
        visible: {
            true: {
                opacity: 1,
                visibility: 'visible'
            },
            false: {
                opacity: 0,
                visibility: 'hidden'
            }
        },
    },
    defaultVariants: {
        visible: false
    }
})

export const StyledSelectOption = styled('div', {
    appearance: 'none',
    useSelect: 'none',

    display: 'flex',
    maxWidth: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: '$2',
    
    padding: 0,

    border: '0',
    transition: 'background 0.2s ease 0s, border-color 0.2s ease 0s',

    variants: {
        isHovered: {
            true: {
                backgroundColor: '#3378F7',
            }
        },
        isFocused: {
            true: {

            }
        },
        isPressed: {
            true: {

            }
        },
        isLoading: {
            true: {

            }
        },
        isDisabled: {
            true: {
                cursor: 'not-allowed',
                backgroundColor: '$disabledBg',
                color: '$disabledText',
            },
            false: {
                cursor: 'pointer'
            }
        },
        isSelected: {
            true: {
                backgroundColor: '#3378F7',
                color: '#888888'
            },
            false: {
                backgroundColor: '#fff'
            }
        }
    },
    compoundVariants: [
        {
            isHovered: true,
            isDisabled: false,
            isSelected: false,
            css: {
                backgroundColor: '#3378F7'
            }
        }
    ],
    defaultVariants: {
        isHovered: false,
        isDisabled: false,
        isPressed: false,
        isFocused: false,
        isLoading: false,
    }
})

export const StyledSelect = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    width: '200px',
    position: 'relative',
    zIndex: 100,

    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    transition: 'border 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s',
    boxShadow: '0 5px 10px rgba(0,0,0,0.12)',

    border: '2px solid #f5f5f5',
    borderRadius: '$2',

    padding: '$1 $2',


    variants: {
        isDisabled: {
            true: {
                backgroundColor: '$disabledText' 
            },
            false: {
                backgroundColor: '#fff'
            },
        },
        isHovered: {
            true: {
                backgroundColor: '#3378F7'
            },
            false: null
        }
    },
    compoundVariants: [
        {
            isDisabled: true,
            isHovered: true,
            css: {
                backgroundColor: '#3378F7',
                color: '$disabledText'
            }
        }
    ],  
    defaultVariants: {
        isDisabled: false,
        isHovered: false
    }
})

export const StyledIcon = styled('div', {
    position: 'absolute',
    right: '$2',
    top: '50%',
    bottom: 0,
    
    pointerEvents: 'none',
    transition: 'transform 0.5s ease',

    display: 'flex',
    alignItems: 'center',
    color: '$accentText',

    variants: {
        visible: {
            true: {
                transform: 'translateY(-50%) rotate(180deg)',
            },
            false: {
                transform: 'translateY(-50%) rotate(0deg)'
            }
        },
        size: {
            1: { fontSize: '$1' },
            2: { fontSize: '$2' },
            3: { fontSize: '$3' }
        }
    },
    defaultVariants: {
        visible: false,
        size: '1'
    }
})


export const StyledValue = styled('div', {
    display: 'inline-flex',
    flex: '1',
    height: '100%',
    alignItems: 'center',
    lineHeight: 1,
    padding: 0,
    marginRight: '$2',
    fontSize: '$2',
    color: '$accentText',
    width: '100%',

    [`& ${StyledSelectOption}`]: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        color: 'inherit',

        '&:hover': {
            backgroundColor: 'inherit',
            borderRadius: 'inherit',
            color: 'inherit',
            margin: 'inherit',
            padding: 'inherit'
        }
    },
    variants: {
        isPlaceholder: {
            true: {
                color: '#bcbabb'
            }
        }
    },
    defaultVariants: {
        isPlaceholder: true
    }
})