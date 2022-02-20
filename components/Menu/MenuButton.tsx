import { useRef } from 'react'

import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

import { MenuPopup } from './MenuPopup'
import { MenuButtonProps, MenuTriggerState } from './types'

export const MenuButton = (props: MenuButtonProps) => {
    const {
        trigger = 'press',
        align = 'start',
        direction = 'bottom',
        closeOnSelect = true,
        shouldFlip = true,
        ...rest
    } = props

    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const state: MenuTriggerState = useMenuTriggerState(props)
    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, buttonRef)

    const { buttonProps } = useButton({
        ...menuTriggerProps,
        onPress: () => state.toggle(state.focusStrategy)
    }, buttonRef)

    return (
        <div>
            <button {...buttonProps} ref={buttonRef}>
                {props.label}
                <span aria-hidden="true">▼</span>
            </button>
            {state.isOpen && (
                <MenuPopup
                    {...props}
                    {...menuProps}
                    autoFocus={state.focusStrategy}
                    onClose={() => state.close()}
                />
            )}
        </div>
    )
}