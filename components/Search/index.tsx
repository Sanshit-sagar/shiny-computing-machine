import { useRef } from 'react' 

import { useFilter } from '@react-aria/i18n'
import { useButton } from '@react-aria/button'
import { useComboBox } from '@react-aria/combobox'
import { useSearchField } from '@react-aria/searchfield'
import { useComboBoxState } from '@react-stately/combobox'
import { useSearchFieldState } from '@react-stately/searchfield'

import type { ComboBoxProps } from '@react-types/combobox' 

import ListBox from '@/components/ListBox/index'
import { Popover } from '@/components/Select/Popover'
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

import {
    StyledInput,
    StyledSuffix,
    StyledPrefix,
    StyledWrapper,
    StyledInputGroup,
} from './styles'

export function SearchAutocomplete<T extends object>(props: ComboBoxProps<T>) {

    const { contains } = useFilter({ sensitivity: 'base' })
    const state = useComboBoxState({ ...props, defaultFilter: contains })

    const inputRef = useRef<HTMLInputElement>(null)
    const listBoxRef = useRef<HTMLUListElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)

    const { 
        inputProps, 
        listBoxProps, 
        labelProps 
    } = useComboBox({ ...props, inputRef, listBoxRef, popoverRef }, state)

    const searchProps = {
        label: props.label,
        value: state.inputValue,
        onChange: (value: string) => state.setInputValue(value)
    }

    const searchState = useSearchFieldState(searchProps)
    const { inputProps: searchInputProps, clearButtonProps } = useSearchField(searchProps, searchState, inputRef)
    const clearButtonRef = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(clearButtonProps, clearButtonRef)


    return (
        <StyledWrapper>
    
            <StyledInputGroup>
                <StyledPrefix>
                    <MagnifyingGlassIcon aria-hidden="true" />
                </StyledPrefix>

                <StyledInput {...searchInputProps} ref={inputRef} />
               
                <StyledSuffix 
                    {...buttonProps} 
                    isVisible={state.inputValue !== ''}
                    ref={clearButtonRef} 
                >
                    <Cross2Icon />
                </StyledSuffix> 

            </StyledInputGroup>

            {state.isOpen &&  (
                <Popover popoverRef={popoverRef} isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
                </Popover>
            )}
        </StyledWrapper>
    )
}