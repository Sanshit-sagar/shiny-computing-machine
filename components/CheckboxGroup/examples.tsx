
import { ExampleBase } from '@/components/ExampleBase'
import { CheckboxIcon } from '@radix-ui/react-icons'

// import CheckboxGroup from './CheckboxGroup'
// import CheckboxItem from './CheckboxItem'
import { CheckboxGroup } from './variants'

// export const CheckboxGroupInstanceTwo = () => (
    // <CheckboxGroup defaultValue={["oxygen"]} label="" orientation="vertical">
        {/* <CheckboxItem value="oxygen">Oxygen</CheckboxItem>  */}
        {/* <CheckboxItem value="hydrogen">Hydrogren</CheckboxItem>  */}
        {/* <CheckboxItem value="carbon">Carbon</CheckboxItem>  */}
    {/* </CheckboxGroup> */}
// )

export const CheckboxGroupInstance = () => <CheckboxGroup />

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