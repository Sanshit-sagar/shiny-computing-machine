import React, { useRef, RefObject } from 'react'

import { styled } from 'stitches.config'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import type { ComboBoxProps } from '@react-types/combobox'

import { useComboBoxState } from 'react-stately'
import { useComboBox, useFilter, useButton } from 'react-aria'


import ListBox from '@/components/ListBox/index'
import { Popover } from '@/components/Select/Popover'
import { StyledInput, StyledInputWrapper } from '@/components/TextInput/styles'

const Container = styled('div', {
    width: '215px',
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
})

const StyledButton = styled('button', {
   
    height: '100%',
    width: '36px',
    border: 'none',
    borderLeft: '1px solid $accentBorder',
    bc: '$panelBase',
    color: '$accentTextContrast',

    d: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',

    m: 0,
    p: 0,
})


export const ComboBox = <T extends object>(props: ComboBoxProps<T>) => {

    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({ ...props, defaultFilter: contains });

    let buttonRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    let inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let listBoxRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    let popoverRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    let {
        buttonProps: triggerProps,
        inputProps,
        listBoxProps
    } = useComboBox({ ...props, inputRef, buttonRef, listBoxRef, popoverRef }, state);

    let { buttonProps } = useButton(triggerProps, buttonRef)

    return (
        <Container>
            <StyledInputWrapper>
                <StyledInput {...inputProps} type="text" ref={inputRef} />
                <StyledButton {...buttonProps} ref={buttonRef}>
                    <ChevronDownIcon aria-hidden='true' /> 
                </StyledButton> 
            </StyledInputWrapper>

            {state.isOpen && ( 
                <Popover popoverRef={popoverRef} isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
                </Popover> 
            )} 
        </Container>
    );
}

ComboBox.displayName = 'ComboBox'
export default ComboBox 


