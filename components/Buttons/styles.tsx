
import { ReactNode } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'
import {
    primaryVariant,
    secondaryVariant,
    outlinedVariant,
    infoVariant,
    warningVariant,
    dangerVariant,
    successVariant
} from '@/components/Button/variants'
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

    '&:hover': {
        '&:not(:disabled)': {
            '& svg': {
                fill: 'currentColor'
            }
        }
    },

    '&:focus': {
        '&:not(:disabled)': {
            outline: 'none',
            boxShadow: '0 0 0 3px $$buttonBoxShadow',
            
            '& svg': {
                fill: 'currentColor'
            }
        }
    },

    '&:active': {
        '&:not(:disabled)': {
            transform: 'translateY(2px)'
        }
    }
}

const sharedCircleStyles: CSS = {
    br: '50%', 
    aspectRatio: '1/1', 
    textAlign: 'center', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip'
}

export const StyledButtonBase = styled('span', {
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
            '0000': { br: 0, padding: '$$paddingZero',     fontSize: '$$fontSizeZero', minWidth: '6.25em',  borderWidth: '1px'  }, // sharp size 0
            '0001': { br: 0, padding: '$$paddingOne',      fontSize: '$$fontSizeOne', minWidth: '6.25em',  borderWidth: '1px'   }, // sharp size 1
            '0010': { br: 0, padding: '$$paddingTwo',      fontSize: '$$fontSizeTwo', minWidth: '6.25em',  borderWidth: '1px'  }, // sharp size 2
            '0011': { br: 0, padding: '$$paddingThree',    fontSize: '$$fontSizeThree', minWidth: '6.25em',  borderWidth: '1px' }, // sharp size 3
            '0100': { br: '$2', padding: '$$paddingZero',  fontSize: '$$fontSizeZero', minWidth: '6.25em',  borderWidth: '1px',  }, // rounded size 0
            '0101': { br: '$3', padding: '$$paddingOne',   fontSize: '$$fontSizeOne', minWidth: '6.25em', borderWidth: '1px',   }, // rounded size 1
            '0110': { br: '$4', padding: '$$paddingTwo',   fontSize: '$$fontSizeTwo', minWidth: '6.25em', borderWidth: '1px', }, // rounded size 2
            '0111': { br: '$5', padding: '$$paddingThree', fontSize: '$$fontSizeThree', minWidth: '6.25em', borderWidth: '1px', }, // rounded size 3
            '1000': { br: '$6', padding: '$$paddingZero',  fontSize: '$$fontSizeZero', minWidth: '6.25em', borderWidth: '1px', }, // oval size 0
            '1001': { br: '$8', padding: '$$paddingOne',   fontSize: '$$fontSizeOne', minWidth: '7.25em', borderWidth: '1px', }, // oval size 1
            '1010': { br: 'calc(7px + $9)', padding: '$$paddingTwo',     fontSize: '$$fontSizeTwo', minWidth: '8.25em', borderWidth: '1px'  }, // oval size 2
            '1011': { br: 'calc(25px + $9)', padding: '$$paddingThree',  fontSize: '$$fontSizeThree', minWidth: '9.25em',  borderWidth: '1px', }, // oval size 3
            '1100': { 
                ...sharedCircleStyles,
                minWidth: '3.0em',
                maxWidth: '4.5em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            },
            '1101': { 
                ...sharedCircleStyles,
                minWidth: '4.5em',
                maxWidth: '6.0em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            }, 
            '1110': { 
                ...sharedCircleStyles,
                minWidth: '6.0em',
                maxWidth: '7.5em',
                padding: '0.375rem', 
                fontSize: '0.75em',
                borderWidth: '1px',
            }, 
            '1111': { 
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
        weight: {
            '0': { fontWeight: 300, borderWidth: '1px' },
            '1': { fontWeight: 500, borderWidth: '1px' },
            '2': { fontWeight: 700, borderWidth: '1px' },
            '3': { fontWeight: 900, borderWidth: '1px' }
        },
        variant: {
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant
        },
        icon: {
            true: {
                minWidth: 'initial',
                textAlign: 'center',
                padding: '0.485 0.68',
            },
            false: null
        },
        theme: {
            success: successVariant,
            danger: dangerVariant,
            info: infoVariant,
            warning: warningVariant
        }
    },
    defaultVariants: {
        code: '0101', 
        weight: '0',
        variant: 'outlined'
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

export type ButtonVariantProps = VariantProps<typeof StyledButtonBase>
export type ButtonChildProps = { children: ReactNode; }
export type ButtonCSSProps = { css?: CSS; }

export type ButtonProps = ButtonVariantProps & ButtonChildProps & ButtonCSSProps


export const AccessibleButtonBase = ({ children, ...props }: ButtonProps) => (
    <StyledButtonBase {...props}>
        <InlineFlex> {children} </InlineFlex>
    </StyledButtonBase>
)