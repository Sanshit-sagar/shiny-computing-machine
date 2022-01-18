import { createContext } from 'react'
import { ISplitPaneContext } from './interfaces'

export const SplitPaneContext = createContext<ISplitPaneContext | null>(
    null
)

export default SplitPaneContext