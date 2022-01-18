import { ReactNode, ElementType } from 'react' 

import { useCardContext } from './utils'
import { StyledCardHeading } from './styles'

interface CardHeadingProps {
    children: ReactNode;
    element?: ElementType;
}

const CardHeading = ({ children, element: Component = 'div',...props }: CardHeadingProps) => {
    const { hasTitle, title } = useCardContext()

    if(!hasTitle)
        return null

    return (
        <Component {...props}>
            <StyledCardHeading> {title} </StyledCardHeading> 
        </Component>
    )
}

CardHeading.displayName = 'CardHeading'
export default CardHeading