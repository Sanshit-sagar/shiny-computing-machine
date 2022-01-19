import { styled } from '../../stitches.config'

export const StyledList = styled('ul', {
    maxHeight: '300px',
    overflow: 'auto',
    listStyle: 'none',
    padding: 0,
    margin: '4px 0',
    outline: 'none',

    '&::-webkit-scrollbar': {
        width: '0.25em',
        br: '999px'
    },
    '&::-webkit-scrollbar-track': {
        bc: 'transparent',
        border: 'none',
        outline: 'none',
        '&:hover': {
            bc: '$accentBg',
            opacity: 0.2
        },
        '&:active': {
        }
    },
    '&::-webkit-scrollbar-thumb': {
        bc: '$accentBorder',
        border: 'none',
        outline: 'none',
        br: '999px',
        '&:hover': {
            bc: '$accentBorderHover',
        },
        '&:active': {
            bc: '$accentFocusRing',
        }
    }
});

export const StyledListItem = styled('li', {
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    p: '$2',
    m: 0,

    us: 'none',
    cursor: 'default',
    outline: 'none',

    color: '$accentText',

    '&[data-disabled]': {
        color: '$disabledSolid',
        bc: '$disabledBg',
        '&:hover': {
            color: '$disabledSolidHover',
            bc: '$disabledBgHover',
        },
        cursor: 'not-allowed',
        pointerEvents: 'none',
    },

    variants: {
        isSelected: {
            true: {
                bc: '$accentBgHover',
                color: '$accentTextContrast',
                fontWeight: 'bold'
            },
            false: {
                fontWeight: 'normal'
            }
        },
        isFocused: {
            true: {
                bc: '$accentBgActive',
                color: '$accentTextContrast'
            }
        }
    },
    defaultVariants: {
        isSelected: false,
        isFocused: false
    }
})

export const StyledItemContent = styled('div', {
    display: 'flex',
    ai: 'center'
})

export const StyledDescription = styled('div', {
    fontSize: '$1',
    fontFamily: '$plexsans',
    fontStyle: 'normal',
    fontWeight: 'light',
    color: '$accentText'
})

export const StyledLabel = styled('label', {
    fontSize: '$3',
    fontFamily: '$plexsans',
    fontWeight: 'light', 
    fontStyle: 'normal',
    color: '$accentText'
})

export const StyledSection = styled('li', {
    p: 0,
    mt: '$1'
})


export const StyledSectionHeading = styled('span', {
    fontFamily: '$plaxsans',
    color: '$accentTextContrast',
    m: 0,
    marginBottom: '$2',
    px: '$2',
    fontSize: '$2',
})

export const StyledSectionList = styled('ul', {
    listStyle: 'none',
    p: 0,
    m: 0,
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontStyle: 'normal',
    fontSize: '$1'
})