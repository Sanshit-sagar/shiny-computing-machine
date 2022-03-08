import React, {  ComponentProps, ComponentPropsWithRef, ElementRef } from 'react' 
import { styled, VariantProps, CSS } from 'stitches.config'

export const StyledNav = styled('nav', {
    padding: '$2'
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
})

export const ListItemWrapper = styled('li', {
    display: 'inline-flex',
    color: '$accentText',
})

const StyledLink = styled('a', {
    position: 'relative',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',

    fontFamily: '$flow',
    fontSize: '$4',
    letterSpacing: '$1',
    lineHeight: '20px',
    fontVariant: 'tabular',
    verticalAlign: 'middle',
    textAlign: 'start',
    textDecoration: 'none',
    fontWeight: 500,

    color: 'inherit',
    transition: `color 400ms ease-out`,

    '&::after': {
        borderRadius: '1em',
        borderTop: '0.1em solid $accentText',
        content: "",
        position: 'absolute',
        left: 0,
        right: '100%',
        bottom: '0.14em',
        transition: `right 300ms ease-in-out`
    },

    variants: {
        isHovered: {
            true: {
                color: 'red',
                textDecoration: 'none',
                right: 0,
        
                '&::after': {
                    borderColor: '$accentText',
                    right: 0
                }
            },
            false: null
        },
        isFocused: {
            true: {

            },
            false: null
        },
        isPressed: {
            true: {

            }
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        isLoading: {
            true: {

            },
            false: null
        },
        isDisabled: {
            true: {

            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isFocusVisible: false,
        isLoading: false,
        isDisabled: false
    }
})

type CSSProps = { css?: CSS }
type LinkVariants = VariantProps<typeof StyledLink> 
type LinkOwnProps = ComponentProps<typeof StyledLink>
export type LinkProps = LinkVariants & LinkOwnProps & CSSProps & { children: React.ReactNode; }

const ForwardedLink = React.forwardRef<
    ElementRef<typeof StyledLink>,
    ComponentPropsWithRef<typeof StyledLink>
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
    fontSize: '$4',
    fontFamily: '$flow',
    letterSpacing: '$1',

    variants: {
        isCurrent: {
            true: {
                color: '$accentText'
            }
        },
        isHovered: {
            true: {
                color: '$accentTextContrast'
            }
        },
        isFocusVisible: {
            true: {
                outline: 'none'
            }
        }
    },
    defaultVariants: {
        isCurrent: false,
        isHovered: false,
        isFocusVisible: false
    }
})

export type HeadingProps = React.ComponentProps<typeof StyledHeading> & VariantProps<typeof StyledHeading> & { 
    css?: CSS
 } & { 
    children: React.ReactNode; 
}

const ForwardedHeading = React.forwardRef<
    ElementRef<typeof StyledHeading>,
    ComponentPropsWithRef<typeof StyledHeading>
>(({ children, ...rest }, ref)  => (
    <StyledHeading {...rest} ref={ref}>
        {children}
    </StyledHeading>
)); 


const StyledIcon = styled('span', {
    position: 'relative',
    display: 'inline-flex',
    color: '$accentText',
    lineHeight: 1,
    padding: '0 $2',
    verticalAlign: 'middle',
    textAlign: 'center',
    margin: '$1',
    fontSize: 'inherit',

    variants: {
        isCurrent: {
            true: {
                display: 'none',
                visibility: 'hidden',
                opacity: 0,
                zIndex: 1,
                color: 'transparent',
            },
            false: null
        }
    },
    defaultVariants: {
        isCurrent: false
    }
})

export const BreadcrumbLink = ForwardedLink
export const BreadcrumbHeading = ForwardedHeading
export const SeparatorIcon = StyledIcon