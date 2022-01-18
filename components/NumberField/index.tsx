import React, { createRef, RefObject } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'
import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'

import { PlusIcon, MinusIcon, RulerSquareIcon } from '@radix-ui/react-icons'

import { DecoratedLabel } from '@/components/Shared'
import { TooltipTrigger } from '@/components/Tooltip'
import { useInteractions } from '@/hooks/useInteractions'

import { 
    InputGroup, 
    MessageText, 
    ControlGroup, 
    StyledButton, 
    NumberInputField,
    LeftAlignedWrapper 
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
        labelProps,
        groupProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        decrementButtonProps,
        incrementButtonProps
    } = useNumberField(props, state, inputRef)

    let { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef)
    let { buttonProps: decrementProps } = useButton(decrementButtonProps, decrRef)

    const { interactionProps, ...interactionStates } = useInteractions({
        isDisabled: props.isDisabled
    });

    return (
        <ControlGroup>
        
            <InputGroup {...mergeProps(interactionProps, groupProps)}>
                <TooltipIconButton {...decrementProps} type="decrement" ref={decrRef}>
                    <MinusIcon />
                </TooltipIconButton>
                
                <NumberInputField {...mergeProps(inputProps, interactionStates)} ref={inputRef} />
                
                <TooltipIconButton {...incrementProps} type="increment" ref={incrRef}>
                    <PlusIcon />
                </TooltipIconButton>
            </InputGroup>
        
        </ControlGroup>
    );
}
 
{/* <LeftAlignedWrapper> */}
{/* <DecoratedLabel  */}
// hideLabel={false}
// text={props.label}
// labelProps={labelProps}
// isLoading={props.isLoading}
// icon={<RulerSquareIcon />}
// {...interactionStates}
{/* />  */}
// {props.errorMessage  ? (
    // <Message props={errorMessageProps} message={props.errorMessage} state="invalid" /> 
// ) : props.description ? (
    // <Message props={descriptionProps} message={props.description} state="valid" /> 
// ) : null}