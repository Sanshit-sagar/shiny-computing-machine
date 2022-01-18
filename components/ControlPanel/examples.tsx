import React, { useState } from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { ControlPanel } from './index'
import { MixIcon } from '@radix-ui/react-icons'


const ExampleControlPanel = () => {
    const [value, setValue] = useState<boolean>(true)

    const controls = [{
        type: 'switch',
        value: value,
        onChange: (val: boolean) => setValue(val),
        isDisabled: false,
        isRequired: false,
        isReadOnly: false,
        title: 'Disabled',
        description: 'Disable the control panel?',
        icon: <MixIcon />
    }]

    return (
        <ExampleBase
            heading={'Control Panel'}
            description={''}
            icon={<MixIcon />}
            component={<ControlPanel controls={controls} />}
            controls={controls}
        />
    )
}


export default ExampleControlPanel