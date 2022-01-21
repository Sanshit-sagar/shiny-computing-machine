import React from 'react';

import { ExampleBase } from '@/components/ExampleBase'

import { ColorSlider } from '@/components/ColorSlider'
import { RgbaSlider } from '@/components/ColorSlider/RgbaSlider'
import { HslaSlider } from '@/components/ColorSlider/HslaSlider' 

import { BlendingModeIcon } from '@radix-ui/react-icons'


export const ColorSliderInstance = () =>  <RgbaSlider defaultValue={'rgba(20,20,20,1)'} />


const ExampleColorSlider = () => {
  
    return (
        <ExampleBase
            heading={'Color Slider'}
            description={'Color slider described here'}
            icon={<BlendingModeIcon />}
            component={<ColorSliderInstance />}
            controls={[]}
        />
    )
}

export default ExampleColorSlider