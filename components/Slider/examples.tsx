import React from 'react'

import {
    HeightIcon,
    WidthIcon,
    MoveIcon,
    SliderIcon,
    PinLeftIcon,
    PinRightIcon,
    RulerHorizontalIcon
} from '@radix-ui/react-icons'

import { ExampleBase } from '@/components/ExampleBase'
import StateFactory from '@/utils/StateFactory'
import Slider from './Slider'

import type { 
    SliderProps, 
    MutateStateFromMenuAtionProps 
} from './interfaces'


const init = (): SliderProps => {
    const initSliderState: Omit<SliderProps, 'children'> = {
        label:'Distance to the moon',
        defaultValue: [0.1, 0.7],
        minValue: 0,
        maxValue: 1,
        step: 0.001,
        disabled: false,
        orientation:'horizontal',
        formatOptions: { 
            style: "percent"
        }
    }
    return initSliderState
}

export const SliderInstance = (props: SliderProps) => (
    <Slider.Root {...props}>
        <Slider.Track>
            <Slider.Thumb />
            {/* <Slider.Thumb> 🚀  </Slider.Thumb> */}
            {/* <Slider.Thumb> 🛺  </Slider.Thumb> */}
        </Slider.Track>
    </Slider.Root>
);

export const SliderControl = (props: SliderProps) => (
    <Slider.Root {...props}>
        <Slider.Track>
            <Slider.Thumb />
        </Slider.Track>
    </Slider.Root>
)

function mutateStateFromMenuAction<T extends object>(props: MutateStateFromMenuAtionProps<T>) {
    const updatedValue = (typeof props.value === 'string') ? props.value : props.value.entries().next().value
    props.update('orientation', !updatedValue ? '' : updatedValue[0])
    if(updatedValue.length > 1) {
        props.update('orientation', !updatedValue ? '' : updatedValue[1])
    }
}

const ExampleSlider = () => {
    const { state, update } = StateFactory<SliderProps>(init)

    const mutableState: SliderProps = {
        ...state,
        onChange: (val: number[]) => update('value', val) 
    }
    
    const controls = [{ 
        type:'input-num',
        name:'Minimum', 
        icon: <PinLeftIcon />, 
        label:'Minimum',
        value: state.minValue, 
        onChange:(val: string) => update('minValue', Number(parseInt(val)))
    }, {
        type:'input-num', 
        name:'Maximum',
        icon:<PinRightIcon/>,
        label:'Maximum',
        value:state.maxValue,
        onChange:(val: string)=>update('maxValue', Number(parseInt(val)))
    }, {
        type: 'input-num',
        name:'Step',
        icon: <RulerHorizontalIcon />,
        label: 'Step',
        value: state.step,
        onChange:(val: string) => update('step', Number(parseInt(val)))
    }, { 
        type: 'switch', 
        name: 'Disabled', 
        value: state.disabled, 
        onChange: (val: boolean) => update('disabled', val) 
    }, {
        type: 'menu',
        name:  `Orientation`,
        items: [{ name: 'Orientation', children: [
            { name: 'vertical', icon: <HeightIcon />, shortcut: '' }, 
            { name: 'horizontal', icon: <WidthIcon />, shortcut: '' }]
        }],
        selectionMode: "single",
        selectedKeys: new Set([state.orientation]),
        icon: <MoveIcon />,
        onSelectionChange: (value: 'all' | Set<React.Key>) => (
            mutateStateFromMenuAction<SliderProps>({ state, update, value })
        ),
        isDisabled: false
    }]

    return (
        <ExampleBase
            icon={<SliderIcon />}
            heading={'Slider'}
            description={'Slider description here'}
            component={<SliderInstance {...mutableState} />}
            controls={controls}
        />
    );
}

export default ExampleSlider