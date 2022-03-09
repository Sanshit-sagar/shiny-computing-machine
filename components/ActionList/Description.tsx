import React, { forwardRef, ElementType } from 'react'
import { CSS, styled } from 'stitches.config'

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
    color: '$accentTextContrast',

    fontSize: '10px',
    fontFamily: '$jetbrains',
    lineHeight: '14px',
    verticalAlign: 'top',
    textAlign: 'start',
    

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

const DEFAULT_TAG = 'div'
type DescriptionElement = ElementRef<typeof DEFAULT_TAG>

export const Description = ({ variant = 'inline', css, ...props }) => {

    return (
        <Slot name={variant === 'block' ? 'BlockDescription' : 'InlineDescription'}>
            {({ blockDescriptionId, inlineDescriptionId, disabled }: ItemContext) => (
                variant === 'block' ? (
                    <StyledDescription as="span" disabled={disabled} id={blockDescriptionId} block={true}>
                        {props.children} 
                    </StyledDescription>
                ) : (
                    <Truncate 
                        inline={true} 
                        expandable={true}
                        id={inlineDescriptionId} 
                        title={props.children as string} 
                        css={{ ml: '$2', maxWidth: '100%' }}
                    >
                        {props.children}
                    </Truncate>       
                )
            )}
        </Slot> 
    )
}