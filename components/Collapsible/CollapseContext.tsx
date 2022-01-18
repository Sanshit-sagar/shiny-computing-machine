import { ElementType, createContext } from 'react'
import { ICollapsibleContext } from './types'

const CollapsibleContext = createContext<ICollapsibleContext<ElementType<any>> | null>(
    null
)

CollapsibleContext.displayName = 'CollapsibleContext'
export default CollapsibleContext
