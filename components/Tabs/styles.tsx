import { styled } from 'stitches.config'

export const StyledTabsListContainer = styled('div', {
    d: 'flex',
    jc: 'flex-start',
    ai:'flex-start',
    gap: 0,
    fw: 'wrap',
    whiteSpace: 'wrap',
    ox: 'hidden',
    oy: 'hidden',
    p: 0,
    m: 0,
    bc: '$accentBg',
    border: '1px solid $accentBorder',

    btrr: '$6',
    btlr: '$1',
    bbrr: '$1',
    bblr: '$6',

    variants: {
        orientation: {
            'vertical': {
                width: 'fit-content',
                height: '300px',
                maxWidth: '300px',
                fd: 'row'
            },
            'horizontal': {
                height: '200px',
                width: '300px',
                maxHeight: '300px',
                fd: 'column',
            }
        }
    },
    defaultVariants: {
        orientation: 'horizontal'
    }
})

export const StyledTabsList = styled('div', {
    display: 'flex', 
    width: '100.5%',

    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',

    bc: 'transparent',

    br: 'inherit',
    bblr: 0,
    bbrr: 0,
    btlr: 0,
    btrr: 0,

    '&::-webkit-scrollbar': {
        height: '0.125em'
    },
    '&::-webkit-scrollbar-thumb': {
        bc: 'black',
        br: '999px',
        '&:active': {
            bc: '$accentSolidHover'
        }
    },
    '&::-webkit-scrollbar-track': {
        bc: 'transparent'
    },

    '&:first-child': {
        btlr: '1px'
    },
    '&:last-child': {
        btrr: 0,
        border: '1px solid $accentSolid'
    },

    variants: {
        orientation: {
            'vertical': {
                fd: 'column',
            },
            'horizontal': {
                fd: 'row',
            }
        }
    },
    defaultVariants: {
        orientation: 'horizontal'
    }
})

export const StyledTabsPanel = styled('div', {
    p: '$4',
    color: '$accentTextContrast',
    bc: 'transparent',
    border: '1px solid transparent',

    width: 'inherit',
    maxWidth: 'inherit',

    fontSize: '$2',
    fontFamily: '$jetbrains',
    textOverflow: 'clip',


})


export const StyledTab = styled('div', {
    appearance: 'none',
    us: 'none',

  
  
    width: '100%',
    margin: 'auto',

    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip',

    d: 'flex',
    fd: 'inherit',
    jc: 'center',
    ai: 'flex-start',

    bc: '$accentBase',
    color: '$accentText',
    
    fontSize: '$2',
    fontFamily: '$jetbrains',

    border: 'none',
    outline: 'none',
    br: 0,

    px: '$2',
    py: '$4',

    '&:hover': {
        bc: '$accentBgHover',
        color: '$accentTextContrast',
        borderColor: 'transparent'
    },
    '&:active': {
        bc: '$accentBgActive',
        color: '$accentTextContrast',
        borderColor: 'transparent'
    },

    variants: {
        isSelected: {
            true: {
                bc: '$accentBgActive'
            }
        },
        isDisabled: {
            true: {
                opacity: 0.5
            }
        }
    },
    defaultVariants: {
        isSelected: false,
        isDisabled: false 
    }
})


//////////////// Flex container that pins the content to the top, for the examples.
/////// tabs grow in size (if needed) towards the floor


export const StyledShowcaseContainer = styled('div', {
    height: '400px', 
    width: 'max-content', 
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    m: 0, 
    p: 0, 
    gap: 0 
})

export const StyledTabProgress = styled('div', {
    fontFamily: '$jetbrains',
    fontSize: '18px',
    fontVariantNumeric: 'tabular-nums',
    m: '$2',
    p: '$2',

    color: '$accentSolid',
    border: '1px solid $accentBorder',
    br: '$3'
})

// export const StyledTabIcon = styled('span', {
    // color: '$accentTextContrast',
    // fontSize: '$2',
    // border: 'none',
    // outline: '0',
    // m: 0,
    // p: 0
// })
// 
// export const StyledTabValue = styled('span', {
    // m: 0,
    // p: 0,
    // width: 'inherit',
    // textOverflow: 'clip',
    // color: '$accentText',
// 
//    
// 
    // fontSize: '$2',
    // fontFamily: '$jetbrains',
    // fontVariant: 'tabular',
    // fontVariatNumeric: 'tabular-nums',
    // fontWeight: 200,
// 
    // lineHeight: '$1',
    // lineSpacing: '$1',
// 
    // variants: {
        // isSelected: {
            // true: {
                // fontStyle: 'italic',
            // },
            // false: {
                // fontStyle: 'regular'
            // }
        // }
    // },
    // defaultVariants: {
        // isSelected: false
    // }
// })