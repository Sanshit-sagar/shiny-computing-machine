import React, { useRef, RefObject } from 'react'

import { useTextField } from 'react-aria' 

import { RestrictedTypeEnum } from './interfaces'

import { Label } from '../Shared'
import { ScrollArea } from '@/components/ScrollArea'
import { Wrapper, HelperText } from '../TextInput/styles'
import { RestrictedWordsInput, RestrictedCharsInput } from './RestrictedInputs'

import { DotFilledIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { TextAreaProps } from './interfaces'

export const TextArea = (allProps: TextAreaProps) => {

    let ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>()

    let { 
        value = '', 
        limit = 250, 
        restriction = 'words', 
        icon,
        ...props 
    } = allProps

    let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField({
        ...props,
        onKeyDown: (_event) => console.log('hi'),
        onKeyUp: (_event) => console.log('bye'),
        pattern: ''
    }, ref);

    return (

            <ScrollArea> 
                {((restriction === RestrictedTypeEnum.WORDS) ?  ( 
                    <RestrictedWordsInput 
                        {...inputProps}
                        value={value} 
                        limit={limit}
                        icon={icon}j
                    /> 
                ) : (  <RestrictedCharsInput
                        {...inputProps}
                        value={value} 
                        limit={limit}
                        icon={icon}
                    /> 
                ))} 
            </ScrollArea>
     
    );
}


 // <Wrapper>
     {/* <Label {...labelProps}> */}
         {/* {icon || null} */}
         {/* {props.label}  */}
         {/* {props.required && <DotFilledIcon />}  */}
         {/* {props.disabled && <LockClosedIcon />} */}
     {/* </Label> */}
{/* <>{props.errorMessage  */}
    // ?   <HelperText {...errorMessageProps}> {props.errorMessage} </HelperText>
    // :   props.description 
    // ?   <HelperText {...descriptionProps}> {props.description} </HelperText>
    // :   null
{/* }</> */}