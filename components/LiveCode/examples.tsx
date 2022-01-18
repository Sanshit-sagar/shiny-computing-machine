import React from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { CodeIcon } from '@radix-ui/react-icons'

const ExampleLiveCode = () => {
    const [disabled, setDisabled] = React.useState<boolean>(false)

    const controls = [{
        type: 'switch',
        value: disabled,
        onChange: (updatedVal: boolean) => setDisabled(updatedVal),
        name: 'Disabled',
        description: 'Disable the live code',
        isDisabled: false
    }]

    return (
        <ExampleBase
            heading={'Live Code'}
            description={'Live Code description'} 
            icon={<CodeIcon />}
            component={<CodeIcon />}
            controls={controls}
        />
    );
}

export default ExampleLiveCode