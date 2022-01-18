import { styled } from 'stitches.config'

export const StyledGroup = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4',
    width: 250,
    touchAction: 'none'
})

export const StyledInfoContainer = styled('div', {
    display: 'flex', 
    alignSelf: 'stretch'
})

export const StyledLabel = styled('label', {
    fontFamily: '$mono',
    fontStyle: 'normal',
    fontVariant: 'tabular',
    fontSize: '$1',

})

export const StyledOutput = styled('output', {
    flex: '1 0 auto', 
    textAlign: 'end',
    fontFamily: '$hack',
    color: '$accentTextContrast',
    fontSize: '$2',
    fontVariantNumeric: 'tabular-nums'
})

export const StyledTrackContainer = styled('div', {
    position: 'relative',
    height: 30,
    width: ' 100%'
})

export const StyledTrack = styled('div', {
    position: 'absolute',
    height: 2.5,
    top: 13,
    width: '100%',
    br: '999px',

    backgroundImage: '$$trackBackground',

    '&:hover': {
        bc: '$accentBorderHover'
    },
    '&:active': {
        bc: '$accentFocusRing'
    },

    variants: {
        dragging: {
            true: {
                bc: '$accentFocusRing'
            }
        },
        disabled: {
            true: { bc: '$disabledSolid' }
        }
    },
    defaultVariants: {
        dragging: false
    }
})

export const StyledThumbContainer = styled('div', {
    position: 'absolute',
    top: 3,
    transform: 'translateX(-50%)'
})

export const StyledThumb = styled('div', {
    width: 14,
    height: 14,
    p: 0,
    m: 0,
    mt: 4,
    br: '20%',
    borderColor: 'transparent',
    bc: '$accentSolid',

    willChange: 'transition, opacity',
    transform: 'all 0.4s ease',

    '&:disabled': {
        bc: '$disabledSolid',
    },

    variants: {
        focusVisible: {
            true: { bc: '$accentText' }
        },
        dragging: {
            true: { bc: '$accentTextContrast' }
        },
        hidden: {
            true: {
                bc: 'transparent',
                
            }
        }
    },
    compoundVariants: [
        {
            focusVisible: true,
            hidden: true,
            css: { bc: 'transparent' },
        }, 
        {
            dragging: true,
            hidden: true,
            css: { bc: 'transparent' }
        }
    ],
    defaultVariants: {
        focusVisible: false,
        dragging: false,
        hidden: false
    }
})