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
    fontSize: '$2'
})

export const StyledValue = styled('span', {
    display: 'inline-flex',
    ai: 'center'
})

export const StyledSelectorIcon = styled('span', {
    size: '18px',
    p: '$1',
    m: '0 $1',
    bc: '$accentSolid',
    br: '$1',
    color: '$white'
})

export const StyledButton = styled('button', {
    appearance: 'none',
    p: '6px 2px 6px 8px',
    border: '1px solid $accentBorder',
    mt: '$2',
    outline: 'none',
    br: '$1',
    display: 'inline-flex',
    ai: 'center',
    jc: 'space-between',
    width: '210px',
    textAlign: 'left',
    fontSize: '$2',
    color: '$accentText',

    $$shadowColor: '$colors$accentFocusRing',

    variants: {
        isOpen: {
            true: {
                bc: '$accentBgActive'
            },
            false: {
                bc: '$accentBg'
            }
        },
        isFocusVisible: {
            true: {
                boxShadow: `0 0 0 3px $$shadowColor`,
                borderColor: '$accentFocusRing'
            },
            false: {
                boxShadow: null,
                borderColor: '$accentBorder',
                '&:hover': {
                    borderColor: '$accentBorderHover'
                }
            }
        }
    },
    defaultVariants: {
        isOpen: false,
        isFocusVisible: false
    }
})

export const StyledPopoverWrapper = styled('div', {
    position: 'absolute',
    top: '100%',
    zIndex: 1,
    width: '100%',
    border: '1px solid $accentBorder',
    br: '$1',
    mt: '$2',
    bc: '$accentBase',
})

export const StyledAvatar = styled('img', {
    size: '30px',
    br: '50%',
    mr: '8px'
})