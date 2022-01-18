import { useContext } from 'react' 

import { isElementOfType } from '@/interfaces/Guards'
import { IOverlayContext, OverlayProps } from './interfaces'

import OverlayContext from './OverlayContext'
import OverlayTrigger from './OverlayTrigger'
import OverlayDialog from './OverlayDialog'

export const useOverlayContext = () => {
    const overlayContext = useContext<IOverlayContext>(OverlayContext) 

    if(!overlayContext)
        throw new Error(`Illegal access from outside scope`)

    return overlayContext
}


export const isOverlayTrigger = (child, index: number) => {
    return index === 0 && isElementOfType(child, OverlayTrigger)
}
export const isOverlayDialog = (child, index: number) => {
    return index === 1 && isElementOfType(child, OverlayDialog)
}


const initValues: Omit<OverlayProps, 'children'> = {
    title: '',
    subtitle: '',
    placement: 'bottom end',
    offset: 25,
    crossOffset: 100,
    isDismissable: false,
    isKeyboardDismissDisabled: false,
    shouldFlip: true,
    shouldCloseOnBlur: false,
    shouldUpdatePosition: false
}

export const initStateAndProps = (props: Omit<OverlayProps, 'children'>): typeof initValues => {
    let initializedProps = {}

    Object.keys(initValues).forEach((propKey) => {
        if(!props.hasOwnProperty(propKey) || props[propKey] === null || props[propKey] === undefined) {
            initializedProps[propKey] = initValues[propKey]
        } else {
            initializedProps[propKey] = props[propKey]
        }
    })

    return initializedProps
}

