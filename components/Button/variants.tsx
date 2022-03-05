import { styled, CSS } from 'stitches.config'

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

const buttonLayoutStyles: CSS = {
    display: 'grid',
    gridTemplateAreas: '"prefix text suffix"',
    
    '[data-component="prefix"]': {
        gridArea: 'prefix',
        marginRight: '$2'
    },
    '[data-component="text"]': {
        gridArea: 'text',
        marginRight: '$2'
    },
    '[data-component="suffix"]': {  
        gridArea: 'suffix'
    }
}

const light: CSS = {
    '--background-color': 'hsl(220 14% 96%)',
    '--color': '#24292f',
    '--border-color': 'hsl(213 14% 12% / 0.15)',
    '--box-shadow': ' 0px 1px 0px 0px hsl(213 14% 12% / 0.04)',
    '--icon-color': 'hsl(213 13% 16%)'
}

const buttonBorderStyles: CSS = {
    borderRadius: '$2',
    borderWidth: '1.25px',
    borderStyle: 'solid'
}

const buttonFontStyles: CSS = {
    fontFamily: '$jetbrains',
    fontWeight: 500,
    lineHeight: '20px',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 'inherit',
    fontVariant: 'tabular',
    color: 'inherit',
}

const buttonShadowStyles: CSS = {
    $$buttonShadow: '',
    $$buttonShadowHover: '',
    $$buttonShadowFocus: '',
    $$buttonShadowActive: '',

    $$buttonInsetShadow: '',
    $$buttonInsetShadowHover: '',
    $$buttonInsetShadowFocus: '',
    $$buttonInsetShadowActive: ''
}

const smallButtonStyles: CSS = {
    py: '3px',
    px: '12px',
    fontSize: '11px'
}
const mediumButtonStyles: CSS = {
    py: '5px',
    px: '16px',
    fontSize: '12px'
}
const largeButtonStyles: CSS = {
    py: '9px',
    px: '20px',
    fontSize: '14px'
}

const defaultButtonVariantStyles: CSS = {
    $$buttonBackground: '$colors$accentSolid',
    $$buttonBackgroundHover: '$colors$accentSolidHover',
    $$buttonBackgroundFocus: '$colors$accentSolidHover',
    $$buttonBackgroundActive: '$colors$accentSolidActive',

    $$buttonText: '$colors$accentText',
    $$buttonTextContrast: '$colors$accentTextContrast',

    $$buttonBorder: '$colors$accentBorder',
    $$buttonBorderHover: '$colors$accentBorderHover',
    $$buttonBorderFocus: '$colors$accentBorderActive',
    $$buttonBorderActive: '$colors$accentBorderActive',
    $$buttonBorderFocusRing: '$colors$accentFocusRing'
}

const primaryButtonVariantStyles: CSS = {
    $$buttonBackground: '$colors$infoBg',
    $$buttonBackgroundHover: '$colors$infoBgHover',
    $$buttonBackgroundFocus: '$colors$infoBgActive',
    $$buttonBackgroundActive: '$colors$infoBgActive',

    $$buttonText: '$colors$infoText',
    $$buttonTextContrast: '$colors$infoTextContrast',

    $$buttonBorder: '$colors$infoBorder',
    $$buttonBorderHover: '$colors$infoBorderHover',
    $$buttonBorderFocus: '$colors$infoBorderHover',
    $$buttonBorderActive: '$colors$infoBorderActive',
    $$buttonBorderFocusRing: '$colors$infoFocusRing'
}

const dangerButtonVariantStyles: CSS = {
    $$buttonBackground: '$colors$dangerBg',
    $$buttonBackgroundHover: '$colors$dangerBgHover',
    $$buttonBackgroundFocus: '$colors$dangerBgActive',
    $$buttonBackgroundActive: '$colors$dangerBgActive',

    $$buttonText: '$colors$dangerText',
    $$buttonTextContrast: '$colors$dangerTextContrast',

    $$buttonBorder: '$colors$dangerBorder',
    $$buttonBorderHover: '$colors$dangerBorderHover',
    $$buttonBorderFocus: '$colors$dangerBorderHover',
    $$buttonBorderActive: '$colors$dangerBorderActive',
    $$buttonBorderFocusRing: '$colors$dangerFocusRing'
}
const successButtonVariantStyles: CSS = {
    $$buttonBackground: '$colors$successBg',
    $$buttonBackgroundHover: '$colors$successBgHover',
    $$buttonBackgroundFocus: '$colors$successBgActive',
    $$buttonBackgroundActive: '$colors$successBgActive',

    $$buttonText: '$colors$successText',
    $$buttonTextContrast: '$colors$successTextContrast',

    $$buttonBorder: '$colors$successBorder',
    $$buttonBorderHover: '$colors$successBorderHover',
    $$buttonBorderFocus: '$colors$successBorderHover',
    $$buttonBorderActive: '$colors$successBorderActive',
    $$buttonBorderFocusRing: '$colors$successFocusRing'
}

const invisibleButtonVariantStyles: CSS = {
    $$buttonBackground: '',
    $$buttonBackgroundHover: '',
    $$buttonBackgroundFocus: '',
    $$buttonBackgroundActive: '',

    $$buttonText: '',
    $$buttonTextContrast: '',

    $$buttonBorder: '',
    $$buttonBorderHover: '',
    $$buttonBorderFocus: '',
    $$buttonBorderActive: '',
    $$buttonBorderFocusRing: ''
}

const outlineButtonVariantStyles: CSS = {
    $$buttonBackground: '$colors$transparent',
    $$buttonBackgroundHover: '$colors$infoBase',
    $$buttonBackgroundFocus: '$colors$infoBase',
    $$buttonBackgroundActive: '$colors$infoBase',

    $$buttonText: '$colors$accentText',
    $$buttonTextContrast: '$colors$accentTextContrast',

    $$buttonBorder: '$colors$accentBorder',
    $$buttonBorderHover: '$colors$accentBorderHover',
    $$buttonBorderFocus: '$colors$accentBorderHover',
    $$buttonBorderActive: '$colors$accentBorderActive',
    $$buttonBorderFocusRing: '$colors$accentFocusRing'
}


const StyledButtonBase = styled('button', {
    ...buttonBaseStyles,
    ...buttonLayoutStyles,
    ...buttonBorderStyles,
    ...buttonFontStyles,

    color: '$$buttonText',
    backgroundColor: '$$buttonBackground',
    borderColor: '$$buttonBorder',
    boxShadow: `$$buttonShadow, $$buttonInsetShadow`,

    '& svg': {
        display: 'inline-block',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '20px',
        color: 'transparent',
        fill: 'currentColor',
        background: 'transparent'
    },

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

const prefixStyles: CSS = {
    background: 'transparent',
    display: 'inline-block'
}
const suffixStyles: CSS = {
    display: 'inline-block',
    background: 'transparent',
    marginLeft: '2px' 
}

export {
    buttonBaseStyles,
    buttonLayoutStyles,
    buttonFontStyles,
    buttonBorderStyles,
    smallButtonStyles,
    mediumButtonStyles,
    largeButtonStyles,
    
    buttonShadowStyles,

    defaultButtonVariantStyles,
    primaryButtonVariantStyles,
    dangerButtonVariantStyles,
    successButtonVariantStyles,
    outlineButtonVariantStyles,
    invisibleButtonVariantStyles,

    prefixStyles,
    suffixStyles,

    StyledButtonBase
}