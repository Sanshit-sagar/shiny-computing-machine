import { ExampleBase } from '@/components/ExampleBase'
import { AvatarIcon } from '@radix-ui/react-icons'
import { AvatarStack, Avatar, AvatarPair } from './styles'

export const AvatarInstance = () => <Avatar />
export const AvatarPairInstance = () => <AvatarPair /> 
export const AvatarStackInstance = () => <AvatarStack />

const ExampleAvatarGroup = () => {

    return (
        <ExampleBase
            heading={'Avatar Group'}
            description={''}
            icon={<AvatarIcon />}
            component={<AvatarStackInstance />}
            controls={[]}
        />
    ); 
}

export default ExampleAvatarGroup