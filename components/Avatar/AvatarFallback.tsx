import { useState, forwardRef, ElementRef, ComponentPropsWithoutRef, useEffect } from 'react'
import { ImageLoadingStatus } from '@/hooks/useImageLoadingStatus'

import { useIsSSR } from '@react-aria/ssr'

import { ScopedProps, FallbackSize } from './types'
import { useAvatarContext } from './AvatarContext'
import { StyledAvatarFallback } from './styles'
import { DEFAULT_FALLBACK_TAG, DEFAULT_NAME } from './constants'

type AvatarFallbackElement = ElementRef<typeof DEFAULT_FALLBACK_TAG>
type DefaultAvatarFallbackProps = ComponentPropsWithoutRef<typeof DEFAULT_FALLBACK_TAG>

interface AvatarFallbackProps extends DefaultAvatarFallbackProps {
    delayMs?: number; 
}

const AVATAR_FALLBACK_NAME = `${DEFAULT_NAME}Fallback`

const AvatarFallback = forwardRef<AvatarFallbackElement, AvatarFallbackProps>(({ 
   __scopeAvatar, delayMs, ...props 
}: ScopedProps<AvatarFallbackProps>, forwardedRef) => {

    const isSSR = useIsSSR()
    const { size, imageLoadingStatus } = useAvatarContext(AVATAR_FALLBACK_NAME, __scopeAvatar)

    const [canRender, setCanRender] = useState<boolean>(delayMs === undefined || delayMs === 0)

    useEffect(() => {
        if(isSSR) return

        if (delayMs !== undefined) {
            const timerId = window.setTimeout(() => setCanRender(true), delayMs)
            return () => window.clearTimeout(timerId)
        }
    }, [delayMs])

    if(!canRender || imageLoadingStatus === ImageLoadingStatus.LOADED) return null

    return <StyledAvatarFallback {...props} size={size} ref={forwardedRef} /> 
})

AvatarFallback.displayName = AVATAR_FALLBACK_NAME
export default AvatarFallback