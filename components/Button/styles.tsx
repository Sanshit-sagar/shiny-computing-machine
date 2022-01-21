import { styled } from 'stitches.config'

import { 
    primaryVariant,
    secondaryVariant,
    outlinedVariant,
    successVariant,
    warningVariant,
    dangerVariant,
    infoVariant
} from './variants'

const sharedStyles = {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    display: 'flex',
    ai: 'center',
    gap: 0,
    flexShrink: '0',
    outline: 'none',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: '$2',
    fontWeight: '$2',
   
    height: '32px',
    width: 'max-content',
    p: 0,
    px: '$5',
    m: 0, 
    opacity: 1,
    boxShadow: 'none',

    border: '1px solid $accentBorder',

    willChange: 'transform',
    transform: 'scale(1) translateZ(0)',
    transition: 'background 0.2s, transform 0.2s, color 0.2s, box-shadow 0.3s',
    '&:active': {
        transform: 'scale(0.975)',
    },
    '&:disabled': {
        cursor: 'not-allowed',
    },
    $$shadowColor: '$colors$accentBgActive'
}

export const StyledBase = styled('span', {
    ...sharedStyles,

    textOverflow: 'ellipsis',
    minWidth: '50px',
    maxWidth: '100px',
    minHeight: '34px',
    maxHeight: '50px',

    m: 0,
    p: '$3',

    variants: {
        prefixed: {
            true: { 
                borderLeft: 'none',
                btlr: 0, 
                bblr: 0 
            },
            false: {
                borderLeft: '1px solid $accentBorder'
            }
        },
        suffixed: {
            true: { 
                borderRight: 'none',
                btrr: 0, 
                bbrr: 0 
            },
            false: {
                borderRight: '1px solid $accentBorder'
            }
        },
        variant: {
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant,
            danger: dangerVariant,
            success: successVariant,
            warning: warningVariant,
            info: infoVariant
        },
        justify: {
            start: { jc: 'flex-start' },
            end: { jc: 'flex-end' },
            between: { jc: 'space-between' },
            evenly: { jc: 'space-evenly' },
            around: { jc: 'space-around' },
            center: { jc: 'center' },
            stretch: { jc: 'stretch' }
        },
        align: {
            start: { ai: 'flex-start' },
            end: { ai: 'flex-end' },
            between: { ai: 'space-between' },
            evenly: { ai: 'space-evenly' },
            around: { ai: 'space-around' },
            center: { ai: 'center' },
            stretch: { ai: 'stretch' }
        },
        gap: {
            1: { gap: '$1' },
            2: { gap: '$2' },
            3: { gap: '$3' },
            4: { gap: '$4' },
            5: { gap: '$5' },
            6: { gap: '$6' },
            7: { gap: '$7' },
            8: { gap: '$8' },
            9: { gap: '$9' },
        },
        wrap: {
            wrap: { flexWrap: 'wrap' },
            nowrap: { flexWrap: 'nowrap' },
        },
        shape: {
            quad: null,
            square: {
                position: 'relative',
                width: '50%',  
                '&::before': {
                    content: "",
                    float: 'left',
                    pt: '100%'
                }
            },
            circle: {
                position: 'relative',
                width: '50%',  
                br: '50%',
                ml: 'auto',
                mr: 'auto',
                size: 'fit-content',
                '&::before': {
                    content: "",
                    float: 'left',
                    pt: '100%'
                }
            },
            oval: {
                height: 'fit-content',
                px: '$4',
                br: '999px'
            },
            topround: {
                size: 'fit-content',
                bbrr: 0,
                bblr: 0
            },
            bottomround: {
                size: 'fit-content',
                btlr: 0,
                btrr: 0,
            }
        }
    },
    defaultVariants: {
        prefixed: true,
        suffixed: true,
        justify: 'center',
        align: 'center',
        gap: '2',
        wrap: 'nowrap',
        variant: "primary",
        shape: "quad",
    }
})


