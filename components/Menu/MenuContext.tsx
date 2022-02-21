import { createContext } from 'react'
import { IMenuContext } from './types'

export const MenuContext = createContext<IMenuContext | null>(
    null
)

MenuContext.displayName = 'MenuContext'