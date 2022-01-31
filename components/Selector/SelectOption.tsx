import { useMemo, ReactNode } from 'react' 
import { useSelectContext } from './SelectContext' 
import { useInteractions } from '@/hooks/useInteractions'
import { StyledSelectOption } from './styles'

type SelectOptionProps = {
    children: ReactNode;
    value: string;
    disabled?: boolean; 
}

const SelectOption = ({
    children,
    value: identValue,
    disabled = false 
}: SelectOptionProps) => {

    const { updateValue, value, disableAll } = useSelectContext()

    const isDisabled = useMemo(() => {
        return disabled || disableAll
    }, [disabled, disableAll])

    const isSelected = useMemo(() => {
        if(!value) return
        if(typeof value === 'string') {
            return value === identValue
        }
    }, [value, identValue])

    const { interactionProps, isDisabled: isLoneDisabled, ...interactionStates } = useInteractions({
        isDisabled
    })

    const handleClick = (event) => {
        event.preventDefault()
        if(typeof updateValue === "function" && identValue !== value) {
            updateValue(identValue)
        }
    }

    return (
        <StyledSelectOption
            {...interactionProps}
            {...interactionStates}
            isDisabled={isDisabled}
            isSelected={isSelected}
            onClick={handleClick}
        >
            {children}
        </StyledSelectOption>
    )
}

SelectOption.displayName = 'SelectOption'
export default SelectOption