import { styled } from 'stitches.config'


export const StyledInput = styled('input', {
    appearance: 'none',
    userSelect: 'contain',
    WebkitTapHighlightColor: 'blue',
    
    width: '100%',
    outline: 'none',
    position: 'relative',
    d: 'block',
    p: '$1 $3 $1 $2',

    fontSize: '$2',
    fontFamily: '$plexsans',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSpacing: '$2',
    lineHeight: '26px',
    textDecoration: 'none',
    opacity: 1,

    boxShadow: 'none',
    // willChange: 'transition, opacity',
    // transition: 'all 0.4s ease-in-out',

    bc: 'inherit',
    color: 'inherit',
  
    '&::placeholder': {
        color: '$accentText',
        opacity: 0.6
    },


    variants: {
        type: {
            text: { },
            password: { },
            email: { },
            search: { },
            numeric: {
                fontVariantNumeric: 'tabular-nums'
            },
            url: { },
            tel: { },
            week: { },
            time: { },
            reset: { },
            checkbox: { },
            radio: { },
            image: { },
            hidden: { },
            none: { }
        }
    },
    defaultVariants: {
        type: 'text'
    }
})


export const StyledInputWrapper = styled('div', {
    display: 'flex',
    ai: 'center',
    maxWidth: '500px',
    pl: '0.5em',
    overlow: 'hidden',

    bc: '$accentBgSubtle',
    color: '$accentText',
    br: '$1',
    border: '1px solid $accentBorder',

    $$inputFocusShadow: '$colors$accentLine',
    '--shadow-hover-primary': `0 2px 20px -2px $$inputFocusShadow`,

    willChange: 'transition, opacity',
    transition: 'all 0.4s ease-in-out',

    input: {
        boxShadow: 'none',

        '&:not(:placeholder-shown)': {
            '&:not(:disabled)': {
                '&:not(:focus)': {
                    '& + svg': {
                        '--icon-color': '$colors$accentSolid'
                    },
                    '& + button': {
                        '--icon-color': '$colors$accentSolid'
                    }
                }
            }
        },
    },

    '&:hover': {
        '&:not(:disabled)': {
            bc: '$accentBgHover',
            color: '$accentTextContrast',
            borderColor: '$accentBorderHover'
        }
    },

    '&:focus-within': {
        '--border-color': '$colors$accentFocusRing',
        '--shadow': 'var(--shadow-hover-primary)',
        '--icon-color': '$colors$accentSolid',
    },

    variants: {
        suffix: {
            password: {
                button: {
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    br: '50%',
                    outline: 'none',
                    padding: '0px',
                    mx: '$1'
                },
                '&:disabled': {
                    cursor: 'not-allowed'
                },
            },
            none: null
        }
    },
    defaultVariants: {
        suffix: 'password'
    }
})

export const StyledPrefix = styled('span', {
    fontWeight: 300,
    fontSize: '$2',
    bc: 'inherit',
    color: 'inherit',
    mr: '$1',
    
    variants: {
        validationState: {
            valid: {
                color: '$successText'
            },
            none: null
        }
    },
    defaultVariants: {
        validationState: 'none'
    }
})

export const StyledSuffix = styled('span', {
    fontSize: '$2',
    mr: '$2',
    ml: '$1',
    mb: '1px',
    p: 0,

    bc: 'inherit',
    color: 'inherit',
    opacity: 0.7,

    variants: {
        validationState: {
            valid: {
                color: '$successText'
            },
            invalid: {
                color: '$dangerText'
            },    
            success: {
                color: '$successText' 
            },
            danger: { 
                color: '$dangerText' 
            },
            warning: {
                color: '$warningText'
            },
            none: {
                color: 'transparent'
            }
        }
    },
    defaultVariants: {
        validationState: 'invalid'
    }
})