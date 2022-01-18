import React, { useState } from 'react'

import { Flex } from '@/components/Flex'
import { Card } from '@/components/Card/Card'
import { Slider } from '@/components/Slider/Slider'
import { InlineCode } from '@/components/InlineCode'
import { TooltipTrigger } from '@/components/Tooltip'

import { Form, AnimationCardContent, HighlightedValue } from './Components'
import { 
    fadeIn, 
    fadeOut,
    SliderLabel, 
    PaletteColor, 
    ViewingWindow
} from '../styles'
import { generateRandom } from '@/utils/Math'

interface PaletteItemProps {
    h: number;
    s: number;
    l: number;
    delta?: '+' | '-';
    key: number;
}; 

interface PaletteGeneratorProps {
    h?: number;
    s?: number;
    size?: number; 
}

interface SliderLabelAndValueProps {
    label: string;
    value: number; 
}


const generateLights: (size?: number) => number[] = (size: number = 12) => {
    const increment: number = 100 / (size - 1); 
    return [...Array(size)].map((_value, index) => {
        return index * increment; 
    });
}


const PaletteItem = ({ key, h, s, l, delta = '+' }: PaletteItemProps) => {
    const hslaStr = `hsla(${h}, ${s}%, ${l}%, 100%)`

    return (
        <TooltipTrigger delay={0} content={hslaStr}>
            <PaletteColor 
                css={{ 
                    bc: hslaStr, 
                    willChange: `background-color`,
                    animation: `${delta === '+' ? fadeIn : fadeOut} 0.5s ease-in-out`
                }} 
            />
        </TooltipTrigger>
    )
}

const SliderLabelAndValue = ({ label, value }: SliderLabelAndValueProps) => (
    <SliderLabel 
        aria-label={`${label}-label`}
        role="label" 
        aria-hidden="false"
    >
        {label}: <HighlightedValue>{value}</HighlightedValue>
    </SliderLabel>
)

const initHue = () => generateRandom(0, 360)
const initSaturation = () => generateRandom(0, 100)

const PaletteGenerator = ({ 
    h = initHue(), 
    s = initSaturation(),
    size = 12 
}: PaletteGeneratorProps) => {
    const [hue, setHue] = useState<number>(h)
    const [saturation, setSaturation] = useState<number>(s)
    const [prevCard, setPrevCard] = useState<number>(-1)
    const [cardinality, setCardinality] = useState<number>(size)

    const handleHueChange = (hues: number[]) => setHue(hues[0])
    const handleSaturationChange = (saturations: number[]) => setSaturation(saturations[0])
    const handleCardinalityChange = (cards: number[]) => {
        setPrevCard(cardinality)
        setCardinality(cards[0])
    }

    const paletteConfig = `$paletteBase: hsl(${hue}, ${saturation}, 100%)`

    return (
        <Card title={`Saturation & Hue`} css={{ width: '430px' }}>

            <ViewingWindow>
                <InlineCode> {paletteConfig} </InlineCode>
                <AnimationCardContent>
                    <Flex css={{ jc: 'center', fw: 'wrap' }}>
                        {[...generateLights(cardinality)].map((light: number, index: number) => (
                            <PaletteItem 
                                key={index} 
                                h={hue} 
                                l={light} 
                                s={saturation} 
                                delta={
                                        prevCard === -1 
                                    ||  cardinality > prevCard 
                                    ||  cardinality < prevCard && index <= cardinality
                                    ? '+' : '-'
                                }
                            />
                        ))}
                    </Flex>
                </AnimationCardContent>
            </ViewingWindow>

            <Form>
                <Slider 
                    id="cardinality"
                    minValue={8}
                    maxValue={16}
                    step={1}
                    value={[cardinality]}
                    onChange={handleCardinalityChange}
                    formatOptions={{
                        style: 'decimal'
                    }}
                    aria-label="cardinality"
                    label={<SliderLabelAndValue label="Cardinality" value={cardinality} />}
                />
                <Slider
                    id="hue-slider"
                    minValue={0}
                    maxValue={359}
                    step={0.1}
                    value={[hue]}
                    onChange={handleHueChange}
                    formatOptions={{
                        style: 'decimal'
                    }}
                    aria-label="hue"
                    label={<SliderLabelAndValue label="Hue" value={hue} />}
                />
                <Slider
                    id="saturation-slider"
                    minValue={0}
                    maxValue={100}
                    step={0.1}
                    value={[saturation]}
                    onChange={handleSaturationChange}
                    formatOptions={{
                        style: 'decimal'
                    }}
                    aria-label="saturation"
                    label={<SliderLabelAndValue label="Saturation" value={saturation} />}
                />
            </Form>
        </Card>
    )
}

export default PaletteGenerator