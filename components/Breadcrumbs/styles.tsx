import React, { ElementRef } from 'react' 
import { styled, VariantProps, CSS } from 'stitches.config'
import * as Radix from '@radix-ui/react-primitive'

export const StyledNav = styled('nav', {
    padding: '$3',
    border: '1px solid $accentBorder',
    bc: '$accentBase',
    br: '$2'
})

export const OrderedList = styled('ol', {
    display: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center',
    fw: 'nowrap',
    listStyle: 'none', 
    margin: 0, 
    padding: 0
});

export const ListItemWrapper = styled('li', {
    display: 'inline-flex',
    color: '$accentSolid',
    lineHeight: 1
})

const StyledLink = styled('a', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',

    fontFamily: '$jetbrains',
    fontSize: '$4',
    lineHeight: '$2',

    color: '$accentTextContrast',
    position: 'relative',
    textDecoration: 'none',
    transition: `color 400ms ease-out`,

    '&:hover': {
        color: '$accentSolid',
        textDecoration: 'none',
        right: 0,

        '&::after': {
            borderColor: '$accentSolid',
            right: 0
        }
    },

    '&::after': {
        borderRadius: '1em',
        borderTop: '0.1em solid $accentText',
        content: "",
        position: 'absolute',
        right: '100%',
        bottom: '0.14em',
        left: 0,
        transition: `right 400ms cubic-bezier(0, 0.5, 0, 1)`
    }
})

type CSSProps = { css?: CSS }
type LinkVariants = VariantProps<typeof StyledLink> 
type LinkOwnProps = React.ComponentProps<typeof StyledLink>
export type LinkProps = LinkVariants & LinkOwnProps & CSSProps & { children: React.ReactNode; }

const ForwardedLink = React.forwardRef<
    React.ElementRef<typeof StyledLink>,
    Radix.ComponentPropsWithoutRef<typeof StyledLink>
>((props, ref)  => {
    const { children, ...rest } = props

    return (
        <StyledLink {...rest} ref={ref}>
            {children}
        </StyledLink>
    )
})

const StyledHeading = styled('h3', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',

    margin: 0,
    fontSize: '15px',
    fontFamily: '$jetbrains',
    letterSpacing: '$1',
    color: '$accentSolid',

    '&:hover': {
        color: '$accentSolidHover'
    },
    '&:active': {
        outine: '1px solid $accentFocusRing'
    }
})

export type HeadingProps = React.ComponentProps<typeof StyledHeading> & VariantProps<typeof StyledHeading> & { 
    css?: CSS
 } & { 
    children: React.ReactNode; 
}

const ForwardedHeading = React.forwardRef<
    ElementRef<typeof StyledHeading>,
    Radix.ComponentPropsWithoutRef<typeof StyledHeading>
>(({ children, ...rest }, ref)  => (
    <StyledHeading {...rest} ref={ref}>
        {children}
    </StyledHeading>
)); 


const StyledIcon = styled('span', {
    display: 'inline-flex',
    color: '$accentSolid',
    lineHeight: 1,
    padding: '0 $2'
})

export const BreadcrumbLink = ForwardedLink
export const BreadcrumbHeading = ForwardedHeading
export const SeparatorIcon = StyledIcon