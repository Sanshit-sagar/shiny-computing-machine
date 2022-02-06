import { useRef, forwardRef, RefObject } from 'react' 
import { TextFieldProps } from './types' 
import { useTextField } from '@react-aria/textfield'

import { TextFieldBase } from './TextFieldBase' 
import { TextFieldRef } from '@/interfaces/Shared/Refs'

export const AriaTextField = (props, ref) => {

    const inputRef = useRef<HTMLInputElement>()
    let {
        labelProps, 
        inputProps, 
        descriptionProps, 
        errorMessageProps
    } = useTextField(props, inputRef)

    return (
        <TextFieldBase
            {...props}
            labelProps={labelProps}
            inputProps={inputProps}
            descriptionProps={descriptionProps}
            errorMessageProps={errorMessageProps}
            ref={ref as unknown as RefObject<TextFieldRef>}
            inputRef={inputRef}
        />
    )
}

AriaTextField.displayName = 'TextField'
export const TextField = forwardRef(AriaTextField)

