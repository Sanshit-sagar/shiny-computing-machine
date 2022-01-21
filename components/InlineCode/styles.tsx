import { styled } from '../../stitches.config'

export const StyledCodeArea = styled('span', {
    p: '$3 $4',
    m: 0,

    br: '$2',
    bc: '$panelBase',
    border: '2px solid $accentBorder',

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    fw: 'nowrap',
    whiteSpace: 'nowrap',

    overflow: 'hidden',

    willChange: 'background, opacity',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
        bc: '$panelBgSubtle',
        borderColor: '$accentBorderHover',
        cursor: 'pointer',
    },
    '&:active': {
        bc: '$panelBg',
        borderColor: '$accentFocusRing',
        cursor: 'pointer',
    },

    variants: {
        copied: {
            true: {
                bc: '$successBgSubtle',
            }
        }
    },
    defaultVariants: {
        copied: false
    }
})


export const StyledCodeText = styled('code', {
    fontSize: '$3',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    fontWeight: 300,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    textDecoration: 'none',
    textDecorationColor: 'inherit',
    lineHeight: '$3',
    wordBreak: 'break-word',

    bc: 'transparent',
    color: '$light2',
    textOverflow: 'ellipsis',

    willChange: 'color, opacity',
    transition: 'all 0.2s ease-in-out',

    variants: {
        copied: {
            true: {
                color: '$successSolid',
            }
        }
    },
    defaultVariants: {
        copied: false
    }
})

