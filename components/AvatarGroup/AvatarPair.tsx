import { Children, cloneElement, isValidElement, ReactElement } from 'react' 
import { styled } from 'stitches.config'
import { avatarVariables, StyledAvatar } from './styles'
import type { AvatarProps } from './types'

export const StyledAvatarPair = styled('div', {
    ...avatarVariables, 

    position: 'relative',
    display: 'inline-flex',
    
})

export const StyledAvatarParent = styled(StyledAvatar, {
    ...avatarVariables,

    '--avatar-parent-size': 'var(--size)',

    position: 'relative'
})

export const StyledAvatarChild = styled(StyledAvatar, {
    ...avatarVariables,

    '--avatar-child-size': 'calc(var(--size) * 0.40)',

    position: 'absolute',
    right: '-15%',
    bottom: '-9%',
    height: 'var(--avatar-child-size)',
    width: 'var(--avatar-child-size)',
    backgroundColor: 'transparent',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--color-avatar-child-shadow)'
})

const AvatarParent = (props: AvatarProps) => (
    <StyledAvatarParent {...props} /> 
)
AvatarParent.displayName = 'AvatarParent'

const AvatarChild = (props: AvatarProps) => (
    <StyledAvatarChild {...props} /> 
)
AvatarChild.displayName = 'AvatarChild'


type AvatarPairProps = { 
    children: [AvatarParent, AvatarChild];
}

export const AvatarPair = ({ children, ...props }: AvatarPairProps) => {

    const avatars = Children.map(children, (child, index) => {
        if(!isValidElement(child)) 
            return child
        
        return index == 0 ? (
            cloneElement(child)
        ) : (
            cloneElement(child)
        )
    })

    return (
        <StyledAvatarPair {...props}> 
            {avatars} 
        </StyledAvatarPair>
    )
}

AvatarPair.Parent = AvatarParent
AvatarPair.Child = AvatarChild

AvatarPair.displayName = 'AvatarPair'