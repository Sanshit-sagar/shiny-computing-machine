import { FieldsetFieldProps } from './types'
import { StyledFieldsetField } from './styles'

const FieldsetField = ({ children, element: Component = 'div', css, ...rest }: FieldsetFieldProps) => {

    return (
        <StyledFieldsetField as={Component} {...rest}>
            {children}
        </StyledFieldsetField>
    )
}

FieldsetField.displayName = 'FieldsetField'
export default FieldsetField

