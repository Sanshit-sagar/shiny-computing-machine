import { styled, CSS } from '../../stitches.config'
const DEFAULT_TAG = 'div'


const sharedShadows: CSS = {
    $$shadowColor1: '$colors$panelSolid',
    $$shadowColor2: '$colors$accentBg',
    $$shadowColor3: '$colors$accentLine',
    $$shadowColor4: '$colors$accentSolid',
    $$shadowColor5: '$colors$light3',

    $$shadow1: `0 1px 2px -1px $$shadowColor3`,
    $$shadow2: `
        0 3px 5px -2px $$shadowColor2,
        0 7px 14px -5px $$shadowColor3`,
    $$shadow3: `
        0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
        0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
        0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
        0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
        0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
    $$shadow4: `
    
    `,
    $$shadow5: `
    
    `,
    $$shadow6: `
    
    `,
    $$shadow7: `
        0 1px 3.5px 0.5px $$shadowColor5,
        0 1px 2px -5px $$shadowColor2,
        0 4px 12px -5px $$shadowColor3
    `,
    $$shadow8: `0.5px 1px 3px $$shadowColor3`,
    $$shadow9: `1px 2px 7px $$shadowColor3`
}

export const StyledCardWrapper = styled(DEFAULT_TAG, sharedShadows, {
    position: 'relative',
    height: 'fit-content',
    width: 'fit-content',

    background: '$accentBase',
    backdropFilter: 'none',
   

    willChange: 'transform',
    overflow: 'hidden',
  
    $$shadowColor: '$colors$accentLine',

    br: '$2',
    btrr: '$6',
    bblr: '$6',
    border: '1px solid $accentBorder',

    variants: {
        interactive: {
            true: {
                transition: 'all 0.2s ease',
                transform: 'box-shadow 0.2s ease',
                boxShadow: '$$shadow8',
                '&:hover': {
                    boxShadow: '$$shadow9'
                },
            }
        }
    },
    defaultVariants: {
        interactive: false,
    }
})

export const StyledCardHeading = styled('h3', {
    color: '$accentText',
    fontFamily: '$jetbrains',
    fontWeight: 700,
    fontStyle: 'bold',
    fontSize: '$6',
    textTransform: 'lowercase',

    variants: {
        'case': {
            'capitalize': { textTransform: 'capitalize' },
            'lowercase': { textTransform: 'lowercase' },
            'uppercase': { textTransform: 'uppercase' }
        }
    },
    defaultVariants: {
        case: 'capitalize'
    }
})

export const StyledCardHeader = styled('div', {
    position: 'sticky',
    top: '0',
    d: 'flex',
    jc: 'flex-start',
    ai: 'flex-start',
    fw: 'wrap',
    
    btlr: 'inherit',
    btrr: 'inherit',
    
    px: '$3',
    py: '$3',
    bc: 'transparent',
    borderBottom: 'none',

    '&:hover': {
        bc: '$accentBgSubtle',
        color: '$accentSolid',
    },
    '&:active': {
        borderColor: '$accentFocusRing',
        bc: '$accentBgActive'
    }
})

export const StyledCardDescription = styled('p', {
    height: 'fit-content',
    p: 0,
    m: 0,
    color: '$accentTextContrast',
    fontFamily: '$plexsans',
    fontWeight: 400,
    fontStyle: 'italics',
    fontSize: '$2',
    textTransform: 'lowercase'
})
  
export const StyledCardBody = styled('div', {
    position: 'relative',
    p: '$3',
    m: 0,

    fontFamily: '$jetbrains',
    fontSize: '$2',
    fontStyle: 'normal',
    fontWeight: 200,

    border: 0,
    borderTop: '1px solid $accentBorder',
    br: 0,
 
    color: '$accentText',
    '&.content': {
        padding: '$4 $6',
    }
})
