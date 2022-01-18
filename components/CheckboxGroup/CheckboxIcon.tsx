import { CheckIcon } from '@radix-ui/react-icons'


interface CheckboxIconProps {
    isSelected?: boolean;
}

const CheckboxIcon = ({ isSelected = false }: CheckboxIconProps) => (
    <span aria-hidden="true" style={{ display: 'none' }}>
        {isSelected && (
            <CheckIcon />
        )}
    </span>
)

CheckboxIcon.displayName = 'CheckboxIcon'
export default CheckboxIcon