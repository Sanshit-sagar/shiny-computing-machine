import { styled, keyframes } from '../../../stitches.config'

export const foldCubeAngle = keyframes({
    '0%': {
        '-webkit-transform': `perspective(140px) rotateX(-180deg)`,
        transform: `perspective(140px) rotateX(-180deg)`,
        opacity: 0
    },
    '10%': {
        '-webkit-transform': `perspective(140px) rotateX(-180deg)`,
        transform: `perspective(140px) rotateX(-180deg)`,
        opacity: 0
    },
    '25%': {
        '-webkit-transform': `perspective(140px) rotateX(0deg)`,
        transform: `perspective(140px) rotateX(0deg)`,
        opacity: 1
    },
    '75%': {
        '-webkit-transform': `perspective(140px) rotateX(0deg)`,
        transform: `perspective(140px) rotateX(0deg)`,
        opacity: 1
    },
    '90%': {
        '-webkit-transform': `perspective(140px) rotateY(180deg)`,
        transform: `perspective(140px) rotateY(180deg)`,
        opacity: 0
    },
    '100%': {
        '-webkit-transform': `perspective(140px) rotateY(180deg)`,
        transform: `perspective(140px) rotateY(180deg)`,
        opacity: 0
    }
})

export const FoldingCube = styled('div', {
    width: '40px',
    height: '40px',
    margin: '20px auto',
    '-webkit-transform': 'rotate(45deg)',
    transform: 'rotate(45deg)'
})

export const FoldedCube = styled('div', {
    float: 'left',
    width: '50%',
    height: '50%',
    position: 'relative',
    '-webkit-transform': 'scale(1.1)',
    '-ms-transform': 'scale(1.1)',
    transform: 'scale(1.1)',

    '&::before': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        '-webkit-animation': `${foldCubeAngle} 2.4s infinite linear both`,
        animation: `${foldCubeAngle} 2.4s infinite linear both`,
        '-webkit-transform-origin': '100% 100%',
        '-ms-transform-origin': '100% 100%',
        transformOrigin: '100% 100%',
    },
    variants: {
        animation: {
            '1': {
                bc: '$accentBgHover',
                '-webkit-transform': `scale(1.1) rotateZ(0deg)`,
                transform: `scale(1.1) rotateZ(0deg)`,
                '&::before': {
                    '-webkit-animation-delay': '0s',
                    animationDelay: '0s',
                    backgroundColor: '$accentBorder'
                }
            },
            '2': {
                bc: '$accentLine',
                '-webkit-transform': `scale(1.1) rotateZ(90deg)`,
                transform: `scale(1.1) rotateZ(90deg)`,
                '&::before': {
                    '-webkit-animation-delay': '0.3s',
                    animationDelay: '0.3s',
                    backgroundColor: '$accentSolid'
                }
            },
            '3': {
                bc: '$accentBorder',
                '-webkit-transform': `scale(1.1) rotateZ(180deg)`,
                transform: `scale(1.1) rotateZ(180deg)`,
                '&::before': {
                    '-webkit-animation-delay': '0.6s',
                    animationDelay: '0.6s',
                    backgroundColor: '$accentText'
                }
            },
            '4': {
                bc: '$accentSolid',
                '-webkit-transform': `scale(1.1) rotateZ(270deg)`,
                transform: `scale(1.1) rotateZ(270deg)`,
                '&::before': {
                    '-webkit-animation-delay': '0.9s',
                    animationDelay: '0.9s',
                    backgroundColor: '$accentTextContrast'
                }
            }
        },
    },
    defaultVariants: {
        animation: '1'
    }
});
