import { useRef } from 'react'

import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

import { MenuPopup } from './MenuPopup'
import { MenuButtonProps, AriaMenuOptions, MenuTriggerState } from './types'

import { StyledMenuButton } from './styles'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { useInteractions } from '@/hooks/useInteractions'

import { mergeProps } from '@react-aria/utils'

export const MenuButton = <T extends object>(props: MenuButtonProps & AriaMenuOptions<T>) => {
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

    const { interactionProps, ...interactionStates } = useInteractions({ })
    const mergedProps = mergeProps(buttonProps, interactionProps)

    return (
        <div>
            <StyledMenuButton {...mergedProps} {...interactionStates} ref={buttonRef}>
                {props.label}
                <MenuButtonArrow />
            </StyledMenuButton>

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

export const MenuButtonArrow = () => (
    <span aria-hidden="true">
        <ChevronDownIcon /> 
    </span>
)

MenuButtonArrow.displayName = 'MenuButtonArrow'
