import { Avatar } from './Avatar'
import { BadgeGroup } from './Badge'
import { AvatarPair } from './AvatarPair'
import { AvatarStack } from './AvatarStack'

import { Flex } from '@/components/Flex'
import { ExampleBase } from '@/components/ExampleBase'

import { AvatarIcon } from '@radix-ui/react-icons'

export const AvatarInstance = () => (
    <Flex css={{ width: '300px', fd: 'row', jc: 'center', ai: 'center', gap: '$2' }}>
        <Avatar src="https://avatars.githubusercontent.com/primer" alt="@primer" rounded={true} />
        <Avatar src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
    </Flex>
)

export const AvatarPairInstance = () => (
    <AvatarPair>
        <AvatarPair.Parent src="https://avatars.githubusercontent.com/primer" alt="@primer" rounded={true} />
        <AvatarPair.Child src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} /> 
    </AvatarPair>  
)

export const AvatarStackInstance = () => (
    <AvatarStack>
        <AvatarStack.Item src="https://avatars.githubusercontent.com/primer" alt="@primer" rounded={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/primer" alt="@primer" squared={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
        <AvatarStack.Item src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
    </AvatarStack>
)   

export const BadgeGroupInstance = () => <BadgeGroup /> 

export const AvatarStories = () => (
    <Flex css={{ width: '325px', fd: 'row', jc: 'center' }}>
        <AvatarStackInstance />
    </Flex>
)

const ExampleAvatarGroup = () => {

    return (
        <ExampleBase
            heading={'Avatar Group'}
            description={''}
            icon={<AvatarIcon />}
            component={<AvatarStackInstance />}
            controls={[]}
        />
    )
}

export default ExampleAvatarGroup