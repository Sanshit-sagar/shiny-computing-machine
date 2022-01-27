import { forwardRef } from 'react'

import { StyledCodeInputField } from './styles'
import type { CodeInputFieldProps } from './types'
import { useCodeInputContext } from './CodeInputContext'


const CodeInputField = forwardRef<HTMLInputElement, CodeInputFieldProps>(
    ({ error, success, ...props }, ref) => {
        const { length } = useCodeInputContext()

        return (
            <StyledCodeInputField
                {...props}
                data-code-input="input"
                minLength={length}
                maxLength={length}
                error={error}
                success={success} 
                ref={ref}
            />
        )
})

CodeInputField.displayName = 'CodeInputField'
export default CodeInputField