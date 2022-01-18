import { ExampleBase } from '@/components/ExampleBase'
import { Switch } from './index'
import { SwitchIcon } from '@radix-ui/react-icons'

const ExampleSwitch = () => {

    return (
        <ExampleBase
            heading={'Switch'}
            description={'Switch described here'}
            icon={<SwitchIcon /> }
            component={<Switch />}
            controls={[]}
        /> 
    )
}

export default ExampleSwitch