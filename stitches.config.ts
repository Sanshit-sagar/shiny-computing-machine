import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps, PropertyValue } from '@stitches/react'

import {
    red,
    redDark,
    indigo, 
    indigoDark,
    grass,
    grassDark,
    yellow,
    yellowDark,
    gray,
    grayDark
} from '@radix-ui/colors'


const sharedColors = {
    ...grass,
    ...yellow,
    ...indigo,
    ...red,
    ...gray,

    infoBase: '$indigo1',
    infoBgSubtle: '$indigo2',
    infoBg: '$indigo3',
    infoBgHover: '$indigo4',
    infoBgActive: '$indigo5',
    infoLine: '$indigo6',
    infoBorder: '$indigo7',
    infoBorderHover: '$indigo8',
    infoBorderActive: '$indigo9',
    infoSolid: '$indigo9',
    infoSolidHover: '$indigo10',
    infoSolidActive: '$indigo10',
    infoText: '$indigo11',
    infoTextContrast: '$indigo12',
    infoFocusRing: '$indigo8',

    successBase: '$grass1',
    successBgSubtle: '$grass2',
    successBg: '$grass3',
    successBgHover: '$grass4',
    successBgActive: '$grass5',
    successLine: '$grass6',
    successBorder: '$grass7',
    successBorderHover: '$grass8',
    successSolid: '$grass9',
    successSolidHover: '$grass10',
    successSolidActive: '$grass10',
    successText: '$grass11',
    successTextContrast: '$grass12',
    successFocusRing: '$grass8',

    warningBase: '$yellow1',
    warningBgSubtle: '$yellow2',
    warningBg: '$yellow3',
    warningBgHover: '$yellow4',
    warningBgActive: '$yellow5',
    warningLine: '$yellow6',
    warningBorder: '$yellow7',
    warningBorderHover: '$yellow8',
    warningSolid: '$yellow9',
    warningSolidHover: '$yellow10',
    warningSolidActive: '$yellow10',
    warningText: '$yellow11',
    warningTextContrast: '$yellow12',
    warningFocusRing: '$yellow8',

    dangerBase: '$red1',
    dangerBgSubtle: '$red2',
    dangerBg: '$red3',
    dangerBgHover: '$red4',
    dangerBgActive: '$red5',
    dangerLine: '$red6',
    dangerBorder: '$red7',
    dangerBorderHover: '$red8',
    dangerSolid: '$red9',
    dangerSolidHover: '$red10',
    dangerSolidActive: '$red10',
    dangerText: '$red11',
    dangerTextContrast: '$red12',
    dangerFocusRing: '$red8',

    disabledBase: '$gray1',
    disabledBgSubtle: '$gray2',
    disabledBg: '$gray3',
    disabledBgHover: '$gray4',
    disabledBgActive: '$gray5',
    disabledLine: '$gray6',
    disabledBorder: '$gray7',
    disabledBorderHover: '$gray8',
    disabledSolid: '$gray9',
    disabledSolidHover: '$gray10',
    disabledText: '$gray11',
    disabledTextContrast: '$gray12',
    disabledFocusRing: '$gray8'
}


