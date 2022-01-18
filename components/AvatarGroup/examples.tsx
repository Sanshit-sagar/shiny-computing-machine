import { Avatar, AvatarGroup } from '@/components/AvatarGroup'
import { ExampleBase } from '@/components/ExampleBase'
import { AvatarIcon } from '@radix-ui/react-icons'
import { AvatarProps } from './styles'

const state: AvatarProps = {
    gradient: 'default',
    radius: 'round',
    size: '12',
};

const AvatarGroupInstance = ({ state }: { state: AvatarProps; }) => (
    <Avatar {...state} />
);

const ExampleAvatarGroup = () => {
    const controls = []
    
    return (
        <ExampleBase
            heading={'Avatar Group'}
            description={''}
            icon={<AvatarIcon />}
            component={<AvatarGroupInstance state={state} />}
            controls={[]}
        />
    ); 
}

export default ExampleAvatarGroup