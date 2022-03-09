import React, { forwardRef, ElementType, ReactNode, ComponentProps } from 'react'
import { styled, VariantProps, CSS } from 'stitches.config'

import {
    slideDownAndFade,
    slideUpAndFade,
    slideLeftAndFade,
    slideRightAndFade
} from 'styles/keyframes'


const cssVars: CSS = {
    '--popover-background': '$colors$white1',
    '--popover-background-disabled': '$colors$disabledBg',
    '--popover-background-hover': '$colors$accentBgHover',
    '--popover-background-active': '$colors$accentBgActive',
    '--popover-background-loading': 'var(--popover-background)',

    '--popover-border-width': '0.075em',
    '--popover-border-style': 'solid',
    '--popover-border-color': '$colors$transparent',
    '--popover-border-radius': '$sizes$2',

    '--popover-min-width':  '150px',
    '--popover-max-width':  '200px',
    '--popover-min-height': '300px',
    '--popover-max-height': '600px',

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
    '--popover-padding-x': '0.35em',
    '--popover-padding-y': '0.25em',

    '--popover-box-shadow': '$colors$white1'
}

export const FollowButton = styled('button', {
    position: 'absolute',
    top: '1rem',
    right: '1rem',

    width: '80px',
    height: '36px',

    cursor: 'pointer',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$accentBorder',
    borderRadius: '9999px',

    backgroundColor: 'rgba(215, 219, 220, 1.0)',
    color: 'rgba(31, 37, 42, 1.0)',

    padding: '0px 16px',

    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: 700,

    textAlign: 'center',

    $$shadowColor: '$colors$black3',
    boxShadow: '0px 0px 2px transparent',

    '&:hover': {
        filter: 'drop-shadow(0px 0px 3px $$shadowColor)'
    }
})

export const StyledCard = styled('div', {
    ...cssVars,

    position: 'relative',

    padding: '0em',
    margin: '0em',
    zIndex: 999,

    backgroundColor: 'inherit',

    borderWidth: '0em',
    borderStyle: 'solid',
    borderColor: 'transparent',
    outline: '2px solid transparent',
    outlineOffset: '2px',

    // $$popoverShadow: '$colors$black1',
    // filter: 'drop-shadow(0 2px 3px $$popoverShadow)',

    borderRadius: '20px',

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
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        placement: {
            'top': { animation: `${slideUpAndFade} 300ms ease` },
            'top-start': { },
            'top-end': { },
            'bottom': { animation: `${slideDownAndFade} 300ms ease` },
            'bottom-start': { },
            'bottom-end': { },
            'left': { animation: `${slideLeftAndFade} 300ms ease` },
            'left-start': { },
            'left-end': { },
            'right': { animation: `${slideRightAndFade} 300ms ease` },
            'right-start': { },
            'right-end': { }
        },
        color: {
            accent: { bc: '$accentSolid', color: '$infoTextContrast' },
            info: { bc: '$infoSolid', color: '$infoText' },
            dark: { bc: '$white1', color: '$black1' },
            light: { bc: '$black1', color: '$white1' },
            default: { bc: 'transparent' }
        }
    },
    defaultVariants: {
        isVisible: false,
        isFocusVisible: false,
        placement: 'left',
        color: 'default'
    }
})


const StyledRoot = styled('div', {
    position: 'relative'
})

type RootProps = VariantProps<typeof StyledRoot> & { css?: CSS; children: ReactNode;  }
export const StyledPopoverRoot = forwardRef<HTMLDivElement, RootProps>((props, forwardedRef) => (
    <StyledRoot {...props} ref={forwardedRef} />
))

type CardProps = VariantProps<typeof StyledCard> & { css?: CSS; children: ReactNode; } 
export const StyledPopoverCard = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => (
    <StyledCard id="Popover" role="Popover" {...props} ref={forwardedRef} />
))

export const StyledPopoverTrigger = styled('a', {
    all: 'unset',
    cursor: 'pointer',
    borderRadius: '100%',
    display: 'inline-block',

    '&:focus': { 
        boxShadow: `0 0 0 2px white` 
    }
})

export const StyledPopoverImage = styled('img', {
    display: 'block',

    backgroundColor: 'white',

    border: '1px',
    borderRadius: '100%',

    variants: {
        size: {
            normal: { 
                width: 45, 
                height: 45 
            },
            large: { 
                width: 60, 
                height: 60 
            }
        }
    },
    defaultVariants: {
      size: 'normal'
    }
})


export const StyledPopoverText = styled('div', {
    margin: 0,

    fontSize: '15px',
    lineHeight: '20px',
    color: '$accentText',

    variants: {
        faded: {
            true: { 
                color: '$gray'
            }
        },
        bold: {
            true: { 
                color: '$accentText',
                fontWeight: 500 
            }
        }
    },
})

export const PopoverTrigger = forwardRef<HTMLAnchorElement, ComponentProps<typeof StyledPopoverTrigger> & { as: ElementType<any>; }>(
    ({ href, target, rel, as, ...rest }, forwardedRef) => {
        return (
            <StyledPopoverTrigger 
                href={href} 
                target={target} 
                rel={rel} 
                as={as} 
                {...rest} 
                ref={forwardedRef} 
            />
        )
    }
)
PopoverTrigger.displayName = 'PopoverTrigger'

export const PopoverImage = forwardRef<HTMLImageElement, ComponentProps<typeof StyledPopoverImage> & { as: ElementType<any>; }>(
    ({ src, ...rest }, forwardedRef) => (
        <StyledPopoverImage src={src} {...rest} ref={forwardedRef} /> 
    )
)
PopoverImage.displayName = 'PopoverImage'

