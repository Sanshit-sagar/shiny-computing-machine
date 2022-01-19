import React, { useState } from 'react'

import { TextAreaInstance } from '@/components/TextArea/examples'
import { TextInputInstance } from '@/components/TextInput/examples'
import { NumberFieldInstance } from '@/components/NumberField/examples'
import { SearchInstance } from '@/components/Search/examples'
import { SelectInstance } from '@/components/Select/examples'

import { ExampleBase } from '@/components/ExampleBase'
import Fieldset from './index'
import { InputIcon } from '@radix-ui/react-icons'


export const FieldsetInstance = () => (
    <Fieldset.Root validationState="invalid">
        <Fieldset.Icon>
            <InputIcon /> 
        </Fieldset.Icon>
        
        <Fieldset.Label>
            Preferred Contact Method
        </Fieldset.Label>
        
        <SelectInstance />

        <Fieldset.Description>
            hello darkness my old friend
        </Fieldset.Description>
        <Fieldset.ErrorMessage display="hidden">
            Select a contact method.
        </Fieldset.ErrorMessage>
    </Fieldset.Root>
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