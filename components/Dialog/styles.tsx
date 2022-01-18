import React from 'react'

import { styled, keyframes } from 'stitches.config'

import { H4 } from '@/components/Text/Heading'
import { Text } from '@/components/Text'

import { 
    DialogTitleProps, 
    DialogSubtitleProps 
} from './types'

import {
    primaryVariant,
    secondaryVariant,
    outlinedVariant,
    infoVariant,
    warningVariant,
    dangerVariant,
    successVariant
} from '@/components/Button/variants'

const overlayShow = keyframes({
    '0%': { 
        opacity: 0 
    },
    '100%': { 
        opacity: 1 
    }
})

const contentShow = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translate(-50%, -48%) scale(.96)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translate(-50%, -50%) scale(1)' 
    }
})

export const StyledContainer = styled('div', {
    bc: 'transparent'
})

export const StyledOverlay = styled('div', {
    position: 'fixed',
    inset: 0,
    bc: 'rgba(0,0,0,0.3)',
    d: 'flex',
    ai: 'center',
    jc: 'center',
    zIndex: 100
})

export const StyledContent = styled('div', {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    bc: '$accentBase',
    color: '$accentText',
    br: '$4',
    p: 0,
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: 0,
  

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&:focus': { 
        outline: 'none' 
    }
})

export const StyledBody = styled('div', {
    appearance: 'none',
    us: 'none',
    whiteSpace: 'wrap',

    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    gap: 0,
    fw: 'nowrap',

    width: '100%',
    height: 'inherit',
    maxHeight: '30vh',

    ox: 'hidden',
    oy: 'hidden',

    p: 0,
    px: '$5',
    m: 0,

    bc: '$accentBase',
    br: 'inherit',
    bblr: 0,
    bbrr: 0
})

export const StyledTitle = styled('h2', {
    fontFamily: '$mono', 
    fontWeight: 500, 
    fontSize: 48, 
    my: '$4',
    mx: '$5', 
    p: 0
})

export const StyledSubtitle = styled('h4', {
    fontFamily: '$jetbrains', 
    mx: '$5',
    my: 0,
    p: 0
})

export const StyledCloseButton = styled('button', {
    position: 'absolute',
    top: 0, 
    right: 0,
    size: 50,

    display: 'inline-flex',
    jc: 'center',
    ai: 'center',

    br: '0',
    bblr: '50%',
    btrr: '$4',

    variants: {
        variant: {
            warning: warningVariant,
            success: successVariant,
            danger: dangerVariant,
            info: infoVariant,
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

export const StyledActionArea = styled('button', {
    width: '100%',
    display: 'flex',
    fd: 'row',
    jc: 'space-evenly',
    ai: 'stretch',
    gap: 0,

    m: 0,
    p: 0,

    btlr: 0,
    btrr: 0,
    bblr: 'inherit',
    bbrr: 'inherit',
    
    bc: 'transparent'
})

export const StyledActionButton = styled('button', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTouchHighlightColor: 'transparent',

    width: '100%',
    height: '50px',

    m: 'auto',
    p: '$2',

    border: '0',
    br: 0,
    bblr: 'inherit',
    bbrr: 'inherit',

    d: 'flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',

    '&:first-child': {
        bbrr: 0,
        btrr: 0
    },
    '&:last-child': {
        bblr: 0,
        btlr: 0
    },

    variants: {
        variant: {
            warning: warningVariant,
            success: successVariant,
            danger: dangerVariant,
            info: infoVariant,
            primary: primaryVariant,
            secondary: secondaryVariant,
            outlined: outlinedVariant,
        }
    },
    defaultVariants: {
        variant: 'primary'
    }    
})