import React, { useRef, ReactNode } from 'react'

import { useButton } from '@react-aria/button'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'

import { useMenuTriggerState } from '@react-stately/menu'
import { useMenuTrigger } from '@react-aria/menu'
import { CalendarIcon } from '@radix-ui/react-icons'

interface DatePickerTriggerProps {
    children: ReactNode; 
    label: string; 
}

export function DatePickerTrigger({ children, label, ...props }: DatePickerTriggerProps) {
   
    const ref = useRef<HTMLButtonElement>()
    const state = useMenuTriggerState({ direction: 'bottom', closeOnSelect: true, ...props })

    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)
    const { buttonProps } = useButton(menuTriggerProps, ref)

    return (
        <div>
            <button {...buttonProps} ref={ref}>
               <> {label} </> <CalendarIcon /> 
            </button>

            {state.isOpen && (
                <Popoup
                    {...props}
                    domProps={menuProps}
                    autoFocus={state.focusStrategy}
                    onClose={() => state.close()}
                >
                    {children}
                </Popoup>
            )}
        </div>
  );
}

const Popoup = ({ children, onClose, shouldCloseOnBlur = true, isDismissable = true, ...props }) => {

    let overlayRef = useRef()
    let { overlayProps } = useOverlay({ onClose, shouldCloseOnBlur, isDismissable, isOpen: false }, overlayRef)

    return (
        <FocusScope restoreFocus contain={false}>
            <div {...overlayProps} ref={overlayRef}>
                <DismissButton onDismiss={props.onClose} />
                    {children}
                <DismissButton onDismiss={props.onClose} />
            </div>
        </FocusScope>
    );
}
