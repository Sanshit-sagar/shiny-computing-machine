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

    width: 'inherit',
    position: 'relative',
    display: 'inline-flex',
    fd: 'row',
    jc: 'stretch',
    ai: 'center',
    gap: 0,
    p: 0,
    m: 0,

    br: '$2',
    bc: '$accentBase',
    border: '1px solid $accentBorder',

    willChange: 'background, opacity',
    transition: 'all 0.4s ease-in-out',

    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover'
    },
    '&:active': {
        bc: '$accentBgActive',
        borderColor: '$accentFocusRing'
    }
})

export const StyledInput = styled('input', {
    width: '100%',
    appearance: 'none',
    outline: 'none',
    bc: 'transparent',
    color: '$accentTextContrast',
    p: '$3 $2',
    m: 0,

    fontFamily: '$jetbrains',
    fontSize: '$2',
})

export const StyledSuffix = styled('button', {
    cursor: 'default',

    bc: 'transparent',
    color: '$accentText',
    p: '$2',
    m: 0,

    '&:hover': {
        color: '$accentTextContrast',
    },
    '&:active': {
        outline: '1px solid $accentFocusRing'
    },

    variants: {
        isVisible: {
            false: {
                color: 'transparent'
            },
            true: {
                color: '$accentTextContrast'
            }
        }
    },
    defaultVariants: {
        isVisible: false
    }
})

export const StyledPrefix = styled('span', {
    pl: '$3',
    pr: '$1',
    bc: 'transparent',
    color: '$accentTextContrast'
})