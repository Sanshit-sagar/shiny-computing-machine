import React, { useRef, MutableRefObject } from 'react'

import { useButton } from '@react-aria/button'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'

import { useMenuTriggerState } from '@react-stately/menu'
import { useMenuTrigger } from '@react-aria/menu'

import { Button } from '@/components/Buttons'
import { CalendarIcon } from '@radix-ui/react-icons'

export function DatePickerTrigger({ dir = 'ltr', children, ...props }) {
   
    const state = useMenuTriggerState({ direction: 'left', closeOnSelect: true, ...props })
    const ref = useRef<HTMLButtonElement>()

    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)
    const { buttonProps } = useButton(menuTriggerProps, ref)

    return (
        <div>
            <Button {...buttonProps} ref={ref}>
               <> {props.label} </> <CalendarIcon /> 
            </Button>

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
            <div {...overlayProps} ref={overlayRef} style={{ zIndex: 200, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', gap: 0 }}>
                <DismissButton onDismiss={props.onClose} />
                    {children}
                <DismissButton onDismiss={props.onClose} />
            </div>
        </FocusScope>
    );
}
