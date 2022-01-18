import { styled, keyframes } from '../../../stitches.config'

export const rotateplane = keyframes({
    '0%': { 
        transform: `perspective(120px) rotateX(0deg) rotateY(0deg)`,
        '-webkit-transform': `perspective(120px) rotateX(0deg) rotateY(0deg)`,
    }, 
    '50%': { 
        transform: `perspective(120px) rotateX(-180.1deg) rotateY(0deg)`,
        '-webkit-transform': `perspective(120px) rotateX(-180.1deg) rotateY(0deg)`,
    },
    '100%': { 
        transform: `perspective(120px) rotateX(-180deg) rotateY(-179.9deg)`,
        '-webkit-transform': `perspective(120px) rotateX(-180deg) rotateY(-179.9deg)`
    }
})


export const Flipped = styled('div', {
    width: '40px',
    height: '40px',
    bc: '$accentSolid',
    margin: '20px auto',
    '&:hover': {
        bc: '$accentSolidHover'
    },
    '&:focus': {
        bc: '$accentSolidActive'
    },

    '-webkit-animation': `${rotateplane} 1.2s infinite ease-in-out`,
    animation: `${rotateplane} 1.2s infinite ease-in-out`
})

