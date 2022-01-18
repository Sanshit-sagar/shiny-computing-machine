import React from 'react'

import { ExampleBase } from '@/components/ExampleBase'
import { RadiobuttonIcon } from '@radix-ui/react-icons'

import Radio from './Radio'

export const RadioButtonInstance = () => (
    <Radio.Group defaultValue="carbon" orientation="vertical">
        <Radio.Label value="" />
        <Radio.Item value="oxygen"> Oxygen </Radio.Item>
        <Radio.Item value="hydrogren"> Hyrogren </Radio.Item>
        <Radio.Item value="carbon"> Carbon </Radio.Item>
        <Radio.Item value="neon"> Neon </Radio.Item> 
    </Radio.Group>
);

const ExampleRadioGroup = () => {

    return (
        <ExampleBase 
            heading={'Radio Group'}
            description={''}
            icon={<RadiobuttonIcon />}
            component={<RadioButtonInstance />}
            controls={[]}
        />
    )
}

export default ExampleRadioGroup