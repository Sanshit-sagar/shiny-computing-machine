import { ElementType, ComponentPropsWithRef, forwardRef } from 'react'
import { styled, CSS } from 'stitches.config' 
import { Box } from '@/components/Box'

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

const StyledDivider = styled(Box, {
    '--divider-height': '1px',

    height: 'var(--divider-height)',
    backgroundColor: '$accentLine',
    marginTop: 'calc(var(--divider-height) - 1px)',
    marginBottom: 'calc(2 * var(--divider-height))',
    listStyle: 'none'
})

export {
    Divider
}

export type {
    DividerProps 
}
