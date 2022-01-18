import { styled, keyframes } from 'stitches.config' 



export const StyledTree = styled('div', {
    lineHeight: '$2',
    margin: 0,
    padding: 0,
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

})

export const StyledFile = styled('div', {
    paddingLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    py: '$2',
    fontSize: '14px',
    color: '$accentTextContrast',
    cursor: 'pointer',

    '&:hover': {
        color: '$accentText',
    },
    '& span': {
        marginLeft: '5px',
    },
})

export const StyledFolder = styled('div', {
    paddingLeft: '$6',
    color: '$accentTextContrast',
    py: '$2',
    fontSize: '17px',
    cursor: 'pointer',

    '& .folder-label': {
        display: 'flex',
        alignItems: 'center',

        '& span': {
            marginLeft: '5px'
        }
    },

    variants: {
        open: {
            true: {
                '&:hover': {
                    color: '$accentSolid'
                }
            }
        }
    },
    defaultVariants: {
        open: false
    }
})

export const Collapsible = styled('div', {
    overflow: 'hidden',

    variants: {
        open: {
            true: {
                height: 'auto'
            },
            false: {
                height: 0
            }
        }
    },
    defaultVariants: {
        open: false
    }
})

export const StyledFileName = styled('span', {
    fontFamily: '$hack',
    fontSize: '$2',
    fontWeight: '$1',
    fontStyle: 'regular',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$lightGray'
})

export const StyledFolderName = styled('span', {
    fontFamily: '$jetbrains',
    fontSize: '$3',
    fontWeight: '$2',
    fontStyle: 'regular',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$accentTextContrast',
    '&:hover': {
        color: '$accentText',
        textDecoration: 'underline',
        textDecorationColor: '$accentSolid'
    }
})
