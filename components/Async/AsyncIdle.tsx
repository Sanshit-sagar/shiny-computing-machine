import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config'

import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { StyledIdle } from './styles'
import { useAsyncContext } from './AsyncContext'

const DEFAULT_IDLE_TAG = 'span'
type IdleElement = ElementRef<typeof DEFAULT_IDLE_TAG>
type IdleProps = ComponentPropsWithoutRef<typeof DEFAULT_IDLE_TAG>

const ASYNC_IDLE_NAME = `${DEFAULT_NAME}Idle`  

interface AsyncIdleProps extends IdleProps {
    element?: ElementType;
    css?: CSS;
}

const AsyncIdle = forwardRef<IdleElement, AsyncIdleProps>(({ 
    __scopeAsync, 
    children,
    element: Component = 'span',
    css,
    ...props 
}: ScopedProps<AsyncIdleProps>, forwardedRef) => {
        
    const { isIdle, ...rest } = useAsyncContext(ASYNC_IDLE_NAME, __scopeAsync)

    return isIdle ? (
        <StyledIdle as={Component} {...props} ref={forwardedRef}>
            {children}
        </StyledIdle>  
    ) : (
        <> {null} </>
    )
})

AsyncIdle.displayName = 'AsyncIdle'
export default AsyncIdle