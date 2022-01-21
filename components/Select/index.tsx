import React, { useRef } from 'react'

import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'

export { Item } from 'react-stately'
import { useSelectState } from 'react-stately'
import { AriaSelectProps } from '@react-types/select'

import { 
    StyledWrapper,  
    StyledSelectorIcon, 
    StyledButton, 
    StyledValue 
} from './styles'

import { Popover } from './Popover'
import ListBox from '@/components/ListBox/index'

import { CaretDownIcon } from '@/components/Icons/Arrows'

const Select = <T extends object>(props: AriaSelectProps<T>) => {
    const state = useSelectState(props)

    const ref = useRef<HTMLButtonElement>(null)
    const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref)
    const { buttonProps } = useButton(triggerProps, ref)

    const { isFocusVisible, focusProps } = useFocusRing()

    return (
        <StyledWrapper>

            <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />

            <StyledButton
                {...mergeProps(buttonProps, focusProps)}
                ref={ref}
                isOpen={state.isOpen}
                isFocusVisible={isFocusVisible}
            >
                <StyledValue {...valueProps}>
                    {state.selectedItem ? state.selectedItem.rendered : "Select an option"} 
                </StyledValue>

                <StyledSelectorIcon>
                    <CaretDownIcon /> 
                </StyledSelectorIcon>
            </StyledButton>

            {state.isOpen && (
                <Popover isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...menuProps} state={state}/> 
                </Popover>
            )}
        </StyledWrapper>
    )
}

Select.displayName = 'Select'
export default Select