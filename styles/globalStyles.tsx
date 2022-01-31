import { globalCss } from '../stitches.config' 

export const cssReset = globalCss({
    body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: 'none', 
        textSizeAdjust: 'none',
        touchAction: 'manipulation',
        overflow: 'hidden'
    },
    h1: {
        fontFamily: '$mono',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: '$9',
        color: '$accentText',
    },
    p: {
        fontFamily: '$jetbrains',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '$2',
        lineHeight: '$1',
        color: '$accentText'
    },
    span: {
        fontFamily: '$ibmplex',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: '$1',
        lineHeight: 1
    },
    label: {
        fontFamily: '$ibmplex',
        fontWeight: 200,
        fontStyle: 'extra-light',
        fontSize: '13px',
        lineHeight: '$2',
        color: '$accentText',
        textTransform: 'capitalize'
    },
    button: {
        fontFamily: '$jetbrains',
        fontWeight: 400,
        fontStyle: 'regular',
        fontSize: '13px',
        lineHeight: 1
    },
    pre: {
        fontFamily: '$jetbrains',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '13px',
        lineHeight: 1,
    },
    a: {
        fontFamily: '$ibmplex',
        fontSize: '$1',
        fontWeight: 200,
        fontStyle: 'italics',
        color: '$accentText',
        cursor: 'pointer'
    }, 
    '.token.parameter': { color: '$accentSolid' },
    '.token.imports': { color: '$accentSolid' },
    '.token.plain': { color: '$accentSolid' },
    '.token.comment': { color: '$accentSolid' },
    '.token.prolog': { color: '$accentSolid' },
    '.token.doctype': { color: '$accentSolid' },
    '.token.cdata': { color: '$accentSolid' },
    '.token.punctuation': { color: '$accentTextContrast' },
    
    '.token.property': { color: '$accentFocusRing' },
    '.token.tag': { color: '$accentFocusRing' },
    '.token.boolean': { color: '$accentFocusRing' },
    '.token.number': {color: '$accentFocusRing' },
    '.token.constant': {color: '$accentFocusRing' },
    '.token.symbol': { color: '$accentFocusRing' },
    '.token.deleted': { color: '$accentFocusRing' },

    '.token.operator': { color: '$panelText' },
    '.token.entity': { color: '$panelText' },
    '.token.url': { color: '$panelText'  },
    '.language-css': { color: '$panelText' },
    '.style': { color: '$panelText' },

    '.token.selector': { color: '$highlightMagenta' },
    '.token.attr-name': { color: '$highlightMagenta' },
    '.token.char': { color: '$highlightMagenta' },
    '.token.builtin': { color: '$highlightMagenta' },
    '.token.string': { color: '$highlightMagenta' },
    '.token.inserted': { color: '$highlightMagenta' },

    '.token.atrule': { color: '$successDefault' },
    '.token.attr-value': { color: '$successDefault' },
    '.token.keyword': { color: '$successDefault'  },
    '.token.function': { color: '$turq' },
    '.token.maybe-class-name': { color: '$turq' },
    '.token.class-name': { color: '$turq' },
    '.token.regex': { color: '$accentText' },
    '.token.variable':  { color: '$accentText' },
    '.token.important':  { color: '$accentText' }
})
