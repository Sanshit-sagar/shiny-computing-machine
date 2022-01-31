import React, { ReactNode } from 'react'
import { StyledSelectDropdown } from './styles'


type SelectDropdownProps = {
    visible: boolean;
    children: ReactNode; 
}

const SelectDropdown = ({ visible, children }: SelectDropdownProps) => {
    return (
        <StyledSelectDropdown visible={visible}>
            {children}
        </StyledSelectDropdown>
    )
}

SelectDropdown.displayName = 'SelectDropdown'
export default SelectDropdown