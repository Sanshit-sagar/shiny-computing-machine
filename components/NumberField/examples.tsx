import { CalendarIcon } from '@radix-ui/react-icons'

import { ExampleBase } from '@/components/ExampleBase'
import StateFactory from '@/utils/StateFactory'

import { NumberField } from './index'
import { NumberFieldState } from './interfaces'

import Fieldset from '@/components/Fieldset'

const init = (): NumberFieldState => {
    const initNumberFieldState: NumberFieldState = {
        label: 'Atomic Measurements',
        defaultValue: 0.6,
        min: 0.1,
        max: 1.0,
        step: 0.005,
        isRequired: false,
        isDisabled: false,
        isReadOnly: false,
        formatOptions: {
            style: 'percent'
        }
    }; 
    return initNumberFieldState;
};

export const NumberFieldInstance = () => (
    <Fieldset.Root validationState="valid">
        <Fieldset.Label> Pizza Eaten </Fieldset.Label>
        <Fieldset.Icon> 
            <CalendarIcon /> 
        </Fieldset.Icon> 
        <NumberField {...init()} />
        <Fieldset.Description> How much of the pizza has been eaten? </Fieldset.Description> 
        <Fieldset.ErrorMessage> So much still left for me! </Fieldset.ErrorMessage> 
        <Fieldset.SuccessMessage> How vulgar to leave me nothing  </Fieldset.SuccessMessage>
    </Fieldset.Root>
)

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