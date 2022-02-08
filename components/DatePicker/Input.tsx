import React, { useRef, RefObject } from 'react'

import { FocusRing, FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'

import { ValidationState } from '@/interfaces/Shared'
import { Cross2Icon, CheckIcon, CalendarIcon } from '@radix-ui/react-icons'


interface InputProps {
    children: React.ReactNode;
    inputRef?: RefObject<HTMLInputElement>;
    fieldProps: any;
    autoFocus: boolean;
    isDisabled: boolean;
    validationState: ValidationState;
}

const ValidationIcon = ({ validationState  }: { validationState?: ValidationState }) => ( 
      validationState === 'valid'    ? <CheckIcon  data-testid="valid-icon" /> 
    : validationState === 'invalid'  ? <Cross2Icon data-testid="invalid-icon" />
    : null
);

export const Input = (props: InputProps) => {
    let defaultRef = useRef()
    let {
        children,
        inputRef,
        fieldProps,
        autoFocus = false,
        isDisabled = false,
        validationState = 'valid'
    } = props
    
    if(!inputRef) {
        inputRef = defaultRef
    }

    return (
        <div {...mergeProps(fieldProps)}>
            <FocusRing isTextInput within>
                <div role="presentation">
                    <div role="presentation" ref={inputRef}>
                        <FocusScope autoFocus={autoFocus} >
                            
                            {children}
                          
                        </FocusScope>
                    </div>
                </div>
            </FocusRing>
            <ValidationIcon validationState={validationState} />
        </div>
    )
}