import { useEffect, forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { useImageLoadingStatus, ImageLoadingStatus, ImageLoadingStatusType } from '@/hooks/useImageLoadingStatus'
import { useCallbackRef } from '@/hooks/useCallbackRef'

import { ScopedProps } from './types'
import { DEFAULT_IMAGE_TAG, DEFAULT_NAME } from './constants'
import { useAvatarContext } from './AvatarContext'
import { StyledAvatarImage } from './styles'

import { useIsSSR } from '@react-aria/ssr'

type AvatarImageElement = ElementRef<typeof DEFAULT_IMAGE_TAG>
type DefaultAvatarImageProps = ComponentPropsWithoutRef<typeof DEFAULT_IMAGE_TAG>

interface AvatarImageProps extends DefaultAvatarImageProps {
    onLoadingStatusChange?: (status: ImageLoadingStatusType) => void;
}

const AvatarImageName = `${DEFAULT_NAME}Image`

const noop = (_status) => {} 

const AvatarImage = forwardRef<AvatarImageElement, AvatarImageProps>(({ 
    __scopeAvatar, 
    src,
    onLoadingStatusChange = noop,
    ...props 
}: ScopedProps<AvatarImageProps>, forwardedRef) => {
    const isSSR = useIsSSR()
    const { onImageLoadingStatusChange } = useAvatarContext(AvatarImageName, __scopeAvatar)
    
    const imageLoadingStatus = useImageLoadingStatus(src)
    const handleLoadingStatusChange = useCallbackRef((status: ImageLoadingStatusType) => {
        onLoadingStatusChange(status)
        onImageLoadingStatusChange(status)
    })

    useEffect(() => {
        if(isSSR) return 
        if (imageLoadingStatus !== ImageLoadingStatus.IDLE) {
            handleLoadingStatusChange(imageLoadingStatus)
        }
    }, [imageLoadingStatus, handleLoadingStatusChange])

    if(imageLoadingStatus !== ImageLoadingStatus.LOADED) return null

    return <StyledAvatarImage {...props} src={src} ref={forwardedRef} /> 
})

AvatarImage.displayName = AvatarImageName
export default AvatarImage