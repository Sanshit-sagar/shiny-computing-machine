import { ElementType, cloneElement, ReactChild } from 'react'

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

import FieldsetLabel from './FieldsetLabel'
import FieldsetDescription from './FieldsetDescription'
import FieldsetErrorMessage from './FieldsetErrorMessage'

import { ValidationState } from '@/interfaces/Shared'
import { flattenChildren } from '@/utils/flattenChildren'


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


    return (
        <FieldsetContext.Provider value={contextValue}>
            <StyledFieldsetRoot>
                {flattenedChildren.map((child: ReactChild, index: number) => {
                    if(isFieldsetLabelElement(child, index)) {
                        return cloneElement(child, {
                            
                        })
                    }
                    
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
