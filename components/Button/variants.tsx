import { styled, CSS } from 'stitches.config'

const sharedShadowStyles: CSS = {
    $$buttonShadow: '',
    $$buttonShadowHover: '',
    $$buttonShadowFocus: '',
    $$buttonShadowActive: '',

    $$buttonInsetShadow: '',
    $$buttonInsetShadowHover: '',
    $$buttonInsetShadowFocus: '',
    $$buttonInsetShadowActive: ''
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

export {
    defaultButtonVariantStyles,
    primaryButtonVariantStyles,
    dangerButtonVariantStyles,
    successButtonVariantStyles,
    outlineButtonVariantStyles,
    invisibleButtonVariantStyles
}