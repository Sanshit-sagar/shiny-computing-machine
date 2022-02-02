import { forwardRef, ElementRef, ReactNode, ComponentPropsWithoutRef } from 'react'

import { StyledRoot } from './styles'
import { ScopedProps } from './types'
import { AsyncProvider } from './AsyncContext'
import { DEFAULT_ROOT_TAG, DEFAULT_NAME } from './constants'

import { useAsync } from '@/hooks/useAsync'


type AvatarRootElement = ElementRef<typeof DEFAULT_ROOT_TAG>
type AvatarComponentProps = ComponentPropsWithoutRef<typeof DEFAULT_ROOT_TAG>

interface AsyncRootProps extends AvatarComponentProps {
    asyncFn: () => Promise<unknown>;
    delay?: number; 
}

const AsyncRoot = forwardRef<AvatarRootElement, AsyncRootProps>(({ 
    __scopeAsync,
    children, 
    asyncFn, 
    delay 
}: ScopedProps<AsyncRootProps>, forwardedRef) => {

    const immediate = delay === 0
    const state = useAsync(asyncFn, false)

    return (
        <AsyncProvider scope={__scopeAsync} {...state}>
            <StyledRoot ref={forwardedRef}>
                {typeof children === 'function' ? (
                    children(state) 
                ) : (
                 <>  {children} 
                    <> hi </> 
                 </>
                )}
            </StyledRoot>  
        </AsyncProvider> 
    )
})

AsyncRoot.displayName = `${DEFAULT_NAME}Root`
export default AsyncRoot 