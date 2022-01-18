import { useFieldsetContext } from './utils'
import { FieldsetErrorMessageProps } from './types'
import { StyledFieldsetErrorMessage } from './styles'

const FieldsetErrorMessage = ({ children, element: Component = 'div', css, ...rest }: FieldsetErrorMessageProps) => {

    const { errorMessage, errorMessageProps, validationState } = useFieldsetContext() 

    return (
        <StyledFieldsetErrorMessage validationState={validationState} {...errorMessageProps}>
            {errorMessage || children}
        </StyledFieldsetErrorMessage>
    )
}

FieldsetErrorMessage.displayName = 'FieldsetErrorMessage'
export default FieldsetErrorMessage

