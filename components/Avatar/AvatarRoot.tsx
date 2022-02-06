import { useState, forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { ImageLoadingStatus, ImageLoadingStatusType } from '@/hooks/useImageLoadingStatus'

import type { ScopedProps, AvatarSize, AvatarShape } from './types'
import { DEFAULT_ROOT_TAG, DEFAULT_NAME } from './constants'
import { AvatarProvider } from './AvatarContext'
import { StyledAvatarRoot } from './styles'

type AvatarRootElement = ElementRef<typeof DEFAULT_ROOT_TAG>
type DefaultAvatarProps = ComponentPropsWithoutRef<typeof DEFAULT_ROOT_TAG>
interface AvatarRootProps extends DefaultAvatarProps {
    size?: AvatarSize; 
    shape?: AvatarShape; 
}

const AvatarRoot = forwardRef<AvatarRootElement, AvatarRootProps>(({ 
    __scopeAvatar, 
    children,
    size,
    shape,
    ...props
}: ScopedProps<AvatarRootProps>, forwardedRef) => {
   
    const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageLoadingStatusType>(ImageLoadingStatus.IDLE)

    return (
        <AvatarProvider 
            scope={__scopeAvatar}
            size={size}
            shape={shape}
            imageLoadingStatus={imageLoadingStatus}
            onImageLoadingStatusChange={setImageLoadingStatus}
        >
            <StyledAvatarRoot {...props} ref={forwardedRef}> 
                {children}
            </StyledAvatarRoot>
        </AvatarProvider>
    )
})

AvatarRoot.displayName = `${DEFAULT_NAME}Root`
export default AvatarRoot