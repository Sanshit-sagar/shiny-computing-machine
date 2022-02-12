import { styled, CSS } from 'stitches.config'

const cssVariables: CSS = {
    '--hue': '300deg',
    '--accent': 'var(--hue) 100% 85%',
    '--indicator-size': '1px',

    '--space-1': '0.5rem',
    '--space-2': '1.0rem',
    '--space-3': '1.5rem'
}

const scrollSnapX: CSS = {
    ...cssVariables,
    overflow: 'auto hidden',
    overscrollBehaviorX: 'contain',
    scrollSnapType: 'x mandatory',

    '@media (prefers-reduced-motion: no-preference)': {
        scrollBehavior: 'smooth',
        backgroundColor: '$white2',

        '&::-webkit-scrollbar': {
            backgroundColor: '$white3',
            height: '0.2em',
            opacity: 0.5,
            '&:hover': {
                opacity: 1,
            }
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '$black3',
        }
    },

    '@media (hover: none)': {
        scrollBarWidth: 'none',

        '&::-webkit-scrollbar': {
            height: 0,
            width: 0
        }
    }
}

const outlineStyles: CSS = {
    ...cssVariables,
    outline: '1px solid dodgerblue',
    outlineOffset: '2px'
}

export const StyledSnapTabs = styled('div', {
    ...cssVariables,
    width: '100%',
    height: '100%',
    margin: '$2',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '$4',
    border: '1px solid $black1',
    background: '$black1',
    color: '$white1',

    '& > section': {
        blockSize: '100%'
    },
    '& > header': {
        flexShrink: 0,
        minBlockSize: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
    }
})

export const StyledHeader = styled('header', {
    ...cssVariables,
    display: 'flex',
    flexDirection: 'column',
    background: '$black3',
    color: '$white3',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    padding: 0,
    ...scrollSnapX,

    '& > .snap-indicator': {
        ...cssVariables,
        inlineSize: 0,
        blockSize: 'var(--indicator-size)',
        borderRadius: '$2',
        background: 'green'
    }
})      

export const StyledSection = styled('section', {
    ...cssVariables,
    blockSize: '100%',

    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '100%',
    ...scrollSnapX
})

export const StyledNav = styled('nav', {
    display: 'flex'
})

export const StyledLink = styled('a', {
    ...cssVariables,

    scrollSnapAlign: 'start',
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    fontSize: '0.8rem',
    color: '$accentText',
    fontWeight: 300,
    lineHeight: 1,
    textDecoration: 'none',
    padding: '$1 $2',

    '& > svg': {
        inlineSize: '1.5em',
        pointerEvents: 'none'
    },
    '&:hover': {
        background: '$accentBgHover',
        color: '$accentTextContrast',
        border: '1px solid $accentBorder'
    },
    '&:active': {
        background: '$accentBgActive',
        color: '$accentTextContrast'
    },
    '&:focus': {
        outline: '1px solid $infoSolid',
        outlineOffset: '2px'
    },

    variants: {
        isSelected: {
            true: {
                backgroundColor: '$black1',
                color: '$white1',
                fontWeight: 700,
                lineHeight: 1.25,
                fontSize: '1em',
                fontFamily: '$jetbrains'
            },
            false: null
        }
    },
    defaultVariants: {
        isSelected: true
    }
})  

export const StyledArticle = styled('article', {
    ...cssVariables,
    scrollSnapAlign: 'start',
    overflowY: 'auto',
    overflowBehaviorY: 'contain', 

    padding: '$1 $2',
    color: '$accentTextContrast',

    '&::-webkit-scrollbar': {
        backgroundColor: '$white3',
        width: '0.2em',
        opacity: 0.5,
        '&:hover': {
            opacity: 1,
        }
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$black3',
    }
})