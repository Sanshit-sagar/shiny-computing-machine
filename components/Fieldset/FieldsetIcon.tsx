
import { StyledFieldsetIcon } from './styles'
import { useFieldsetContext } from './utils'
import { FieldsetIconProps } from './types'

const FieldsetIcon = ({ children, element: Component = 'span', css, ...rest }: FieldsetIconProps) => {
    const { icon, iconProps } = useFieldsetContext()

    return (
        <StyledFieldsetIcon {...iconProps} css={{ ...css }}>
            {icon || children} 
        </StyledFieldsetIcon>
    )
}

FieldsetIcon.displayName = "FieldsetIcon"
export default FieldsetIcon