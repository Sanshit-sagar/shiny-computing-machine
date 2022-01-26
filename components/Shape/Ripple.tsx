import { styled, CSS } from 'stitches.config'
import { sharedStyles } from './SharpCorners' 


export const rippleableCss: CSS = {
    backgroundPosition: 'center',
    transition: 'background 0.8s',

    '&:hover': {
        bc: '$accentSolid',
        backgroundImage: 'radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%',
    },
    '&:active': {
        bc: '$accentFocusRing',
        backgroundSize: '100%',
        transition: 'background 0s'
    }
}

export const StyledPushableBase: CSS = styled('button', {
    appearance: 'button',
    userSelect: 'none',

    display: 'inline-block',
    boxSizing: 'border-box',
    borderWidth: '1px',
    br: '0.75em',

    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    lineHeight: '20px',
    letterSpacing: '0.8px',
    padding: '13px 19px',

    textAlign: 'center',
    textTransform: 'uppercase',
    touchAction: 'manipulation',
    transform: 'translateZ(0)',
    transition: 'filter 0.2s ease',

    bc: '$accentBg',
    color: '$accentText',
    borderColor: '$accentBorder',

    '&::after': {
        backgroundClip: 'padding-box',
        backgroundColor: '$accentBorder',
        border: 'solid transparent',
        br: '0.75em',
        borderWidth: '0 0 4px',
        bottom: '-4px',
        content: "",
        left: '0px',
        position: 'absolute',
        right: '0px',
        top: '0px',
        zIndex: -1,

        '&:active': {
            borderWidth: '0px',
        }
    },

    '&:hover': {
        '&:not(:disabled)': {
            bc: '$accentBgHover',
            color: '$accentTextContrast',
            borderColor: '$accentBorderHover',
            filter: 'brightness(1.1)'
        },
        '&:disabled': {
            bc: '$disabledBg',
            color: '$disabledText',
            borderColor: '$accentFocusRing',
            cursor: 'not-allowed'
        },
    },
    '&:active': {
        '&:not(:disabled)': {
            bc: '$accentBgActive',
            color: '$accentTextContrast',
            borderColor: '$disabledBorder',
            filter: 'brightness(1.1)'
        }
    },
})

export const PushableButton = () => (
    <StyledPushableBase>
        Button 
    </StyledPushableBase>
)