import { StyledAvatarPair } from './AvatarPair' 

import {
    StyledAvatarBody,
    StyledAvatarMore,
    StyledAvatarStack
} from './AvatarStack'

import { Avatar } from './Avatar'
import { AvatarPair } from './AvatarPair'

export const AvatarStack = () => {

    return (
        <StyledAvatarStack size='3+'>
            <StyledAvatarBody aria-label="octocat, octocat and octocat">  
                <AvatarPair  />
                <AvatarPair  />
                <StyledAvatarMore />
                <AvatarPair />
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}
AvatarStack.displayName = 'AvatarStack'
