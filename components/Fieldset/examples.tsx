import React, { useState } from 'react'

import { TextInput } from '@/components/TextInput'
import { ExampleBase } from '@/components/ExampleBase'
import { Label } from '@/components/Label'
import Fieldset from './index'

import { InputIcon } from '@radix-ui/react-icons'

export const NumberfieldFieldsetInstance = () => {

}


export const TextfieldFieldsetInstance = () => {
    const [val, setVal] = useState<string>('')

    return (
        <Fieldset.Root 
            validationState="invalid"
        >
            <Fieldset.Icon css={{ color: 'orange' }}>
                <InputIcon /> 
            </Fieldset.Icon>
            
            <Fieldset.Label>
                Preferred Contact Method
            </Fieldset.Label>
           
            <TextInput 
                defaultValue=""
                placeholder="hi there"
                type="password"
                minLength={10}
                autoComplete="off"
                spellCheck={false}
                autoCorrect="off"

            />
            <Fieldset.Description>
                hello darkness my old friend
            </Fieldset.Description>
            <Fieldset.ErrorMessage>
                Select a contact method.
            </Fieldset.ErrorMessage>
        </Fieldset.Root>
    )
}

export const FieldsetInstance = () => (
    <TextfieldFieldsetInstance /> 
)

const ExampleFieldset = () => {
    return (
        <ExampleBase
            heading="Fieldset"
            description=""
            icon={<InputIcon />}
            component={<FieldsetInstance />}
            controls={[]}
        />
    )
}

export default ExampleFieldset