const sharedDarkColors = {
    ...grassDark,
    ...indigoDark,
    ...redDark,
    ...yellowDark,
    ...grayDark,

    infoBase: '$indigo1',
    infoBgSubtle: '$indigo2',
    infoBg: '$indigo3',
    infoBgHover: '$indigo4',
    infoBgActive: '$indigo5',
    infoLine: '$indigo6',
    infoBorder: '$indigo7',
    infoBorderHover: '$indigo8',
    infoBorderActive: '$indigo9',
    infoSolid: '$indigo9',
    infoSolidHover: '$indigo10',
    infoSolidActive: '$indigo10',
    infoText: '$indigo11',
    infoTextContrast: '$indigo12',
    infoFocusRing: '$indigo8',

    successBase: '$grass1',
    successBgSubtle: '$grass2',
    successBg: '$grass3',
    successBgHover: '$grass4',
    successBgActive: '$grass5',
    successLine: '$grass6',
    successBorder: '$grass7',
    successBorderHover: '$grass8',
    successSolid: '$grass9',
    successSolidHover: '$grass10',
    successSolidActive: '$grass10',
    successText: '$grass11',
    successTextContrast: '$grass12',
    successFocusRing: '$grass8',

    warningBase: '$yellow1',
    warningBgSubtle: '$yellow2',
    warningBg: '$yellow3',
    warningBgHover: '$yellow4',
    warningBgActive: '$yellow5',
    warningLine: '$yellow6',
    warningBorder: '$yellow7',
    warningBorderHover: '$yellow8',
    warningSolid: '$yellow9',
    warningSolidHover: '$yellow10',
    warningSolidActive: '$yellow10',
    warningText: '$yellow11',
    warningTextContrast: '$yellow12',
    warningFocusRing: '$yellow8',

    dangerBase: '$red1',
    dangerBgSubtle: '$red2',
    dangerBg: '$red3',
    dangerBgHover: '$red4',
    dangerBgActive: '$red5',
    dangerLine: '$red6',
    dangerBorder: '$red7',
    dangerBorderHover: '$red8',
    dangerSolid: '$red9',
    dangerSolidHover: '$red10',
    dangerSolidActive: '$red10',
    dangerText: '$red11',
    dangerTextContrast: '$red12',
    dangerFocusRing: '$red8',

    disabledBase: '$gray1',
    disabledBgSubtle: '$gray2',
    disabledBg: '$gray3',
    disabledBgHover: 'black',
    disabledBgActive: '$gray5',
    disabledLine: '$gray6',
    disabledBorder: '$gray7',
    disabledBorderHover: '$gray8',
    disabledSolid: '$gray9',
    disabledSolidHover: '$gray10',
    disabledText: '$gray11',
    disabledTextContrast: '$gray12',
    disabledFocusRing: '$gray8'
}

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        width: 'space',
        height: 'space'
    },
    theme: {
        colors: {
            ...sharedColors,

            accentBase: 'rgba(252,252,252)',
            accentBgSubtle: 'rgba(245,245,245)',
            accentBg: 'rgb(236,238,240)',
            accentBgHover: 'rgb(241,242,244)',
            accentBgActive: 'rgb(241,242,244)',
            accentLine: 'rgba(213,216,222)',
            accentSolid: 'rgb(235,236,239)',
            accentSolidHover: 'rgb(255,255,255)',
            accentSolidActive: 'rgb(255,255,255)',
            accentBorder: 'rgb(213,216,222)',
            accentBorderHover: 'rgb(204,204,204)',
            accentBorderActive: 'rgb(204,204,204)',
            accentText: 'rgb(51,51,51)',
            accentTextContrast: 'rgb(10,10,10)',

            accentSelection: 'rgba(7,7,7,1)',
            accentSelectionText: 'rgba(248,248,248,1)',

            tooltipBackground: 'rgba(7,7,7,1.0)',
            tooltipForeground: 'rgba(248,248,248,1)',

            transparent: 'transparent'
        },    
        space: {
            0: '0px',
            1: '4px',
            2: '8px',
            3: '16px',
            4: '24px',
            5: '32px',
            6: '40px',
            7: '48px',
            8: '64px',
            9: '80px',
            10: '96px',
            11: '112px',
            12: '128px',
            13: '144px',
            14: '160px',
            15: '176px'
        },
        fonts: {
            jetbrains: 'JetBrains Mono, monospace',
            plexsans: 'IBM Plex Sans, sans-serif',
            flow: 'Flow Rounded, cursive',
            untitled: 'Untitled Sans, apple-system, sans-serif',
            serif: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
            monospace: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace'
        },
        fontSizes: {
            0:  '0px',
            1: '11px',
            2: '13px',
            3: '15px',
            4: '18px',
            5: '22px',
            6: '26px',
            7: '32px',
            8: '40px',
            9: '48px'
        },
        fontWeights: {
            1: 100,
            2: 200,
            3: 300,
            4: 400,
            5: 500,
            6: 600,
            7: 700,
            8: 800,
            9: 900
        },
        lineHeights: {
            1: 1.00,
            2: 1.25,
            3: 1.50,
            4: 2.00,
            5: 2.50
        },
        letterSpacings: {
            1: '0.025em',
            2: '0.05em',
            3: '0.10em',
            4: '0.15em',
            5: '0.20em',
            6: '0.25em',
            7: '0.35em',
            8: '0.50em'
        },
        sizes: {
            1: '16px',
            2: '20px',
            3: '24px',
            4: '28px',
            5: '32px',
            6: '40px',
            7: '48px',
            8: '64px',
            9: '128px'
        },
        borderWidths: {
            1: '1.25px',
            2: '2.50px',
            3: '3.75px',
            4: '5.00px',
            5: '6.25px',
            6: '7.50px',
            7: '8.75px',
            8: '10.00px',
            9: '12.50px'
        },
        borderStyles: {
            solid: 'solid',
            dashed: 'dashed',
            dotted: 'dotted',
            inset: 'inset',
            outset: 'outset',
            ridge: 'ridge',
            groove: 'groove',
            double: 'double',
            hidden: 'hidden',
            none: 'none'
        },
        radii: {
            0: '0em',
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            5: '20px',
            squared: '$3',
            rounded: '50%',
            ovular: '9999px',
        },
        shadows: {
            small: `
                0.5px 1px 1px hsl(220deg 100% 80% / 0.7)
            `,
            medium: `
                1px 2px 2px hsl(220deg 100% 80% / 0.333),
                2px 4px 4px hsl(220deg 100% 80% / 0.333),
                3px 6px 6px hsl(220deg 100% 80% / 0.333)
            `,
            large: `
                1px 2px 2px hsl(250deg 100% 80% / 0.2),
                2px 4px 4px hsl(250deg 100% 80% / 0.2),
                4px 8px 8px hsl(250deg 100% 80% / 0.2),
                8px 16px 16px hsl(250deg 100% 80% / 0.2),
                16px 32px 32px hsl(250deg 100% 80% / 0.2)
            `
        },
        zIndices: {
            min: '-999',
            0: '0',
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            5: '500',
            6: '600',
            7: '700',
            8: '800',
            max: '999',
        },
        transitions: {
            
        }
    },
    media: {
        bp1: '(width < 520px)',
        bp2: '(520px <= width < 660px)',
        bp3: '(660px <= width < 768px)',
        bp4: '(660px <= width < 900px)',
        bp5: '(900px <= width < 1080px)',
        bp6: '(1080px <= width < 1200px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
        nopref: 'prefers-color-scheme: no-preference)'
    },
    utils: {
        p: (value: Stitches.PropertyValue<'padding'>) => ({
            padding: value,
        }),
        pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
        }),
        pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
            paddingRight: value,
        }),
        pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
            paddingBottom: value,
        }),
        pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
        }),
        px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        m: (value: Stitches.PropertyValue<'margin'>) => ({
            margin: value,
        }),
        mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
            marginTop: value,
        }),
        mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
            marginRight: value,
        }),
        mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
            marginBottom: value,
        }),
        ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
        }),
        mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ 
            textAlign: value 
        }),
        d: (value: Stitches.PropertyValue<'display'>) => ({
            display: value
        }),
        fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ 
            flexDirection: value 
        }),
        fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ 
            flexWrap: value 
        }),
        ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ 
            alignItems: value 
        }),
        ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ 
            alignContent: value 
        }),
        jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ 
            justifyContent: value 
        }),
        as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ 
            alignSelf: value 
        }),
        fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ 
            flexGrow: value 
        }),
        fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ 
            flexShrink: value 
        }),
        fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ 
            flexBasis: value 
        }),
        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value
        }),
        br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
            borderRadius: value,
        }),
        btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
            borderTopLeftRadius: value,
        }),
        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ 
            boxShadow: value,
            MozBoxShadow: value,
            WebkitBoxShadow: value
        }),
        lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ 
            lineHeight: value 
        }),
        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ 
            overflowX: value 
        }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ 
            overflowY: value 
        }),
        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ 
            pointerEvents: value,
            WebkitPointerEvents: value
        }),
        us: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect:  value,
            MozUserSelect:  value,
            MsUserSelect:  value,
            userSelect: value,
            WebkitHighlightColor: 'transparent'
        }),
        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            MozUserSelect:  value,
            MsUserSelect:  value,
            userSelect:  value,
        }),
        size: (value: Stitches.PropertyValue<'width'>) => ({
            width: value,
            height: value,
        }),
        appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
            WebkitAppearance: value,
            MozAppearance: value,
            MsAppearance: value,
            appearance: value
        }),
        backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
        linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
            backgroundImage: `linear-gradient(${value})`,
            WebkitBackgroundImage: `linear-gradient(${value})`
        }),
        clipPath: (value: Stitches.PropertyValue<'clipPath'>) => ({
            clipPath: value,
            WebkitClipPath: value
        })
    },
});

