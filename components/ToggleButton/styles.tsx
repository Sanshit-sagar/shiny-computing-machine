import { styled, keyframes } from '../../stitches.config'

const glow = keyframes({
    '0%': {
        backgroundPosition: '0 0'
    },
    '50%': {
        backgroundPosition: '400% 0'
    },
    '100%': {
        backgroundPosition: '0 0'
    }
})

export const StyledToggleButton = styled('button', {
    position: 'relative',
    appearance: 'none',
    us: 'none',
    zIndex: '$1',

    height: 44,
    width: 44,
    p: '$2',
    m: 0,
   
    br: '$2',
    outline: 'none',
    bc: '$$baseColor',
    color: '$$textColor',
    border: '1px groove',
    borderColor: '$$borderColor',

    fontSize: '$2',
    fontWeight: 200,
    fontStyle: 'normal',
    fontFamily: '$hack',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    willChange: 'transform',
    transition: 'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease', 
    transform: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',

    // locally scoped tokens
    $$baseColor: '$colors$accentBg',
    $$textColor: '$colors$accentText',
    $$borderColor: '$colors$accentLine',
    $$glowColor: '$colors$accentSolid',
    $$shadowColorLayer0: '$colors$panelText',
    $$shadowColorLayer1: '$colors$accentBgActive',
    $$shadowColorLayer2: '$colors$accentLine',
    $$shadowColorLayer3: '$colors$accentSolid',
    $$shadowColorLayer4: '$colors$panelBase',

    '&::before': {
        content: "''",
        position: 'absolute',
        top: '-2px',
        left: '-2px', 
        zIndex: -1,
        opacity: 0,
        width: 'calc(100% + 4px)',
        height: 'calc(100% + 4px)',
        backgroundSize: '400%',
        bc: '$$glowColor',
        filter: 'blur(5px)',

        transform: 'transition',
        animation: `${glow} 4s ease-in-out infinite`,
        transition: 'opacity 0.3s ease-in-out'
    },
    '&:active': {
        color: '$$glowColor',
        '&::after': {
            bc: 'transparent'
        }
    },
    '&:hover': {
        '&::before': {
            opacity: 1
        },
        '&:not(:disabled)': {
            borderColor: '$accentBorderHover',
            color: '$accentTextContrast',
            bc: '$accentBgHover',
            boxShadow: '0px 1.25px 2.5px 1.25px $$shadowColorLayer3'
        }
    },
    '&::after': {
        zIndex: -1,
        content: '',
        position: 'absolute',
        width: '100%',
        height: '100%',
        bc: '$$baseColor',
        left: 0,
        top: 0,
        br: '$2'
    },  
    variants: {
        selected: {
            true: {
                color: '$accentTextContrast',
                border: '1px solid $accentFocusRing',
                boxShadow: `
                    0px 0.50px 0.75px 0.50px $$shadowColorLayer1,
                    0px 1.00px 2.00px 1.00px $$shadowColorLayer2,
                    0px 2.00px 4.00px 2.00px $$shadowColorLayer3,
                    0px 0.20px 0.50px 0.20px $$shadowColorLayer4
                `,
            },
            false: {
                willChange: 'transform',
                transition: 'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease', 
                transform: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }
        }
    },
    defaultVariants: {
        selected: false
    }
})

export const StyledToggleGroup = styled('div', {
    display: 'inline-flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$4',
    m: '$1',
    p: 0
});
