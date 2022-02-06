import React from 'react' 
import { styled, CSS, VariantProps } from '../../stitches.config'

const DEFAULT_TAG = 'label'

const StyledLabel = styled(DEFAULT_TAG, {
    appearance: 'none',
    userSelect: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$2',

    
    m: 0,
    p: 0,
    fontSize: '$3',
    fontWeight: '$1',
    fontFamily: '$jetbrains',
    letterSpacing: '0px',
    verticalAlign: 'middle',

    bc: 'transparent',
    color: '$accentTextContrast',

    willChange: 'transform',
    transition: '450ms',

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