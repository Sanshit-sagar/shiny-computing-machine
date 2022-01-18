import { styled } from '../../stitches.config'

export const StyledBlockquote = styled('blockquote', {
    appearance: 'none',
    userSelect: 'none',

    position: 'relative',
    height: 'max-content',
    width: '100%',

    py: '$8',
    px: '$4',
    bc: 'transparent',
    backdropFilter: 'blur(6px)',

    '& .underlined': {
        fontSize: '2em',
        fontFamily: '$jetbrains',
        maxWidth: '80%',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(currentColor, currentColor)',
        backgroundPosition: '0% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '0% 4px',
        transition: 'background-size 300ms cubic-bezier(0, 0.5, 0, 1)',
        '&:hover': {
            textDecoration: 'none',
            backgroundSize: '100% 4px'
        },
        '&:focus': {
            textDecoration: 'none',
            backgroundSize: '100% 4px'
        },
    },

    '& p': {
        fontFamily: '$jetbrains',
        lineHeight: '$3',
        fontWeight: '$1',
        fontStyle: 'italic',
        textAlign: 'right',
        mb: '$7',

        $$shadowColor: '$colors$accentLine',

        '&::first-letter': {
            color: '$accentTextContrast',
            bc: '$accentSolid',
            br: '$2',
            boxShadow: '3px 3px 0 $$shadowColor',
            fontSize: '300%',
            p: '$1',
            mr: '$2',
            fontFamily: '$jetbrains',
            fontVariantLigatures: 'no-contextual',
            MozFontVariantLigatures: 'calt 0',
            WebkitFontFeatureSettings: 'calt 0',
            fontFeatureSettings: 'calt 0'
        }
    },

    '& div': {
        maxWidth: '875px',
        p: '0px $5',
        width: '100%',
        margin: '0 auto',
        color: '$accentText'
    },

    '& span': {
        fontFamily: '$mono',
        fontWeight: 700,
        fontStyle: 'bold',
        fontSize: '$6',
        color: '$accentTextContrast',
    }
})