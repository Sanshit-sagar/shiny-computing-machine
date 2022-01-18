import { ReactNode, ReactElement } from 'react'
import { isElementOfType } from '@/interfaces/Guards'

import CheckboxItem from './CheckboxItem'

export type CheckboxItemNode = ReactElement<{ 
    child: ReactNode;
}>

export const isCheckboxItemElement = (child: ReactNode): child is CheckboxItemNode => (
    isElementOfType(child, CheckboxItem)
)
