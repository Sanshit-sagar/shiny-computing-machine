import { useContext } from 'react' 

import OptionContext from './OptionContext'
import { LabelProps, IOptionContext } from './interfaces'
import { StyledLabel } from './styles'

function Label({ children }: LabelProps) {
    const { labelProps } = useContext<IOptionContext>(OptionContext)
    
    return <StyledLabel {...labelProps}> {children} </StyledLabel>
}

Label.displayName = 'ListBoxLabel'
export default Label
