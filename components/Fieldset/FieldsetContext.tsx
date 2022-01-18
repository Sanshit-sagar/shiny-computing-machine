import { createContext } from 'react'
import { IFieldsetContext } from './types'


const FieldsetContext = createContext<IFieldsetContext | null>(
    null
)

FieldsetContext.displayName = 'FieldsetContext'
export default FieldsetContext