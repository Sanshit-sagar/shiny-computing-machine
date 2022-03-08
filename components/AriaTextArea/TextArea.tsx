import { useState, useEffect, ChangeEvent } from 'react'
import { useIsSSR } from '@react-aria/ssr'
import { StyledTextArea } from './styles' 

export type TextAreaProps = {
    defaultValue?: string; 
}

const INITIAL_VALUE = ''
const PLACEHOLDER_VALUE = 'Here is a very long value for testing auto height'

const TextArea = ({ 
    defaultValue = INITIAL_VALUE 
}: TextAreaProps) => {

    const isSSR = useIsSSR()
    const [value, setValue] = useState<string>(defaultValue) 

    useEffect(() => {
        if(isSSR) return;

        document?.querySelectorAll('textarea').forEach((el: HTMLTextAreaElement) => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        })
    }, [value])

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => (
        setValue(event.currentTarget.value)
    )

    return (
        <StyledTextArea 
            className='auto'
            value={value} 
            onChange={handleChange} 
            placeholder={PLACEHOLDER_VALUE}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="false"
        /> 
    )
}

export {
    TextArea
}