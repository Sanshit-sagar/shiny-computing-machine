import { styled } from 'stitches.config'

export const StyledRange = styled('input', {
    appearance: 'none',
    background: 'none',
    cursor: 'pointer',
    width: '15em',

    '&:focus': {
        outline: 'none',
    },

    '&::-webkit-slider-runnable-track': {
        backgroundColor: '$accentLine',
        borderRadius: '0.5em',
        height: '0.5em',
    },

    '&::-webkit-slider-thumb': {
        apperance: 'none',
        marginTop: '-12px',
        backgroundColor: '$accentSolid',
        height: '2rem',
        width: '1rem',

        '&:focus': {
            border: '1px solid $accentBorder', 
            outline: '3px solid $accentFocusRing', 
            outlineOffset: '0.125rem',     
        }
    },

    '&::-moz-range-track': {
        backgroundColor: '$accentLine',
        borderRadius: '0.5rem',
        height: '0.5rem',
    },

    '&::-moz-range-thumb': {
        border: 'none',
        borderRadius: 0,
        backgroundColor: '$accentSolid',
        height: '2rem',
        width: '1rem',

        '&:focus': {
            border: '1px solid $accentBorder',
            outline: '3px solid $accentFocusRing',
            outlineOffset: '0.125rem', 
        }
    },
})