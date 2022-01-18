import React from 'react'

import { InputIcon } from '@radix-ui/react-icons'
import { LinedEdit } from '@/components/LinedEdit'
import { ExampleBase } from '@/components/ExampleBase'
import { InlineEditProps as LinedEditState } from '@/components/LinedEdit/Inline'

import StateFactory from '@/utils/StateFactory'

const init = (): LinedEditState => {
    const initLinedEditState: LinedEditState = {
        value: 'Peanut butter jelly time!',
        multiline: false,
        size: '1',
        radius: '1'
    };
    return initLinedEditState;
}

export const InlineEditInstance = () => {
    const { state, update } = StateFactory<LinedEditState>(init)

    const mutableState: LinedEditState = {
        ...state,
        setValue: (val: string) => update('value', val)
    }; 

    return <LinedEdit {...mutableState} />
}

const ExampleLinedEdit = () => {
    // const getMode = () => state.multiline ? 'Multiline' : 'Inline'; 

    // const SlideRound = (val: string) => String(Number(Math.round(parseFloat(val))));

    // const controls = [{ 
        // type: 'slider', 
        // label: 'Size', 
        // value: [state.size], 
        // onChange: (val: string[]) => update('size',  SlideRound(val[0])),
        // icon: <HeightIcon />, 
        // minValue: 0, 
        // maxValue: 5, 
        // step: 0.1
    // }, { 
        // type: 'slider', 
        // label: 'Radius', 
        // value: [state.radius], 
        // onChange: (val: string[]) => update('radius', val[0]),
        // icon: <CornersIcon />, 
        // minValue: 0, 
        // maxValue: 9, 
        // step: 1
    // },{
        // type: 'switch',
        // name: 'Multiline',
        // value: state.multiline,
        // icon: <LineHeightIcon />,
        // onChange: (val: boolean) => update('multiline', val),
        // isDisabled: false
    // }];

    return (
        <ExampleBase
            heading={`Inline Edit`}
            description={'Lined Edit description here'}
            icon={<InputIcon />}
            component={<InlineEditInstance />}
            controls={[]}
        /> 
    ); 
}

export default ExampleLinedEdit; 