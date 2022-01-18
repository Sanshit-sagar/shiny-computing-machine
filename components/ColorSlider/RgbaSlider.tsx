import React, { Fragment, useState } from 'react';

import { ColorSlider } from '@/components/ColorSlider';
import { Color } from '@/components/ColorSlider/interfaces';
import { parseColor } from '@react-stately/color';

interface RgbaSliderProps {
    defaultValue: string; 
}

export const RgbaSlider = ({ defaultValue }: RgbaSliderProps) => {
    const [color, setColor] = useState<string | Color>(parseColor(defaultValue || '#fff'));

    const handleChange = (updatedColor: string) => setColor(updatedColor); 

    return (
        <Fragment>
            <ColorSlider channel="red" value={color} onChange={handleChange} />
            <ColorSlider channel="green" value={color} onChange={handleChange} />
            <ColorSlider channel="blue" value={color} onChange={handleChange} />
            <ColorSlider channel="alpha" value={color} onChange={handleChange} />
        </Fragment>
    )
}