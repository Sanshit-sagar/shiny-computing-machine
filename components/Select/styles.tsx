import { styled } from 'stitches.config' 

export const StyledWrapper = styled('div', {
    display: 'inline-flex',
    fd: 'column',
    ai: 'stretch',
    position: 'relative'
})

export const StyledValue = styled('span', {
    display: 'inline-flex',
    ai: 'center'
})

export const StyledSelectorIcon = styled('span', {
    size: '18px',
    d: 'flex',
    ai: 'center',
    jc: 'center',
    gap: 0,

    p: 0,
    mr: '1px',
    mb: '1px',
    color: '$accentSolid',

})

export const StyledButton = styled('button', {
    appearance: 'none',
    p: '6px 2px 6px 8px',
    border: '1px solid $accentBorder',
    outline: 'none',
    br: '$1',
      
    height: '32px',
    width: '100%',
    d: 'inline-flex',
    ai: 'center',
    jc: 'space-between',

    textAlign: 'left',

    fontFamily: '$plexsans',
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