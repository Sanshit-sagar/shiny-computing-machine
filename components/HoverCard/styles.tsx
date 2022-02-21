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

const cssVars: CSS = {
    '--popover-min-width':  '150px',
    '--popover-max-width':  '200px',
    '--popover-min-height': '25px',
    '--popover-max-height': '25px',

    '--loading-spinner-size-1': '25px',
    '--loading-spinner-size-2': '50px',
    '--loading-spinner-size-3': '75px',

    '--popover-active-loading-spinner': '--loading-spinner-size-2',

    '--popover-min-width-loading': 'calc(var(--popover-min-width) + var(var(--popover-active-loading-spinner)))',
    '--popover-max-width-loading': 'calc(var(--popover-max-width) + var(var(--popover-active-loading-spinner)))',
    '--popover-min-height-loading': 'calc(var(--popover-max-width) + 7.5px)',
    '--popover-max-height-loading': 'calc(var(--popover-max-width) + 7.5px)',

    '--popover-margin-x': '0em',
    '--popover-margin-y': '0em',
    '--popover-padding-x': '0.25em',
    '--popover-padding-y': '0.15em',

    '--popover-border-width': '0.075em',
    '--popover-border-style': 'solid',
    '--popover-border-color': '$colors$accentBorder',
    '--popover-border-radius': '$sizes$2',

}

const StyledContainer = styled('div', {
    ...cssVars,

    all: 'unset',
    margin: 'var(--popover-margin-x) var(--popover-margin-y)',
    padding: 'var(--popover-padding-x) var(--popover-padding-y)',


    width: 'fit-content', 
    height: 'fit-content',
    minWidth: 'var(--popover-min-width)',
    maxWidth: 'var(--popover-max-width)',
    minHeight: 'var(--popover-min-height)',
    maxHeight: 'var(--popover-max-height)',

    backgroundColor: '$accentLine',
    border: 'var(--popover-border-width) var(--popover-border-style) var(--popover-border-color)',
    borderRadius: 'var(--popover-border-radius)',

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
                minWidth: 'var(--popover-min-width-loading)',
                maxWidth: 'var(--popover-max-width-loading)',
                minHeight: 'var(--popover-min-height-loading)',
                maxHeight: 'var(--popover-max-height-loading)'
            },
            false: null
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
export const StyledPopoverRoot = forwardRef<HTMLSpanElement, RootProps>((props, forwardedRef) => (
    <StyledRoot {...props} ref={forwardedRef} />
))

type ContainerProps  =  VariantProps<typeof StyledContainer> & { css?: CSS; children: ReactNode; } 
export const StyledPopoverContainer = forwardRef<HTMLDivElement, ContainerProps>((props, forwardedRef) => (
    <StyledContainer id="Popover" role="Popover" {...props} ref={forwardedRef} />
))

type TriggerProps  =  VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledPopoverTrigger = forwardRef<HTMLButtonElement, TriggerProps>((props, forwardedRef) => (
    <StyledTrigger id="button" aria-describedby="Popover" {...props} ref={forwardedRef} />      
))

type ContentProps = VariantProps<typeof StyledContent> & { css?: CSS; children: ReactNode; }
export const StyledPopoverContent = forwardRef<HTMLSpanElement, ContentProps>((props, forwardedRef) => (
    <StyledContent id="Popover" role="Popover" {...props} ref={forwardedRef} /> 
))

type ArrowProps  =  VariantProps<typeof StyledArrow> & { css?: CSS; }
export const StyledPopoverArrow = forwardRef<HTMLDivElement, ArrowProps>((props, forwardedRef) => (
    <StyledArrow id="arrow" {...props} ref={forwardedRef} />     
))

StyledPopoverArrow.toString = () => '.styled-Popover-arrow'

export const PopoverSpinner = () =>  <Spinner size='3' radius='3' speed='3' /> 