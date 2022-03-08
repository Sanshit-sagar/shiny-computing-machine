import React from 'react'
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
    marginRight: '$2'
})

const StyledTrailingVisual = styled(Box, {
    height: '20px',
    flexShrink: 0,
    marginLeft: '$2',
    color: '$accentLine'
})

type VisualProps = HTMLAttributes<HTMLSpanElement> & { css: CSS; }
type LeadingVisualProps = VisualProps
type TrailingVisualProps = VisualProps

const LeadingVisualContainer = ({ children, css, ...rest }: VisualProps) => (
    <StyledVisualContainer as="span" css={css} {...rest}>
        {children}
    </StyledVisualContainer>
)
LeadingVisualContainer.displayName = 'LeadingVisualContainer'

const LeadingVisual = ({ children, css, ...rest }: VisualProps) => (
    <Slot name="LeadingVisual">
        {({ variant, disabled }: ItemContext) => (
            <LeadingVisualContainer 
                {...props} 
                css={{
                    color: '$accentTextContrast',
                    '& svg': {

                    }
                }}
            >
                {children}
            </LeadingVisualContainer>
        )}
    </Slot> 
)
LeadingVisual.displayName = 'LeadingVisual'

const TrailingVisual = ({ children, css, ...rest }: VisualProps) => (
    <Slot name="TrailingVisual">
        {({ variant, disabled }: ItemContext) => (
            <StyledTrailingVisual as="span" {...props} css={{ ...css }}>
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