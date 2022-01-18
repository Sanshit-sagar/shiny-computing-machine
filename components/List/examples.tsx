import { ExampleBase } from '@/components/ExampleBase'
import { StickyList } from '@/components/List'
import { ActivityLogIcon } from '@radix-ui/react-icons'

const ExampleList = () => {

    return (
        <ExampleBase
            heading={'List'}
            description={'Description here'}
            icon={<ActivityLogIcon />}
            component={<StickyList />}
            controls={[]}
        />
    );
}

export default ExampleList