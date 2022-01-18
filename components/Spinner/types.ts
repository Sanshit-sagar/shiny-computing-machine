import { VariantProps, CSS } from 'stitches.config'

import { StyledSpinner, StyledRipple } from './styles'


export type CSSProps = { 
    css?: CSS;
}

export type SharedProps = {
    label?: string; 
    isIndeterminate?: boolean;
} 

export type SpinnerProps = VariantProps<typeof StyledSpinner> & CSSProps & SharedProps
export type RippleProps = VariantProps<typeof StyledRipple> & CSSProps & SharedProps