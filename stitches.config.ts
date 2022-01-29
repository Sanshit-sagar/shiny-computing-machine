import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps, PropertyValue } from '@stitches/react'

import {
    tomato,
    tomatoDark,
    red,
    redDark,
    crimson,
    crimsonDark,
    pink,
    pinkDark,
    plum,
    plumDark,
    purple,
    purpleDark,
    violet,
    violetDark,
    indigo, 
    indigoDark,
    blue,
    blueDark,
    sky,
    skyDark,
    cyan,
    cyanDark,
    teal,
    tealDark,
    mint,
    mintDark,
    lime,
    limeDark,
    green,
    greenDark,
    grass,
    grassDark,
    yellow,
    yellowDark,
    amber,
    amberDark,
    orange,
    orangeDark,
    brown,
    brownDark,
    gray,
    grayA,
    grayDark,
    grayDarkA,
    slate,
    slateDark,
    sage,
    sageDark,
    sand,
    sandDark,
    olive,
    oliveDark,
    mauve,
    mauveDark,
    gold,
    goldDark,
    bronze,
    bronzeDark,
    whiteA,
    blackA
} from '@radix-ui/colors'


const sharedColors = {
    ...grass,
    ...green,
    ...yellow,
    ...amber,
    ...red,
    ...indigo,
    ...crimson,
    ...grayA,
    ...mauve,
    ...slate,
    ...whiteA,
    ...blackA,

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

    successBase: '$green1',
    successBgSubtle: '$green2',
    successBg: '$green3',
    successBgHover: '$green4',
    successBgActive: '$green5',
    successLine: '$green6',
    successBorder: '$green7',
    successBorderHover: '$green8',
    successSolid: '$green9',
    successSolidHover: '$green10',
    successSolidActive: '$grass10',
    successText: '$green11',
    successTextContrast: '$green12',
    successFocusRing: '$green8',

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
    warningSolidActive: '$amber10',
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
    dangerSolidActive: '$crimson10',
    dangerText: '$red11',
    dangerTextContrast: '$red12',
    dangerFocusRing: '$red8',

    disabledBase: '$mauve1',
    disabledBgSubtle: '$mauve2',
    disabledBg: '$mauve3',
    disabledBgHover: 'black',
    disabledBgActive: '$mauve5',
    disabledLine: '$mauve6',
    disabledBorder: '$mauve7',
    disabledBorderHover: '$mauve8',
    disabledSolid: '$mauve9',
    disabledSolidHover: '$mauve10',
    disabledText: '$mauve11',
    disabledTextContrast: '$mauve12',
    disabledFocusRing: '$mauve8',
    disabledSuccess: '$olive12', 
    disabledWarning: '$sand12',
    disabledAccent: '$mauve12',
    disabledDanger: '$crimsonDark12',

  
    light1: 'rgba(0,0,0,1.0)', 
    light2: 'rgba(0,0,0,0.75)',
    light3: 'rgba(0,0,0,0.5)',
    light4: 'rgba(0,0,0,0.25)',
    light5: 'rgba(0,0,0,0,0.0)',
    dark1: 'rgba(255,255,255,1.0)',
    dark2: 'rgba(255,255,255,0.75)',
    dark3: 'rgba(255,255,255,0.5)',
    dark4: 'rgba(255,255,255,0.25)',
    dark5: 'rgba(255,255,255,0)',
   
    black: 'rgba(0, 0, 0, 1)',
    white: 'rgba(255,255,255,1)',

    white1: 'rgba(245,245,245,1)',
    white2: 'rgba(237,237,237,1)',
    white3: 'rgba(229,229,229,1)',
    black1: 'rgba(12, 14, 17, 1)',
    black2: 'rgba(15, 17, 21, 1)',
    black3: 'rgba(18, 20, 24, 1)',

    darkgray: 'rgba(21,23,24,1)',
    lightgray: 'rgba(35,39,47,1)',
    gray: 'rgba(128, 128, 128, 1)',
    blue: 'rgba(3, 136, 252, 1)',
    red: 'rgba(249, 16, 74, 1)',
    yellow: 'rgba(255, 221, 0, 1)',
    pink: 'rgba(232, 141, 163, 1)',
    turq: 'rgba(0, 245, 196, 1)',
    orange: 'rgba(255, 135, 31, 1)',

    background: '#000',
    accent1: '#111',
    accent2: '#333',
    accent3: '#444',
    accent4: '#666',
    accent5: '#888',
    accent6: '#999',
    accent7: '#eaeaea',
    accent8: '#fafafa',
    foreground: '#fff',
    errorLighter: '#f7d4d6',
    errorLight: '#f33',
    errorDefault: 'red',
    errorDark: '#e60000',
    successLighter: '#d3e5ff',
    successLight: '#7091ff',
    successDefault: '#0070f3',
    successDark: '#0761d1',
    warningLighter: '#feefcf',
    warningLight: '#f7b955',
    warningLigDefault: '#f5a623',
    warningDark: '#ab570a',
    highlightPurple: '#f81ce5',
    highlightMagenta: '#eb367f',
    highlightPink: '#ff0080',
    highlightYellow: '#fff500'
};


