import React from 'react'

import { SliderControl } from '@/components/Slider/examples' 
import { SliderProps } from '@/components/Slider/interfaces'
import { useId } from '@react-aria/utils'

export interface SliderFieldProps extends SliderProps {
    type?: 'slider'; 
}

const Slider = (props: SliderProps) => {
    const {
        id,
        orientation = 'horizontal',
        validationState = 'valid',
        formatOptions = { 
            style: "decimal", 
        },
        ...otherProps
    } = props

    return (
        <SliderControl  
            id={id || useId()}
            {...props}
            orientation={orientation}
            validationState={validationState}
            formatOptions={{
                ...formatOptions
            }}
        />
    );
}
export default Slider

