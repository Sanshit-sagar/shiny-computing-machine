import React, { useRef, RefObject } from 'react'

import { useTextField } from '@react-aria/textfield' 

import { 
    RestrictedWordsInput, 
    RestrictedCharsInput 
} from './RestrictedInputs'
import { 
    TextAreaProps,
    RestrictedTypeEnum
} from './interfaces'
import { ScrollArea } from '@/components/ScrollArea'

export const TextArea = ({
    value = '', 
    limit = 250, 
    restriction = 'words', 
    icon,
    ...props 
}: TextAreaProps) => {

    let ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>()

    let { inputProps } = useTextField({ ...props }, ref);

    return (
        <ScrollArea> 
            {((restriction === RestrictedTypeEnum.WORDS) ?  ( 
                <RestrictedWordsInput {...inputProps} value={value} limit={limit} /> 
            ) : (  
                <RestrictedCharsInput {...inputProps} value={value} limit={limit} /> 
            ))} 
        </ScrollArea>
    )
}

TextArea.displayName = 'TextArea'