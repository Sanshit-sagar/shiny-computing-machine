import React from 'react' 

import { AccordionToggleProps } from './interfaces' 
import { AccordionTitle, AccordionButton } from './styles'
import { useAccordionContext, useAccordionClick } from './utils'

import useAccordion from '@/hooks/collections/Collapsible/useCollapsible'
import useAccordionItem from '@/hooks/collections/Collapsible/useCollapsibleItem'


const AccordionToggle = ({ 
    element: Component = 'div', 
    eventKey, 
    onClick, 
    children, 
    ...props 
}: AccordionToggleProps) => {      
   

    const { activeEventKey } = useAccordionContext()
    const accordionClick = useAccordionClick(eventKey, onClick)

    return (
        <Component {...props}>
            <AccordionButton 
                onClick={accordionClick} 
                withFloor={Component === 'div' && eventKey === activeEventKey}
            > 
                <AccordionTitle> {children} </AccordionTitle>
            </AccordionButton>
        </Component>
    )
}

export default AccordionToggle