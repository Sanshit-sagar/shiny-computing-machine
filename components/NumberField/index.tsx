import React, { createRef, RefObject } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'
import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'

import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'

import { TooltipTrigger } from '@/components/Tooltip'
import { useInteractions } from '@/hooks/useInteractions'

import { 
    InputGroup, 
    StyledButton, 
    NumberInputField 
} from './styles'

import { MessageProps, TooltipIconProps } from './interfaces'

const Message = ({ props, message, state }: MessageProps) => (
    <MessageText {...props} css={{ color: state==='invalid' ? 'red' : 'green' }}>
        {message}
    </MessageText> 
)

const getTooltipContent = (type) => type === 'increment' ? 'Increment (+)' : 'Decrement (-1)'
const getButtonPlacement = (type) => type === 'increment' ? 'right' : 'left'

const TooltipIconButton = ({ ref, type, children, ...props }: TooltipIconProps) => (
    <TooltipTrigger content={getTooltipContent(type)}>
        <StyledButton {...props} placement={getButtonPlacement(type)} ref={ref}>
            {children}
        </StyledButton>
    </TooltipTrigger>
)

export function NumberField(props) {

    let { locale } = useLocale()
    let state = useNumberFieldState({ ...props, locale })

    let inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    let incrRef: RefObject<HTMLButtonElement> = createRef<HTMLButtonElement>()
    let decrRef: RefObject<HTMLButtonElement> = createRef<HTMLButtonElement>()
   
    let {
        groupProps,
        inputProps,
        decrementButtonProps,
        incrementButtonProps
    } = useNumberField(props, state, inputRef)

    let { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef)
    let { buttonProps: decrementProps } = useButton(decrementButtonProps, decrRef)

    const { interactionProps, ...interactionStates } = useInteractions({
        isDisabled: props.isDisabled
    });

    return (
       
        <InputGroup {...mergeProps(interactionProps, groupProps)}>
            <TooltipIconButton {...decrementProps} type="decrement" ref={decrRef}>
                <MinusIcon />
            </TooltipIconButton>
            
            <NumberInputField {...mergeProps(inputProps, interactionStates)} ref={inputRef} />
            
            <TooltipIconButton {...incrementProps} type="increment" ref={incrRef}>
                <PlusIcon />
            </TooltipIconButton>
        </InputGroup>
    
    )
}

NumberField.displayName = 'NumberField'