import React from 'react'
import { CSS } from 'stitches.config'

import { Box } from '@/components/Box'

import { Truncate } from './Truncate'
import { Slot, ItemContext } from './Item'

export type DescriptionProps = {
    variant?: 'inline' | 'block';
    css?: CSS;
}

const StyledDescription = styled(Box, {
    fontSize: 0,
    lineHeight: '16px',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,

    variants: { 
        disabled: {
            true: {
                color: '$accentText'
            },
            false: {
                color: '$disabledText' 
            }
        },
        inline: {
            true: {
                marginLeft: '2px',
                  maxWidth: '100%',
            },
            false: null
        },
        block: {
            true: {
                marginLeft: '0px'
            },
            false: null
        }
    },
    defaultVariants: { 
        disabled: false,
        inline: false,
        block: false
    }
})

export const Description = forwardedRef<DescriptionElement, DescriptionProps>(
    ({ variant = 'inline', css, ...rest }, forwardedRef) => {

    return (
        <Slot name={variant === 'block' ? 'BlockDescription' : 'InlineDescription'}>
            {({ blockDescriptionId, inlineDescriptionId, disabled }: ItemContext) => (
                variant == 'block' ? (
                    <StyledDescription as="span" id={blockDescriptionId} block={true}>
                        {props.children} 
                    </StyledDescription>
                ) : (
                    <StyledDescription inline={true} id={inlineDescriptionId} title={props.children as string}>
                        {props.children}
                    </StyledDescription>       
                )
            )}
        </Slot> 
    )
})