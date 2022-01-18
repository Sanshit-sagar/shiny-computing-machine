import React, { useRef, useContext, Ref } from 'react'

import { useCheckboxGroupItem } from '@react-aria/checkbox'

import { Flex } from '@/components/Flex'
import { Label } from '@/components/Label'

import { CheckboxGroupContext } from './Context'
import { StyledLabel, StyledCheckbox } from './styles'
import { CheckboxProps, CheckboxGroupState } from './interfaces'


const CheckboxItem = ({ label = '', children, ...props }: CheckboxProps) => {
    
    let ref: Ref<HTMLInputElement> = useRef<HTMLInputElement>()
    let state: CheckboxGroupState = useContext(CheckboxGroupContext)

    let { inputProps } = useCheckboxGroupItem(props, {
        ...state,
        value: [...props.value]
    }, ref)

    let isDisabled = state.isDisabled || props.isDisabled
    let isSelected = state.isSelected(props.value)

    const handleSelection = (value: string) => {
        state.toggleValue(value)
    }

    return (
        <StyledLabel onClick={(_event) => handleSelection(props.value)}> 
            <StyledCheckbox
                type="checkbox"
                checked={isSelected}
                disabled={isDisabled}
                aria-checked={isSelected}
                role="checkbox"
                {...inputProps}
            />
            {children} 
        </StyledLabel>
    )
}

CheckboxItem.displayName = 'CheckboxItem'
export default CheckboxItem