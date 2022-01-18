import { useState, useLayoutEffect, useContext, Key,  FormEvent, FormEventHandler } from 'react'
import AccordionContext from './AccordionContext'

import { AccordionContext as IAccordionContext } from './interfaces'

type Nullable<T> = T | null | undefined 

type NullableAccordionContext = Nullable<IAccordionContext>
type AccordionClickHandler = (event: FormEvent<HTMLElement>) => void
type GetAndSetKeyState = [Key, React.Dispatch<React.SetStateAction<Key>>]

export const useAccordionContext = () => {
    const accordionContext = useContext<NullableAccordionContext>(AccordionContext) 

    if(!accordionContext) {
        throw new Error(`AccordionContext is restricted to children of the Accordion`) 
    }
    return accordionContext
}


export const useAccordionClick = (eventKey: Key, onClick: (key: Key) => void): AccordionClickHandler => {
    const { onToggle, activeEventKey } = useAccordionContext()

    return (event: FormEvent<HTMLElement>) => {
        onToggle(eventKey == activeEventKey ? null : eventKey)

        if(onClick) onClick(eventKey)
    }
}

export const useEventKey = (eventKey: Key, onToggle: (key: Key) => void): GetAndSetKeyState => {
    const [activeEventKey, setActiveEventKey] = useState<Key>(eventKey)

    useLayoutEffect(() => {
        setActiveEventKey(eventKey)
    }, [eventKey, onToggle])

    return [activeEventKey, setActiveEventKey]
}
