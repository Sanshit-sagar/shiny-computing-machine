import React from 'react'
import { InputIcon } from '@radix-ui/react-icons'

import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'
import Fieldset from '@/components/Fieldset'

import { TextInputProps } from './interfaces'
import TextInput from './variants'

const init = (): TextInputProps => {
    const initState: TextInputProps = {
        defaultValue: '',
        type: 'password',
        label: 'E-mail',
        minLength: 1,
        maxLength: 15,
        placeholder: 'abc@example.com',
        description: 'Enter your preferred email address for communication',
        errorMessage: '',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        autoFocus: false,
        validationState: 'valid',
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: false
    }
    return initState;
}

export const TextInputInstance = () => {
    const{ state } = StateFactory<TextInputProps>(init)

    return <TextInput />
}

const ExampleTextInput = () => {
    return (
        <ExampleBase
            icon={<InputIcon />}
            heading='Textfield'
            description='Describe textfield here'
            component={<TextInputInstance />}
            controls={[]}
        />
    )
}

export default ExampleTextInput