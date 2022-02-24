import { useRef, forwardRef, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

import { useDOMRef } from '@/utils/useRefs'
import { DOMRef } from '@/interfaces/Shared'
import { useInteractions } from '@/hooks/useInteractions'

import { MenuPopup } from './MenuPopup'
import { MenuContext } from './MenuContext'
import { MenuButtonArrow } from './MenuButtonArrow'

import { StyledMenuButton } from './styles'
import { MenuProps, MenuButtonProps, MenuTriggerState } from './types'

import Popover from '@/components/HoverCard'

export const AriaMenuButton = <T extends object>(
    props: MenuButtonProps & MenuProps<T>, 
    ref: DOMRef<HTMLButtonElement>
) => {
    const {
        align = 'start',
        trigger = 'press',
        direction = 'bottom',
        closeOnSelect,
        shouldFlip = true,
        children,
        ...rest
    } = props

    const domRef = useDOMRef(ref)
    const triggerRef = useRef<HTMLButtonElement>() 
   

    const menuTriggerRef = domRef || triggerRef   

    const state: MenuTriggerState = useMenuTriggerState(props)
    
    const { menuTriggerProps, menuProps } = useMenuTrigger({ type: 'menu' }, state, menuTriggerRef)
    const { interactionProps, ...interactionStates } = useInteractions({ focusType: 'within', isDisabled: false })
  

    const { buttonProps } = useButton({ 
        onPress: (_event) => state.toggle(state.focusStrategy) 
    }, menuTriggerRef)

    const mergedProps = mergeProps(menuTriggerProps, buttonProps, interactionProps)

    const menuContext = {
        ...menuProps,
        onClose: state.close,
        closeOnSelect,
        autoFocus: state.focusStrategy || true
    }

    // const CustomMenuButton = ({ children }) => (
        // <StyledMenuButton {...mergedProps} {...interactionStates} ref={menuTriggerRef}>
            {/* {children} */}
        {/* </StyledMenuButton> */}
    // )

    return (
        <MenuContext.Provider value={menuContext}>
            <Popover.Root 
                height={225}
                width={175}
                isDisabled={false} 
                isLoading={false} 
                isOpen={true}
                offset={10}
                placement="bottom" 
            >
                <Popover.Trigger {...mergedProps} element={StyledMenuButton}>
                    {props.label}
                    <MenuButtonArrow />
                </Popover.Trigger>

                <Popover.Content>
                    <MenuPopup
                        {...props}
                        {...menuProps}
                        autoFocus={state.focusStrategy}
                        onClose={() => state.close()}
                    />
                </Popover.Content>
            </Popover.Root>
        </MenuContext.Provider>
    )
}

const _MenuButton = forwardRef(AriaMenuButton) as <T>(props: MenuButtonProps & MenuProps<T> & { 
    ref?: DOMRef<HTMLButtonElement> 
}) => ReactElement

export { _MenuButton as MenuButton }