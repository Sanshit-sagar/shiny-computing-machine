import { createContext } from 'react'
import { ISidebarContext } from './types'


const SidebarContext = createContext<ISidebarContext<any> | null>(
    null
)

SidebarContext.displayName = 'SidebarContext'
export default SidebarContext