import { ExampleBase } from '@/components/ExampleBase'
import { AvatarGroup } from './styles' 
import { AvatarIcon } from '@radix-ui/react-icons'

const AvatarInstance = () =>  <AvatarGroup />

const ExampleAvatarGroup = () => {

    return (
        <ExampleBase
            heading={'Avatar'}
            description={''}
            icon={<AvatarIcon />}
            component={<AvatarInstance />}
            controls={[]}
        />
    )
}

export default ExampleAvatarGroup