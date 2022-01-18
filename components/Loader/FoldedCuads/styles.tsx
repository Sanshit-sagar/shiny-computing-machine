import { styled, keyframes } from '../../../stitches.config'

export const cubeGridScaleDelay = keyframes({
    '0%': {
        '-webkit-transform': 'scale3D(1, 1, 1)',
        transform: 'scale3D(1, 1, 1)',
    },
    '35%': {
        '-webkit-transform': 'scale3D(0, 0, 1)',
        transform: 'scale3D(0, 0, 1)',
    },
    '70%': {
        '-webkit-transform': 'scale3D(1, 1, 1)',
        transform: 'scale3D(1, 1, 1)',
    },
    '100%': {
        '-webkit-transform': 'scale3D(1, 1, 1)',
        transform: 'scale3D(1, 1, 1)',
    }
})

export const Grid = styled('div', {
    width: '40px',
    height: '40px',
    margin: '20px auto',
});

export const Cube = styled('div', {
    width: '33%',
    height: '33%',
    float: 'left',
    bc: '$accentSolid',
    border: '3% solid $accentBorder',

    '&:hover': {
        bc: 'white',
        borderColor: '$accentFocusRing'
    },

    variants: {
        animation: {
            '1': {
                '-webkit-animation': `${cubeGridScaleDelay} 1.3s infinite ease-in-out`,
                animation: `${cubeGridScaleDelay} 1.3s infinite ease-in-out`,
            },
        },
        delay: {
            '0': {
                '-webkit-animation-delay': '0s',
                animationDelay: '0s',
            },
            '1': {
                '-webkit-animation-delay': '0.1s',
                animationDelay: '0.1s',   
            },
            '2': {
                '-webkit-animation-delay': '0.2s',
                animationDelay: '0.2s',
            },
            '3': {
                '-webkit-animation-delay': '0.3s',
                animationDelay: '0.3s'
            },
            '4': {
                '-webkit-animation-delay': '0.4s',
                animationDelay: '0.4s'
            },
        },
        color: {
            '1': { bc: '$accentBg' },
            '2': { bc: '$accentBgHover' },
            '3': { bc: '$accentBgActive' },
            '4': { bc: '$accentLine' },
            '5': { bc: '$accentSolid' },
            '6': { bc: '$accentSolidHover' },
            '7': { bc: '$accentSolidActive' },
            '8': { bc: '$accentBorder' },
            '9': { bc: '$accentBorderHover' },
            '10': { bc: '$accentBorderActive' },
            '11': { bc: '$accentText' },
            '12': { bc: '$accentTextContrast' },
        }
    },
    defaultVariants: {
        animation: '1',
        delay: '0',
        color: '5'
    }
})
