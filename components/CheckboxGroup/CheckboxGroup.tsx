import React from 'react'

import { useCheckboxGroup } from '@react-aria/checkbox'
import { useCheckboxGroupState} from '@react-stately/checkbox'

import { Label } from '@/components/Label'

import { isCheckboxItemElement } from './utils'
import { CheckboxGroupContext } from './Context'
import { CheckboxGroupProps } from './interfaces'
import { StyledCheckboxGroup } from './styles'

const CheckboxGroup = ({ children, label, ...props }: CheckboxGroupProps) => {
    const state = useCheckboxGroupState(props)
    const { groupProps, labelProps } = useCheckboxGroup(props, state)

    const filteredChildren = React.Children.toArray(children).filter((child) =>
        isCheckboxItemElement(child)
    )

    return (
        <StyledCheckboxGroup 
            {...groupProps} 
            orientation={props.orientation}
        >
            <Label {...labelProps}> {label} </Label>
            <CheckboxGroupContext.Provider value={state}>
                {filteredChildren}
            </CheckboxGroupContext.Provider>
        </StyledCheckboxGroup>
    )
}

CheckboxGroup.displayName = 'CheckboxGroup'
export default CheckboxGroup


