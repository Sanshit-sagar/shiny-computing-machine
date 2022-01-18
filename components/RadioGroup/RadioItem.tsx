import React, { useContext, useRef, Ref } from 'react'

import { useRadio } from '@react-aria/radio'
import { useLabel } from '@react-aria/label'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'

import { RadioContext } from './Context'
import { StyledLabel, StyledRadio } from './styles'
import { RadioItemProps, RadioGroupState } from "./interfaces"

const RadioItem = ({ children, ...props }: RadioItemProps) => {
    
    const state: RadioGroupState = useContext(RadioContext)
    const ref: Ref<HTMLInputElement> = useRef<HTMLInputElement | null>(null)

    const { inputProps } = useRadio(props, state, ref)
    const { labelProps } = useLabel(props)
    const { isFocusVisible, focusProps } = useFocusRing()

    const isSelected = state.selectedValue === props.value

    return (
    
        <StyledLabel 
            {...labelProps} 
            selected={isSelected} 
            css={{ 
                textTransform: 'capitalize' 
            }}
        > 
            <StyledRadio 
                type="radio"
                role="radio"
                name={props.value}
                checked={isSelected}
                aria-checked={isSelected ? "true" : "false"}
                className={isFocusVisible ? 'focus' : null}
                {...mergeProps(inputProps, focusProps)}
            />   
            {children}
        </StyledLabel>
    )
}

RadioItem.displayName = 'RadioItem'
export default RadioItem