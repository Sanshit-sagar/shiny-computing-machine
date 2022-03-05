import { StyledAvatarPair } from './AvatarPair' 

import {
    StyledAvatarBody,
    StyledAvatarMore,
    StyledAvatarStack
} from './AvatarStack'

import { Avatar } from './Avatar'

export const AvatarPair = () => {

    return (
        <StyledAvatarPair css={{ position: 'relative' }}>
            <Avatar alt="jonrohan" src="https://avatars.githubusercontent.com/github" rounded={true} />
            <Avatar alt="josh" src="https://avatars.githubusercontent.com/primer" squared={true} />
        </StyledAvatarPair>
    )
}
AvatarPair.displayName = 'AvatarPair'

export const AvatarStack = () => {

    return (
        <StyledAvatarStack size='3+'>
            <StyledAvatarBody aria-label="octocat, octocat and octocat">  
                <Avatar alt="jonrohan" src="https://avatars.githubusercontent.com/github" rounded={true} />
                <Avatar alt="josh" src="https://avatars.githubusercontent.com/primer" squared={true} />
                <StyledAvatarMore /> 
                <Avatar alt="jonrohan" src="https://avatars.githubusercontent.com/github" rounded={true} />
                <Avatar alt="josh" src="https://avatars.githubusercontent.com/primer" squared={true} />
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}
AvatarStack.displayName = 'AvatarStack'
