import { useContext } from 'react'
import { SplitPaneContext } from './SplitPaneContext'
import { ISplitPaneContext } from './interfaces'


export const useSplitPaneContext = (): ISplitPaneContext => {
    const splitPaneContext: ISplitPaneContext = useContext(SplitPaneContext)

    if(!splitPaneContext) {
        throw new Error('Illegal access from outside Split Pane scope')
    }
    
    return splitPaneContext
}

