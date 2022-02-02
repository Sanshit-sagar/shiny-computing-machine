import { styled } from '../../stitches.config'
import { spin, ripple } from 'styles/keyframes/index'


export const StyledSpinner = styled('div', {

    '@property': {

    },

    d: 'inline-block',
    m: '$1',
    p: 0,

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$accentBg',
    borderLeftColor: '$accentSolid',
    '&:hover': {
        borderLeftColor: '$accentBorderHover',
    },


    variants: {
        size: {
            1: { size: '22px', borderWidth: '1px' },
            2: { size: '28px', borderWidth: '1.5px' },
            3: { size: '36px', borderWidth: '2px' },
            4: { size: '44px', borderWidth: '2.5px' },
            5: { size: '52px', borderWidth: '3px' }
        },
        speed: {
            1: { animation: `${spin} 4000ms linear infinite`  },
            2: { animation: `${spin} 2500ms linear infinite` },
            3: { animation: `${spin} 1500ms linear infinite` },
            4: { animation: `${spin} 1000ms linear infinite` },
            5: { animation: `${spin} 500ms linear infinite` }
        },
        radius: {
            1: { br: '25%' },
            2: { br: '40%' },
            3: { br: '60%' },
            4: { br: '80%' },
            5: { br: '100%' }
        }
    },
    defaultVariants: {
        size: '2',
        speed: '5',
        radius: '5'
    }
})

export const StyledWave = styled('div', {
    borderColor: '$accentSolid',
    borderStyle: 'solid',

    variants: {
        size: {
            1: { borderWidth: '1px' },
            2: { borderWidth: '2px' },
            3: { borderWidth: '4px' },
            4: { borderWidth: '8px' },
            5: { borderWidth: '12px' },
        }
    },
    defaultVariants: {
        size: 1
    }
})

export const StyledRipple = styled('div', {
    d: 'inline-block',
    position: 'relative',

    '& div': {
        position: 'absolute',
        opacity: 1,
        br: '50%'
    },

    variants: {
        size: {
            1: { size: '40px' },
            2: { size: '60px' },
            3: { size: '80px' },
            4: { size: '100px' },
            5: { size: '120px' }
        },
        speed: {
            1: { 
                '& div': {
                    animation: `${ripple} 5s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
                    '& div:nth-child(2)': { animationDelay: '-2500ms' },
                    '& div:nth-child(3)': { animationDelay: '-1250ms' }
                }
            },
            2: {
                '& div': {
                    animation: `${ripple} 3s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
                    '& div:nth-child(2)': { animationDelay: '-1500ms' },
                    '& div:nth-child(3)': { animationDelay: '-750ms' }
                }
            },
            3: {
                '& div': {
                    animation: `${ripple} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
                    '& div:nth-child(2)': { animationDelay: '-1000ms' },
                    '& div:nth-child(3)': { animationDelay: '-500ms' }
                }
            },
            4: {
                '& div': {
                    animation: `${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
                    '& div:nth-child(2)': { animationDelay: '-500ms' },
                    '& div:nth-child(3)': { animationDelay: '-250ms' }
                }
            }, 
            5: {
                '& div': {
                    animation: `${ripple} 500ms cubic-bezier(0, 0.2, 0.8, 1) infinite`,
                    '& div:nth-child(2)': { animationDelay: '-250ms' },
                    '& div:nth-child(3)': { animationDelay: '-125ms' }
                }
            }
        }
    },
    defaultVariants: {
        size: '4',
        speed: '4'
    }
})