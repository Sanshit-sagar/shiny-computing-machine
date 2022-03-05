
import { StyledAvatar } from './styles'
import type { AvatarProps } from './types'


export const Avatar = (props: AvatarProps) => (
    <StyledAvatar {...props} /> 
)

Avatar.displayName = 'Avatar'
