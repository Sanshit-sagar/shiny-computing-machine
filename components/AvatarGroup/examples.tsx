import { ExampleBase } from '@/components/ExampleBase'
import { AvatarIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarPair, AvatarStack } from './index'
import { BadgeGroup } from './Badge'

export const AvatarInstance = () => <Avatar />
export const AvatarPairInstance = () => <AvatarPair /> 
export const AvatarStackInstance = () => <AvatarStack />
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