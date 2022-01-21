import { styled } from 'stitches.config'


export const StyledGalleryContainer = styled('div', {
    width: '100%',
    height: '100%',
    p: '$1',
    m: 0,

    bc: '$accentBase',
    color: '$accentSolid',
    
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '$1',

    flexWrap: 'wrap',
    whiteSpace: 'wrap',
    oy: 'scroll',
    ox: 'hidden',

    '&::-webkit-scrollbar': {
        width: '0.2em',
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
    },
})

export const StyledComponentWrapper = styled('div', {
    userSelect: 'none',
    appearance: 'none',
    WebkitHighlight: 'transparent',

    size: '385px',
    m: '$1',
    p: '0',
    
    boxSizing: 'border-box',
    border: '1px solid',
    br: '$4',

    bc: '$panelBase',
    color: '$accentLine',
    borderColor: '$accentBorder',
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'stretch',
    gap: 0,

    '&:hover': {
        bc: '$panelBg'
    }
})

export const StyledComponentDisplay = styled('div', {
    width: '100%',
    height: '80%',

    d: 'flex',
    fd: 'column',
    ai: 'center',
    gap: 0,

    m: 0,
    p: '$4',

    variants: {
        align: {
            start: { jc: 'flex-start' },
            center: { jc: 'center' },
            end: { jc: 'flex-end' },
        }
    },
    defaultVariants: {
        align: 'center'
    }
})

export const StyledInfoContainer = styled('div', {
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    gap: '$2',
    whiteSpace: 'nowrap',
    flexWrap: 'nowrap',
    overflow: 'hidden',

    width: '100%',
    height: '20%',
    px: '$1',
    py: 0,
    m: 0,
    border: 'none',
    outline: 'none',
})

export const StyledComponentName = styled('h3', {
    m: 0,
    py: 0,
    px: '$2',

    fontFamily: '$jetbrains',
    fontSize: '$7',
    fontStyle: 'normal',
    fontWeight: 300,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$light1',
    
    willChange: 'transition',
    transition: 'all 0.2s ease-in-out'
})

export const StyledComponentDescription = styled('p', {
    m: 0,
    p: 0,
    pl: '$2',

    fontFamily: '$mono',
    fontSize: '$2',
    fontStyle: 'normal',
    fontWeight: '100',
    color: '$accentTextContrast',
    textOverflow: 'clip'
})