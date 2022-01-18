import { useFieldsetContext } from './utils'
import { FieldsetLabelProps } from './types'
import { StyledFieldsetLabel } from './styles'

const FieldsetLabel = ({ children, element: Component = 'div', css, ...rest }: FieldsetLabelProps) => {

    const { label, labelProps } = useFieldsetContext() 

    return (
        <StyledFieldsetLabel {...labelProps}>
            {label || children}
        </StyledFieldsetLabel>
    )
}

FieldsetLabel.displayName = 'FieldsetLabel'
export default FieldsetLabel

