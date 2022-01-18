import React, { Key, useState } from 'react' 

import { Card } from '@/components/Card'
import Accordion from '@/components/Accordion/Accordion'

import { AccordionListItem } from './styles'
import { AccordionProps } from './interfaces'

export const PolymorphicControlledAccordion = ({ items }: AccordionProps) => {
    const [activeEventKey, setActiveEventKey] = useState<React.Key>(0)

    return (
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
            {items?.map(({ title, content }, index: number) => (
                <Card.Wrapper key={index}>
                    <Accordion.Toggle element={Card.Header} eventKey={index}>
                        {title}
                        <Accordion.Icon eventKey={index} /> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                        {content}
                    </Accordion.Collapse>
                </Card.Wrapper>
            )) ?? null}
        </Accordion>
    )
}

export const RegularControlledAccorion = ({ items, icon }: AccordionProps) => {
    const [activeEventKey, setActiveEventKey] = useState<Key | null>(items.length ? 0 : null)

    return (
        <Accordion 
            activeEventKey={activeEventKey} 
            onToggle={setActiveEventKey} 
            icon={icon}
        >
            {items?.map(({ prefix, title, content }, index) => (
                <AccordionListItem>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    <Accordion.Toggle eventKey={index}>
                        {prefix} {title}
                        <Accordion.Icon eventKey={index} />            
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                        {content}
                    </Accordion.Collapse>
                </AccordionListItem>
            )) ?? null}
        </Accordion>
    )
}