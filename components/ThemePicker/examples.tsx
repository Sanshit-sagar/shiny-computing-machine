import { ExampleBase } from '@/components/ExampleBase'
import { ThemePicker } from './index'

import { BlendingModeIcon } from '@radix-ui/react-icons'


const ExampleThemePicker = () =>  {

    return (
        <ExampleBase 
            icon={<BlendingModeIcon /> }
            heading={'Theme picker'}
            description={''}
            component={<ThemePicker />}
            controls={[]} 
        />
    )
}

export default ExampleThemePicker