import { styled } from 'stitches.config'

import { Flex } from '@/components/Flex'
import { Label } from '@/components/Label'

export const StyledCheckbox = styled('input', {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    flexShrink: 0,
    fontFamily: '$hack',

    height: '24px',
    width: '24px',

    outline: 'none',
    display: 'inline-block',
    position: 'relative',
    margin: 0,
    cursor: 'pointer',

    borderRadius: '$1',
    border: '1px solid $accentBorder',
    background: '$accentBackground',
    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',

    $$shadowPrimary: '$colors$accentFocusRing',
    
    '&::after': {
        content: '',
        display: 'block',
        position: 'absolute',
        opacity: 1,
        transition: 'transform 2s cubic-bezier(0.2, 0.85, 0.32, 1.2), opacity 2s',
        width: '6px',
        height: '10px',
        border: '2px solid $accentBg',
        borderTop: '0',
        borderLeft: '0',
        left: '8px',
        top: '5px',
        transform: 'rotate(10deg)',
    },

    '&:checked': {
        bc: '$accentSolid',
        color: '$accentText',
        opacity: 1,
        '&::after': {
            transition: 'transform 2s cubic-bezier(0.2, 0.85, 0.32, 1.2), opacity 2s',
            transform: 'rotate(45deg)'
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
    },

    '&:hover': {
        '&:not(:disabled)': {
            '&:not(:checked)': {
                borderColor: '$accentBorderHover',
                color: '$accentSolid'
            },
        },
        boxShadow: '0 2px 20px 3px $$shadowColor',
    },

    '&:focus-visible': {
        borderColor: '$accentFocusRing',
        boxShadow: '0 2px 20px 3px $$shadowColor'
    }
})


export const StyledCheckboxGroup = styled(Flex, {
   
    display: 'flex',
    
    variants: {
        orientation: {
            'vertical': {
                fd: 'column',
                jc: 'flex-start',
                ai: 'stretch'
            },
            'horizontal': {
                fd: 'row',
                jc: 'space-between',
                ai: 'center'
            }
        },
        gap: {
            '0': { gap: 0 }, 
            '1': { gap: '$2' },
            '2': { gap: '$4' },
            '3': { gap: '$6' },
            '4': { gap: '$8' },
            '5': { gap: '$9' }
        }
    },
    defaultVariants: {
        orientation: 'vertical',
        gap: '3'
    }
})

export const StyledLabel = styled(Label, {
    display: 'flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$6', 
    fontFamily: '$jetbrains',
    boxShadow: 'none'
})