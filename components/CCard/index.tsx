import { Card as StyledCard } from './styles'
import type { CardProps } from './styles'

export const Card = ({ children, ...props }: CardProps) => {

    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    )
}