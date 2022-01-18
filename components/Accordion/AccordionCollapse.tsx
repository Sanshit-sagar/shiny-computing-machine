
import React, { useState, useEffect, useRef, Ref } from 'react'

import { useAccordionContext } from './utils'
import { AccordionCollapseProps } from './interfaces'
import { AccordionPanel, AccordionPanelContent } from './styles'

const AccordionCollapse = ({ element: Component = 'div', eventKey,  children,  ...otherProps }: AccordionCollapseProps) => {

    const ref: Ref<HTMLDivElement> = useRef<HTMLDivElement>()
    
    const { activeEventKey } = useAccordionContext()
    const [isOpen, setIsOpen] = useState<boolean>(eventKey === activeEventKey)
    const [height, setHeight] = useState<number>(0)
    
    useEffect(() => {
        if(activeEventKey === eventKey) {
            const contentEl = ref.current as HTMLDivElement
            setHeight(contentEl.scrollHeight)
            setIsOpen(true)
        } else {
            setHeight(0)
            setIsOpen(false)
        }
    }, [isOpen, activeEventKey, eventKey, ref.current])

    return (
        <Component {...otherProps}> 
            <AccordionPanel height={height} isOpen={isOpen}> 
                <AccordionPanelContent ref={ref}> 
                   {children} 
                </AccordionPanelContent>
            </AccordionPanel>
        </Component> 
    ) 
}

export default AccordionCollapse

