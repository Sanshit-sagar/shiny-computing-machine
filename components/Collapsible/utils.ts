import { useContext } from 'react' 
import { ICollapsibleContext } from './types'
import CollapseContext from './CollapseContext' 

export const useCollapseContext = <T extends object>() => {
    const collapseContext = useContext<ICollapsibleContext<T> | null>(CollapseContext)

    if(!collapseContext) {
        throw new Error('Accessing CollapseContext from outside the root components scope is illegal.')
    }

    return collapseContext
}