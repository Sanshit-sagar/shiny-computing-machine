import React, { createContext } from 'react' 
import type { IAccordionItemContext } from './types'


const AccordionItemContext = createContext(
    null
)

AccordionItemContext.displayName = 'AccordionItemContext'
export {
    AccordionItemContext
}