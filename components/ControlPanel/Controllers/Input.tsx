import { Input as InputController } from '@/components/TextInput'
import { InputProps } from '@/components/TextInput/interfaces'
import { useId } from '@react-aria/utils'

export interface InputFieldProps extends InputProps {
    type?: 'text-input'; 
}

const Input = (props: InputProps) => (
    <InputController id={props?.id || useId()} {...props} />
)

export default Input 
