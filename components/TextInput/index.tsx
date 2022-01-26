import { useState, useRef } from 'react'

import { TextInputProps } from './interfaces' 
import { StyledInput, StyledInputWrapper, StyledSuffix } from './styles'
import { CheckCircledIcon, EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { useTextField } from '@react-aria/textfield'

import TextInputContext from './TextInputContext'
import InputPrefix from './InputPrefix'

export const TextInput = ({ label, value, ...props }: TextInputProps) => {
   
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>()
    const { inputProps } = useTextField(props, inputRef)

    return (
        <TextInputContext.Provider value={{ label, value,  ...props,}}>
            <StyledInputWrapper suffix={props.type === 'password' ? props.type : 'none'}>
                <InputPrefix />

                <StyledInput {...inputProps} type="text" ref={inputRef} />


                {props.type === 'email' && (
                    <StyledSuffix>
                        <CheckCircledIcon /> 
                    </StyledSuffix>
                )}
                {props.type === 'password' && (
                    <StyledSuffix>
                        <button
                            aria-label="Reveal Password"
                            data-testid="reveal-password-button"
                            disabled={props.isDisabled}
                            onClick={() => setShowPassword((prev: boolean) => !prev)}
                        >
                            {showPassword ? (
                                <EyeOpenIcon />
                            ) : (
                                <EyeNoneIcon />
                            )}
                        </button>
                    </StyledSuffix>  
                )}
            </StyledInputWrapper>
        </TextInputContext.Provider>

    )
}


TextInput.displayName = 'TextualInput'
export default TextInput