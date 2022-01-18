import React, { useState } from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { SliderIcon } from '@radix-ui/react-icons'
import { RangeInput } from './index'

const RangeInstance = () => {
    const [value, setValue] = useState<number>(10)

    const handleChange = (event) => {
        setValue(parseFloat(event.currentTarget.value))
    }

    return (
        <RangeInput 
            value={value}
            onChange={handleChange}
            min={0}
            max={100}
            step={0.1}
            disabled={false}
            label={'Level'}
        />
    )
}

const ExampleRangeInput = () => {

    return (
        <ExampleBase
            heading={'Range Input'}
            description={''}
            component={<RangeInstance />}
            icon={<SliderIcon />}
            controls={[]}
        />
    )
}

export default ExampleRangeInput