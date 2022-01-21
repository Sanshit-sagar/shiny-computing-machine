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
    '.nextra-container nav': {
        display: 'none',
        height: 0,
        width: 0,
        bc: 'transparent',
        color: 'transparent'
    },
    '.sidebar': { 
        // width: 0,
        // display: 'none',
        // visibility: 'hidden',
        // us: 'none',
        // width: '225px',
        // maxWidth: '225px',
        // overflow: 'hidden',
        // margin: 0,
        // py: 0,
        // pl: '1.25rem',
        // pr: '0.75rem',
        // position: 'fixed',
        // border: 'none',
        // outline: 'none',
        // boxShadow: 'none',
        // top: 0,
        // left: 0,
        // bc: '$accentBase',
        // color: '$accentText',

        // '& ul ul': {
            // position: 'relative',
            // fontWeight: 200
        // },
        // '& .active-anchor': {
            // opacity: 1,
            // fontWeight: 200
        // },
        // '& li.active > a': {
            // bc: '$accentLine',
            // color: '$accentTextContrast',
            // border: 'none'
        // },
        // '& a': {
            // mt: '0.25em',
            // display: 'block',
            // width: '100%',
            // us: 'none',
            // br: '0.2em',
            // p: '0.5em',
            // textAlign: 'left',
            // fontSize: '$1',
            // lineHeight: '1.5rem',
            // fontWeight: 150,
            // color: '$accentText',
            // opacity: 1,
            // textDecoration: 'none',
            // WebkitTapHighlightColor: 'transparent',
            // WebkitTouchCallout: 'none',
            // '&:hover': {
                // bc: '$accentSolidHover',
                // color: '$accentTextContrast'
            // }
        // },
        // '& button': {
            // mt: '0.25em',
            // display: 'block',
            // us: 'none',
            // br: '0.2em',
            // p: '0.5em',
            // textAlign: 'left',
            // fontSize: '$1',
            // lineHeight: '1.5rem',
            // fontWeight: 150,
            // color: '$accentText',
            // opacity: 1,
            // textDecoration: 'none',
            // WebkitTapHighlightColor: 'transparent',
            // WebkitTouchCallout: 'none',
            // '&:hover': {
                // bc: '$accentSolidHover',
                // color: '$accentTextContrast'
            // }
        // },

        // '&::-webkit-scrollbar': {
            // width: '0.25em',
        // },
        // '&::-webkit-scrollbar-track': {
            // bc: 'transparent',
        // },
        // '&::-webkit-scrollbar-thumb': {
            // bc: '$accentSolid',
            // br: '999px',
            // '&:hover': {
                // bc: '$accentSolidHover',
                // br: '0px'
            // }
        // }
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
