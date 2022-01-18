import { useContext } from 'react' 

import OptionContext from './OptionContext'
import { StyledDescription } from './styles'
import { IOptionContext, DescriptionProps } from './interfaces'

const Description = ({ children }: DescriptionProps) => {
    const { descriptionProps } = useContext<IOptionContext>(OptionContext)

    return <StyledDescription {...descriptionProps}> {children} </StyledDescription> 
} 

Description.displayName = 'Description'
export default Description