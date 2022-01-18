
import { useContext, ReactChild } from 'react' 

import { IDialogContext } from './types'

import DialogBody from './DialogBody'
import DialogTitle from './DialogTitle'
import DialogTrigger from './DialogTrigger'
import DialogSubtitle from './DialogSubtitle'
import DialogAction from './DialogAction'

import DialogContext from './DialogContext'

import {
    DialogBodyNode,
    DialogTriggerNode,
    DialogTitleNode,
    DialogSubtitleNode,
    DialogActionNode
} from './types'

import { isElementOfType } from '@/interfaces/Guards'


export const useDialogContext = () => {
    const dialogContext = useContext<IDialogContext>(DialogContext)

    if(!dialogContext)
        throw new Error(`Illegally accessing dialog context`)

    return dialogContext 
}

export const isDialogTrigger = (child: ReactChild, index: number): child is DialogTriggerNode => {
    return child && index === 0 && isElementOfType(child, DialogTrigger)
}

export const isDialogTitle = (child: ReactChild, index: number): child is DialogTitleNode => {
    return child && index === 0 && isElementOfType(child, DialogTitle)
}

export const isDialogSubtitle = (child: ReactChild, index: number): child is DialogSubtitleNode => {
    return child && index === 1 && isElementOfType(child, DialogSubtitle)
}

export const isDialogBody = (child: ReactChild, index: number): child is DialogBodyNode => {
    return child && index === 2 && isElementOfType(child, DialogBody)
}

export const isDialogAction = (child: ReactChild, index: number): child is DialogActionNode => {
    return child && isElementOfType(child, DialogAction)
}

