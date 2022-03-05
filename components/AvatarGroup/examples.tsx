import { ExampleBase } from '@/components/ExampleBase'
import { AvatarIcon } from '@radix-ui/react-icons'
import { BadgeGroup } from './Badge'

import { Flex } from '@/components/Flex'
import { Avatar } from './Avatar'
import { AvatarPair } from './AvatarPair'
import { AvatarStack } from './AvatarStack'

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
        <Avatar src="https://avatars.githubusercontent.com/primer" alt="@primer" rounded={true} />
        <Avatar src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
        <Avatar src="https://avatars.githubusercontent.com/primer" alt="@primer" rounded={true} />
        <Avatar src="https://avatars.githubusercontent.com/github" alt="@github" squared={true} />
    </AvatarStack>
)
export const BadgeGroupInstance = () => <BadgeGroup /> 

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