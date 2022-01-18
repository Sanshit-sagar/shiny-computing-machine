import { createContext } from 'react' 
import { AccordionContext as IAccordionContext } from './interfaces'

const AccordionContext = createContext<IAccordionContext | null>(
    null
)

export default AccordionContext