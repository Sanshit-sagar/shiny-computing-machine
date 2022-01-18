import { useFieldsetContext } from './utils'
import { FieldsetDescriptionProps } from './types'
import { StyledFieldsetDescription } from './styles'

const FieldsetDescription = ({ children, element: Component = 'div', css, ...rest }: FieldsetDescriptionProps) => {

    const { description, descriptionProps } = useFieldsetContext() 

    return (
        <StyledFieldsetDescription {...descriptionProps}>
            {description || children}
        </StyledFieldsetDescription>
    )
}

FieldsetDescription.displayName = 'FieldsetDescription'
export default FieldsetDescription

