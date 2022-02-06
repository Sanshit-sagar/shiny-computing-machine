import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { VariantProps } from 'stitches.config'

import { ScopedProps, StatusDotStatus } from './types'
import { useAvatarContext } from './AvatarContext'
import { StyledAvatarStatusDot } from './styles'
import { DEFAULT_STATUS_DOT_TAG, DEFAULT_NAME } from './constants'

type AvatarStatusDotElement = ElementRef<typeof DEFAULT_STATUS_DOT_TAG>
type DefaultAvatarStatusDotProps = ComponentPropsWithoutRef<typeof DEFAULT_STATUS_DOT_TAG>

interface AvatarStatusDotProps extends DefaultAvatarStatusDotProps {
    status?: StatusDotStatus; 
}

const AVATAR_STATUS_DOT_NAME = `${DEFAULT_NAME}StatusDot`

const AvatarStatusDot = forwardRef<AvatarStatusDotElement, AvatarStatusDotProps>(({ 
   __scopeAvatar, 
   status, 
   ...props 
}: ScopedProps<AvatarStatusDotProps>, forwardedRef) => {

    const { size, shape } = useAvatarContext(AVATAR_STATUS_DOT_NAME, __scopeAvatar)

    return (
        <StyledAvatarStatusDot 
            {...props} 
            status={status} 
            size={size} 
            margin={shape !== 'square'}
            ref={forwardedRef} 
        /> 
    )
})

AvatarStatusDot.displayName = AVATAR_STATUS_DOT_NAME
export default AvatarStatusDot