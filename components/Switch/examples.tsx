
import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'

import SwitchRoot from './SwitchRoot'
import { SwitchProps } from './types'
import { SwitchIcon } from '@radix-ui/react-icons'

const init = (): SwitchProps => {
    const switchProps = {
        isReadOnly: false,
        isDisabled: false,
        isLoading: false,
        isRequired: false,
        isSelected: false,
        onChange: (value) => alert(`New value is ${value.toString()}`),
        label: ''
    }
    return switchProps
}

export const SwitchInstance = () => {
    const { state, update } = StateFactory<SwitchProps>(init)
    
    let mutableState = {
        ...state,
        onChange: (value: boolean) => update('isSelected', value)
    }
    
    return <SwitchRoot {...mutableState} />
}

const ExampleSwitch = () => {

    return (
        <ExampleBase
            icon={<SwitchIcon />}
            heading={'Switch'}
            description={'Switch description here'}
            component={<SwitchInstance />}
            controls={[]}
        />
    )
}

export default ExampleSwitch