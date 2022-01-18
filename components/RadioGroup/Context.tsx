import { createContext } from 'react'
import { RadioGroupContext } from './interfaces'

export const RadioContext = createContext<RadioGroupContext | null>(
    null
)