const sharedDarkColors = {
    ...grassDark,
    ...greenDark,
    ...yellowDark,
    ...amberDark,
    ...redDark,
    ...indigoDark,
    ...crimsonDark,
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...whiteA,
    ...blackA,

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

    successBase: '$green1',
    successBgSubtle: '$green2',
    successBg: '$green3',
    successBgHover: '$green4',
    successBgActive: '$green5',
    successLine: '$green6',
    successBorder: '$green7',
    successBorderHover: '$green8',
    successSolid: '$green9',
    successSolidHover: '$green10',
    successSolidActive: '$grass10',
    successText: '$green11',
    successTextContrast: '$green12',
    successFocusRing: '$green8',

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
    warningSolidActive: '$amber10',
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
    dangerSolidActive: '$crimson10',
    dangerText: '$red11',
    dangerTextContrast: '$red12',
    dangerFocusRing: '$red8',

    disabledBase: '$mauve1',
    disabledBgSubtle: '$mauve2',
    disabledBg: '$mauve3',
    disabledBgHover: 'black',
    disabledBgActive: '$mauve5',
    disabledLine: '$mauve6',
    disabledBorder: '$mauve7',
    disabledBorderHover: '$mauve8',
    disabledSolid: '$mauve9',
    disabledSolidHover: '$mauve10',
    disabledText: '$mauve11',
    disabledTextContrast: '$mauve12',
    disabledFocusRing: '$mauve8',
    disabledSuccess: '$olive12', 
    disabledWarning: '$sand12',
    disabledAccent: '$mauve12',
    disabledDanger: '$crimson12',

    dark1: 'rgba(8,9,12,1.0)', 
    dark2: 'rgba(8,9,12,0.8)',
    dark3: 'rgba(8,9,12,0.6)',
    dark4: 'rgba(8,9,12,0.4)',
    dark5: 'rgba(8,9,12,0.2)',
    light1: 'rgba(255,255,255,1.0)',
    light2: 'rgba(255,255,255,0.75)',
    light3: 'rgba(255,255,255,0.5)',
    light4: 'rgba(255,255,255,0.25)',
    light5: 'rgba(255,255,255,0)',

    black: 'rgba(0, 0, 0, 1)',
    white: 'rgba(255,255,255,1)',

    // inverted bg colors for dark mode
    white1: 'rgba(12, 14, 17, 1)',
    white2: 'rgba(15, 17, 21, 1)',
    white3: 'rgba(18, 20, 25, 1)',
    black1: 'rgba(245,245,245,1)',
    black2: 'rgba(237,237,237,1)',
    black3: 'rgba(229,229,229,1)',

    gray: 'rgba(128, 128, 128, 1)',
    blue: 'rgba(3, 136, 252, 1)',
    red: 'rgba(249, 16, 74, 1)',
    yellow: 'rgba(255, 221, 0, 1)',
    pink: 'rgba(232, 141, 163, 1)',
    turq: 'rgba(0, 245, 196, 1)',
    orange: 'rgba(255, 135, 31, 1)',

    background: '#000',
    accent1: '#111',
    accent2: '#333',
    accent3: '#444',
    accent4: '#666',
    accent5: '#888',
    accent6: '#999',
    accent7: '#eaeaea',
    accent8: '#fafafa',
    foreground: '#fff',
    errorLighter: '#f7d4d6',
    errorLight: '#f33',
    errorDefault: 'red',
    errorDark: '#e60000',
    successLighter: '#d3e5ff',
    successLight: '#3291ff',
    successDefault: '#0070f3',
    successDark: '#0761d1',
    warningLighter: '#feefcf',
    warningLight: '#f7b955',
    warningLigDefault: '#f5a623',
    warningDark: '#ab570a',
    highlightPurple: '#f81ce5',
    highlightMagenta: '#eb367f',
    highlightPink: '#ff0080',
    highlightYellow: '#fff500'
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
            ...gray,
            ...grayA,

            accentBase: '#ffffff',
            accentBgSubtle: '#ffffff',
            accentBg: '#ffffff',
            accentBgHover: '#e9ecef',
            accentBgActive: '#dee2e6',
            accentLine: '#f7f3f2',
            accentSolid: '#f7f3f2',
            accentSolidHover: '#f0e8e6',
            accentSolidActive: '#f0e8e6',
            accentBorder: '#121619',
            accentBorderHover: '#171414',
            accentBorderActive: '#171414',
            accentText: '#000000',
            accentTextContrast: '#171414',

            panelBase: 'rgba(255,255,255, 1.0)',
            panelBgSubtle: 'rgba(255,255,255, 1.0)',
            panelBg: 'rgba(255,255,255, 1.0)',
            panelBgHover: '$grayA4',
            panelBgActive: '$grayA5',
            panelLine: '$grayA6',
            panelBorder: '$grayA7',
            panelBorderHover: '$grayA8',
            panelBorderActive: '$grayA8',
            panelSolid: '$grayA9',
            panelSolidHover: '$grayA10',
            panelSolidActive: '$grayA10',
            panelText: '$grayA11',
            panelTextContrast: '$grayA12'
        },    
        space: {
            0: '1.5px',
            1: '3px',
            2: '5px',
            3: '7.5px',
            4: '10px',
            5: '15px',
            6: '20px',
            7: '25px',
            8: '35px',
            9: '45px',
            10: '65px',
            11: '80px',
            12: '96px',
            13: '112px',
            14: '136px',
            15: '150px'
        },
        fonts: {
            mono: 'Major Mono Display, monospace',
            jetbrains: 'JetBrains Mono, monospace',
            ibmplex: 'IBM Plex Sans, sans-serif',
            untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
        },
        fontSizes: {
            0: '10px',
            1: '11.5px',
            2: '12px',
            3: '13px',
            4: '15px',
            5: '17px',
            6: '19px',
            7: '21px',
            8: '24px',
            9: '30px',
            10: '36px',
            11: '54px',
            12: '72px',
            13: '90px',
            14: '108px',
            15: '120px',
            16: '144px',
            17: '168px',
            18: '192px',
            19: '220px',
            20: '260px'
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
            9: 900,
            10: 1000
        },
        lineHeights: {
            1: 1,
            2: 1.25,
            3: 1.75,
            4: 2.25,
            5: 3,
            6: 4.25,
            7: 5.5,
            8: 7.25,
            9: 9
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
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
            10: '100px',
            11: '120px',
            12: '140px',
            13: '160px',
            14: '180px',
            15: '200px'
        },
        borderWidths: {
            1: '1px',
            2: '1.5px',
            3: '2px',
            4: '2.5px',
            5: '3px',
            6: '4px',
            7: '5px',
            8: '6px',
            9: '7.5px'
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
            0: '0px',
            1: '3px',
            2: '5px',
            3: '7px',
            4: '9px',
            5: '11px',
            6: '15px',
            7: '19px',
            8: '23px',
            9: '27px',
            10: '35px',
            square: '0%',
            round: '50%',
            pill: '9999px',
        },
        shadows: {
            spreadAndBlur: `
                64px 64px 12px 40px rgba(0,0,0,0.4), 
                12px 12px 0px 8px rgba(0,0,0,0.4)
            `,
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

export const utils = config.utils;

export const blackTheme = createTheme({
    colors: {
        ...gray,
        ...grayDark,
        ...whiteA,
        ...sharedDarkColors,

        accentBase: 'rgba(8,9,10,1.0)',
        accentBgSubtle: 'rgba(8,9,10,1.0)',
        accentBg: 'rgba(8,9,10,1.0)',
        accentBgHover: 'rgba(8,9,10,1.0)', 
        accentBgActive: 'rgba(8,9,10,1.0)',
        accentLine: 'rgba(20,20,20,1)',
        accentBorder: 'rgba(100,100,100,1)',
        accentBorderHover: 'rgba(150,150,150,1)',
        accentBorderActive: 'rgba(200,200,200,1)',
        accentSolid: 'rgba(235,245,255, 1)',
        accentSolidHover: 'rgba(245,250,255,1)',
        accentSolidActive: 'rgba(255,255,255,1)',
        accentText: 'rgba(235,235,235, 1.0)',
        accentTextContrast: 'rgba(255,255,255, 1)',
        accentFocusRing: 'rgba(0,116,192,1.0)',

        panelBase: '$whiteA1',
        panelBgSubtle: '$whiteA2',
        panelBg: '$whiteA3',
        panelBgHover: '$whiteA4',
        panelBgActive: '$whiteA5',
        panelLine: '$whiteA6',
        panelBorder: '$whiteA7',
        panelBorderHover: '$whiteA8',
        panelBorderActive: '$whiteA8',
        panelSolid: '$whiteA9',
        panelSolidHover: '$whiteA10',
        panelSolidActive: '$whiteA10',
        panelText: '$whiteA11',
        panelTextContrast: '$whiteA12'
    }
});

export const purpleThemeLight = createTheme({
    colors: {
        ...purple,
        ...mauve,
        ...sharedColors,
        
        accentBase: '$purple1',
        accentBgSubtle: '$purple2',
        accentBg: '$purple3',
        accentBgHover: '$purple4',
        accentBgActive: '$purple5',
        accentLine: '$purple6',
        accentBorder: '$purple7',
        accentBorderHover: '$purple8',
        accentBorderActive: '$purple8',
        accentSolid: '$purple9',
        accentSolidHover: '$purple10',
        accentSolidActive: '$purple10',
        accentText: '$purple11',
        accentTextContrast: '$purple12',
        accentFocusRing: '$purple8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    }
});

export const purpleThemeDark = createTheme({
    colors: {
        ...purpleDark,
        ...mauveDark,
        ...sharedDarkColors,
        
        accentBase: '$purple1',
        accentBgSubtle: '$purple2',
        accentBg: '$purple3',
        accentBgHover: '$purple4',
        accentBgActive: '$purple5',
        accentLine: '$purple6',
        accentBorder: '$purple7',
        accentBorderHover: '$purple8',
        accentBorderActive: '$purple8',
        accentSolid: '$purple9',
        accentSolidHover: '$purple10',
        accentSolidActive: '$purple10',
        accentText: '$purple11',
        accentTextContrast: '$purple12',
        accentFocusRing: '$purple8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    }
});


export const redThemeLight = createTheme({
    colors: {
        ...red,
        ...sand,
        ...sharedColors,
        
        accentBase: '$red1',
        accentBgSubtle: '$red2',
        accentBg: '$red3',
        accentBgHover: '$red4',
        accentBgActive: '$red5',
        accentLine: '$red6',
        accentBorder: '$red7',
        accentBorderHover: '$red8',
        accentBorderActive: '$red8',
        accentSolid: '$red9',
        accentSolidHover: '$red10',
        accentSolidActive: '$red10',
        accentText: '$red11',
        accentTextContrast: '$red12',
        accentFocusRing: '$red8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const redThemeDark = createTheme({
    colors: {
        ...redDark,
        ...sandDark,
        ...sharedDarkColors,
        
        accentBase: '$red1',
        accentBgSubtle: '$red2',
        accentBg: '$red3',
        accentBgHover: '$red4',
        accentBgActive: '$red5',
        accentLine: '$red6',
        accentBorder: '$red7',
        accentBorderHover: '$red8',
        accentBorderActive: '$red8',
        accentSolid: '$red9',
        accentSolidHover: '$red10',
        accentSolidActive: '$red10',
        accentText: '$red11',
        accentTextContrast: '$red12',
        accentFocusRing: '$red8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const crimsonThemeLight = createTheme({
    colors: {
        ...sand,
        ...crimson,
        ...sharedColors,

        accentBase: '$crimson1',
        accentBgSubtle: '$crimson2',
        accentBg: '$crimson3',
        accentBgHover: '$crimson4',
        accentBgActive: '$crimson5',
        accentLine: '$crimson6',
        accentBorder: '$crimson7',
        accentBorderHover: '$crimson8',
        accentBorderActive: '$crimson8',
        accentSolid: '$crimson9',
        accentSolidHover: '$crimson10',
        accentSolidActive: '$crimson10',
        accentText: '$crimson11',
        accentTextContrast: '$crimson12',
        accentFocusRing: '$crimson8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    },    
});

export const crimsonThemeDark = createTheme({
    colors: {
        ...sandDark,
        ...crimsonDark,
        ...sharedDarkColors,

        accentBase: '$crimson1',
        accentBgSubtle: '$crimson2',
        accentBg: '$crimson3',
        accentBgHover: '$crimson4',
        accentBgActive: '$crimson5',
        accentLine: '$crimson6',
        accentBorder: '$crimson7',
        accentBorderHover: '$crimson8',
        accentBorderActive: '$crimson8',
        accentSolid: '$crimson9',
        accentSolidHover: '$crimson10',
        accentSolidActive: '$crimson10',
        accentText: '$crimson11',
        accentTextContrast: '$crimson12',
        accentFocusRing: '$crimson8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    },    
});

export const violetThemeDark = createTheme({
    colors: {
        ...mauveDark,
        ...violetDark,
        ...sharedDarkColors,

        accentBase: '$violet1',
        accentBgSubtle: '$violet2',
        accentBg: '$violet3',
        accentBgHover: '$violet4',
        accentBgActive: '$violet5',
        accentLine: '$violet6',
        accentBorder: '$violet7',
        accentBorderHover: '$violet8',
        accentBorderActive: '$violet8',
        accentSolid: '$violet9',
        accentSolidHover: '$violet10',
        accentSolidActive: '$violet10',
        accentText: '$violet11',
        accentTextContrast: '$violet12',
        accentFocusRing: '$violet8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    },    
});

export const violetThemeLight = createTheme({
    colors: {
        ...mauve,
        ...violet,
        ...sharedColors,

        accentBase: '$violet1',
        accentBgSubtle: '$violet2',
        accentBg: '$violet3',
        accentBgHover: '$violet4',
        accentBgActive: '$violet5',
        accentLine: '$violet6',
        accentBorder: '$violet7',
        accentBorderHover: '$violet8',
        accentBorderActive: '$violet8',
        accentSolid: '$violet9',
        accentSolidHover: '$violet10',
        accentSolidActive: '$violet10',
        accentText: '$violet11',
        accentTextContrast: '$violet12',
        accentFocusRing: '$violet8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    },    
});

export const cyanThemeLight = createTheme({
    colors: {
        ...cyan,
        ...slate,
        ...sharedColors,
        
        accentBase: '$cyan1',
        accentBgSubtle: '$cyan2',
        accentBg: '$cyan3',
        accentBgHover: '$cyan4',
        accentBgActive: '$cyan5',
        accentLine: '$cyan6',
        accentBorder: '$cyan7',
        accentBorderHover: '$cyan8',
        accentBorderActive: '$cyan8',
        accentSolid: '$cyan9',
        accentSolidHover: '$cyan10',
        accentSolidActive: '$cyan10',
        accentText: '$cyan11',
        accentTextContrast: '$cyan12',
        accentFocusRing: '$cyan8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const cyanThemeDark = createTheme({
    colors: {
        ...cyanDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$cyan1',
        accentBgSubtle: '$cyan2',
        accentBg: '$cyan3',
        accentBgHover: '$cyan4',
        accentBgActive: '$cyan5',
        accentLine: '$cyan6',
        accentBorder: '$cyan7',
        accentBorderHover: '$cyan8',
        accentBorderActive: '$cyan8',
        accentSolid: '$cyan9',
        accentSolidHover: '$cyan10',
        accentSolidActive: '$cyan10',
        accentText: '$cyan11',
        accentTextContrast: '$cyan12',
        accentFocusRing: '$cyan8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const grassThemeDark = createTheme({
    colors: {
        ...oliveDark,
        ...grassDark,
        ...sharedDarkColors,

        accentBase: '$grass1',
        accentBgSubtle: '$grass2',
        accentBg: '$grass3',
        accentBgHover: '$grass4',
        accentBgActive: '$grass5',
        accentLine: '$grass6',
        accentBorder: '$grass7',
        accentBorderHover: '$grass8',
        accentBorderActive: '$grass8',
        accentSolid: '$grass9',
        accentSolidHover: '$grass10',
        accentSolidActive: '$grass10',
        accentText: '$grass11',
        accentTextContrast: '$grass12',
        accentFocusRing: '$grass8',

        panelBase: '$olive1',
        panelBgSubtle: '$olive2',
        panelBg: '$olive3',
        panelBgHover: '$olive4',
        panelBgActive: '$olive5',
        panelLine: '$olive6',
        panelBorder: '$olive7',
        panelBorderHover: '$olive8',
        panelBorderActive: '$olive8',
        panelSolid: '$olive9',
        panelSolidHover: '$olive10',
        panelSolidActive: '$olive10',
        panelText: '$olive11',
        panelTextContrast: '$olive1'        
    },    
});

export const grassThemeLight = createTheme({
    colors: {
        ...grass,
        ...olive,
        ...sharedColors,

        accentBase: '$grass1',
        accentBgSubtle: '$grass2',
        accentBg: '$grass3',
        accentBgHover: '$grass4',
        accentBgActive: '$grass5',
        accentLine: '$grass6',
        accentBorder: '$grass7',
        accentBorderHover: '$grass8',
        accentBorderActive: '$grass8',
        accentSolid: '$grass9',
        accentSolidHover: '$grass10',
        accentSolidActive: '$grass10',
        accentText: '$grass11',
        accentTextContrast: '$grass12',
        accentFocusRing: '$grass8',

        panelBase: '$olive1',
        panelBgSubtle: '$olive2',
        panelBg: '$olive3',
        panelBgHover: '$olive4',
        panelBgActive: '$olive5',
        panelLine: '$olive6',
        panelBorder: '$olive7',
        panelBorderHover: '$olive8',
        panelBorderActive: '$olive8',
        panelSolid: '$olive9',
        panelSolidHover: '$olive10',
        panelSolidActive: '$olive10',
        panelText: '$olive11',
        panelTextContrast: '$olive1'  
    },    
});

export const greenThemeLight = createTheme({
    colors: {
        ...green,
        ...olive,
        ...sharedColors,
        
        accentBase: '$green1',
        accentBgSubtle: '$green2',
        accentBg: '$green3',
        accentBgHover: '$green4',
        accentBgActive: '$green5',
        accentLine: '$green6',
        accentBorder: '$green7',
        accentBorderHover: '$green8',
        accentBorderActive: '$green8',
        accentSolid: '$green9',
        accentSolidHover: '$green10',
        accentSolidActive: '$green10',
        accentText: '$green11',
        accentTextContrast: '$green12',
        accentFocusRing: '$green8',

        panelBase: '$olive1',
        panelBgSubtle: '$olive2',
        panelBg: '$olive3',
        panelBgHover: '$olive4',
        panelBgActive: '$olive5',
        panelLine: '$olive6',
        panelBorder: '$olive7',
        panelBorderHover: '$olive8',
        panelBorderActive: '$olive8',
        panelSolid: '$olive9',
        panelSolidHover: '$olive10',
        panelSolidActive: '$olive10',
        panelText: '$olive11',
        panelTextContrast: '$olive1'  
    }
});

export const greenThemeDark = createTheme({
    colors: {
        ...greenDark,
        ...oliveDark,
        ...sharedDarkColors,
        
        accentBase: '$green1',
        accentBgSubtle: '$green2',
        accentBg: '$green3',
        accentBgHover: '$green4',
        accentBgActive: '$green5',
        accentLine: '$green6',
        accentBorder: '$green7',
        accentBorderHover: '$green8',
        accentBorderActive: '$green8',
        accentSolid: '$green9',
        accentSolidHover: '$green10',
        accentSolidActive: '$green10',
        accentText: '$green11',
        accentTextContrast: '$green12',
        accentFocusRing: '$green8',

        panelBase: '$olive1',
        panelBgSubtle: '$olive2',
        panelBg: '$olive3',
        panelBgHover: '$olive4',
        panelBgActive: '$olive5',
        panelLine: '$olive6',
        panelBorder: '$olive7',
        panelBorderHover: '$olive8',
        panelBorderActive: '$olive8',
        panelSolid: '$olive9',
        panelSolidHover: '$olive10',
        panelSolidActive: '$olive10',
        panelText: '$olive11',
        panelTextContrast: '$olive1'  
    }
});

export const amberThemeLight = createTheme({
    colors: {
        ...amber,
        ...sand,
        ...sharedColors,

        accentBase: '$amber1',
        accentBgSubtle: '$amber2',
        accentBg: '$amber3',
        accentBgHover: '$amber4',
        accentBgActive: '$amber5',
        accentLine: '$amber6',
        accentBorder: '$amber7',
        accentBorderHover: '$amber8',
        accentBorderActive: '$amber8',
        accentSolid: '$amber9',
        accentSolidHover: '$amber10',
        accentSolidActive: '$amber10',
        accentText: '$amber11',
        accentTextContrast: '$amber12',
        accentFocusRing: '$amber8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const amberThemeDark = createTheme({
    colors: {
        ...amberDark,
        ...sandDark,
        ...sharedDarkColors,

        accentBase: '$amber1',
        accentBgSubtle: '$amber2',
        accentBg: '$amber3',
        accentBgHover: '$amber4',
        accentBgActive: '$amber5',
        accentLine: '$amber6',
        accentBorder: '$amber7',
        accentBorderHover: '$amber8',
        accentBorderActive: '$amber8',
        accentSolid: '$amber9',
        accentSolidHover: '$amber10',
        accentSolidActive: '$amber10',
        accentText: '$amber11',
        accentTextContrast: '$amber12',
        accentFocusRing: '$amber8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const skyThemeLight = createTheme({
    colors: {
        ...sky,
        ...slate,
        ...sharedColors,
        accentBase: '$sky1',
        accentBgSubtle: '$sky2',
        accentBg: '$sky3',
        accentBgHover: '$sky4',
        accentBgActive: '$sky5',
        accentLine: '$sky6',
        accentBorder: '$sky7',
        accentBorderHover: '$sky8',
        accentBorderActive: '$sky8',
        accentSolid: '$sky9',
        accentSolidHover: '$sky10',
        accentSolidActive: '$sky10',
        accentText: '$sky11',
        accentTextContrast: '$sky12',
        accentFocusRing: '$sky8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    },    
});

export const skyThemeDark = createTheme({
    colors: {
        ...skyDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$sky1',
        accentBgSubtle: '$sky2',
        accentBg: '$sky3',
        accentBgHover: '$sky4',
        accentBgActive: '$sky5',
        accentLine: '$sky6',
        accentBorder: '$sky7',
        accentBorderHover: '$sky8',
        accentBorderActive: '$sky8',
        accentSolid: '$sky9',
        accentSolidHover: '$sky10',
        accentSolidActive: '$sky10',
        accentText: '$sky11',
        accentTextContrast: '$sky12',
        accentFocusRing: '$sky8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12',
    },    
});

export const indigoThemeLight = createTheme({
    colors: {
        ...indigo,
        ...sharedColors,
        ...mauve,

        accentBase: '$indigo1',
        accentBgSubtle: '$indigo2',
        accentBg: '$indigo3',
        accentBgHover: '$indigo4',
        accentBgActive: '$indigo5',
        accentLine: '$indigo6',
        accentBorder: '$indigo7',
        accentBorderHover: '$indigo8',
        accentBorderActive: '$indigo8',
        accentSolid: '$indigo9',
        accentSolidHover: '$indigo10',
        accentSolidActive: '$indigo10',
        accentText: '$indigo11',
        accentTextContrast: '$indigo12',
        accentFocusRing: '$indigo8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'

    }
});

export const indigoThemeDark = createTheme({
    colors: {
        ...indigoDark,
        ...mauveDark,
        ...sharedDarkColors,

        accentBase: '$indigo1',
        accentBgSubtle: '$indigo2',
        accentBg: '$indigo3',
        accentBgHover: '$indigo4',
        accentBgActive: '$indigo5',
        accentLine: '$indigo6',
        accentBorder: '$indigo7',
        accentBorderHover: '$indigo8',
        accentBorderActive: '$indigo8',
        accentSolid: '$indigo9',
        accentSolidHover: '$indigo10',
        accentSolidActive: '$indigo10',
        accentText: '$indigo11',
        accentTextContrast: '$indigo12',
        accentFocusRing: '$indigo8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    }
});

export const limeThemeLight = createTheme({
    colors: {
        ...lime,
        ...sharedColors,

        accentBase: '$lime1',
        accentBgSubtle: '$lime2',
        accentBg: '$lime3',
        accentBgHover: '$lime4',
        accentBgActive: '$lime5',
        accentLine: '$lime6',
        accentBorder: '$lime7',
        accentBorderHover: '$lime8',
        accentBorderActive: '$lime8',
        accentSolid: '$lime9',
        accentSolidHover: '$lime10',
        accentSolidActive: '$lime10',
        accentText: '$lime11',
        accentTextContrast: '$lime12',
        accentFocusRing: '$lime8',
    }
});

export const limeThemeDark = createTheme({
    colors: {
        ...limeDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$lime1',
        accentBgSubtle: '$lime2',
        accentBg: '$lime3',
        accentBgHover: '$lime4',
        accentBgActive: '$lime5',
        accentLine: '$lime6',
        accentBorder: '$lime7',
        accentBorderHover: '$lime8',
        accentBorderActive: '$lime8',
        accentSolid: '$lime9',
        accentSolidHover: '$lime10',
        accentSolidActive: '$lime10',
        accentText: '$lime11',
        accentTextContrast: '$lime12',
        accentFocusRing: '$lime8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const plumThemeLight = createTheme({
    colors: {
        ...plum,
        ...mauve,
        ...sharedColors,

        accentBase: '$plum1',
        accentBgSubtle: '$plum2',
        accentBg: '$plum3',
        accentBgHover: '$plum4',
        accentBgActive: '$plum5',
        accentLine: '$plum6',
        accentBorder: '$plum7',
        accentBorderHover: '$plum8',
        accentBorderActive: '$plum8',
        accentSolid: '$plum9',
        accentSolidHover: '$plum10',
        accentSolidActive: '$plum10',
        accentText: '$plum11',
        accentTextContrast: '$plum12',
        accentFocusRing: '$plum8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    },    
});

export const plumThemeDark = createTheme({
    colors: {
        ...plumDark,
        ...mauveDark,
        ...sharedDarkColors,

        accentBase: '$plum1',
        accentBgSubtle: '$plum2',
        accentBg: '$plum3',
        accentBgHover: '$plum4',
        accentBgActive: '$plum5',
        accentLine: '$plum6',
        accentBorder: '$plum7',
        accentBorderHover: '$plum8',
        accentBorderActive: '$plum8',
        accentSolid: '$plum9',
        accentSolidHover: '$plum10',
        accentSolidActive: '$plum10',
        accentText: '$plum11',
        accentTextContrast: '$plum12',
        accentFocusRing: '$plum8',

        panelBase: '$mauve1',
        panelBgSubtle: '$mauve2',
        panelBg: '$mauve3',
        panelBgHover: '$mauve4',
        panelBgActive: '$mauve5',
        panelLine: '$mauve6',
        panelBorder: '$mauve7',
        panelBorderHover: '$mauve8',
        panelBorderActive: '$mauve8',
        panelSolid: '$mauve9',
        panelSolidHover: '$mauve10',
        panelSolidActive: '$mauve10',
        panelText: '$mauve11',
        panelTextContrast: '$mauve12'
    },    
});

export const blueThemeLight = createTheme({
    colors: {
        ...blue,
        ...slate,
        ...sharedColors,

        accentBase: '$blue1',
        accentBgSubtle: '$blue2',
        accentBg: '$blue3',
        accentBgHover: '$blue4',
        accentBgActive: '$blue5',
        accentLine: '$blue6',
        accentBorder: '$blue7',
        accentBorderHover: '$blue8',
        accentBorderActive: '$blue8',
        accentSolid: '$blue9',
        accentSolidHover: '$blue10',
        accentSolidActive: '$blue10',
        accentText: '$blue11',
        accentTextContrast: '$blue12',
        accentFocusRing: '$blue8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    },    
});

export const blueThemeDark = createTheme({
    colors: {
        ...blueDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$blue1',
        accentBgSubtle: '$blue2',
        accentBg: '$blue3',
        accentBgHover: '$blue4',
        accentBgActive: '$blue5',
        accentLine: '$blue6',
        accentBorder: '$blue7',
        accentBorderHover: '$blue8',
        accentBorderActive: '$blue8',
        accentSolid: '$blue9',
        accentSolidHover: '$blue10',
        accentSolidActive: '$blue10',
        accentText: '$blue11',
        accentTextContrast: '$blue12',
        accentFocusRing: '$blue8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    },    
});

export const mintThemeLight = createTheme({
    colors: {
        ...mint,
        ...slate,
        ...sharedColors,

        accentBase: '$mint1',
        accentBgSubtle: '$mint2',
        accentBg: '$mint3',
        accentBgHover: '$mint4',
        accentBgActive: '$mint5',
        accentLine: '$mint6',
        accentBorder: '$mint7',
        accentBorderHover: '$mint8',
        accentBorderActive: '$mint8',
        accentSolid: '$mint9',
        accentSolidHover: '$mint10',
        accentSolidActive: '$mint10',
        accentText: '$mint11',
        accentTextContrast: '$mint12',
        accentFocusRing: '$mint8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const mintThemeDark = createTheme({
    colors: {
        ...mintDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$mint1',
        accentBgSubtle: '$mint2',
        accentBg: '$mint3',
        accentBgHover: '$mint4',
        accentBgActive: '$mint5',
        accentLine: '$mint6',
        accentBorder: '$mint7',
        accentBorderHover: '$mint8',
        accentBorderActive: '$mint8',
        accentSolid: '$mint9',
        accentSolidHover: '$mint10',
        accentSolidActive: '$mint10',
        accentText: '$mint11',
        accentTextContrast: '$mint12',
        accentFocusRing: '$mint8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
})

export const yellowThemeLight = createTheme({
    colors: {
        ...yellow,
        ...sand,
        ...sharedColors,

        accentBase: '$yellow1',
        accentBgSubtle: '$yellow2',
        accentBg: '$yellow3',
        accentBgHover: '$yellow4',
        accentBgActive: '$yellow5',
        accentLine: '$yellow6',
        accentBorder: '$yellow7',
        accentBorderHover: '$yellow8',
        accentBorderActive: '$yellow8',
        accentSolid: '$yellow9',
        accentSolidHover: '$yellow10',
        accentSolidActive: '$yellow10',
        accentText: '$yellow11',
        accentTextContrast: '$yellow12',
        accentFocusRing: '$yellow8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'

    },    
});

export const yellowThemeDark = createTheme({
    colors: {
        ...yellowDark,
        ...sandDark,
        ...sharedDarkColors,

        accentBase: '$yellow1',
        accentBgSubtle: '$yellow2',
        accentBg: '$yellow3',
        accentBgHover: '$yellow4',
        accentBgActive: '$yellow5',
        accentLine: '$yellow6',
        accentBorder: '$yellow7',
        accentBorderHover: '$yellow8',
        accentBorderActive: '$yellow8',
        accentSolid: '$yellow9',
        accentSolidHover: '$yellow10',
        accentSolidActive: '$yellow10',
        accentText: '$yellow11',
        accentTextContrast: '$yellow12',
        accentFocusRing: '$yellow8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    },    
});

export const orangeThemeLight = createTheme({
    colors: {
        ...orange,
        ...sand,
        ...sharedColors,

        accentBase: '$orange1',
        accentBgSubtle: '$orange2',
        accentBg: '$orange3',
        accentBgHover: '$orange4',
        accentBgActive: '$orange5',
        accentLine: '$orange6',
        accentBorder: '$orange7',
        accentBorderHover: '$orange8',
        accentBorderActive: '$orange8',
        accentSolid: '$orange9',
        accentSolidHover: '$orange10',
        accentSolidActive: '$orange10',
        accentText: '$orange11',
        accentTextContrast: '$orange12',
        accentFocusRing: '$orange8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const orangeThemeDark = createTheme({
    colors: {
        ...orangeDark,
        ...sandDark,
        ...sharedDarkColors,

        accentBase: '$orange1',
        accentBgSubtle: '$orange2',
        accentBg: '$orange3',
        accentBgHover: '$orange4',
        accentBgActive: '$orange5',
        accentLine: '$orange6',
        accentBorder: '$orange7',
        accentBorderHover: '$orange8',
        accentBorderActive: '$orange8',
        accentSolid: '$orange9',
        accentSolidHover: '$orange10',
        accentSolidActive: '$orange10',
        accentText: '$orange11',
        accentTextContrast: '$orange12',
        accentFocusRing: '$orange8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const pinkThemeLight = createTheme({
    colors: {
        ...pink,
        ...slate,
        ...sharedColors,
        accentBase: '$pink1',
        accentBgSubtle: '$pink2',
        accentBg: '$pink3',
        accentBgHover: '$pink4',
        accentBgActive: '$pink5',
        accentLine: '$pink6',
        accentBorder: '$pink7',
        accentBorderHover: '$pink8',
        accentBorderActive: '$pink8',
        accentSolid: '$pink9',
        accentSolidHover: '$pink9',
        accentSolidActive: '$pink10',
        accentText: '$pink11',
        accentTextContrast: '$pink12',
        accentFocusRing: '$pink8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const pinkThemeDark = createTheme({
    colors: {
        ...pinkDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$pink1',
        accentBgSubtle: '$pink2',
        accentBg: '$pink3',
        accentBgHover: '$pink4',
        accentBgActive: '$pink5',
        accentLine: '$pink6',
        accentBorder: '$pink7',
        accentBorderHover: '$pink8',
        accentBorderActive: '$pink8',
        accentSolid: '$pink9',
        accentSolidHover: '$pink9',
        accentSolidActive: '$pink10',
        accentText: '$pink11',
        accentTextContrast: '$pink12',
        accentFocusRing: '$pink8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    }
});

export const tomatoThemeDark = createTheme({
    colors: {
        ...tomatoDark,
        ...sandDark,
        ...sharedDarkColors,

        accentBase: '$tomato1',
        accentBgSubtle: '$tomato2',
        accentBg: '$tomato3',
        accentBgHover: '$tomato4',
        accentBgActive: '$tomato5',
        accentLine: '$tomato6',
        accentBorder: '$tomato7',
        accentBorderHover: '$tomato8',
        accentBorderActive: '$tomato8',
        accentSolid: '$tomato9',
        accentSolidHover: '$tomato9',
        accentSolidActive: '$tomato10',
        accentText: '$tomato11',
        accentTextContrast: '$tomato12',
        accentFocusRing: '$tomato8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const tomatoThemeLight = createTheme({
    colors: {
        ...tomato,
        ...sand,
        ...sharedColors,
        accentBase: '$tomato1',
        accentBgSubtle: '$tomato2',
        accentBg: '$tomato3',
        accentBgHover: '$tomato4',
        accentBgActive: '$tomato5',
        accentLine: '$tomato6',
        accentBorder: '$tomato7',
        accentBorderHover: '$tomato8',
        accentBorderActive: '$tomato8',
        accentSolid: '$tomato9',
        accentSolidHover: '$tomato9',
        accentSolidActive: '$tomato10',
        accentText: '$tomato11',
        accentTextContrast: '$tomato12',
        accentFocusRing: '$tomato8',

        panelBase: '$sand1',
        panelBgSubtle: '$sand2',
        panelBg: '$sand3',
        panelBgHover: '$sand4',
        panelBgActive: '$sand5',
        panelLine: '$sand6',
        panelBorder: '$sand7',
        panelBorderHover: '$sand8',
        panelBorderActive: '$sand8',
        panelSolid: '$sand9',
        panelSolidHover: '$sand10',
        panelSolidActive: '$sand10',
        panelText: '$sand11',
        panelTextContrast: '$sand12'
    }
});

export const brownThemeLight = createTheme({
    colors: {
        ...brown,

        accentBase: '$brown1',
        accentBgSubtle: '$brown2',
        accentBg: '$brown3',
        accentBgHover: '$brown4',
        accentBgActive: '$brown5',
        accentLine: '$brown6',
        accentBorder: '$brown7',
        accentBorderHover: '$brown8',
        accentBorderActive: '$brown8',
        accentSolid: '$brown9',
        accentSolidHover: '$brown10',
        accentSolidActive: '$brown10',
        accentText: '$brown11',
        accentTextContrast: '$brown12',
        accentFocusRing: '$brown8',

        ...sharedColors,
    },    
});

export const brownThemeDark = createTheme({
    colors: {
        ...brownDark,


        accentBase: '$brown1',
        accentBgSubtle: '$brown2',
        accentBg: '$brown3',
        accentBgHover: '$brown4',
        accentBgActive: '$brown5',
        accentLine: '$brown6',
        accentBorder: '$brown7',
        accentBorderHover: '$brown8',
        accentBorderActive: '$brown8',
        accentSolid: '$brown9',
        accentSolidHover: '$brown10',
        accentSolidActive: '$brown10',
        accentText: '$brown11',
        accentTextContrast: '$brown12',
        accentFocusRing: '$brown8',

        ...sharedDarkColors,
    },    
});

export const tealThemeLight = createTheme({
    colors: {
        ...teal,
        ...slate,
        ...sharedColors,

        accentBase: '$teal1',
        accentBgSubtle: '$teal2',
        accentBg: '$teal3',
        accentBgHover: '$teal4',
        accentBgActive: '$teal5',
        accentLine: '$teal6',
        accentBorder: '$teal7',
        accentBorderHover: '$teal8',
        accentBorderActive: '$teal8',
        accentSolid: '$teal9',
        accentSolidHover: '$teal10',
        accentSolidActive: '$teal10',
        accentText: '$teal11',
        accentTextContrast: '$teal12',
        accentFocusRing: '$teal8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    },    
});

export const tealThemeDark = createTheme({
    colors: {
        ...tealDark,
        ...slateDark,
        ...sharedDarkColors,

        accentBase: '$teal1',
        accentBgSubtle: '$teal2',
        accentBg: '$teal3',
        accentBgHover: '$teal4',
        accentBgActive: '$teal5',
        accentLine: '$teal6',
        accentBorder: '$teal7',
        accentBorderHover: '$teal8',
        accentBorderActive: '$teal8',
        accentSolid: '$teal9',
        accentSolidHover: '$teal10',
        accentSolidActive: '$teal10',
        accentText: '$teal11',
        accentTextContrast: '$teal12',
        accentFocusRing: '$teal8',

        panelBase: '$slate1',
        panelBgSubtle: '$slate2',
        panelBg: '$slate3',
        panelBgHover: '$slate4',
        panelBgActive: '$slate5',
        panelLine: '$slate6',
        panelBorder: '$slate7',
        panelBorderHover: '$slate8',
        panelBorderActive: '$slate8',
        panelSolid: '$slate9',
        panelSolidHover: '$slate10',
        panelSolidActive: '$slate10',
        panelText: '$slate11',
        panelTextContrast: '$slate12'
    },    
});

export const goldThemeLight = createTheme({
    colors: {
        ...gold,

        accentBase: '$gold1',
        accentBgSubtle: '$gold2',
        accentBg: '$gold3',
        accentBgHover: '$gold4',
        accentBgActive: '$gold5',
        accentLine: '$gold6',
        accentBorder: '$gold7',
        accentBorderHover: '$gold8',
        accentBorderActive: '$gold8',
        accentSolid: '$gold9',
        accentSolidHover: '$gold9',
        accentSolidActive: '$gold10',
        accentText: '$gold11',
        accentTextContrast: '$gold12',
        accentFocusRing: '$gold8',

        ...sharedColors,
    },    
});

export const goldThemeDark = createTheme({
    colors: {
        ...goldDark,

        accentBase: '$gold1',
        accentBgSubtle: '$gold2',
        accentBg: '$gold3',
        accentBgHover: '$gold4',
        accentBgActive: '$gold5',
        accentLine: '$gold6',
        accentBorder: '$gold7',
        accentBorderHover: '$gold8',
        accentBorderActive: '$gold8',
        accentSolid: '$gold9',
        accentSolidHover: '$gold9',
        accentSolidActive: '$gold10',
        accentText: '$gold11',
        accentTextContrast: '$gold12',
        accentFocusRing: '$gold8',

        ...sharedDarkColors,
    },    
});

export const bronzeThemeLight = createTheme({
    colors: {
        ...bronze,
        ...sharedColors,

        accentBase: '$bronze1',
        accentBgSubtle: '$bronze2',
        accentBg: '$bronze3',
        accentBgHover: '$bronze4',
        accentBgActive: '$bronze5',
        accentLine: '$bronze6',
        accentBorder: '$bronze7',
        accentBorderHover: '$bronze8',
        accentBorderActive: '$bronze8',
        accentSolid: '$bronze9',
        accentSolidHover: '$bronze9',
        accentSolidActive: '$bronze10',
        accentText: '$bronze11',
        accentTextContrast: '$bronze12',
        accentFocusRing: '$bronze8',
    }  
});

export const bronzeThemeDark = createTheme({
    colors: {
        ...bronzeDark,
        ...sharedDarkColors,
        accentBase: '$bronze1',
        accentBgSubtle: '$bronze2',
        accentBg: '$bronze3',
        accentBgHover: '$bronze4',
        accentBgActive: '$bronze5',
        accentLine: '$bronze6',
        accentBorder: '$bronze7',
        accentBorderHover: '$bronze8',
        accentBorderActive: '$bronze8',
        accentSolid: '$bronze9',
        accentSolidHover: '$bronze9',
        accentSolidActive: '$bronze10',
        accentText: '$bronze11',
        accentTextContrast: '$bronze12',
        accentFocusRing: '$bronze8',
    }  
});

export const mauveThemeLight = createTheme({
    colors: {
        ...mauve,
        ...sharedColors,
        accentBase: '$mauve1',
        accentBgSubtle: '$mauve2',
        accentBg: '$mauve3',
        accentBgHover: '$mauve4',
        accentBgActive: '$mauve5',
        accentLine: '$mauve6',
        accentBorder: '$mauve7',
        accentBorderHover: '$mauve8',
        accentBorderActive: '$mauve8',
        accentSolid: '$mauve9',
        accentSolidHover: '$mauve9',
        accentSolidActive: '$mauve10',
        accentText: '$mauve11',
        accentTextContrast: '$mauve12',
        accentFocusRing: '$mauve8',
    }  
});

export const mauveThemeDark = createTheme({
    colors: {
        ...mauveDark,
        ...sharedDarkColors,

        accentBase: '$mauve1',
        accentBgSubtle: '$mauve2',
        accentBg: '$mauve3',
        accentBgHover: '$mauve4',
        accentBgActive: '$mauve5',
        accentLine: '$mauve6',
        accentBorder: '$mauve7',
        accentBorderHover: '$mauve8',
        accentBorderActive: '$mauve8',
        accentSolid: '$mauve9',
        accentSolidHover: '$mauve9',
        accentSolidActive: '$mauve10',
        accentText: '$mauve11',
        accentTextContrast: '$mauve12',
        accentFocusRing: '$mauve8',
    }  
});

export const slateThemeLight = createTheme({
    colors: {
        ...slate,
        ...sharedColors,
        accentBase: '$slate1',
        accentBgSubtle: '$slate2',
        accentBg: '$slate3',
        accentBgHover: '$slate4',
        accentBgActive: '$slate5',
        accentLine: '$slate6',
        accentBorder: '$slate7',
        accentBorderHover: '$slate8',
        accentBorderActive: '$slate8',
        accentSolid: '$slate9',
        accentSolidHover: '$slate9',
        accentSolidActive: '$slate10',
        accentText: '$slate11',
        accentTextContrast: '$slate12',
        accentFocusRing: '$slate8',
    }  
});

export const slateThemeDark = createTheme({
    colors: {
        ...slateDark,
        ...sharedDarkColors,
        accentBase: '$slate1',
        accentBgSubtle: '$slate2',
        accentBg: '$slate3',
        accentBgHover: '$slate4',
        accentBgActive: '$slate5',
        accentLine: '$slate6',
        accentBorder: '$slate7',
        accentBorderHover: '$slate8',
        accentBorderActive: '$slate8',
        accentSolid: '$slate9',
        accentSolidHover: '$slate9',
        accentSolidActive: '$slate10',
        accentText: '$slate11',
        accentTextContrast: '$slate12',
        accentFocusRing: '$slate8',
    }  
});

export const sageThemeLight = createTheme({
    colors: {
        ...sage,
        ...sharedColors,
        accentBase: '$sage1',
        accentBgSubtle: '$sage2',
        accentBg: '$sage3',
        accentBgHover: '$sage4',
        accentBgActive: '$sage5',
        accentLine: '$sage6',
        accentBorder: '$sage7',
        accentBorderHover: '$sage8',
        accentBorderActive: '$sage8',
        accentSolid: '$sage9',
        accentSolidHover: '$sage9',
        accentSolidActive: '$sage10',
        accentText: '$sage11',
        accentTextContrast: '$sage12',
        accentFocusRing: '$sage8',
    }  
});

export const sageThemeDark = createTheme({
    colors: {
        ...sageDark,
        ...sharedDarkColors,
        accentBase: '$sage1',
        accentBgSubtle: '$sage2',
        accentBg: '$sage3',
        accentBgHover: '$sage4',
        accentBgActive: '$sage5',
        accentLine: '$sage6',
        accentBorder: '$sage7',
        accentBorderHover: '$sage8',
        accentBorderActive: '$sage8',
        accentSolid: '$sage9',
        accentSolidHover: '$sage9',
        accentSolidActive: '$sage10',
        accentText: '$sage11',
        accentTextContrast: '$sage12',
        accentFocusRing: '$sage8',
    }  
});


export const oliveThemeLight = createTheme({
    colors: {
        ...olive,
        ...sharedColors,
        accentBase: '$olive1',
        accentBgSubtle: '$olive2',
        accentBg: '$olive3',
        accentBgHover: '$olive4',
        accentBgActive: '$olive5',
        accentLine: '$olive6',
        accentBorder: '$olive7',
        accentBorderHover: '$olive8',
        accentBorderActive: '$olive8',
        accentSolid: '$olive9',
        accentSolidHover: '$olive9',
        accentSolidActive: '$olive10',
        accentText: '$olive11',
        accentTextContrast: '$olive12',
        accentFocusRing: '$olive8',
    }  
});

export const oliveThemeDark = createTheme({
    colors: {
        ...oliveDark,
        ...sharedDarkColors,
        accentBase: '$olive1',
        accentBgSubtle: '$olive2',
        accentBg: '$olive3',
        accentBgHover: '$olive4',
        accentBgActive: '$olive5',
        accentLine: '$olive6',
        accentBorder: '$olive7',
        accentBorderHover: '$olive8',
        accentBorderActive: '$olive8',
        accentSolid: '$olive9',
        accentSolidHover: '$olive9',
        accentSolidActive: '$olive10',
        accentText: '$olive11',
        accentTextContrast: '$olive12',
        accentFocusRing: '$olive8',
    }  
});

export const sandThemeLight = createTheme({
    colors: {
        ...sand,
        ...sharedColors,
        accentBase: '$sand1',
        accentBgSubtle: '$sand2',
        accentBg: '$sand3',
        accentBgHover: '$sand4',
        accentBgActive: '$sand5',
        accentLine: '$sand6',
        accentBorder: '$sand7',
        accentBorderHover: '$sand8',
        accentBorderActive: '$sand8',
        accentSolid: '$sand9',
        accentSolidHover: '$sand9',
        accentSolidActive: '$sand10',
        accentText: '$sand11',
        accentTextContrast: '$sand12',
        accentFocusRing: '$sand8'
    }  
});

export const sandThemeDark = createTheme({
    colors: {
        ...sandDark,
        ...sharedDarkColors,
        accentBase: '$sand1',
        accentBgSubtle: '$sand2',
        accentBg: '$sand3',
        accentBgHover: '$sand4',
        accentBgActive: '$sand5',
        accentLine: '$sand6',
        accentBorder: '$sand7',
        accentBorderHover: '$sand8',
        accentBorderActive: '$sand8',
        accentSolid: '$sand9',
        accentSolidHover: '$sand9',
        accentSolidActive: '$sand10',
        accentText: '$sand11',
        accentTextContrast: '$sand12',
        accentFocusRing: '$sand8'
    }  
})

