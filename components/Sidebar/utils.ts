import { useContext } from 'react'

import { ISidebarContext } from './types'
import SidebarContext from './SidebarContext'


export const useSidebarContext = <T extends object>() => {
    const sidebarContext = useContext<ISidebarContext<T> | null>(SidebarContext)

    if(!sidebarContext)
        throw new Error(`Accessing SidebarContext illegally from outside of the component tree`)

    return sidebarContext
}

