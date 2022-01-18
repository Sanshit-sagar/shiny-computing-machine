import React, { useRef, RefObject } from 'react'

import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { ArrowDownIcon } from '@radix-ui/react-icons'
import type { ComboBoxProps } from '@react-types/combobox'

import { useComboBoxState, Item, Section } from 'react-stately'
import { useComboBox, useFilter, useButton, useHover } from 'react-aria'

import { Text } from '../Text/Text'
import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { IconButton } from '../IconButton'

const Container = styled('div', {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
});

const Label = styled('label', {
    display: 'inline-block',
    fontSize: '1',
    fontStyle: 'medium',
    color: 'black',
    alignText: 'left'
})


const InputGroup = styled('div', {
    display: 'inline-flex', 
    flexDirection: 'row',
    border: 'none',
    outline: 'none',
    overflow: 'hidden',
    backgroundColor: 'transparent'
})

const UserInput = styled('input', {
    padding: '$1',
    outline: 'none', 
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '$1',
    color: 'black',
    fontSize: '$1',
    fontWeight: 200,
    borderRight: 'none',
    borderTopRightRadius: 0, 
    borderBottomRightRadius: 0,
})

export function ComboBox<T extends object>(props: ComboBoxProps<T>) {

    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({ ...props, defaultFilter: contains });

    let buttonRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    let inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let listBoxRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    let popoverRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    let {
        buttonProps: triggerProps,
        inputProps,
        listBoxProps,
        labelProps
    } = useComboBox({ ...props, inputRef, buttonRef, listBoxRef, popoverRef }, state);

    let { buttonProps } = useButton(triggerProps, buttonRef)

    return (
        <Container>
            <Label {...labelProps}> 
                <Text>{props.label}</Text>
            </Label> 

            <InputGroup>
                <UserInput 
                    {...inputProps} 
                    ref={inputRef} 
                    css={{ 
                        borderBottomLeftRadius: state.isOpen ? 1 : 2 
                    }} 
                />
                <IconButton 
                    {...buttonProps} 
                    ref={buttonRef}
                    size='2' 
                    variant='ghost' 
                    css={{ 
                        margin: 0, 
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: state.isOpen ? 1 : 2,
                    }}
                >
                    <ArrowDownIcon aria-hidden='true' /> 
                </IconButton> 
            </InputGroup>

            {state.isOpen ? 
                <Popover 
                    popoverRef={popoverRef} 
                    isOpen={state.isOpen} 
                    onClose={state.close}
                >
                    <ListBox
                        {...listBoxProps}
                        listBoxRef={listBoxRef}
                        state={state}
                    />
                </Popover> 
            : null} 
        </Container>
    );
}


