import React from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import { AccordionIcon as StyledAccordionIcon } from './styles'
import { useAccordionContext } from './utils'

interface AccordionIconProps {
    eventKey: React.Key;
    children?: React.ReactNode;
}

const AccordionIcon = ({ eventKey, children }: AccordionIconProps) => {
    const { activeEventKey, icon } = useAccordionContext()

    return (
        <StyledAccordionIcon className={eventKey === activeEventKey ? 'active' : ''}>
            {children || icon}
        </StyledAccordionIcon>
    )
}           

AccordionIcon.displayName = 'AccordionIcon'
export default AccordionIcon
