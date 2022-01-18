import { createContext } from 'react'
import { CardState} from './interfaces'

export const CardContext = createContext<CardState | null>(
    null
)

