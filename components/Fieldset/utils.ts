import React, { useContext, ReactChild } from 'react' 

import {
    IFieldsetContext,
    FieldsetRootNode,
    FieldsetLabelNode,
    FieldsetIconNode,
    FieldsetFieldNode,
    FieldsetDescriptionNode,
    FieldsetErrorMessageNode,
    FieldsetSuccessMessageNode
} from './types'

import FieldsetRoot from './FieldsetRoot'
import FieldsetIcon from './FieldsetIcon'
import FieldsetLabel from './FieldsetLabel'
import FieldsetField from './FieldsetField'
import FieldsetDescription from './FieldsetDescription'
import FieldsetErrorMessage from './FieldsetErrorMessage'
import FieldsetSuccessMessage from './FieldsetSuccessMessage'

import FieldsetContext from './FieldsetContext'

import { TextArea } from '@/components/TextArea'
import { TextInput } from '@/components/TextInput'
import { NumberField } from '@/components/NumberField'
import Select from '@/components/Select'
import { StyledInput } from '@/components/TextField/styles'

import { isElementOfType } from '@/interfaces/Guards'

export const useFieldsetContext = () => {
    const fieldsetContext = useContext<IFieldsetContext | null>(FieldsetContext)

    if(!fieldsetContext)
        throw new Error(`illegal access to fieldset context from outside component tree`)

    return fieldsetContext
} 

export const isFieldsetRootElement = (child: ReactChild, index: number): child is FieldsetRootNode => (
    child && isElementOfType(child, FieldsetRoot) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetFieldElement = (child: ReactChild, index: number): child is FieldsetFieldNode => (
    child && isElementOfType(child, FieldsetField) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetLabelElement = (child: ReactChild, index: number): child is FieldsetLabelNode => (
    child && isElementOfType(child, FieldsetLabel) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetIconElement = (child: ReactChild, index: number): child is FieldsetIconNode => (
    child &&  isElementOfType(child, FieldsetIcon) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetDescriptionElement = (child: ReactChild, index: number): child is FieldsetDescriptionNode => (
    child && isElementOfType(child, FieldsetDescription) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetErrorMessageElement = (child: ReactChild, index: number): child is FieldsetErrorMessageNode => (
    child && isElementOfType(child, FieldsetErrorMessage) && !isElementOfType(child, FieldsetRoot)
)

export const isFieldsetSuccessMessageElement = (child: ReactChild, index: number): child is FieldsetSuccessMessageNode => (
    child && isElementOfType(child, FieldsetSuccessMessage) && !isElementOfType(child, FieldsetRoot)
)

export type InputNode = React.ReactElement<{}, string | React.JSXElementConstructor<any>>

export const isInputElement = (child: ReactChild, index: number): child is InputNode => (
    child &&  !isElementOfType(child, FieldsetRoot) && (
            isElementOfType(child, TextInput) 
        ||  isElementOfType(child, TextArea)
        ||  isElementOfType(child, NumberField)
        ||  isElementOfType(child, Select)
        ||  isElementOfType(child, StyledInput)
    )
)



