import { useRef, forwardRef, ReactElement, HTMLAttributes, ReactNode } from 'react'
import { Node } from '@react-types/shared' 

import { TreeState } from '@react-stately/tree'
import { mergeProps } from '@react-aria/utils'

import { useInteractions } from '@/hooks/useInteractions'

import Popover from '@/components/HoverCard'
import { StyledMenuItem } from './styles'

import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'

import { useDOMRef } from '@/utils/useRefs'
import { DOMRef } from '@/interfaces/Shared'

import { TriangleRightIcon } from '@radix-ui/react-icons'


type MenuSubmenuTriggerProps<T> = {
    item: Node<T>; 
    state: TreeState<T>; 
    menuProps: HTMLAttributes<HTMLElement>; 
    prefix: ReactElement | ReactNode;
    title: ReactElement | ReactNode;
    ref: DOMRef<HTMLElement>; 
}

const MockButton = (props) => (
    <StyledMenuItem as='button' {...props} css={{ width: '85%' }} /> 
)
const Arrow = (props) => (
    <span aria-hidden="true" {...props} style={{ marginLeft: 'auto', paddingLeft: 20 }}>
        <TriangleRightIcon /> 
    </span>
)

const AriaMenuSubmenuTrigger = <T extends object>(
    props: MenuSubmenuTriggerProps, 
    ref: DOMRef<HTMLElement>
) => { 
    
    const domRef = useDOMRef(ref)
    const triggerRef = useRef<HTMLButtonElement>() 
    const menuTriggerRef = domRef || triggerRef  
    
    const state: MenuTriggerState = useMenuTriggerState(props)
    const { menuTriggerProps, menuProps } = useMenuTrigger({ type: 'menu' }, state, menuTriggerRef)
    const { buttonProps } = useButton({
        onPress: () => state.toggle(state.focusStrategy)
    }, menuTriggerRef)
    const { interactionProps, ...interactionStates } = useInteractions({ isDisabled: false })

    const mergedProps = mergeProps(buttonProps, menuTriggerProps, interactionProps)

    return (
        <Popover.Root  isDisabled={false} isLoading={false} placement="right">
            <Popover.Trigger element={MockButton} {...interactionStates} {...mergedProps}>
                <> {props.prefix} </>
                <> {props.title} </>
                <Arrow /> 
            </Popover.Trigger>

            <Popover.Content>
                <div {...menuProps} style={{ backgroundColor: 'red' }}>
                    <h5> hihi how you doing </h5>
                    <button> click me, click me! </button>
                </div>
            </Popover.Content>
        </Popover.Root>
    )
}

AriaMenuSubmenuTrigger.displayName = 'MenuSubmenuTrigger'
const _MenuSubmenuTrigger = forwardRef(AriaMenuSubmenuTrigger) as <T>(props: MenuSubmenuTriggerProps<T> & {
    ref?: DOMRef<HTMLElement>;
}) => ReactElement


export { _MenuSubmenuTrigger as MenuSubmenuTrigger }