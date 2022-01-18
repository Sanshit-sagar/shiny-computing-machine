import { createContext } from 'react'
import { IToggleContext } from './types'

const ToggleContext = createContext<IToggleContext | null>(
    null
)

export default ToggleContext 