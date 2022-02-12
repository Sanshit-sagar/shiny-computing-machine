import React, { forwardRef, ReactNode } from 'react'
import { styled, VariantProps, CSS } from 'stitches.config'

import { Flex } from '@/components/Flex'
import { Spinner } from '@/components/Spinner/Spinner'

import {
    slideDownAndFade,
    slideUpAndFade,
    slideLeftAndFade,
    slideRightAndFade
} from 'styles/keyframes'


const animationDuration = '0.3s'
const animationFunction = 'cubic-bezier(0.16, 1, 0.3, 1)'

const StyledTrigger = styled('button', {
    border: '1px solid black',
    padding: '$2',
    borderRadius: '$2',

    fontSize: '$2',
    fontFamily: '$plexsans',
    lineHeight: 1,

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$black3',
                color: '$white3'
            },
            false: {
                backgroundColor: '$black1',
                color: '$white1'
            }
        },
        isFocused: {
            true: {},
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

const arrowBorder = '1px solid rgba(240,240,240,0.2)'

export const StyledArrow = styled('div', {
    zIndex: 100,
    bc: 'inherit',
    height: '8px',
    width: '8px',
    
    borderLeft: `${arrowBorder}`,
    borderBottom: `${arrowBorder}`,

    variants: {
        placement: {
            'top': { transform: 'rotate(-45deg)' },
            'bottom': { transform: 'rotate(135deg)' },
            'left': { transform: 'rotate(45deg)'  },
            'right': { transform: 'rotate(225deg)' }
        }
    },
    defaultVariants: {
        placement: 'top'
    }
})
 
export const StyledTooltip = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'pre-line',
    pointerEvents: 'none',

    display: 'block',
    padding: '$1',
    margin: '0em',

    backgroundColor: '$black1',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '$2',

    willChange: 'transform, opacity',

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
        placement: {
            top: { animation: `${slideUpAndFade} ${animationDuration} ${animationFunction}` },
            bottom: { animation: `${slideDownAndFade} ${animationDuration} ${animationFunction}` },
            left: { animation: `${slideLeftAndFade} ${animationDuration} ${animationFunction}` },
            right: { animation: `${slideRightAndFade} ${animationDuration} ${animationFunction}` }
        }
    },
    defaultVariants: {
        isVisible: false,
        placement: 'top'
    }
})

export const StyledContent = styled('span', {
    position: 'relative',
    top: 0,
    left: 0,
    width: 'fit-content', 
    height: 'fit-content', 
    minWidth: '125px',
    padding: '0em',
    margin: '0em',

    whiteSpace: 'break-line',
    visibility: 'inherit', 
    opacity: 'inherit', 
    overflow: 'hidden', 

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0em',
    flexWrap: 'wrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    varticalAlign: 'middle',

    fontSize: '$2',
    fontFamily: '$plexsans',
    fontWeight: 'normal',
    lineHeight: '$2',
    fontVariant: 'tabular',
    color: '$white1'
})

const StyledRoot = styled('span', {
    position: 'relative'
})

type RootProps = VariantProps<typeof StyledRoot> & { css?: CSS; children: ReactNode;  }
export const StyledTooltipRoot = forwardRef<HTMLSpanElement, RootProps>((props, forwardedRef) => (
    <StyledRoot {...props} ref={forwardedRef} />
))

type ContainerProps  =  VariantProps<typeof StyledTooltip> & { css?: CSS; children: ReactNode; } 
export const StyledTooltipContainer = forwardRef<HTMLDivElement, ContainerProps>((props, forwardedRef) => (
    <StyledTooltip id="tooltip" role="tooltip" {...props} ref={forwardedRef} />
))

type TriggerProps  =  VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledTooltipTrigger = forwardRef<HTMLButtonElement, TriggerProps>((props, forwardedRef) => (
    <StyledTrigger id="button" aria-describedby="tooltip" {...props} ref={forwardedRef} />      
))

type ContentProps = VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledTooltipContent = forwardRef<HTMLSpanElement, ContentProps>((props, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef} /> 
))

type ArrowProps  =  VariantProps<typeof StyledArrow> & { css?: CSS; }
export const StyledTooltipArrow = forwardRef<HTMLDivElement, ArrowProps>((props, forwardedRef) => (
    <StyledArrow id="arrow" {...props} ref={forwardedRef} />     
))

StyledTooltipArrow.toString = () => '.styled-tooltip-arrow';

const StyledSpinnerContainer = styled(Flex, {
    fd: 'row', 
    jc: 'flex-end',
    ai: 'center',
    gap: 0, 
    ml: '$2' 
})

export const TooltipSpinner = () => (
    <StyledSpinnerContainer>
        <Spinner size='1' /> 
    </StyledSpinnerContainer>
)