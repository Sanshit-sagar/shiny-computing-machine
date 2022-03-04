import { VariantProps } from 'stitches.config'
import { 
    StyledAvatar, 
    StyledAvatarBody,
    StyledAvatarPair, 
    StyledAvatarMore,
    StyledAvatarStack
} from './styles'

type AvatarVariantProps = VariantProps<typeof StyledAvatar> 

export type AvatarProps = {
    linked: AvatarVariantProps['linked'];
    grouped: AvatarVariantProps['grouped'];
    relation: AvatarVariantProps['relation'];
    src: string; 
    alt: string; 
}

export const Avatar = (props) => {
    const defaultAvatarProps: AvatarProps = {
        src: `https://github.com/jonrohan.png?v=3&s=48`,
        alt: '@octocat',
        linked: false,
        grouped: true,
        relation: 'none'
    }

    return <StyledAvatar {...defaultAvatarProps} /> 
}
Avatar.displayName = 'Avatar'

export const AvatarPair = () => {

    return (
        <StyledAvatarPair css={{ position: 'relative' }}>
            <StyledAvatar 
                alt="jonrohan" 
                src="https://github.com/jonrohan.png?v=3&s=48" 
                grouped={false} 
                linked={true} 
                relation="parent"
            />
            <StyledAvatar
                alt="josh"
                src="https://github.com/josh.png?v=3&s=40"  
                grouped={false} 
                linked={true} 
                relation="child"
            />
        </StyledAvatarPair>
    )
}
AvatarPair.displayName = 'AvatarPair'

export const AvatarStack = () => {

    return (
        <StyledAvatarStack size='3+'>
            <StyledAvatarBody aria-label="octocat, octocat and octocat">  
                <Avatar />
                <Avatar />
                <StyledAvatarMore /> 
                <Avatar />
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}
AvatarStack.displayName = 'AvatarStack'
