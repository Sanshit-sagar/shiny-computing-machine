import React, { Fragment, useState } from 'react';

import { ColorSlider } from '@/components/ColorSlider';
import { Color } from '@/components/ColorSlider/interfaces';

import { parseColor } from '@react-stately/color';

interface HslaSliderProps {
    defaultValue: string; 
}

export const HslaSlider = ({ defaultValue }: HslaSliderProps) => {
    const [color, setColor] = useState<string | Color>(parseColor(defaultValue || '#fff'));

    const handleChange = (updatedColor: string) => setColor(updatedColor); 

    return (
        <Fragment>
            <ColorSlider channel="Hue" value={color} onChange={handleChange} />
            <ColorSlider channel="Saturation" value={color} onChange={handleChange} />
            <ColorSlider channel="Lightness" value={color} onChange={handleChange} />
            <ColorSlider channel="Alpha" value={color} onChange={handleChange} />
        </Fragment>
    );
}