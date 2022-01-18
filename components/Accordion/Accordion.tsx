import { useMemo, useCallback, Key } from 'react'

import AccordionReed from './AccordionReed'
import AccordionIcon from './AccordionIcon'
import AccordionToggle from './AccordionToggle'
import AccordionContext from './AccordionContext'
import AccordionCollapse from './AccordionCollapse'

import { useEventKey } from './utils'
import { AccordionList } from './styles'
import { AccordionContext as IAccordionContext } from './interfaces'

import { TriangleDownIcon } from '@radix-ui/react-icons'

const Accordion = ({ 
    element: Component = 'div', 
    onToggle = (key?: Key) => {}, 
    activeEventKey,
    icon = <TriangleDownIcon />,
    children, 
    ...props 
}: IAccordionContext) => {

    const [eventKey, setEventKey] = useEventKey(activeEventKey, onToggle)
  
    const handleToggle = useCallback((eventKey: Key) => {
        if (activeEventKey !== undefined) 
            onToggle(eventKey)
        setEventKey(eventKey)
    }, [activeEventKey, onToggle, setEventKey])
    
    const context = useMemo(() => {
        return { 
            activeEventKey: eventKey, 
            onToggle: handleToggle,
            icon: icon
        }     
    }, [activeEventKey, onToggle, icon])

    return (
        <AccordionContext.Provider value={context}>
            <Component {...props}> 
                <AccordionList> 
                    {children} 
                </AccordionList>
            </Component>
        </AccordionContext.Provider>
    )
}

Accordion.Icon = AccordionIcon
Accordion.Toggle = AccordionToggle
Accordion.Collapse = AccordionCollapse
Accordion.Reed = AccordionReed

Accordion.displayName = "Accordion"
export default Accordion