import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config' 

import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { StyledRejected } from './styles'
import { useAsyncContext } from './AsyncContext'

const DEFAULT_REJECTED_TAG = 'span'
type RejectedElement = ElementRef<typeof DEFAULT_REJECTED_TAG>
type RejectedProps = ComponentPropsWithoutRef<typeof DEFAULT_REJECTED_TAG>

const ASYNC_REJECTED_NAME = `${DEFAULT_NAME}Rejected`  

interface AsyncRejectedProps extends RejectedProps {
    element?: ElementType;
    css?: CSS;
}

const AsyncRejected = forwardRef<RejectedElement, AsyncRejectedProps>(({ 
    __scopeAsync, 
    children,
    element: Component = 'span',
    css,
    ...props 
}: ScopedProps<AsyncRejectedProps>, forwardedRef) => {
        
    const { isRejected, ...rest } = useAsyncContext(ASYNC_REJECTED_NAME, __scopeAsync)

    return isRejected ? (
        <StyledRejected as={Component} {...props} ref={forwardedRef}>
            {children}
        </StyledRejected>  
    ) : (
        <> {null} </>
    )
})

AsyncRejected.displayName = 'AsyncRejected'
export default AsyncRejected