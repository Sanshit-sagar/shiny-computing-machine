import { ReactNode, ElementType } from 'react' 
import { StyledCardBody } from './styles'

interface CardBodyProps {
    children: ReactNode;
    element?: ElementType;
}

const CardBody = ({ 
    element: Component = 'div',
    children,
    ...props 
}: CardBodyProps) => {

    return (
        <Component {...props}>
            <StyledCardBody> {children} </StyledCardBody> 
        </Component>
    )
}

CardBody.displayName = 'CardBody'
export default CardBody