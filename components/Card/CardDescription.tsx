import { ReactNode, ElementType } from 'react' 

import { useCardContext } from './utils'
import { StyledCardDescription } from './styles'

interface CardDescriptionProps {
    children: ReactNode;
    element?: ElementType;
}

const CardDescription = ({ children, element: Component = 'div',...props }: CardDescriptionProps) => {
    const { hasSubtitle, subtitle } = useCardContext()

    if(!hasSubtitle)
        return null

    return (
        <Component {...props}>
            <StyledCardDescription> 
                {subtitle} 
            </StyledCardDescription> 
        </Component>
    )
}

CardDescription.displayName = 'CardDescription'
export default CardDescription