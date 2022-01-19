import React from 'react'
import { styled, CSS, VariantProps } from '../../stitches.config'

import { Text } from '@/components/Text'
import { Flex } from '@/components/Flex'

import { DEFAULT_TAG } from './constants'


export const LeftAlignedWrapper = styled(Flex, {
    width: '100%',
    height: 100,
    fd: 'column',
    jc: 'center',
    ai: 'flex-start',
    gap: '$1'
})

export const InputGroup = styled(Flex, {
    unset: 'all',
    height: 'fit-content',
    fd:'row', 
    jc: 'flex-start', 
    ai: 'center',
    gap: 0,
    p: 0,
    m: 0,
    border: 'none',
    outline: 'none'
})

export const StyledButton = styled('button', {
    display: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    
    height: 28,
    width: 28,
    m: 0,  
    
    bc: 'transparent',
    border: '1px solid $accentBorder',
    br: '$1',  
    color: '$accentText',

    '&:hover': {
        bc: '$accentBase',
        color: '$accentTextContrast',
        borderColor: '$accentBorderHover'  
    },
    '&:focus': {
        bc: '$accentBgActive',
        color: '$accentTextContrast',
        borderColor: '$accentFocusRing'
    },
    variants: {
        placement: {
            'left': {
                btrr: 0,
                bbrr: 0
            },
            'right': {
                btlr: 0,
                bblr: 0 
            },
            'none': null
        }
    },
    defaultVariants: {
        placement: 'none'
    }
})


export const StyledInputField = styled(DEFAULT_TAG, {
    us: 'none',
    appearance: 'none',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',

    height: 28,
    width: '100%',
    maxWidth: '300px',
    minWidth: '150px',


    outline: 'none',
    border: '1px solid $accentBorder',
    borderLeft: 'none',
    borderRight: 'none',
    br: 0,
    btlr: 0,
    btrr: 0,
    bblr: 0,
    bbrr: 0,
    

    bc: '$accentBase',
    color: '$accentText',

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,
    verticalAlign: 'center',

    fontFamily: '$hack',
    fontWeight: 300,
    fontStyle: 'normal',
    lineHeight: '$2',
    fontDisplay: 'auto',
    textOverflow: 'ellipsis',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    willChange: 'transform, opacity',
    transition: 'transform 0.4s ease-in-out',
    transform: `
        background-color 0.3s ease-in-out, opacity 0.4s ease-in-out, box-shadow 0.4s cubic-bezier(0.3,0.4,0.7,0.1)
    `,
    $$insetShadowColor: '$colors$accentLine',
    $$shadowColor: '$colors$accentPanel',
    boxShadow: `inset 0px 1px 4px -2px $$insetShadowColor`,
    filter: 'drop-shadow(0px 1px 2px -2px $$shadowColor)',

    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
        content: "''",
        willChange: 'transform, opacity',
        transition: 'transform 0.4s ease-in-out',
        transform: `background-color 0.3s ease-in-out, opacity 0.4s ease-in-out`,
    },

    '&:focus': {
        bc: '$accentBg',
        color: '$accentTextContrast',
        borderColor: '$accentBorderHover'
    }, 
    '&:hover': {
        bc: '$accentBgSubtle',
        color: '$accentTextContrast',
        borderColor: '$accentBorderHover',
    },
    '&::placeholder': {
        color: '$accentLine',
        opacity: 0.4
    },

    variants: {
        'fontSize': {
            '1': { fontSize: '$1' },
            '2': { fontSize: '$2' },
            '3': { fontSize: '$3' },
            '4': { fontSize: '$4' },
            '5': { fontSize: '$5' },
        },
        'py': {
            0: { py: 0 },
            1: { py: '$1' },
            2: { py: '$2' },
            3: { py: '$4' },
            4: { py: '$5' },
            5: { py: '$7' },
            6: { py: '$9' }
        },
        'px': {
            0: { px: 0 },
            1: { px: '$1' },
            2: { px: '$2' },
            3: { px: '$4' },
            4: { px: '$5' },
            5: { px: '$7' },
            6: { px: '$9' }
        },
        isDisabled: {
            true: {
                cursor: 'not-allowed',
                bc: '$disabledBg',
                borderColor: '$disabledBorder',
                color: '$disabledSolid',
                '::placeholder': {
                    color: 'disabledText',
                },
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px gray',
                    bc: '$disabledBg',
                    borderColor: '$disabledBorder',
                    color: '$disabledSolid',
                },
                '&:hover': {
                    bc: '$disabledBg',
                    borderColor: '$disabledBorder',
                    color: '$disabledSolid',
                }
            },
            false: null
        },
        isReadOnly: {
            true: {
                cursor: 'none',
                bc: '$disabledBg',
                color: '$disabledSolid',
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px gray',
                    borderColor: '$accentFocusRing',
                    bc: '$disabledBgActive',
                },
                '&:hover': {
                    bc: '$disabledBgHover',
                    borderColor: '$disabledBorderHover',
                    color: '$disabledSolidHover'
                }
            },
            false: null
        },
        cursor: {
            'default': {
                cursor: 'default',
                '&:focus': {
                    cursor: 'text',
                },
            },
            'not-allowed': {
                cursor: 'not-allowed',
            },
            'idle': {
                cursor: 'pointer'
            },
            'none': {
                cursor: 'none',
            },
            'text': {
                cursor: 'text',
            },
        },
    },
    defaultVariants: {
        fontSize: '2',
        py: '1',
        px: '2',
        cursor: 'default',
        isDisabled: false,
        isReadOnly: false
    }
})

type InputCssProps = { css?: CSS  }
type InputVariantProps = VariantProps<typeof StyledInputField>
type InputComponentProps = React.ComponentProps<typeof StyledInputField>

type InputProps = InputComponentProps & InputVariantProps & InputCssProps 

export const NumberInputField = React.forwardRef<HTMLInputElement, InputProps>(
    ({ children, ...props }, forwardedRef) => (
        <StyledInputField {...props} ref={forwardedRef}>
            {children}
        </StyledInputField>
    )
)