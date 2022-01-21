import React, { ElementType, cloneElement, ReactChild } from 'react'

import { useField } from '@react-aria/label'

import { StyledFieldsetRoot } from './styles'
import FieldsetContext from './FieldsetContext'
import { 
    FieldAria, 
    FieldsetProps, 
    IFieldsetContext 
} from './types'
import {
    isInputElement,
    isFieldsetLabelElement,
    isFieldsetIconElement,
    isFieldsetDescriptionElement,
    isFieldsetErrorMessageElement,
    isFieldsetSuccessMessageElement
} from './utils'

import { ValidationState } from '@/interfaces/Shared'
import { flattenChildren } from '@/utils/flattenChildren'
import { Flex } from '@/components/Flex'


const FieldsetRoot = ({ 
    element: Component = 'div', 
    labelElementType = ('label' as ElementType), 
    label,
    description,
    errorMessage = 'Error!',
    successMessage = 'Success!',
    validationState = ('none' as ValidationState),
    children, 
    css, 
    ...props 
}: FieldsetProps) => {
    const ariaFieldProps: FieldAria = useField(props)

    const contextValue: IFieldsetContext = {
        labelElementType,
        label,
        description,
        errorMessage,
        successMessage,
        validationState,
        ...ariaFieldProps
    } 

    const flattenedChildren = flattenChildren(children)
    const filteredIcon = flattenedChildren.filter((child, index) => isFieldsetIconElement(child, index))
    const filteredLabel =  flattenedChildren.filter((child, index) => isFieldsetLabelElement(child, index))
    const filteredDescription = flattenedChildren.filter((child, index) => isFieldsetDescriptionElement(child, index)) 
    const fiteredErrorMessage = flattenedChildren.filter((child, index) => isFieldsetErrorMessageElement(child, index))
    const filteredSuccessMessage = flattenedChildren.filter((child, index) => isFieldsetSuccessMessageElement(child, index))
    const filteredField = flattenedChildren.filter((child, index) => isInputElement(child, index))

    return (
        <FieldsetContext.Provider value={contextValue}>
            <StyledFieldsetRoot>
                <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$2' }}>
                    {filteredIcon}
                    {filteredLabel}
                </Flex>
                
                {filteredField}

                <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '$3' }}>
                    {filteredDescription}
                    <Flex css={{ fd: 'row', jc: 'flex-end', ai: 'center', gap: '$2' }}>
                        {fiteredErrorMessage}
                        {filteredSuccessMessage}
                    </Flex>
                </Flex>
            </StyledFieldsetRoot>
        </FieldsetContext.Provider>
    )
}

FieldsetRoot.displayName = 'FieldsetRoot'
export default FieldsetRoot
