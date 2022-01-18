import { styled } from 'stitches.config' 

export const StyledWrapper = styled('div', {
    display: 'inline-flex',
    fd: 'column',
    position: 'relative',
    mt: '$3'
})

export const StyledLabel = styled('label', {
    display: 'block',
    textAlign: 'left',
    fontFamily: '$jetbrains',
    fontSize: '$2',
    mb: '$1'
})

export const StyledInputGroup = styled('div', {
    userSelect: 'none',
    appearance: 'none',
    WebkitTapHighlightColor: 'transparent',

    overflow: 'hidden',

    position: 'relative',
    display: 'inline-flex',
    fd: 'row',
    ai: 'center',
    gap: 0,
    pr: '$1',
    m: 0,

    br: '$1',
    bc: '$accentBase',
    border: '1px solid $accentBorder',

    '&:hover': {
        borderColor: '$accentBorderHover'
    },
    '&:active': {
        borderColor: '$accentFocusRing'
    }
})

export const StyledInput = styled('input', {
    appearance: 'none',
    outline: 'none',
    bc: '$accentBg',
    color: '$accentText',
    p: '$2 $3',
    m: 0,

    fontFamily: '$jetbrains',
    fontSize: '$2',
    

    '&:hover': {
        bc: '$accentBgHover',
    },
    '&:active': {
        bc: '$accentBgActive',
    }
})

export const StyledButton = styled('button', {
    cursor: 'default',
    color: '$accentText',
    p: '$2',
    m: 0,

    '&:hover': {
        color: '$accentTextContrast',
    },
    '&:active': {
        outline: '1px solid $accentFocusRing'
    }
})

export const StyledPrefix = styled('div', {
    px: '$3',
})