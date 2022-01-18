import { CalendarIcon } from '@radix-ui/react-icons'

import { ExampleBase } from '@/components/ExampleBase'
import StateFactory from '@/utils/StateFactory'

import { NumberField } from './index'
import { NumberFieldState } from './interfaces'

const init = (): NumberFieldState => {
    const initNumberFieldState: NumberFieldState = {
        label: 'Atomic Measurements',
        defaultValue: 9.0,
        min: 2.0,
        max: 21.0,
        step: 3.0,
        isRequired: false,
        isDisabled: false,
        isReadOnly: false,
        formatOptions: {
            style: 'percent'
        }
    }; 
    return initNumberFieldState;
};

export const NumberFieldInstance = () => <NumberField {...init()} />
const UnitsNumberField = (props) => <NumberField {...props} />


const ExampleNumberField = () => {
    const { state } = StateFactory<NumberFieldState>(init)

    return (
        <ExampleBase
            icon={<CalendarIcon />}
            heading={'Numberfield'}
            description={'Increment/Decrement Intl Number Formatted Vals with Stepper Buttons'}
            component={<UnitsNumberField {...state} />}
            controls={[]}
        />
    ); 
}

export default ExampleNumberField