export const StyledIconButton = styled('button', {
    
    appearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    cursor: 'pointer',
    
    size: '26px',
    fontSize: '$1',
    overflow: 'hidden',
    textOverflow: 'clip',
    d: 'flex',
    jc: 'center',
    ai: 'center',
    flexShrink: '0',

    bc: '$accentBg',
    color: '$accentTextContrast',

    outline: 'none',
    border: '1px solid $accentBorder',
    br: '$2',

    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: 'scale(var(--button-content-scale, 1)) translateZ(0)',

    willChange: 'transform, opacity',
    $$shadowColorLayer0: '$colors$panelText',
    $$shadowColorLayer1: '$colors$accentBgActive',
    $$shadowColorLayer2: '$colors$accentLine',
    $$shadowColorLayer3: '$colors$accentSolid',
    $$shadowColorLayer4: '$colors$panelBase',
    $$borderColor: '$colors$accentBorder',
  
    '&::after': {
        zIndex: '0',
        position: 'absolute',
        content: "''",
        display: 'block',
        width: '100%',
        height: '100%',
        br: '$1', 
        borderColor: '$accentLine',
    },
  
    '&:disabled': {
        cursor: 'not-allowed',
        bc: '$disabledBg',
        color: '$disabledText',
    },


    variants: {
        on: {
            true: {
                br: '$2',
                borderTop: 'none',
                border: '1px solid $accentSolid',
                color: '$accentSolid', 

                boxShadow: `
                    0px 0.50px 0.75px 0.50px $$shadowColorLayer1,
                    0px 1.00px 2.00px 1.00px $$shadowColorLayer2,
                    0px 2.00px 4.00px 2.00px $$shadowColorLayer3,
                    0px 0.20px 0.50px 0.20px $$shadowColorLayer4
                `,
               

                willChange: 'transform',
                transition: 'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease', 
                transform: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',

                '&:hover': {
                    '&:not(:disabled)': {
                        borderColor: '$accentBorderHover',
                        color: '$accentText',
                        bc: '$accentBgHover',
                        boxShadow: '0px 1.25px 2.5px 1.25px $$shadowColorLayer3'
                    }
                },
            }
        },
        off: null
    },
    defaultVariants: {
        on: true
    }
})


export const StyledPrefix = styled('span', {
    ...sharedStyles,

    d: 'inline-flex',
    jc: 'center',
    ai: 'center',
    gap: 0,
    fw: 'nowrap',

    minWidth: '25px',
    maxWidth: '50px',
    minHeight: '34px',
    maxHeight: '50px',
    p: '$3',
    m: 0,
    br: 0,
    borderRight: '0',

    variants: {
        variant: {
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant,
            danger: dangerVariant,
            success: successVariant,
            warning: warningVariant,
            info: infoVariant
        },
        radius: {
            0: null,
            1: { btlr: '$1',bblr: '$1' },
            2: { btlr: '$2',bblr: '$2' },
            3: { btlr: '$3',bblr: '$3' },
            4: { btlr: '$4',bblr: '$4' },
            5: { btlr: '$5',bblr: '$5' },
            round: { 
                btlr: '50%',
                bblr: '50%' 
            },
            topRound: { 
                size: 'fit-content', 
                bbrr: 0, 
                bblr: 0 
            },
            bottomRound: {
                size: 'fit-content',
                btlr: 0,
                btrr: 0,
            },
            bottomLeftRound: {
                br: 0,
                bblr: '$6',
            },
            // bottomRightRound: {
                // br: 0,
                // bbrr: '$4',
            // },
            topLeftRound: {
                br: 0,
                btlr: '$6',
            },
            // topRightRound: {
                // br: 0,
                // btrr: '$2',
            // },
        },
    },
    defaultVariants: {
        variant: 'primary',
        radius: 'bottomLeftRound'
    }
})


export const StyledSuffix = styled('button', {
    ...sharedStyles,

    width: '20px',

    minHeight: '34px',
    maxHeight: '50px',
    p: '$1',
    m: 0,
    br: 0,
 
    d: 'inline-flex',
    jc: 'center',
    ai: 'center',
    gap: 0,
    fw: 'nowrap',

    variants: {
        variant: {
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant,
            danger: dangerVariant,
            success: successVariant,
            warning: warningVariant,
            info: infoVariant
        },
        radius: {
            0: null,
            1: { btrr: '$1',bbrr: '$1' },
            2: { btrr: '$2',bbrr: '$2' },
            3: { btrr: '$3',bbrr: '$3' },
            4: { btrr: '$4',bbrr: '$4' },
            5: { btrr: '$5',bbrr: '$5' },
            round: { 
                btrr: '50%',
                bbrr: '50%' 
            },
            topRound: { 
                size: 'fit-content', 
                bbrr: 0, 
                bblr: 0 
            },
            bottomRound: {
                size: 'fit-content',
                btlr: 0,
                btrr: 0,
            },
            // bottomLeftRound: {
                // br: 0,
                // bblr: '$4',
            // },
            bottomRightRound: {
                br: 0,
                bbrr: '$4',
            },
            // topLeftRound: {
                // br: 0,
                // btlr: '$4',
            // },
            topRightRound: {
                br: 0,
                btrr: '$4',
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
        radius: 'topRightRound'
    }
})


export const StyledRoot = styled('button', {
    p: '0',
    // border: '0',
    outline: '0',
    bc: 'transparent',

    display: 'flex',
    fd: 'row',
    ai: 'stretch',
    gap: 0
})
