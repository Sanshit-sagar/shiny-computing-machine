import { useContext, ReactNode } from 'react'

import ButtonBase from './ButtonBase'
import {ButtonRoot} from './ButtonRoot'
import ButtonPrefix from './ButtonPrefix'
import ButtonSuffix from './ButtonSuffix' 
import ButtonContext from './ButtonContext' 

import { TooltipTrigger } from '@/components/Tooltip'
import OverlayTrigger from '@/components/Popover/OverlayTrigger'

import { 
    ButtonRootNode,
    ButtonBaseNode,
    ButtonPrefixNode, 
    ButtonSuffixNode, 
    IButtonContext 
} from './types'

import { isElementOfType } from '@/interfaces/Guards'


export const useButtonContext =<T extends object>() => {
    const buttonContext = useContext<IButtonContext>(ButtonContext)

    if(!buttonContext) 
        throw new Error(`Accessing Button Context from outside the Button Component Tree is illegal`)

    return buttonContext 
} 

export const isButtonPrefix = (child: ReactNode, index: number): child is ButtonPrefixNode  => (
    child && isElementOfType(child, ButtonPrefix) 
)

export const isButtonSuffix = (child: ReactNode, index: number): child is ButtonSuffixNode  => (
    child && isElementOfType(child, ButtonSuffix)
)

export const isButtonBase   = (child: ReactNode, _index: number): child is ButtonBaseNode   => (
    child && isElementOfType(child, ButtonBase)
)

export const isButtonRoot   = (child: ReactNode, _index: number): child is ButtonRootNode   => (
    child && isElementOfType(child, ButtonRoot)
)

type TooltipTriggerNode = React.ReactElement<{}, 'string' | React.JSXElementConstructor<any>> 
type OverlayTriggerNode = React.ReactElement<{}, 'string' | React.JSXElementConstructor<any>> 

export const isTooltipTrigger = (child: ReactNode): child is TooltipTriggerNode => (
    child && isElementOfType(child, TooltipTrigger)
)

export const isOverlayTrigger = (child: ReactNode): child is OverlayTriggerNode => (
    child && isElementOfType(child, OverlayTrigger)
)


export const isDOMElementTrigger = (child: ReactNode) => (
    isTooltipTrigger(child) || isOverlayTrigger(child)
)