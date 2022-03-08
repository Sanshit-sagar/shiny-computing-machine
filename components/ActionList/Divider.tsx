import { ElementType, ComponentPropsWithRef, forwardRef } from 'react'
import { CSS } from 'stitches.config' 
import { StyledDivider } from './Styles'

const DEFAULT_TAG = 'li'

type DividerElement = ElementType<typeof DEFAULT_TAG>
interface DividerProps extends ComponentPropsWithRef<typeof DEFAULT_TAG> {
    element: ElementType<any>;
    css: CSS; 
}

const Divider = forwardRef<DividerElement, DividerProps>(({ 
    element: Component = DEFAULT_TAG,   
    css, 
    ...rest 
}: DividerProps, forwardedRef) => (
    <StyledDivider as={Component} aria-hidden="true" css={css} {...rest} ref={forwardedRef} />
))

export {
    Divider
}

export type {
    DividerProps 
}
