import { useRef, forwardRef, RefObject, ReactElement } from 'react'

import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

import { MenuPopup } from './MenuPopup'
import { MenuButtonArrow } from './MenuButtonArrow'
import { MenuButtonProps, AriaMenuOptions, MenuTriggerState } from './types'

import { StyledMenuButton } from './styles'
import { useInteractions } from '@/hooks/useInteractions'

import { mergeProps } from '@react-aria/utils'

export const AriaMenuButton = <T extends object>(
    props: MenuButtonProps & AriaMenuOptions<T>, 
    ref: RefObject<HTMLButtonElement>
) => {
    const {
        trigger = 'press',
        align = 'start',
        direction = 'bottom',
        closeOnSelect = true,
        shouldFlip = true,
        ...rest
    } = props


    const buttonRef = useRef<HTMLButtonElement | null>(null)
    if(!ref) {
        ref = buttonRef
    }

    const state: MenuTriggerState = useMenuTriggerState({ 
        ...props, 
        closeOnSelect: true 
    })
    
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

const _MenuButton = forwardRef(AriaMenuButton) as <T>(props: MenuButtonProps & AriaMenuOptions<T> & { 
    ref?: RefObject<HTMLButtonElement> 
}) => ReactElement

export { _MenuButton as MenuButton }