import React from 'react' 
import { styled, CSS, VariantProps } from '../../stitches.config'

const DEFAULT_TAG = 'label'

const StyledLabel = styled(DEFAULT_TAG, {
    appearance: 'none',
    userSelect: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    verticalAlign: 'start',
    
    m: 0,
    p: 0,
    fontSize: '$3',
    fontWeight: '$3',
    fontFamily: '$mono',
    letterSpacing: '0px',

    bc: 'transparent',
    color: '$accentTextContrast',

    willChange: 'transform',
    transition: '450ms',
    $$shadowColor: '$colors$accentBgActive',

    '&:hover': {
        boxShadow: '0px 1px 2px 1px $$shadowColor'
    },
    '&:focus': {
        textDecoration: 'underline',
        textDecorationColor: '$successDefault'
    },

    variants: {
        capitalize: {
            true: {
                textTransform: 'uppercase'
            },
            false: null
        }
    },
    defaultVariants: {
        capitalize: false
    }
})

type LabelVariants = VariantProps<typeof StyledLabel>
type LabelComponentProps = React.ComponentProps<typeof DEFAULT_TAG>
type CSSProps = { css?: CSS }

type LabelProps = LabelComponentProps & LabelVariants & CSSProps


export const Label = React.forwardRef<
    HTMLLabelElement, LabelProps
>(({ children, ...props }, forwardedRef) => (
    <StyledLabel {...props} ref={forwardedRef}>
        {children}
    </StyledLabel>
))