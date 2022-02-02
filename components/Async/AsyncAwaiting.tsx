import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { Spinner } from '@/components/Spinner'

import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { StyledAwaiting } from './styles'
import { useAsyncContext } from './AsyncContext'

const DEFAULT_AWAITING_TAG = 'span'
type AwaitingElement = ElementRef<typeof DEFAULT_AWAITING_TAG>
type AwaitingProps = ComponentPropsWithoutRef<typeof DEFAULT_AWAITING_TAG>

const ASYNC_AWAITING_NAME = `${DEFAULT_NAME}Awaiting`  

interface AsyncAwaitingProps extends AwaitingProps {

}

const AsyncAwaiting = forwardRef<AwaitingElement, AsyncAwaitingProps>(({ 
    __scopeAsync, 
    children,
    ...props 
}: ScopedProps<AsyncAwaitingProps>, forwardedRef) => {
        
    const { isAwaiting, ...rest } = useAsyncContext(ASYNC_AWAITING_NAME, __scopeAsync)

    return isAwaiting ? (
        <StyledAwaiting {...props} ref={forwardedRef}>
            {children || <Spinner />}
        </StyledAwaiting>  
    ) : (
        <> {null} </>
    )
})

AsyncAwaiting.displayName = 'AsyncAwaiting'
export default AsyncAwaiting