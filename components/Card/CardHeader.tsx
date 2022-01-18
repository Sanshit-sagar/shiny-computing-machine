
import { ReactNode, ElementType } from 'react' 
import { useCardContext } from './utils'
import { StyledCardHeader } from './styles'

interface CardHeaderProps {
    children: ReactNode;
    element?: ElementType;
}

const CardHeader = ({ children, element: Component = 'div',...props }: CardHeaderProps) => (
    <Component {...props}>
        <StyledCardHeader> 
            {children}
        </StyledCardHeader>
    </Component>
)

CardHeader.displayName = 'CardHeader'
export default CardHeader