import React, { useRef, useState } from 'react' 

import { useId } from '@react-aria/utils'
import { useFocusWithin } from '@react-aria/interactions'

import CodeInput from './CodeInput'
import { getSegmentCssWidth } from './utils'

import { StyledCodeInputField, StyledSegmentContent, StyledSegment } from './styles'

type ExampleCodeInputProps = {
    id?: string;
    autoFocus?: boolean;
    expected: string; 
}

type CodeState = 'input' | 'loading' | 'error' | 'success'

const validateInput = (code: string, expected: string): Promise<boolean> => {
    return new Promise<boolean>((r) => setTimeout(r, 350, code === expected))
}

const CodeInputBasic = ({
    id = useId(),
    autoFocus = false,
    expected,
}: ExampleCodeInputProps) => {

    const [validationState, setValidationState] = useState<CodeState>('input')
    const [isFocused, setFocused] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>()

    const { focusWithinProps } = useFocusWithin({ 
        isDisabled: (validationState === 'loading'),
        onFocusWithinChange: (isFocusWithin: boolean) => {
            setFocused(isFocusWithin)
        }
    })

    const handleCodeInputChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
       
        currentTarget.value = currentTarget.value.replace(/\D+/g, '')

        if(currentTarget.value.length === expected.length) {
            setValidationState('loading')
            validateInput(currentTarget.value, expected).then((success) => { 
                if(success) {
                    setValidationState('success')
                    return setTimeout(validateInput, 500)
                }
                setValidationState('error')
                setTimeout(() => {
                    setValidationState('input')
                    currentTarget.value = ''
                    currentTarget.dispatchEvent(new Event('input'))
                    currentTarget.focus()
                }, 500)
            })
        }
    }

    const width = getSegmentCssWidth('10px')

    return (
        <CodeInput
            {...focusWithinProps}
            id={id} 
            readOnly={validationState !== 'input'}
            disabled={validationState === 'loading'}
            autoFocus={autoFocus}
            inputRef={inputRef}
            length={expected.length}
            spellCheck={false}
            inputMode='numeric'
            pattern='[0-9]*'
            autoComplete='one-time-code'
            onChange={handleCodeInputChange} 
            renderSegment={({ state, index }) => (
                <StyledSegment
                    key={index}
                    className='segment'
                    data-state={state}
                    isFocused={isFocused}
                    cursor={state==='cursor'}
                    selected={state=== 'selected'}
                    error={validationState === 'error'}
                    success={validationState === 'success'}
                    css={{
                        height: '100%',
                        width: width
                    }}
                    children={
                        <StyledSegmentContent 
                            isFocused={isFocused}
                            cursor={state==='cursor'}
                            selected={state=== 'selected'}
                            error={validationState === 'error'}
                            success={validationState === 'success'}
                        />
                    }
                />
            )}
            error={validationState==='error'}
            success={validationState==='success'}
        />
    )
}

export default CodeInputBasic