import React from 'react'

import { useRadioGroup } from '@react-aria/radio'
import { useRadioGroupState } from '@react-stately/radio'

import { RadioContext } from './Context'
import { StyledRadioGroup } from './styles'
import { isRadioItemElement, isRadioGroupLabelElement } from './utils'
import { RadioGroupState, AriaRadioGroupProps } from './interfaces'

const RadioGroup = ({ children, label, ...props }: AriaRadioGroupProps) => {

    let state: RadioGroupState = useRadioGroupState(props)
    let { radioGroupProps } = useRadioGroup(props, state)

    const filteredLabel = React.Children.toArray(children).filter((child) =>
        isRadioGroupLabelElement(child)
    )
    const filteredChildren = React.Children.toArray(children).filter((child) =>
        isRadioItemElement(child)
    )

    return (
        <RadioContext.Provider value={state}> 
            {filteredLabel} 
            
            <StyledRadioGroup 
                role="radioGroup" 
                orientation={props.orientation} 
                {...radioGroupProps}
            >  
                {filteredChildren} 
            </StyledRadioGroup>
        </RadioContext.Provider>
    )
}

RadioGroup.displayName = 'RadioGroup'
export default RadioGroup