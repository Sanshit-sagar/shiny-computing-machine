import { useRef, useEffect, useContext, createContext, RefObject, ReactNode, MutableRefObject, HTMLAttributes } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { useFocus, useKeyboard } from '@react-aria/interactions'

import { useSyncRef } from './useSyncRef'
import { DOMProps, FocusableDOMProps } from '@/interfaces/Shared'
import { FocusEvents, KeyboardEvents, HoverEvents } from '@/interfaces/Interactions'

interface FocusDOMProps extends DOMProps, FocusableDOMProps {}
interface FocusEventProps extends FocusEvents, KeyboardEvents {}
interface FocusableProps extends FocusDOMProps, FocusEventProps {
    isDisabled?: boolean; 
    children?: ReactNode; 
}

interface FocusableOwnProps extends Omit<HTMLAttributes<HTMLElement>, 'onKeyUp' | 'onKeyDown' | 'onFocus' | 'onBlur'> {}
interface IFocusableContext extends FocusableProps, FocusableOwnProps {
    ref?: MutableRefObject<any>;
}

const FocusableContext = createContext<IFocusableContext | null>(
    null
)

const useFocusableContext = (ref?: RefObject<HTMLElement>): IFocusableContext => {
    const context = useContext(FocusableContext) || {}
    useSyncRef<HTMLElement>(context, ref) 

    const { 
        ref: _, 
        ...otherProps 
    } = context
    return otherProps
}


const useFocusable = (props: FocusableProps, domRef: RefObject<HTMLElement>) => {
    const { isDisabled, excludeFromTabOrder, ...rest } = props
    const autoFocusRef = useRef<boolean>(props.autoFocus)

    const { focusProps } = useFocus({ isDisabled })   
    const { keyboardProps } = useKeyboard({ isDisabled })
    const domProps = useFocusableContext(domRef) 

    const interactions = mergeProps(focusProps, keyboardProps)
    const interactionsProps = isDisabled ? {} : domProps

    const tabIndex = excludeFromTabOrder && !isDisabled ? -1 : undefined

    const focusableProps =  mergeProps({ ...interactions, tabIndex }, interactionsProps)

    useEffect(() => {
        if(autoFocusRef.current && domRef.current) {
            domRef.current.focus()
        }
        autoFocusRef.current = false
    }, []) 

    return { 
        focusableProps
    }
}

export {
    useFocusable,
    useFocusableContext,
    FocusableContext,
}

export type {
    IFocusableContext
}