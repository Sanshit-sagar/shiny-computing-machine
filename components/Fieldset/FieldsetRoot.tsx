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
    isFieldsetLabelElement,
    isFieldsetIconElement,
    isFieldsetDescriptionElement,
    isFieldsetErrorMessageElement
} from './utils'

import { ValidationState } from '@/interfaces/Shared'
import { flattenChildren } from '@/utils/flattenChildren'
import { Flex } from '@/components/Flex'


const FieldsetRoot = ({ 
    element: Component, 
    children, 
    css, 
    label,
    description,
    errorMessage,
    ...props 
}: FieldsetProps) => {
    const ariaFieldProps: FieldAria = useField(props)

    const contextValue: IFieldsetContext = {
        labelElementType: props?.labelElementType ?? ('label' as ElementType), 
        label,
        description,
        errorMessage,
        validationState: props?.validationState ?? ('valid' as ValidationState),
        ...ariaFieldProps
    } 

    const flattenedChildren = flattenChildren(children)
    const filteredIcon = flattenedChildren.filter((child, index) => isFieldsetIconElement(child, index))
    const filteredLabel =  flattenedChildren.filter((child, index) => isFieldsetLabelElement(child, index))
    // const filteredDescription = flattenedChildren.filter((child, index) => isFieldsetDescriptionElement(child, index)) 
    // const fiteredErrorMessage = flattenedChildren.filter((child, index) => isFieldsetErrorMessageElement(child, index))

    return (
        <FieldsetContext.Provider value={contextValue}>
            <StyledFieldsetRoot>
                <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$2' }}>
                    {filteredIcon}
                    {filteredLabel}
                </Flex>

                {flattenedChildren.map((child: ReactChild, index: number) => {
                    if(index <= 1) return null
                    
                    if(isFieldsetDescriptionElement(child,index)) {
                        return cloneElement(child, {
                          
                        })
                    }
                    if(isFieldsetErrorMessageElement(child, index)) {
                        return cloneElement(child, {
                            
                        })
                    }

                    return cloneElement(child, {
                        
                    })
                })}
            </StyledFieldsetRoot>
        </FieldsetContext.Provider>
    )
}

FieldsetRoot.displayName = 'FieldsetRoot'
export default FieldsetRoot
