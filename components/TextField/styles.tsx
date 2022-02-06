import { styled } from 'stitches.config' 

export const StyledContainer = styled('div', {
    width: '100%',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    gap: '0em', 
    position: 'relative',
    background: 'transparent',
  
    height: '42px',
    transition: 'background-color 500ms',
    border: '1px solid $accentBorder',
    borderBottomWidth: '2.5px',
    borderBottomColor: '$accentSolid',
    borderRadius: '$2 $2 $4 $4',
    backgroundColor: '$white1',

    variants: {
        isHovered: {
            true: {
                
            },
            false: null
        },
        isFocused: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false
    }
})

export const StyledLabel = styled('label', {
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%) translateX(+25%)',
    left: '$3', 
    color: '$black3',
    transformOrigin: 'left top',
    userSelect: 'none',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2,1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 150ms',
    fontFamily: 'inherit',
    fontSize: '$2'
})

export const StyledPrefix = styled('span', {
    fontWeight: 300,
    fontSize: '14px',
    color: '$accentText',
    paddingLeft: '$2',

    willChange: 'transform',
    transition: 'transform 0.5s ease',

    variants: {
        isValid: {
            true: {
                color: '$accentText',
                transform: 'translateY(-200%) translateX(-30%)'
            },
            false: null
        },
        isFocused: {
            true: {
                transform: 'translateY(-200%) translateX(-30%)'
            },
            false: null
        }
    },
    defaultVariants: {
        isValid: false,
        isFocused: false
    }
})

export const StyledInput = styled('input', {
    boxSizing: 'border-box',
    appearance: 'none',

    height: '100%',
    width: '100%',
    margin: '0em',
    border: 'none',
    caretColor: '$accentText',
    color: '$accentText',
    transition: 'border 0.5s',
    fontSize: '$2',
    paddingLeft: '0.5em',
    borderRadius: 'inherit',
    backgroundColor: 'inherit',

    outline: 'none',

    '&::placeholder': {
        display: 'none',
        color: 'transparent',
    },

    variants: {
        isValid: {
            true: {
                '& + label': {
                    color: '$accentTextContrast',
                    transform: 'translateY(-250%) translateX(+15%) scale(0.95)',
                },
                [`& ${StyledPrefix}`]: {
                    transform: 'translateY(-175%) translateX(-25%) scale(0.90)'
                }
            },
            false: null
        },
        isFocused: {
            true: {
                outline: 'none',
                borderBottomWidth: '2.5px',
                borderBottomColor: '$accentBorder',
                
                '& + label': {
                    color: '$accentText',
                    transform: 'translateY(-250%) translateX(+15%) scale(0.95)'
                },
                '&::placeholder': {
                    color: '$black3',
                    transition: 'all 0.5s ease-in-out'
                }
            }
        },
        isReadOnly: {
            true: {
                userSelect: 'none'
            },
            false: null
        }
    },
    defaultVariants: {
        isValid: false,
        isReadOnly: false
    }
})

StyledInput.displayName = 'StyledInput'