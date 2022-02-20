import React, { forwardRef, ReactNode } from 'react'
import { styled, VariantProps, CSS } from 'stitches.config'

import { Spinner } from '@/components/Spinner/Spinner'

import {
    slideDownAndFade,
    slideUpAndFade,
    slideLeftAndFade,
    slideRightAndFade
} from 'styles/keyframes'

const StyledTrigger = styled('button', {
    backgroundColor: '$black1',
    color: '$white1',
    border: '1px solid $white1',
    padding: '$2',
    borderRadius: '$2',

    fontSize: '$2',
    fontFamily: '$plexsans',
    lineHeight: 1,

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$white1',
                color: '$black1',
                borderColor: '$black1'
            },
            false: null
        },
        isFocused: {
            true: {
                backgroundColor: '$white1',
                color: '$black1',
                borderColor: '$black1'
            },
            false: {}
        },
        isPressed: {
            true: {},
            false: {}
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false
    }
})


export const StyledArrow = styled('div', {
    position: 'absolute',
    height: '8px',
    width: '8px',
    zIndex: 100,

    backgroundColor: 'inherit',
    borderLeft: '1px solid $accentBorder',
    borderBottom: '1px solid $accentBorder',

    borderRadius: '0.1em',
    
    variants: {
        placement: {
            'top': { transform: 'rotate(-45deg)', right: '35%', bottom: '0em'  },
            'bottom': { transform: 'rotate(135deg)', right: '35%', top: '0em' },
            'left': { transform: 'rotate(225deg)', right: '0em', top: '35%'  },
            'right': { transform: 'rotate(45deg)', left: '0em', top: '35%' }
        }
    },
    defaultVariants: {
        placement: 'top'
    }
})

export const StyledContent = styled('div', {
    position: 'relative',
    top: 0,
    left: 0,
    height: 'inherit',
    width: 'inherit',
    padding: '$1',
    margin: '0em',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    verticalAlign: 'center',
    textAlign: 'center',

    whiteSpace: 'break-line',
    pointerEvents: 'none',
    visibility: 'inherit', 
    opacity: 'inherit', 
    overflow: 'hidden', 

    textOverflow: 'ellipsis',
    fontSize: '$2',
    fontFamily: '$plexsans',
    fontWeight: 'normal',
    lineHeight: '$1',
    fontVariant: 'tabular',

    color: '$accentTextContrast',

    variants: {
        isLoading: {
            true: {
                justifyContent: 'space-between',
                gap: '$1'
            },
            false: {
                justifyContent: 'center',
                gap: '$2'
            }
        }
    },
    defaultVariants: {
        isLoading: false
    }
})

const StyledContainer = styled('div', {
    all: 'unset',
    margin: '0em',
    padding: '0.25em 0.15em',

    width: 'fit-content', 
    height: 'fit-content', 

    backgroundColor: '$accentLine',
    border: '1px solid $accentBorder',
    borderRadius: '$2',

    variants: {
        isVisible: {
            true: {
                visibility: 'visible',
                opacity: 1
            },
            false: {
                visibility: 'hidden',
                opacity: 0
            }
        },
        isLoading: {
            true: {
                minWidth: '200px',
                maxWidth: '275px',
                minHeight: '27.5px',
            },
            false: {
                minWidth: '150px',
                maxWidth: '225px',
                minHeight: '20px'
            }
        },
        placement: {
            top: { animation: `${slideUpAndFade} 300ms ease` },
            bottom: { animation: `${slideDownAndFade} 300ms ease` },
            left: { animation: `${slideLeftAndFade} 300ms ease` },
            right: { animation: `${slideRightAndFade} 300ms ease` }
        }
    },
    defaultVariants: {
        isVisible: false,
        isLoading: false,
        placement: 'right'
    }
})

const StyledRoot = styled('span', {
    position: 'relative'
})

type RootProps = VariantProps<typeof StyledRoot> & { css?: CSS; children: ReactNode;  }
export const StyledTooltipRoot = forwardRef<HTMLSpanElement, RootProps>((props, forwardedRef) => (
    <StyledRoot {...props} ref={forwardedRef} />
))

type ContainerProps  =  VariantProps<typeof StyledContainer> & { css?: CSS; children: ReactNode; } 
export const StyledTooltipContainer = forwardRef<HTMLDivElement, ContainerProps>((props, forwardedRef) => (
    <StyledContainer id="tooltip" role="tooltip" {...props} ref={forwardedRef} />
))

type TriggerProps  =  VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledTooltipTrigger = forwardRef<HTMLButtonElement, TriggerProps>((props, forwardedRef) => (
    <StyledTrigger id="button" aria-describedby="tooltip" {...props} ref={forwardedRef} />      
))

type ContentProps = VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledTooltipContent = forwardRef<HTMLSpanElement, ContentProps>((props, forwardedRef) => (
    <StyledContent id="tooltip" role="tooltip" {...props} ref={forwardedRef} /> 
))

type ArrowProps  =  VariantProps<typeof StyledArrow> & { css?: CSS; }
export const StyledTooltipArrow = forwardRef<HTMLDivElement, ArrowProps>((props, forwardedRef) => (
    <StyledArrow id="arrow" {...props} ref={forwardedRef} />     
))

StyledTooltipArrow.toString = () => '.styled-tooltip-arrow'

export const TooltipSpinner = () =>  <Spinner size='3' radius='3' speed='3' /> 