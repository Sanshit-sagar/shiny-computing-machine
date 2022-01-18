import { Flex } from '@/components/Flex'
import { Label } from '@/components/Label'

import { StyledSwitch } from './styles'
import { SwitchProps } from './interfaces'                             

export const Switch = ({ 
    id, 
    label, 
    isSelected, 
    isDisabled, 
    defaultSelected, 
    onChange, 
    ...otherProps 
}: SwitchProps) => (

    <Flex css={{ gap: '$3' }}>
        <StyledSwitch
            className="switch"
            id={id}
            type="checkbox"
            checked={isSelected}
            aria-checked={isSelected}
            role="switch"
            onChange={(event) => onChange(event.target.checked)}
            disabled={isDisabled}
            {...otherProps}
        />
        {label && (
            <Label> {label} </Label>
        )}
    </Flex>
)