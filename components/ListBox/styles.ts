import { styled } from '../../stitches.config'

export const StyledList = styled('ul', {
    maxHeight: '300px',
    overflow: 'auto',
    listStyle: 'none',
    padding: 0,
    margin: '$3 0',
    outline: 'none',

    '&::-webkit-scrollbar': {
        width: '0.15em',
        br: '999px',
        bc: '$accentBgHover',
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
        bc: '$light2',
        border: 'none',
        outline: 'none',
        br: '999px',
        '&:hover': {
            bc: '$light1',
        },
        '&:active': {
            bc: '$light1',
        }
    }
});

export const StyledListItem = styled('li', {
    appearance: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    overflow: 'hidden',

    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,

    fw: 'nowrap',
    whiteSpace: 'nowrap',

    textOverflow: 'clip',
    color: '$accentTextContrast',
    py: '$3',
    px: '$4',
    m: 0,

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
    ai: 'center',
    gap: '$3'
})

export const StyledDescription = styled('div', {
    fontSize: '$1',
    fontFamily: '$plexsans',
    fontStyle: 'light',
    fontVariant: 'tabular',
    color: '$accentText',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: " [..]"
})

export const StyledLabel = styled('label', {
    fontSize: '$1',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontStyle: 'normal',
    color: '$accentText',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip',
    textTransform: 'uppercase',
    wordBreak: 'break-word',
})

export const StyledSection = styled('li', {
    p: 0,
    mt: '$1'
})


export const StyledSectionHeading = styled('span', {
    fontFamily: '$plaxsans',
    color: '$accentTextContrast',
    m: 0,
    mb: '$2',
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