export type CSS = Stitches.CSS<typeof config>

export const utils = config.utils

/*
    base: rgb(42,39,46), 
    bg0: rgb(30,31,44), 
    bg1: rgba(7,7,10, 1),
    bg2: rgba(7,7,10, 1),
    bg3: rgba(7,7,10, 1),
    line: rgb(23,32,200), 
    solid1: rgb(24,28,30,1.0), 
    solid2: rgb(24,28,30,0.8),
    solid3: rgb(24,28,30,0.5),
    overlay: rgb(25,25,25,0.5),
    border: rgb(14,16,18),
    border2: rgb(14,16,18),
    border3: rgb(14,16,18),
    accent1: rgb(23,32,200),
    accent2: rgba(80,110,190)
*/

export const blackTheme = createTheme({
    colors: {
        ...sharedDarkColors,

        accentBase: 'rgba(4,4,4,1.0)',
        accentBgSubtle: 'rgba(7,7,7,1.0)',
        accentBg: 'rgba(7,7,10,1)',
        accentBgHover: 'rgba(7,7,10,1)',
        accentBgActive: 'rgba(7,7,10,1)',
        accentLine: 'rgb(255,255,255,1.0)',
        accentBorder: 'rgb(24,28,30,1.0)', 
        accentBorderHover: 'rgb(24,28,30,0.8)',
        accentBorderActive: 'rgba(24,28,30,0.6)',
        accentSolid: 'rgb(14,16,18)',
        accentSolidHover: 'rgb(14,16,18)',
        accentSolidActive: 'rgb(14,16,18)',
        accentText: 'rgba(218,220,236,1)',
        accentTextContrast: 'rgba(236,237,238,1)',
        accentFocusRing: 'rgba(6, 76, 178, 1)',

        accentSelection: 'rgb(23,32,200,1.0)',
        accentSelectionHover: 'rgb(23,32,200,0.8)',

        accentSelectionText: 'rgba(7,7,7,1)',

        tooltipBackground: 'rgba(248,248,248,1)',
        tooltipForeground: 'rgba(7,7,7,1.0)',

        transparent: 'transparent'
    }
})