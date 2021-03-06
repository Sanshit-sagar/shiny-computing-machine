import {  Children, ReactNode, ReactElement, useContext } from 'react'

import type { IMenuContext } from './types'
import { MenuContext } from './MenuContext'

import { strEnum } from '@/interfaces/Guards'

export const useMenuContext = (): IMenuContext => {
    const menuContext: IMenuContext = useContext(MenuContext)

    if(!menuContext) 
        throw new Error(`Menu Context must be used from within the Menu Component Tree`)

    return menuContext
}


export const SelectionModes = strEnum([ 'none', 'single', 'multiple' ])
export type SelectionMode = keyof typeof SelectionModes 