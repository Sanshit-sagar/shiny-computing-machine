import { useLabel } from '@react-aria/label'

import { Label } from '@/components/Label'
import { RadioGroupLabelProps } from './interfaces'

export const extractLabel = ({ children, label, value }: RadioGroupLabelProps) => (
    children || label || value
)

const RadioGroupLabel = (props: RadioGroupLabelProps) => {
    const label = extractLabel(props)
    const { labelProps } = useLabel({ label })

    return (
        <Label 
            {...labelProps} 
            capitalize 
            css={{ 
                fontFamily: '$mono', 
                fontSize: '$4',
                mb: '$3',
                color: '$accentText'
            }}
        > 
            {label} 
        </Label>
    )
}

RadioGroupLabel.displayName = 'RadioGroupLabel'
export default RadioGroupLabel