import { styled } from 'stitches.config' 

export const StyledWrapper = styled('div', {
    display: 'inline-flex',
    fd: 'column',
    ai: 'stretch',
    position: 'relative',
    mt: '$4',

    
})

export const StyledValue = styled('span', {
    display: 'inline-flex',
   
    ai: 'center',
    gap: '$3',
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
    p: '$2 $1 $2 $3',
    border: '1px solid $accentBorder',
    outline: 'none',
    br: '$2',
      

    width: '100%',
    d: 'inline-flex',
    ai: 'center',
    jc: 'space-between',

    textAlign: 'left',

    fontFamily: '$plexsans',
    fontSize: '$2',
    color: '$accentText',

    $$shadowColor: '$colors$accentFocusRing',

    willChange: 'background, opacity',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover',
    },

    variants: {
        isOpen: {
            true: {
                bc: '$accentBgHover',
                borderColor: '$accentFocusRing',
            },
            false: null
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
    width: '100%',
    border: '1px solid $accentBorder',
    br: '$4',
    mt: '$1',
    bc: '$accentLine',
    zIndex: 100,
})

export const StyledAvatar = styled('img', {
    size: '30px',
    br: '50%',
    mr: '8px'
})

export const StyledIcon = styled('span', {
    mr: '$4',
    border: 'none',
    color: '$accentTextContrast'
})