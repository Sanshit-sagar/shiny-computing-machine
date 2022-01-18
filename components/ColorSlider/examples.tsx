import React from 'react';

import { ExampleBase } from '@/components/ExampleBase';

import { ColorSlider } from '@/components/ColorSlider';
import { RgbaSlider } from '@/components/ColorSlider/RgbaSlider';
import { HslaSlider } from '@/components/ColorSlider/HslaSlider'; 

import StateFactory from '@/utils/StateFactory'; 

import { BlendingModeIcon } from '@radix-ui/react-icons';

const init = () => {
    const initColorSliderProps = {
        id: 'exampleColorSlider',
        isDisabled: false,
        orientation: 'horizontal',
        label: '',
        defaultValue: '#7f007f',
        channel: "hue",
        step: 1,
        locale: 'en_US'
    }; 
    return initColorSliderProps;
}

const ColorSliderInstance = (props) => <RgbaSlider defaultValue={'#7f007f'} />


const ExampleColorSlider = () => {
    const { state } = StateFactory(init)

    return (
        <ExampleBase
            heading={'Color Slider'}
            description={'Color slider described here'}
            icon={<BlendingModeIcon />}
            component={<ColorSliderInstance props={state} />}
            controls={[]}
        />
    ); 
}

export default ExampleColorSlider