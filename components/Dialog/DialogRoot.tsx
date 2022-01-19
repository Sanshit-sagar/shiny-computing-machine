import React, { useRef, ReactChild } from 'react'

import { useButton } from '@react-aria/button'
import { OverlayContainer } from '@react-aria/overlays'
import { useOverlayTriggerState } from '@react-stately/overlays'

import DialogContext from './DialogContext'

import { isDialogTrigger } from './utils'
import { DialogProps, IDialogContext } from './types'
import { flattenChildren } from '@/utils/flattenChildren'

  
const DialogRoot = ({ title, subtitle, trigger, children, portalContainer, ...props }: DialogProps) => {

    const { 
        isOpen, 
        defaultOpen, 
        onOpenChange, 
        onAction, 
        ...rest 
    } = props

    const openButtonRef = useRef<HTMLButtonElement>()
    const state = useOverlayTriggerState({ isOpen, defaultOpen, onOpenChange })

    const { buttonProps } = useButton({ 
        onPress: () => state.open() 
    }, openButtonRef)
    
    const contextValue: IDialogContext = {
        title,
        subtitle,
        trigger,
        titleProps: {},
        openButtonRef,
        openButtonProps: buttonProps,
        state,
        children,
        variant: props.variant,
        onAction,
        isOpen,
        defaultOpen,
        onOpenChange
    }

    const flattenedChildren = flattenChildren(children)

    return (
        <DialogContext.Provider value={contextValue}>
            {flattenedChildren.map((child: ReactChild, index: number) => {
                
                if(isDialogTrigger(child, index)) 
                    return React.cloneElement(child)

                if(state.isOpen) {
                    if(portalContainer) {
                        return (
                            <OverlayContainer portalContainer={'div'}> 
                                {children} 
                            </OverlayContainer>
                        ) 
                    } else {
                        return (
                            <OverlayContainer> {children} </OverlayContainer>
                        )
                    }
                }
            })}
        </DialogContext.Provider>
    );
}

DialogRoot.displayName = 'DialogRoot'
export default DialogRoot