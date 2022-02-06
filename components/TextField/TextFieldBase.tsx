import {
    useRef, 
    forwardRef,
    cloneElement,
    useImperativeHandle,
    RefObject,  
    ReactElement, 
    ElementType, 
    HTMLAttributes, 
    InputHTMLAttributes,
    TextareaHTMLAttributes 
} from 'react' 
import { AriaTextFieldOptions } from './types'

import { TextFieldRef } from '@/interfaces/Shared/Refs'
import { ValidationState } from '@/interfaces/Shared/Input'
import { createFocusableRef } from '@/utils/useRefs'

import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'

import { CheckIcon, CrossIcon } from '@/components/Icons'
import Fieldset from '@/components/Fieldset' 

import {
    StyledLabel,
    StyledInput,
    StyledPrefix,
    StyledContainer
} from './styles'

interface TextFieldBaseProps extends AriaTextFieldOptions {
    wrapperChildren?: ReactElement | ReactElement[]; 
    ref: RefObject<TextFieldRef>;
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;

    labelProps?: HTMLAttributes<HTMLLabelElement>;
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    descriptionProps?: HTMLAttributes<HTMLElement>; 
    inputProps?: InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;

    icon?: ReactElement;
    validationIcon?: ReactElement;
    loadingIndicator?: ReactElement;

    isLoading?: boolean; 
    validationState?: ValidationState; 
    multiLine?: boolean; 
}

export const AriaTextFieldBase = <T extends object>({
    multiLine,
    icon,
    label,
    description,
    errorMessage,
    inputRef,
    validationState,
    isLoading,
    isDisabled,
    autoFocus,
    loadingIndicator,
    wrapperChildren,
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    value,
    defaultValue,
    ...rest
}: TextFieldBaseProps, ref: RefObject<TextFieldRef>) => {

    const { isHovered, hoverProps } = useHover({ isDisabled })
    const { isFocusVisible, isFocused, focusProps } = useFocusRing({ within: true, isTextInput: true, autoFocus })

    const domRef = useRef<HTMLDivElement>(null)
    const defaultInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    inputRef = inputRef || defaultInputRef

    useImperativeHandle((ref), () => ({
        ...createFocusableRef(domRef, inputRef),
        select() {
            if (inputRef.current) {
                inputRef.current.select()
            }
        },
        getInputElement() {
            return inputRef.current;
        }
    }))

    const Component: ElementType = multiLine ? 'textarea' : 'input'

    if(icon) {
        icon = cloneElement(icon, {
            // todo: add any props for icon after creating the icon component
        })
    }

    const validationIcon = validationState === 'invalid' ? <CrossIcon /> : <CheckIcon />
    const validation = cloneElement(validationIcon, {
        // todo: as above
    })

    const inputLen = value?.length || defaultValue?.length

    return (
        <Fieldset.Root validationState={validationState}>
            <Fieldset.Field>
                <StyledContainer
                    {...mergeProps(hoverProps, focusProps)}
                    isHovered={isHovered}
                    isFocused={isFocusVisible || isFocused}
                >
                    <StyledPrefix
                        isFocused={isFocusVisible || isFocused}
                        isValid={inputLen > 0}
                    >
                        {icon}
                    </StyledPrefix> 
                    <StyledInput 
                        as={Component} 
                        {...inputProps} 
                        ref={inputRef as any}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false" 
                        isValid={inputLen > 0}
                    />
                    <StyledLabel {...labelProps}> {label} </StyledLabel>
                </StyledContainer>
            </Fieldset.Field>

            {validationState === 'invalid' ? (
                <Fieldset.ErrorMessage {...errorMessageProps}> 
                    {errorMessage} 
                </Fieldset.ErrorMessage>
            ) : description ? (
                <Fieldset.Description {...descriptionProps}> 
                    {description} 
                </Fieldset.Description>
            ) : null}
        </Fieldset.Root>
    )
}

AriaTextFieldBase.displayName = 'TextFieldBase'
export const TextFieldBase = forwardRef(AriaTextFieldBase)