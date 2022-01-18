import React, { useRef, MutableRefObject } from 'react'

import { useButton } from '@react-aria/button'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'

import { useMenuTriggerState } from '@react-stately/menu'
import { useMenuTrigger } from '@react-aria/menu'

import { Button } from '@/components/Button'
import { CalendarIcon } from '@radix-ui/react-icons'

export function DatePickerTrigger({ dir = 'ltr', children, ...props }) {
   
    const state = useMenuTriggerState({ direction: 'left', closeOnSelect: true, ...props })
    const ref: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>()

    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)
    const { buttonProps } = useButton(menuTriggerProps, ref)

    return (
        <div
            style={{  
                height: '1px', 
                backgroundColor: 'blue', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start',
                alignItems: 'stretch', 
                margin: 0, 
                padding: 0 
            }}
        >
            <Button
                {...buttonProps} 
                ref={ref} 
                shape="quad" 
                direction="row" 
                justify="between" 
                align="center" 
                gap="0" 
                radius="1" 
                borderStyle="outset" 
                borderWidth="1"
                height={30}
                width={150}
            >
                {props.label} 
                <CalendarIcon /> 
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
