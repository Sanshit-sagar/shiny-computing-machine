import React from 'react'

import {
    BoxIcon,
    StarIcon,
    LockClosedIcon
} from '@radix-ui/react-icons'

import { TextArea } from './index'
import { ExampleBase } from '../ExampleBase'
import StateFactory from '../../utils/StateFactory'

import type { TextAreaProps } from './interfaces'
import { RestrictedTypeEnum } from './interfaces'

function init(): TextAreaProps{
    const initTextAreaProps: TextAreaProps = {
        id: 'exampleTextArea',
        label: 'Description',
        limit: 500,
        restriction: RestrictedTypeEnum.CHARS,
        value: 'Today...',
        onChange: (value: string) => {},
        icon: <StarIcon />,
        valid: false,
        invalid: false,
        disabled: false,
        required: false,
        readOnly: false,
        autoFocus: false,
        description: 'Enter up to 250 words',
        errorMessage: '',
        validationState: 'valid'
    }; 
    return initTextAreaProps
}

export const TextAreaInstance = () => {
    const { state, update } = StateFactory<TextAreaProps>(init)
    const mutableState = {
        ...state,
        onChange: (val: string) => update('value', val),
    }

    return <TextArea {...mutableState} />
}

const ExampleTextArea = () => {

    return (
        <ExampleBase
            icon={<BoxIcon />}
            heading={'Text Area'}
            description={'Text area described here'}
            component={<TextAreaInstance />}
            controls={[]}
        />
    )
}

export default ExampleTextArea


// const controls = [{ 
    // type: 'switch', 
    // name: 'Disabled',
    // icon: <LockClosedIcon />,
    // value: state.disabled, 
    // onChange:(_val: boolean) => update('disabled', !mutableState.disabled) 
// }, {
// }]