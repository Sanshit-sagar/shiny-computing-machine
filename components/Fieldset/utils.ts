import { useContext, ReactChild } from 'react' 

import {
    IFieldsetContext,
    FieldsetRootNode,
    FieldsetLabelNode,
    FieldsetIconNode,
    FieldsetDescriptionNode,
    FieldsetErrorMessageNode
} from './types'

import FieldsetRoot from './FieldsetRoot'
import FieldsetLabel from './FieldsetLabel'
import FieldsetIcon from './FieldsetIcon'
import FieldsetDescription from './FieldsetDescription'
import FieldsetErrorMessage from './FieldsetErrorMessage'
import FieldsetContext from './FieldsetContext'

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



