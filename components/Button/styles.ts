import { styled } from 'stitches.config'

const DEFAULT_TAG = 'button'

export const StyledButton = styled(DEFAULT_TAG, {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    display: 'inline-flex',
    alignItems: 'center',
    justifyCenter: 'center',
    alignSelf: 'middle',
    flexWrap: 'nowrap',
    gap: '10px',

    fontWeight: 300,
    fontFamily: '$jetbrains',

    backgroundColor: '$accentBase',
    color: '$accentText',
    borderRadius: '8px',
    border: '1px solid $accentBorder',

    $$shadowColor: '$colors$accentBase',
    boxShadow: '0px 3px 5px $$shadowColor',

    padding: '0.25em 0.75em',

    textAlign: 'center',
    verticalAlign: 'middle',

    transition: 'all 300ms ease-in-out',

    '& svg': {
        display: 'inline',
        fontSize: 'inherit',
        lineHeight: '20px',
        fontWeight: 500,
        textAlign: 'center',
        verticalAlign: 'middle'
    },

    '&:hover': {
        backgroundColor: '$accentTextContrast',
        color: '$accentBase',
        borderColor: '$accentBg'
    },
    '&:focus': {
        backgroundColor: '$accentBgHover',
        color: '$accentTextContrast',
        borderColor: '$accentTextContrast',

        outline: '2px solid dodgerblue',
        outlineOffset: '2px'
    },

    variants: {
        size: {
            small: {
                lineHeight: 1.1,
                fontSize: '0.75em',
                minWidth: '6ch',
                minHeight: '32px'
            },
            medium: {
                lineHeight: 1.1,
                fontSize: '14px',
                minWidth: '7.5ch',
                minHeight: '38px'
            },
            large: {
                lineHeight: 1.3,
                fontSize: '1.20em',
                minWidth: '10ch',
                minHeight: '44px'
            }
        },
        block: {
            true: {
                width: '100%'
            },
            false: null
        },
        fixedWidth: {
            true: {
                width: '175px',
                textOverflow: 'ellipsis'
            },
            false: null
        }
    },
    defaultVariants: {
        size: 'medium',
        block: false,
        fixedWidth: false
    }
})




// '@media screen': { for high contrast == active
    // border: '2px solid currentColor'
// },