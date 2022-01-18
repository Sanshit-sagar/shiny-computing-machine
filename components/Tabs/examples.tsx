import { ListBulletIcon } from '@radix-ui/react-icons'

import { ExampleBase } from '@/components/ExampleBase'
import { BasicPolymorphicTabs, FocusableContentTabs, BasicTabs } from './variants'

export const TabsInstance = () => <BasicTabs /> 

const ExampleTabs = () => {
    return (
        <ExampleBase
            heading={'Tabs'}
            description={'Tabs Example here'}
            icon={<ListBulletIcon />}
            component={<BasicTabs />}
            controls={[]}
        />
    )
}

export default ExampleTabs 