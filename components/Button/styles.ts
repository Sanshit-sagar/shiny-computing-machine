import { styled, CSS } from 'stitches.config'
import {
    defaultButtonVariantStyles,
    primaryButtonVariantStyles,
    dangerButtonVariantStyles,
    successButtonVariantStyles,
    outlineButtonVariantStyles,
    invisibleButtonVariantStyles
} from './variants'

const buttonBaseStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    textDecoration: 'none',
    textAlign: 'center',

    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    verticalAlign: 'middle',

    transition: 'all 300ms ease-in-out'
}

const buttonBorderStyles: CSS = {
    borderRadius: '$2',
    borderWidth: '1.25px',
    borderStyle: 'solid'
}

const buttonFontStyles: CSS = {
    fontWeight: 500,
    fontFamily: '$jetbrains',
    lineHeight: '20px',
    
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',

    verticalAlign: 'middle',
    fontSize: 'inherit',
    fontVariant: 'tabular',
    color: 'inherit'
}

const buttonIconStyles: CSS = {
    padding: '0em',
    margin: '0em',
    height: '100%',
    
    lineHeight: '20px',
    fontWeight: 500,
    textAlign: 'center',
    verticalAlign: 'start',
    pb: '2px'
}

const smallButtonStyles: CSS = {
    py: '3px',
    pl: '11.25px',
    pr: '11.5px',
    fontSize: '$1',
    minHeight: '32px',
    minWidth: '60px'
}

const mediumButtonStyles: CSS = {
    py: '5px',
    pl: '14.5px',
    pr: '15.5px',
    fontSize: '$2',
    minHeight: '36px',
    minWidth: '75px'
}

const largeButtonStyles: CSS = {
    py: '9px',
    pl: '18.5px',
    pr: '19.5px',
    fontSize: '$3',
    minHeight: '40px',
    minWidth: '90px'
}

const buttonPrefixStyles: CSS = {
    gridTemplateArea: 'prefix', 
    fontSize: 'inherit',
    '& svg': buttonIconStyles
}

const buttonTextStyles: CSS = {
    gridTemplateArea: 'text',
    fontSize: 'inherit',
    ...buttonFontStyles
}

const buttonSuffixStyles: CSS = {
    gridTemplateArea: 'suffix', 
    fontSize: 'inherit',
    ...buttonFontStyles,
    '& svg': buttonIconStyles
}

const DEFAULT_TAG = 'button'

const StyledButton = styled(DEFAULT_TAG, {
    ...buttonBaseStyles,
    ...buttonBorderStyles,
    ...buttonFontStyles,

    display: 'grid',
    gridTemplateAreas: '"prefix text suffix"',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '$2',
    rowGap: '0em',

    color: '$$buttonText',
    backgroundColor: '$$buttonBackground',
    borderColor: '$$buttonBorder',
    boxShadow: `$$buttonShadow, $$buttonInsetShadow`,

  

    variants: {
        style: {
            'default': defaultButtonVariantStyles,
            'primary': primaryButtonVariantStyles,
            'danger': dangerButtonVariantStyles,
            'success': successButtonVariantStyles,
            'outline': outlineButtonVariantStyles,
            'invisible': invisibleButtonVariantStyles
        },
        size: {
            'small': smallButtonStyles,
            'medium': mediumButtonStyles,
            'large': largeButtonStyles
        },
        iconOnly: {
            true: { 
                borderRadius: '$2'
            },
            false: null
        },
        isHovered: {
            true: {
                color: '$$buttonTextContrast',
                borderColor: '$$buttonBorderHover',
                backgroundColor: '$$buttonBackgroundHover',
                boxShadow: '$$buttonShadowHover'
            }
        },
        isFocused: {
            true: {
                color: '$$buttonTextContrast',
                borderColor: '$$buttonBorderFocus',
                backgroundColor: '$$buttonBackgroundFocus',
                boxShadow: '$$buttonShadowFocus'
            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        isPressed: {
            true: {
                color: '$$buttonTextContrast',
                borderColor: '$$buttonBorderActive',
                backgroundColor: '$$buttonBackgroundActive',
                boxShadow: '$$buttonShadowActive'
            }
        },
        isDisabled: {
            true: {
                color: '$disabledText',
                borderColor: '$disabledBorder',
                backgroundColor: '$disabledBg',
                cursor: 'not-allowed',
                pointerEvents: 'none',
                '& svg': {
                    opacity: 0.6
                }
            }
        },
        isLoading: {
            true: null,
            false: null
        }
    },
    compoundVariants: [
        { iconOnly: true, size: 'small', css: { py: '3px', px: '6px' } },
        { iconOnly: true, size: 'medium', css: { py: '5px', px: '8px' } },
        { iconOnly: true, size: 'large', css: { py: '7px', px: '10px' } }
    ],
    defaultVariants: {
        style: 'default',
        size: 'medium',
        iconOnly: false,
        isHovered: false,
        isFocused: false,
        isFocusVisible: false,
        isPressed: false,
        isDisabled: false,
        isLoading: false
    }
})


export {
    buttonBaseStyles,
    buttonFontStyles,
    buttonIconStyles,
    buttonBorderStyles,
    smallButtonStyles,
    mediumButtonStyles,
    largeButtonStyles,

    buttonPrefixStyles,
    buttonTextStyles,
    buttonSuffixStyles,

    StyledButton
}


// export const light: CSS = {
//     '--background-color': 'hsl(220 14% 96%)',
//     '--color': '#24292f',
//     '--border-color': 'hsl(213 14% 12% / 0.15)',
//     '--box-shadow': ' 0px 1px 0px 0px hsl(213 14% 12% / 0.04)',
//     '--icon-color': 'hsl(213 13% 16%)'
// }