import { styled } from '../../stitches.config'
import { spin, ripple } from 'styles/keyframes/index'


export const StyledSpinner = styled('div', {    
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    display: 'inline-flex',
    margin: '0em',
    padding: '0em',
    aspectRatio: '1 / 1',

    border: '1px solid $accentText',
    borderLeftColor: '$accentTextContrast',

    variants: {
        size: {
            1: { height: '14px', width: '14px' },
            2: { height: '16px', width: '16px' },
            3: { height: '20px', width: '20px' },
            4: { height: '24px', width: '24px' },
            5: { height: '28px', width: '28px' },
            6: { height: '36px', width: '36px' },
            7: { height: '44px', width: '44px' },
            8: { height: '52px', width: '52px' }
        },
        speed: {
            1: { animation: `${spin} 4000ms linear infinite`  },
            2: { animation: `${spin} 2500ms linear infinite` },
            3: { animation: `${spin} 1500ms linear infinite` },
            4: { animation: `${spin} 1000ms linear infinite` },
            5: { animation: `${spin} 500ms linear infinite` }
        },
        radius: {
            0: { br: '0%' },
            1: { br: '10%' },
            2: { br: '25%' },
            3: { br: '50%' },
            4: { br: '75%' },
            5: { br: '100%' }
        }
    },
    defaultVariants: {
        size: '3',
        speed: '3',
        radius: '3'
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