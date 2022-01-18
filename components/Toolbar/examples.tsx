import { ExampleBase } from '@/components/ExampleBase'
import { Toolbar } from './index'

import { PaddingIcon } from '@radix-ui/react-icons'
import { toolbarData } from './data'

const ExampleToolbar = () => {

    return (
        <ExampleBase
            heading={'Toolbar'}
            description={''}
            icon={<PaddingIcon />}
            component={<Toolbar {...toolbarData} />}
            controls={[]}
        />
    ); 
}

export default ExampleToolbar