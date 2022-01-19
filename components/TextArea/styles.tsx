import React, { ElementRef, forwardRef, ComponentProps } from 'react'
import { styled, CSS, VariantProps } from '../../stitches.config'

export const DEFAULT_TAG = 'textarea' 

export const StyledTextArea = styled(DEFAULT_TAG, {
    appearance: 'none',
    userSelect: 'none',

    boxSizing: 'border-box',
    border: '1px solid $accentBorder',
    outline: 'none',
    br: '$2',

    width: '250px',
    height: '150px',
    ml: 0,
    p: '$3',

    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$1',
    
    bc: '$accentBg',
    color: '$accentText',

    fontFamily: '$hack',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontStyle: 'normal',
    fontWeight: 200,
    lineHeight: '$3',
    fontSpacing: '$2',
    textDecoration: 'none',

    opacity: 1,
    boxShadow: 'none',
    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',
    '&::placeholder': {
        color: '$light3',
        opacity: 0.5
    },

    // locally scoped tokens
    $$regularshadowColor: '$colors$accentLine',
    $$disabledShadowColor: '$colors$disabledLine',
    $$validShadowColor: '$colors$successLine',
    $$invalidShadowColor: '$colors$dangerLine',

    '&::-webkit-autofill': {
        background: 'transparent'
    },
    '&::before': {
        boxSizing: 'border-box'
    },
    '&::after': {
        boxSizing: 'border-box'
    },
    '&:hover': {
        '&:not(:disabled)': {
            bc: '$accentBgHover',
            color: '$accentText',
            borderColor: '$accentBorderHover',
            '&::placeholder': {
                color: '$light2'
            }
        },
        boxShadow: '0 2px 20px 3px $$shadowColor'
    },
    '&:focus': {
        bc: '$accentBgActive',
        color: '$accentTextContrast',
        boxSizing: 'border-box',
        borderColor: '$accentFocusRing',
        boxShadow: '0 2px 20px 3px $$shadowColor',
        '&::placeholder': {
            color: '$light2'
        }
    },
    '&:disabled': {
        bc: '$disabledBg',
        color: '$disabledText',
        borderColor: '$disabledBorder',
        cursor: 'not-allowed',
        opacity: 0.65,
        '& + label': {
            cursor: 'not-allowed',
        },
        '::placeholder': {
            color: '$disabledTextContrast',
        },
    },
    '&:read-only': {
        color: '$accentText',
        cursor: 'default',
        '&:focus': {
            color: '$accentText',
            borderColor: '$accentBorder',
            boxShadow: 'none',
        },
        '&::placeholder': {
            color: '$accentText'
        }
    },
   

    variants: {
        fontSize: {
            '1': {
                fontSize: '$1',
            },
            '2': {
                fontSize: '$2',
            },
            '3': {
                fontSize: '$3',
            },
            '4': {
                fontSize: '$4'
            },
        },
        fontFamily: {
            "mono": { fontFamily: "$mono" },
            "hack": { fontFamily: "$hack" },
            "bdr": { fontFamily: "$bdr" },
            "merriweather": { fontFamily: "$merriweather" },
            "raleway": { fontFamily: "$raleway" },
            "marker": { fontFamily: "$marker" },
        },
        valid: {
            true: {
                boxShadow: '0 2px 20px 3px $$validShadowColor'
            }
        },
        invalid: {
            true: {
                boxShadow: '0 2px 20px 3px $$invalidShadowColor'
            }
        },  
        resize: {
            none: {
                resize: 'none',
            },
            vertical: {
                resize: 'vertical',
            },
            horizontal: {
                resize: 'horizontal',
            },
        }
    },
    defaultVariants: {
        fontSize: '2',
        resize: 'none',
        fontFamily: "hack"
    }
})

export interface TextAreaProps extends ComponentProps<typeof DEFAULT_TAG>, VariantProps<typeof StyledTextArea> { 
    css?: CSS; 
    as?: string; 
}

export const TextArea = forwardRef<ElementRef<typeof StyledTextArea>,TextAreaProps>(({  
    as = DEFAULT_TAG, 
    ...props 
}, forwardedRef) => (
    <StyledTextArea {...props} as={as} ref={forwardedRef} css={{ ...props.css }} /> 
))

export const Container = styled('div', {
    height: 'fit-content',
    width: 'fit-content',
    p: 0,
    m: 0,
    oy: 'hidden',
    display: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'flex-end',
    color: '$accentTextContrast'
})

export const Status = styled('span', {
    display: 'inline-flex',
    fontSize: '$2',
    fontWeight: '$2',
    fontFamily: '$jetbrains',
    fontVariantNumeric: 'tabular-nums',
    fontStyle: 'italic',
    color: '$accentText',
    mb: '$2',

    variants: {
        'state': {
            'easy': {
                color: 'green'
            },
            'redline': {
                color: 'red',
                textDecoration: 'underline',
                textTransform: 'uppercase',
                textDecorationColor: 'crimson',
            },
            'loading': {
                color: 'blue'
            },
            'disabled': {
                color: 'gray'
            },
            idle: {
                color: ''
            }
        },
        size: {
            '1': {
                fontSize: '$1',
            },
            '2': {
                fontSize: '$2',
            },
            '3': {
                fontSize: '$3',
            },
        },
    },
    defaultVariants: {
        size: '1',
        state: 'idle'
    },
})