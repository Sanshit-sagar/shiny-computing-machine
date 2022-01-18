import { styled } from '../../../stitches.config'

export const StyledSplitPaneView = styled('div', {
    appearance: 'none',
    us: 'none',
    height: 'fit-content',
    width: 'fit-content',

    m: 0,
    oy: 'hidden',
    ox: 'hidden',

    bc: '$accentBase',
    d: 'flex',
    br: '$2',

    variants: {
        type: {
            'row': {
                d: 'flex',
                fd: 'row'
            },
            'column': {
                d: 'flex',
                fd: 'column'
            }
        },
        outer: {
            true: {
                border: '1px ridge $accentBorder',
                p: 0
            },
            false: {
                border: 'none',
                p: 0
            }
        }
    },
    defaultVariants: {
        type: 'row',
        outer: false
    }
})

export const StyledSplitPane = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    overflow: 'hidden',
    cursor: 'default',

    flex: 1,
    
    bc: '$accentBg',
    color: '$accentText',
    border: 'none',
    padding: '$1',
    br: '$1',

    height: '100%',
    width: '100%',
    margin: 'auto',
    flexGrow: 1,


    variants: {
        textAlign: {
            'left': { 
                textAlign: 'left' 
            },
            'right': { 
                textAlign: 'right' 
            }
        },
        position: {
            'left': {
                borderRightColor: 'purple',
                borderBottomColor: 'magenta'
            },
            'right': {
                borderLeftColor: 'green',
                borderBottomColor: 'lime'
            },
            'top': {
                borderBottomColor: 'red',
            },
            'bottom': {
                borderTopColor: 'silver'
            }
        }
    },
    defaultVariants: {
        textAlign: 'left'
    }
})
// 
// export const Blockquote = styled('blockquote', {
        // quotes: `${'""""""""'}`,
    // p: '2rem 0 1rem',
    // appearance: 'none',
    // userSelect: 'none',
// 
    // '&::before': {
        // color: '$accentText',
        // content: 'open-quote',
        // fontSize: '4.0em',
        // lineHeight: '0.1em',
        // marginRight: '0.25em',
        // verticalAlign: '-0.4em'
    // },
// 
    // '& p': {
        // display: 'inline',
    // }
// })
// 
// 
// export const Ul = styled('ul', {
    // appearance: 'none',
    // userSelect: 'none',
    // ml: '-2%',
// 
    // '& li': {
        // margin: 'none',
        // listStyleType: 'square',
    // },
    // '& a': {
        // textDecoration: 'underline',
        // color: '$accentText',
        // fontFamily: '$hack',
        // fontSize: '$4',
// 
        // '&:hover': {
            // color: '$accentTextContrast',
            // textDecorationColor: '$accentTextContrast'
        // },
    // },
// })
// 
// export const StyledQuote = styled('div', {
    // appearance: 'none',
    // userSelect: 'none',
    // maxWidth: '60%',
    // textAlign: 'right',
    // margin: 'auto',
    // fontStyle: 'italic',
// 
    // '& span': {
        // fontWeight: 'bold'
    // }
// })
// 
// 
// 
