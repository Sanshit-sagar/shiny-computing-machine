import { styled, CSS } from 'stitches.config'
import { Flex } from '@/components/Flex'

export const sharedStyles: CSS = {

    WebkitWritingMode: 'horizontal-tb !important',
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    fontFamily: 'inherit',
    display: 'inline-block',

    border: '1px solid transparent',
    textRendering: 'auto',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',

    color: '$accentText',
    backgroundColor: '$accentBg',
    borderColor: '$accentBorder',

    $$buttonTransitionDuration: '0.2s',
    $$buttonBoxShadow: '$colors$accentFocusRing',

    willChange: 'background-color, border-color, color, opacity',
    transition: 'all $$buttonTransitionDuration ease-out',

    '& svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
        fill: 'currentColor',
        transition: 'all $$buttonTransitionDuration ease-in-out'
    },
}

const sharedCircleStyles: CSS = {
    br: '50%', 
    aspectRatio: '1/1', 
    textAlign: 'center', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip'
}

export const StyledButton = styled('button', {
    ...sharedStyles,

    $$paddingZero: '0.48em 0.680em',
    $$paddingOne:  '0.68em 0.850em',
    $$paddingTwo:  '0.75em 1.020em',
    $$paddingThree:  '0.92em 1.190em',
    
    $$fontSizeZero: '0.8em',
    $$fontSizeOne: '1em',
    $$fontSizeTwo: '120%',
    $$fontSizeThree: '140%',
    
    variants: {
        code: {
            '000000': { br: 0, padding: '$$paddingZero',     fontSize: '$$fontSizeZero', minWidth: '6.25em',  borderWidth: '1px'  }, // sharp size 0
            '000001': { br: 0, padding: '$$paddingOne',      fontSize: '$$fontSizeOne', minWidth: '6.25em',  borderWidth: '1px'   }, // sharp size 1
            '000010': { br: 0, padding: '$$paddingTwo',      fontSize: '$$fontSizeTwo', minWidth: '6.25em',  borderWidth: '1px'  }, // sharp size 2
            '000011': { br: 0, padding: '$$paddingThree',    fontSize: '$$fontSizeThree', minWidth: '6.25em',  borderWidth: '1px' }, // sharp size 3
            '000100': { br: '$2', padding: '$$paddingZero',  fontSize: '$$fontSizeZero', minWidth: '6.25em',  borderWidth: '1px',  }, // rounded size 0
            '000101': { br: '$3', padding: '$$paddingOne',   fontSize: '$$fontSizeOne', minWidth: '6.25em', borderWidth: '1px',   }, // rounded size 1
            '000110': { br: '$4', padding: '$$paddingTwo',   fontSize: '$$fontSizeTwo', minWidth: '6.25em', borderWidth: '1px', }, // rounded size 2
            '000111': { br: '$5', padding: '$$paddingThree', fontSize: '$$fontSizeThree', minWidth: '6.25em', borderWidth: '1px', }, // rounded size 3
            '001000': { br: '$6', padding: '$$paddingZero',  fontSize: '$$fontSizeZero', minWidth: '6.25em', borderWidth: '1px', }, // oval size 0
            '001001': { br: '$8', padding: '$$paddingOne',   fontSize: '$$fontSizeOne', minWidth: '7.25em', borderWidth: '1px', }, // oval size 1
            '001010': { br: 'calc(7px + $9)', padding: '$$paddingTwo',     fontSize: '$$fontSizeTwo', minWidth: '8.25em', borderWidth: '1px'  }, // oval size 2
            '001011': { br: 'calc(25px + $9)', padding: '$$paddingThree',  fontSize: '$$fontSizeThree', minWidth: '9.25em',  borderWidth: '1px', }, // oval size 3
            '001100': { 
                ...sharedCircleStyles,
                minWidth: '3.0em',
                maxWidth: '4.5em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            },
            '001101': { 
                ...sharedCircleStyles,
                minWidth: '4.5em',
                maxWidth: '6.0em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            }, 
            '001110': { 
                ...sharedCircleStyles,
                minWidth: '6.0em',
                maxWidth: '7.5em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            }, 
            '001111': { 
                ...sharedCircleStyles,
                minWidth: '7.5em',
                maxWidth: '9.0em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            },
            '011100': {
                bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2',
                padding: '$$paddingZero',  
                fontSize: '$$fontSizeZero', 
                minWidth: '6.25em',
                borderWidth: '1px',
            },
            '011101': {
                bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2',
                padding: '$$paddingOne',  
                fontSize: '$$fontSizeOne', 
                minWidth: '7.25em',
                borderWidth: '1px',
            },
            '011110': {
                bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2',
                padding: '$$paddingTwo',  
                fontSize: '$$fontSizeTwo', 
                minWidth: '8.25em',
                borderWidth: '1px',
            },
            '011111': {
                bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2',
                padding: '$$paddingThree',  
                fontSize: '$$fontSizeThree', 
                minWidth: '9.25em',
                borderWidth: '1px',
            }
        },
        isHovered: {
            true: {
                color: '$accentTextContrast',
                bc: '$accentBgHover',
                borderColor: '$accentBorderHover',
                '& svg': {
                    fill: 'currentColor'
                }
            }
        },
        isFocused: {
            true: {
                color: '$accentTextContrast',
                backgroundColor: '$accentBgActive',
                borderColor: '$accentBorderHover',
                '& svg': {
                    fill: 'currentColor'
                }           
            }
        },
        isPressed: {
            true: {
                color: '$accentTextContrast',
                backgroundColor: '$accentLine',
                borderColor: '$accentFocusRing',
                transform: 'translateY(2px)',

                '& svg': {
                    fill: 'currentColor'
                }
            }
        },
        isFocusVisible: {
            true: {
                outline: '2px solid $infoSolid',
                outlineOffset: '2px'
            }
        },
        isDisabled: {
            true: {
                bc: '$disabledBg',
                color: '$disabledText',
                borderColor: '$disabledBorder',
                cursor: 'not-allowed',
                boxShadow: 'none',
                outline: 'none',

                '& svg': {
                    fill: '$disabledText'
                }
            }
        }
    },
    defaultVariants: {
        code: '0101', 
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isFocusVisible: false,
        isDisabled: false,
    }
})

export const InlineFlex = styled(Flex, {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    flexWrap: 'nowrap',
    margin: 0,
    padding: 0,
    textOverflow: 'clip'
})


