import { ReactNode } from 'react'

import { isElementOfType } from '@/interfaces/Guards'

import RadioItem from './RadioItem'
import RadioLabel from './RadioLabel'
import { RadioItemNode, RadioLabelNode } from './interfaces'

export const isRadioItemElement = (child: ReactNode): child is RadioItemNode => (
    isElementOfType(child, RadioItem)
)


export const isRadioGroupLabelElement = (child: ReactNode): child is RadioLabelNode => (
    isElementOfType(child, RadioLabel)
)

