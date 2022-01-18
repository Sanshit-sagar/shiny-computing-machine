import React, { useRef, Ref } from 'react'

import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'

export { Item } from 'react-stately'
import { useSelectState } from 'react-stately'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { AriaSelectProps } from '@react-types/select'

import { 
    StyledWrapper, 
    StyledLabel, 
    StyledSelectorIcon, 
    StyledButton, 
    StyledValue 
} from './styles'

import { Popover } from './Popover'
import ListBox from '@/components/ListBox/index'

export function Select<T extends object>(props: AriaSelectProps<T>) {
    const state = useSelectState(props)

    const ref: Ref<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const {
        labelProps,
        triggerProps,
        valueProps,
        menuProps
    } = useSelect(props, state, ref)

    const { buttonProps } = useButton(triggerProps, ref)

    const { isFocusVisible, focusProps } = useFocusRing()

    return (
        <StyledWrapper>
            {props.label && (
                <StyledLabel {...labelProps}> {props.label} </StyledLabel>
            )}

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
                    <CaretSortIcon /> 
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