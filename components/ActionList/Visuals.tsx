import React, { HTMLAttributes } from 'react'
import { styled, CSS } from 'stitches.config'

import { ItemContext, Slot } from './Item'
import { Box } from '@/components/Box'

const StyledVisualContainer = styled(Box, {
    height: '20px',
    minWidth: '$3',
    maxWidth: '20px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: '$2',
    color: 'inherit',
    bc: 'transparent',
    
    variants: {
        variant: {
            'default': {
                bc: 'transparent',
                color: '$accentText'
            },
            'danger': {
                bc: 'transparent',
                color: '$dangerBg'
            }
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const StyledTrailingVisual = styled(Box, {
    bc: 'transparent',
    height: '20px',
    flexShrink: 0,
    marginLeft: '$2',
    color: 'inherit',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontWeight: 400,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontStyle: 'normal',
    lineHeight: '20px',
    verticalAlign: 'middle',
    letterSpacing: '0.15ch'
})

type VisualProps = HTMLAttributes<HTMLSpanElement> & { 
    css?: CSS; 
}

interface VisualContainerProps extends VisualProps {}
interface LeadingVisualProps extends VisualProps {}
interface TrailingVisualProps extends VisualProps {}

const LeadingVisualContainer = ({ children, css, ...rest }: VisualContainerProps) => (
    <StyledVisualContainer as="span" css={css} {...rest}>
        {children}
    </StyledVisualContainer>
)
LeadingVisualContainer.displayName = 'LeadingVisualContainer'

const LeadingVisual = ({ children, css, ...rest }: LeadingVisualProps) => (
    <Slot name="LeadingVisual">
        {({ variant, disabled }: ItemContext) => (
            <LeadingVisualContainer 
                {...rest} 
                css={{
                    color: 'inherit',
                    '& svg': {

                    },
                    
                }}
            >
                {children}
            </LeadingVisualContainer>
        )}
    </Slot> 
)
LeadingVisual.displayName = 'LeadingVisual'

const TrailingVisual = ({ children, css, ...rest }: TrailingVisualProps) => (
    <Slot name="TrailingVisual">
        {({ variant, disabled }: ItemContext) => (
            <StyledTrailingVisual as="span" {...rest} css={{ ...css }}>
                {children}
            </StyledTrailingVisual>
        )}
    </Slot> 
) 
TrailingVisual.displayName = 'TrailingVisual'

export {
    LeadingVisual,
    TrailingVisual,
    LeadingVisualContainer
}

export type {
    LeadingVisualProps,
    TrailingVisualProps
}