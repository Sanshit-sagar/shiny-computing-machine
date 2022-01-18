
import { ExampleBase } from '@/components/ExampleBase'
import { CheckboxIcon } from '@radix-ui/react-icons'

import CheckboxGroup from './CheckboxGroup'
import CheckboxItem from './CheckboxItem'


export const CheckboxGroupInstance = () => (
    <CheckboxGroup defaultValue={["oxygen"]} label="" orientation="vertical">
        <CheckboxItem value="oxygen">Oxygen</CheckboxItem> 
        <CheckboxItem value="hydrogen">Hydrogren</CheckboxItem> 
        <CheckboxItem value="carbon">Carbon</CheckboxItem> 
    </CheckboxGroup>
)

const ExampleCheckboxGroup = () => {

    return (
        <ExampleBase
            heading={'Checkbox Group'}
            description={''}
            component={<CheckboxGroupInstance />}
            icon={<CheckboxIcon />}
            controls={[]}
        />
    ); 
}

export default ExampleCheckboxGroup