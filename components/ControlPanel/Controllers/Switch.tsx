
import { Switch as SwitchController } from '@/components/Switch'
import { SwitchProps } from '@/components/Switch/interfaces'
import { useId } from '@react-aria/utils'

export interface SwitchFieldProps extends SwitchProps {
    type: 'switch'
}

const Switch = ({
    id, 
    value = false, 
    onChange, 
    isDisabled = false, 
    isRequired = false,
    isReadOnly = false
}: SwitchProps) => (
    <SwitchController
        id={id || useId()}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled} 
        isRequired={isRequired}
        isReadOnly={isReadOnly}
    />
)

export default Switch