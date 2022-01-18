import { styled, keyframes } from '../../../stitches.config'

export const stretchdelay = keyframes({
    '0%': { 
        transform: 'scaleY(0.4)',
        '-webkit-transform': 'scaleY(0.4)'
    },
    '20%': { 
        transform: 'scaleY(1.0)',
        '-webkit-transform': 'scaleY(1.0)'
    },
    '40%': { 
        transform: 'scaleY(0.4)',
        '-webkit-transform': 'scaleY(0.4)'
    },
    '100%': { 
        transform: 'scaleY(0.4)',
        '-webkit-transform': 'scaleY(0.4)'
    }
});

export const BarsContainer = styled('div', {
    width: '50px',
    height: '40px',
    margin: '20px auto',

    textAlign: 'center',
    fontSize: '10px'
});

export const ScaledBar = styled('div', {
    height: '100%',
    width: '6px',
    display: 'inline-block',
    
    '-webkit-animation': `${stretchdelay} 1.2s infinite ease-in-out`,
    animation: `${stretchdelay} 1.2s infinite ease-in-out`,

    variants: {
        delay: {
            1: {
                '-webkit-animation-delay': '-1.2s',
                animationDelay: '-1.2s',
                bc: '$accentLine',
            },
            2: {
                '-webkit-animation-delay': '-1.1s',
                animationDelay: '-1.1s',
                bc: '$accentBorder'
            },
            3: {
                '-webkit-animation-delay': '-1.0s',
                animationDelay: '-1.0s',
                bc: '$accentSolid'
            },
            4: {
                '-webkit-animation-delay': '-0.9s',
                animationDelay: '-0.9s',
                bc: '$accentText'
            },
            5: {
                '-webkit-animation-delay': '-0.8s',
                animationDelay: '-0.8s',
                bc: '$accentTextContrast'
            }
        }
    },
    defaultVariants: {
        delay: '1'
    }
})