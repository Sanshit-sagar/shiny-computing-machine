import { ReactNode, ElementType } from 'react' 
import { AccordionListItem } from './styles'

interface AccordionReedProps {
    children: ReactNode; 
    element?: ElementType;
}

const AccordionReed = ({ 
    element: Component = 'div', 
    children,
    ...props
}: AccordionReedProps) => (
    <Component {...props}>
        <AccordionListItem> {children} </AccordionListItem>
    </Component>
)

AccordionReed.displayName = 'AccordionReed'
export default AccordionReed

