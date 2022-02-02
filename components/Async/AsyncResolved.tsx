import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config'

import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { StyledResolved } from './styles'
import { useAsyncContext } from './AsyncContext'

const DEFAULT_RESOLVED_TAG = 'span'
type ResolvedElement = ElementRef<typeof DEFAULT_RESOLVED_TAG>
type ResolvedProps = ComponentPropsWithoutRef<typeof DEFAULT_RESOLVED_TAG>

const ASYNC_RESOLVED_NAME = `${DEFAULT_NAME}Resolved`  

interface AsyncResolvedProps extends ResolvedProps {
    element?: ElementType;
    css?: CSS; 
}

const AsyncResolved = forwardRef<ResolvedElement, AsyncResolvedProps>(({ 
    __scopeAsync, 
    children,
    element: Component = 'span',
    css,
    ...props 
}: ScopedProps<AsyncResolvedProps>, forwardedRef) => {
        
    const { isResolved, data, ...rest } = useAsyncContext(ASYNC_RESOLVED_NAME, __scopeAsync)

    return isResolved ? (
        <StyledResolved as={Component} {...props} ref={forwardedRef}>
            {children}
        </StyledResolved>  
    ) : (
        <> {null} </>
    )
})

AsyncResolved.displayName = 'AsyncResolved'
export default AsyncResolved