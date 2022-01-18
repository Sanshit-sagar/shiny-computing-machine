import React, { forwardRef, ElementRef, ReactNode } from 'react'
import { styled, keyframes } from '../../stitches.config'

const slideUpAndFade = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translateY(2px)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translateY(0)' 
    },
});
  
const slideRightAndFade = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translateX(-2px)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translateX(0)' 
    },
});
  
const slideDownAndFade = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translateY(-2px)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translateY(0)' 
    },
});
  
const slideLeftAndFade = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translateX(2px)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translateX(0)' 
    },
});

export const StyledTooltip = styled('span', {
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    userSelect: 'none',
    
    position: 'absolute',
    height: 'fit-content',
    width: 'fit-content',
    left: '0%',
    bottom: '100%',
    mb: '$2',

    bc: '$accentBg',
    border: '1px solid $accentBorder',
    br: '$2',
    p: '$2',

    fontSize: '$2',
    fontFamily: '$hack',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$accentTextContrast',

    $$shadowColor: '$colors$accentSolid',
    boxShadow: `
        0px 1px 12.5px -10px $$shadowColor, 
        0px 2px 10px -5px $$shadowColor
    `,

    willChange: 'transform, opacity',
    animation: `${slideUpAndFade} 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,

    variants: {
        intent: {
            'success': null,
            'danger': null,
            'warning': null,
            'accent': null,
        },
    },
    defaultVariants: {
        intent: 'accent'
    }
})
