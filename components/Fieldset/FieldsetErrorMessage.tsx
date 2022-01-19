import { useFieldsetContext } from './utils'
import { FieldsetErrorMessageProps } from './types'
import { StyledFieldsetErrorMessage } from './styles'

const FieldsetErrorMessage = ({ 
    children, 
    element: Component = 'div',
    display = 'hidden',
    css, 
    ...rest 
}: FieldsetErrorMessageProps) => {

    const { errorMessage, errorMessageProps, validationState } = useFieldsetContext() 

    return (
        <StyledFieldsetErrorMessage 
            validationState={validationState} 
            display={display}
            {...errorMessageProps}
        >
            {errorMessage || children}
        </StyledFieldsetErrorMessage>
    )
}

FieldsetErrorMessage.displayName = 'FieldsetErrorMessage'
export default FieldsetErrorMessage

