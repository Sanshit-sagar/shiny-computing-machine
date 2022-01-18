import React, { useReducer } from 'react'

import { BlankState } from './index'
import { blankStateReducer } from './state' 
import { InitBlankStateProps } from "./interfaces"

import { ExampleBase } from '@/components/ExampleBase'

import {
    BoxIcon,
    TextIcon,
    HeadingIcon,
    LockClosedIcon,
    BorderSolidIcon,
    BorderDashedIcon,
    DotsHorizontalIcon,
    TransparencyGridIcon
} from '@radix-ui/react-icons'


const initBlankStateState: InitBlankStateProps = {
    title: 'Example Blank State',
    subtitle: 'Blank state described here',
    dashed: false,
    bordered: true,
    transparent: false,
    isDisabled: false,
    isLoading: false,
    action: {
        label: 'Custom Action',
        onClick: () => alert('yooo'),
    },
}

const BlankStateInstance = (props: InitBlankStateProps) => <BlankState {...props} />;

const ExampleBlankState = () => {
    const [state, dispatch] = useReducer(blankStateReducer, initBlankStateState)

    const handleToggle = (key: keyof InitBlankStateProps, _value: boolean) => {
        dispatch({
            type: 'toggle',
            payload: { key }
        });
    }

    const handleAssign = (key: keyof InitBlankStateProps, value: InitBlankStateProps[keyof InitBlankStateProps]) => {
        dispatch({
            type: 'assign',
            payload: { key, value }
        });
    }

    const controls = [{
        type: 'input',
        label: 'Title',
        value: state.title,
        icon: <HeadingIcon />,
        onChange: (val: string) => handleAssign('title', val),
        isDisabled: false,
    }, {
        type: 'input',
        label: 'Description',
        value: state.subtitle,
        icon: <TextIcon />,
        onChange: (val: string) => handleAssign('subtitle', val),
        isDisabled: false,
    }, { 
        type:'switch',
        name:'Dashed',
        value: state.dashed,
        icon: <BorderDashedIcon />,
        onChange:(val: boolean) => handleToggle('dashed', val),
        isDisabled: state.isDisabled
    }, { 
        type:'switch',
        name:'Bordered',
        value: state.bordered,
        icon: <BorderSolidIcon />,
        onChange:(val: boolean) => handleToggle('bordered', val),
        isDisabled: state.isDisabled
    }, { 
        type:'switch',
        name:'Transparent',
        value: state.transparent,
        icon: <TransparencyGridIcon />,
        onChange:(val: boolean) => handleToggle('transparent', val),
        isDisabled: state.isDisabled
    }, { 
        type:'switch',
        name:'Disabled',
        value: state.isDisabled,
        icon: <LockClosedIcon />,
        onChange:(val: boolean)=> handleToggle('isDisabled',val),
        isDisabled: false
    }, { 
        type:'switch',
        name:'Loading',
        value: state.isLoading,
        icon: <DotsHorizontalIcon />,
        onChange:(val: boolean)=> handleToggle('isLoading',val)
    }];

    return (
        <ExampleBase
            icon={<BoxIcon />}
            heading={'BLANK STATE'}
            description={'Uses Prismjs to allow read only + editable code blocks'}
            component={<BlankStateInstance {...state} />}
            controls={[...controls]}
        />
    );
}

export default ExampleBlankState;