import React, { useState } from 'react' 

import Ripple from './Ripple'
import Spinner from './Spinner'
import Equalizer from './Equalizer'

import { ExampleBase } from '@/components/ExampleBase'
import { SymbolIcon } from '@radix-ui/react-icons'

export const SpinnerInstance = () => {
   const [useRipple, setUseRipple] = useState<boolean>(false)

   if(useRipple) return <Ripple />
   return <Equalizer />
}

const ExampleSpinner = () => {

    return (
        <ExampleBase
            heading={'Spinner'}
            description={'Spinner description here'}
            icon={<SymbolIcon />}
            component={<SpinnerInstance />}
            controls={[]}
        />
    );
}

export default ExampleSpinner


// const controls = [
    // { 
        // type:'switch', 
        // name: 'Hide Label',
        // value: state.hideLabel, 
        // onChange: (val: boolean) => update('hideLabel', val), 
        // icon: <EyeClosedIcon /> 
    // }, { 
        // type: 'slider', 
        // label: 'size', 
        // value: [state.size], 
        // onChange: (val: SizeVariants[]) => update('size', Number(parseInt(
        // icon: <DimensionsIcon />, 
        // minValue: 1, 
        // maxValue: 15, 
        // step: 1, 
        // isDisabled: false, 
        // orientation: 'horizontal', 
        // size: '1',
        // formatOptions: {
            // style: 'decimal'
        // }
    // },
    // {   type: 'slider', 
        // label: 'radius',
        // value:[state.radius], 
        // onChange: (val: string) => update('radius',Number(parseInt(val))),
        // icon:<AngleIcon />,
        // minValue: 1, 
        // maxValue: 15, 
        // step: 1,  
        // isDisabled: false,
        // orientation: 'horizontal',
        // size: '1', 
        // formatOptions: {style: 'decimal'},
    // }, 
    // { 
        // type:'slider',
        // label:'speed', 
        // value: [state.speed], 
        // onChange: (val: string) => update('speed',Number(parseInt(val))),
        // icon:<RocketIcon />,
        // minValue: 1, 
        // maxValue: 15, 
        // step: 1,  
        // isDisabled: false, 
        // orientation: 'horizontal', 
        // size: '1', 
        // formatOptions: {
            // style: 'decimal'
        // } 
    // },