import { styled, CSS, keyframes } from 'stitches.config'

const pop = keyframes({
    '0%': {
        transform: 'scale(1.00)'
    },
    '10%': {
        transform: 'scale(1.02)'
    },
    '25%': {
        transform: 'scale(1.00)'
    },
    '50%': {
        transform: 'scale(0.92)'
    },
    '75%': {
        transform: 'scale(1.00)',
    },
    '90%': {
        transform: 'scale(1.04)',
    },
    '100%': {
        transform: 'scale(1.00)'
    }
})

export const StyledFieldset = styled('fieldset', {
    maxWidth: '400px',
    minWidth: '200px',
    margin: '20px',
    fontSize: '$3',
    border: '1px solid $accentBorder',
    br: '$2'
})

export const StyledLegend = styled('legend', {

})

export const StyledLabel = styled('label', {
    height: 'fit-content',
    width: 'fit-content',
    padding: '$1',
    margin: '$1',

    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$3',

    fontSize: '$2',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    verticalAlign: 'middle',

    color: '$accentText',

    variants: {
        strikethrough: {
            true: {
                textDecoration: 'line-through',
                textDecorationColor: '$accentText'
            }
        },
        direction: {
            'ltr': {
                flexDirection: 'row',
                textAlign: 'end',
            },
            'rtl': {
                flexDirection: 'row-reverse',
                textAlign: 'start',
            }
        }
    },
    defaultVariants: {
        strikethrough: false,
        direction: 'ltr'
    }
})

const sharedStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    margin: '0em',
    padding: '0em',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',

    borderWidth: '1px',
    borderStyle: 'solid',
    
    transition: 'all 0.3s ease'
}


const size1: CSS = { size: '22px', fontSize: '$1' }
const size2: CSS = { size: '24px', fontSize: '$2' }
const size3: CSS = { size: '26px', fontSize: '$3' }
const squaredCheckbox: CSS = { borderColor: '$accentBorder', borderRadius: '$2' }
const circledCheckbox: CSS = { borderColor: '$accentBorder', borderRadius: '50%' }
const borderlessCheckbox: CSS = { borderColor: 'transparent', borderRadius: '0em' }

type CheckboxSize = 1 | 2 | "1" | "2" | "3" | 3;
type CheckboxShape = "circle" | "none" | "square";
type CheckboxDefaultVariants = Partial<{ size: CheckboxSize; shape: CheckboxShape; }> 

const defaults: CheckboxDefaultVariants = {
    size: '1',
    shape: 'none'
}

export const StyledOn = styled('span', {
    ...sharedStyles,
    bc: '$accentBg',

    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover',
        color: '$accentSolid',
        boxShadow: '$small'
    },

    animation: `${pop} 0.5s ease-in-out`,
    animationDirection: 'alternate',
    animationIterationCount: '1',

    variants: {
        size: {
            1: size1,
            2: size2,
            3: size3
        },
        shape: {
            square: squaredCheckbox,
            circle: circledCheckbox,
            none: borderlessCheckbox
        }
    },
    defaultVariants: defaults
})

export const StyledOff = styled('span', {
    ...sharedStyles, 

    variants: {
        size: {
            1: size1,
            2: size2,
            3: size3
        },
        shape: {
            square: squaredCheckbox,
            circle: circledCheckbox,
            none: borderlessCheckbox
        }
    },
    defaultVariants: defaults
})

export const StyledIndeterminate = styled('span', {

})

