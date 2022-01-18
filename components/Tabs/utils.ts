import { useContext } from 'react'
import { ITabsContext } from './interfaces'

import TabContext from './TabsContext'


export const useTabContext = <T extends object>() => {
    const tabContext = useContext<ITabsContext<T>>(TabContext)

    if(!tabContext)
        throw new Error(`Illegal access`)

    return tabContext
}
