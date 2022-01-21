import { styled } from 'stitches.config'
import {
    primaryVariant, 
    dangerVariant,
    disabledVariant,
    successVariant
} from 'styles/themes/variants'


export const StyledInputGroup = styled('div', {
    appearance: 'none',
    userSelect: 'none',

    height: 'fit-content',
    width: 'fit-content',

    d: 'flex',
    fd: 'row',
    jc: 'space-evenly',
    ai: 'center',
    gap: '$3',
    p: 0,
    m: 0,

    border: 'none',
    outline: 'none',
})

export const StyledInputItem = styled('input', {
    appearance: 'textfield',
    boxSizing: 'border-box',
    border: '1px solid $accentBorder',
    br: '6px',

    ...primaryVariant,

    $$shadowColor: '$colors$accentLine',
    boxShadow: '0px 0px 10px 0px $$shadowColor',

    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    m: '$2',
    pl: '$4',
    pr: 0,

    width: '46px',
    height: '54px',
    fontSize: '36px',

    variants: {
        invalid: {
            true: dangerVariant
        },
        valid: {
            true: successVariant
        },
        disabled: {
            true: disabledVariant
        }
    },
    defaultVariants: {
        invalid: false,
        valid: false,
        disabled: false
    }
})