import { useContext } from 'react'

import type { IMenuContext } from './types'
import { MenuContext } from './MenuContext'

export const useMenuContext = (): IMenuContext => {
    const menuContext: IMenuContext = useContext(MenuContext)

    if(!menuContext) {
        throw new Error(`Menu Context must be used from within the Menu Component Tree`)
    }

    return menuContext
}