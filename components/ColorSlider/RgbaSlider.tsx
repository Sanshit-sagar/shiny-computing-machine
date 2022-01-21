import React, { useState } from 'react';

import { ColorSlider } from '@/components/ColorSlider'
import { Color } from '@/components/ColorSlider/interfaces'
import { parseColor } from '@react-stately/color'

import { Text } from '@/components/Text'
import { Card } from '@/components/Card'


interface RgbaSliderProps {
    defaultValue: string; 
}

const stringifyColor = (color): string => {
    if(typeof color !== 'string') 
        return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`
    return color
}

export const RgbaSlider = ({ defaultValue }: RgbaSliderProps) => {
    const [color, setColor] = useState<string | Color>(parseColor(defaultValue || '#fff'));

    const handleChange = (updatedColor: string) => setColor(updatedColor)
    const colorStr = stringifyColor(color)

    return (
        <Card.Wrapper css={{ p: '$4', bc: '$panelBase', borderColor: colorStr }}>
            <Text css={{ fontWeight: 700, fontFamily: '$plexsans', color: colorStr, textAlign: 'center' }}> 
                {colorStr}
            </Text>
            <ColorSlider channel="red" value={color} onChange={handleChange} />
            <ColorSlider channel="green" value={color} onChange={handleChange} />
            <ColorSlider channel="blue" value={color} onChange={handleChange} />
            <ColorSlider channel="alpha" value={color} onChange={handleChange} />
        </Card.Wrapper>
    )
}