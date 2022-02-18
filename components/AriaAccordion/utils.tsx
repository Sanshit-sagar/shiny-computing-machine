import { useContext } from 'react' 
import { AccordionContext } from './AccordionContext'
import type { IAccordionContext } from './types'

export const useAccordionContext = <T extends object>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      (): IAccordionContext<T> => {
    const accordionContext = useContext<IAccordionContext<T>>(AccordionContext)

    if(!accordionContext) 
        throw new Error(`Accordion Context must be used from with Accordion Provider`)

    return accordionContext
}