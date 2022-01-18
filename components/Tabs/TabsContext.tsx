import { createContext } from 'react'
import { ITabsContext } from './interfaces'

const TabsContext = createContext<ITabsContext<any> | null>(
    null
)

export default TabsContext

