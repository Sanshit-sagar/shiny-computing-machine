import { styled } from 'stitches.config'


export const StyledGallery = styled('div', {
    position: 'absolute',
    bottom: 0,
    right: '10px',
    width: '1100px',
    height: '100%',
    p: '$3',
    mx: '$3',
    my: '$2',

    bc: '$dark1',
    color: '$light1',
    br: '$6',
    
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gridGap: '$2',

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

export const StyledWrapper = styled('div', {
    userSelect: 'none',
    appearance: 'none',
    WebkitHighlight: 'transparent',

    height: '400px', 
    width: '525px',
    p: '0',
    
    boxSizing: 'border-box',
    border: '1px solid',
    br: '$6',
    my: '$3',

    bc: '$accentBg',
    color: '$accentTextContrast',
    borderColor: '$accentBorder',
    
    willChange: 'background, opacity',
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'stretch',
    gap: 0,
    zIndex: 0
})

export const StyledDisplay = styled('div', {
    width: 'calc(100% -$2)',
    height: '87.5%',

    d: 'flex',
    fd: 'column',
    ai: 'center',
    gap: 0,

    bc: '$dark1',
    color: '$accentTextContrast',

    border: '1px solid',
    borderColor: '$accentBorder',
    br: 'inherit',

    mx: '$1',
    mb: '$1',
    p: '$6',
    zIndex: 0,

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

export const StyledName = styled('h3', {
    my: '$3',
    mx: '$5',
    p: 0,

    fontFamily: '$jetbrains',
    fontSize: '$7',
    fontStyle: 'normal',
    fontWeight: 700,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$accentText',
    textTransform: 'uppercase',
    
    willChange: 'transition',
    transition: 'all 0.4s ease-in-out',

    d: 'flex',
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center',
    gap: '$3'
})

export const StyledSettings = styled('span', {
    bc: 'transparent',
    float: 'right',
    p: 0,
    mx: '$2',
    my: '$1'
})

export const StyledHeader = styled('div', {
    width: '100%',
    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    px: '$2'
})