import React, { forwardRef, ComponentPropsWithoutRef } from 'react'
import { styled, VariantProps, CSS } from 'stitches.config'
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
 
type ArrowProps  =  VariantProps<typeof StyledArrow> & { css?: CSS; }
export const StyledTooltipArrow = forwardRef<HTMLDivElement, ArrowProps>(
    ({ placement, ...props }, forwardedRef) => (
        <StyledArrow id="arrow" placement={placement} {...props} ref={forwardedRef} />       
    ))

StyledTooltipArrow.toString = () => '.styled-tooltip-arrow';


const StyledTooltip = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'pre-line',
    pointerEvents: 'none',

    display: 'block',
    padding: '0em',
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
        position: {
            top: { animation: `${slideUpAndFade} ${animationDuration} ${animationFunction}` },
            bottom: { animation: `${slideDownAndFade} ${animationDuration} ${animationFunction}` },
            left: { animation: `${slideLeftAndFade} ${animationDuration} ${animationFunction}` },
            right: { animation: `${slideRightAndFade} ${animationDuration} ${animationFunction}` }
        }
    },
    defaultVariants: {
        isVisible: false,
        position: 'top'
    }
})

export const StyledTooltipContent = styled('div', {
    position: 'relative',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
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
    lineHeight: '$3',
    fontVariant: 'tabular',
    color: '$white1'
})

type TooltipProps  =  VariantProps<typeof StyledTooltip> & { css?: CSS; children: ReactNode; } 
export const StyledTooltipContainer = forwardRef<HTMLDivElement, TooltipProps>((props, forwardedRef) => (
    <StyledTooltip id="tooltip" role="tooltip" {...props} ref={forwardedRef} />
))

type TriggerProps  =  VariantProps<typeof StyledTrigger> & { css?: CSS; children: ReactNode; }
export const StyledTooltipTrigger = forwardRef<HTMLDivElement, TriggerProps>((props, forwardedRef) => (
    <StyledTrigger id="button" aria-describedby="tooltip" {...props} ref={forwardedRef} />      
))