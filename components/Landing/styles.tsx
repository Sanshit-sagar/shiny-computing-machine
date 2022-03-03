import { ReactNode } from 'react' 
import { styled } from 'stitches.config'

export const StyledGallery = styled('div', {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '1100px',
    height: '95%',
    p: '$1',
    m: '$1',

    bc: '$accentBase',
    br: '$6',
    
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gridGap: '$4',
    justifyContent: 'center',

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

    height: '450px', 
    width: '525px',
    p: '0em',
    m: '0em',
    
    boxSizing: 'border-box',
    border: '1px solid',
    br: '$6',

    backgroundColor: '$accentBg',
    color: '$accentText',
    borderColor: '$accentBorder',
    
    willChange: 'background, opacity',
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'stretch',
    gap: 0,
    zIndex: 0,
    outline: 'none'
})

export const StyledDisplay = styled('div', {
    width: 'calc(100% - $2)',
    height: '90%',

    d: 'flex',
    fd: 'column',
    ai: 'center',
    gap: 0,

    border: '1px solid',
    borderColor: 'transparent',
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


///////////////


export const StyledFigure = styled('div', {
    zIndex: 200,
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '500px',
    height: '350px',
    borderRadius: '8px 8px 0px 0px',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    transition: 'all 0.45s ease',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '$2',

    '&::before': {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        background: '$accentBase',
        transition: 'all 0.45s ease'
    }
})

export const StyledContent = styled('div', {
    zIndex: 200,
    position: 'relative',
    padding: '20px 20px 30px',

    display: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    gap: 0
})

export const StyledTitle = styled('span', {
    display: 'block',
    marginBottom: '4px',
    fontSize: '1.25em',
    fontWeight: 500,
    transition: 'all 0.45s ease'
})

export const StyledDescription = styled('span', {
    display: 'block',
    fontSize: '0.875em',
    color: '#999999',
    transition: 'all 0.45s ease',
    transitionDelay: '0.04s'
})

export const StyledBottomBar = styled('span', {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '10px',
    borderRadius: '0px 0px 8px 8px',
    transition: 'all 0.45s ease'
})

export const StyledCard = styled('button', {
    position: 'relative',
    flexShrink: '0',
    width: '515px',
    textAlign: 'left',

    bc: 'red',
   
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: `
        0px 2px 20px rgba(0, 0, 0, 0.12), 
        0 20px 20px -10px rgba(0, 0, 0, 0.125)
    `,
    transition: 'all 0.45s ease',
    
    '&:hover': {
        transform: 'scale(1.04)',

        [`& ${StyledTitle}`]: {
            transform: 'scale(0.92) translateY(-10px)'
        },
        [`& ${StyledDescription}`]: {
            transform: 'scale(0.92) translateY(-12px)'
        },
        [`& ${StyledBottomBar}`]: {
            transform: 'scale(0.92)',
            borderRadius: '6px'
        },
        [`& ${StyledFigure}`]: {
            transform: `scale(0.92) translateY(4px)`,
            borderRadius: '6px',

            '&::before': {
                background: 'rgba(0, 0, 0, 0.1)' 
            }
        }
    }
})

export type CardProps = {
    title?: string;
    description?: string;
    content: ReactNode;
}

export const NuCard = ({ 
    title = 'unknown', 
    description = '', 
    content 
}: CardProps) => (

    <StyledCard>
        <StyledFigure> {content} </StyledFigure>
        <StyledContent>
            <StyledTitle> {title} </StyledTitle>
            <StyledBottomBar css={{ bc: 'white' }} /> 
        </StyledContent>
    </StyledCard>

)