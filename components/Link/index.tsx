import { styled } from 'stitches.config'
import { RefObject, useRef } from 'react'

import { AriaLinkOptions } from './interfaces'
import { useLink } from '@react-aria/link'

const StyledLink = styled('a', {
    color: '$accentSolid',
    willChange: 'transform',
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        color: '$accentSolidHover',
        textDecoration: 'underline',
        textDecorationColor: '$accentTextContrast'
    },
    '&:active': {
        color: '$accentText',
        textDecoration: 'underline',
        textDecorationColor: '$accentTextContrast'
    },

    variants: {
        isDisabled: {
            true: {
                color: '$disabledText',
                textDecorationColor:  '$disabledText',
                cursor: 'not-allowed',
                '&:hover': {
                    textDecoration: 'none'
                }
            },
            false: {
                cursor: 'pointer'
            }
        },
        isPressed: {
            true: {
                color: '$accentTextContrast',
            }
        }
    },
    defaultVariants: {
        isDisabled: false,
        isPressed: false
    }
})

export const Link = ({ children, isDisabled, elementType: Component = 'a',  ...props }: AriaLinkOptions) => {

    const ref: RefObject<HTMLAnchorElement> = useRef<HTMLAnchorElement>()
    const { linkProps, isPressed  } = useLink({ ...props, elementType: Component }, ref)
  
    return (
        <Component {...props}>
            <StyledLink
                {...linkProps} 
                ref={ref} 
                href={props.href} 
                target={props.target} 
                isDisabled={isDisabled} 
                isPressed={isPressed}
            >
                {children}
            </StyledLink>
        </Component>
    );
}
