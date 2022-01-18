import React from 'react' 

import Switch, { SwitchFieldProps } from './Switch'
import Slider, { SliderFieldProps } from './Slider'
import Input,  { InputFieldProps  } from './Input'
import Menu, { MenuFieldProps } from './Menu'
import MultiToggle, { MultiToggleFieldProps } from './MultiToggle' 

import { Field } from '../styles'
import { useId } from '@react-aria/utils'

export type ControlItemProps = {
    icon: React.ReactNode;
    name: string;
    description: string;
    active: boolean;
} & (SwitchFieldProps | SliderFieldProps | InputFieldProps | MultiToggleFieldProps | MenuFieldProps)

const ControlItemHandler = ({ type, ...props}: SwitchFieldProps | SliderFieldProps | InputFieldProps | MultiToggleFieldProps | MenuFieldProps) => {
    if(type === 'switch') return <Switch {...props} />
    if(type === 'slider')  return <Slider {...props} />
    if(type === 'text-input') return <Input {...props} />
    if(type === 'multi-toggle') return <MultiToggle {...props} />
    if(type === 'menu') return <Menu {...props} /> 
    return null
}

export const ControlItem = ({ icon, active, ...props }: ControlItemProps) => {

    return (
        <Field
            id={useId()}
            icon={icon}
            name={props.name}
            description={props.description || 'N/A'}
            active={active}
        >
            <ControlItemHandler {...props} />
        </Field>
    )
}