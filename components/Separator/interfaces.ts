import React from 'react'
import { CSS, VariantProps } from '../../stitches.config'

import { StyledSeparator } from './styles'

export type SeparatorCSSProps = { css?: CSS; }
export type SeparatorVariantProps = VariantProps<typeof StyledSeparator> & {
    orientation?: 'horizontal' | 'vertical'; 
}
export type SeparatorHTMLAttributes = React.ComponentProps<typeof StyledSeparator> 

export type SeparatorProps = SeparatorHTMLAttributes & SeparatorVariantProps & SeparatorCSSProps