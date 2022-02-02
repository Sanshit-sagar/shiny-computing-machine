import { styled } from 'stitches.config'
import { pulse, reversePulse } from 'styles/keyframes/index' 

const StyledEqualizer = styled('div', {
    d: 'flex',
    ai: 'center',
    gap: '8px',

    width: 'max-content',
    height: '48px',
    margin: '200 auto auto',
    willChange: 'transform, height',
   
    '& span': {
        width: '8px',
        bc: '$accentSolid',
        br: '$2'
    },

    variants: {
        size: {
            1: {
                '& .left': { height: '24px' },
                '& .mid': { height: '12px' },
                '& .right': { height: '24px' }
            },
            2: {
                '& .left': { height: '48px' },
                '& .mid': { height: '24px' },
                '& .right': { height: '48px' }
            },
        },
        speed: {
            1: {
                '& .left': { animation: `${pulse} 0.75s infinite` },
                '& .mid': { animation: `${reversePulse} 0.75s infinite` },
                '& .right': { animation: `${pulse} 0.75s infinite` }
            },
            2: {
                '& .left': { animation: `${pulse} 1s infinite` },
                '& .mid': { animation: `${reversePulse} 1s infinite` },
                '& .right': { animation: `${pulse} 1s infinite` }
            },  
            3: {
                '& .left': { animation: `${pulse} 1.5s infinite` },
                '& .mid': { animation: `${reversePulse} 1.5s infinite` },
                '& .right': { animation: `${pulse} 1.5s infinite` }
            },
            4: {
                '& .left': { animation: `${pulse} 2s infinite` },
                '& .mid': { animation: `${reversePulse} 2s infinite` },
                '& .right': { animation: `${pulse} 2s infinite` }
            },
            5: {
                '& .left': { animation: `${pulse} 2.5s infinite` },
                '& .mid': { animation: `${reversePulse} 2.5s infinite` },
                '& .right': { animation: `${pulse} 2.5s infinite` }
            }
        },
    },
    defaultVariants: {
        size: '1',
        speed: '5'
    }
})


export const Equalizer = () => (
    <StyledEqualizer speed="1">
        <span className="left"></span>
        <span className="mid"></span>
        <span className="right"></span> 
    </StyledEqualizer>
)

Equalizer.displayName = 'Equalizer'
