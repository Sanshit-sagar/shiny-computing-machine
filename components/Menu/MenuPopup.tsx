import { useRef } from 'react'

import { useMenu } from '@react-aria/menu'
import { mergeProps } from '@react-aria/utils'
import { useTreeState } from '@react-stately/tree'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'

import { MenuItem } from './MenuItem'

export const MenuPopup = (props) => {
    const menuRef = useRef<HTMLUListElement | null>(null)
    const overlayRef = useRef<HTMLDivElement | null>(null)

    const state = useTreeState({ ...props, selectionMode: 'none' })

    const { menuProps } = useMenu(props, state, menuRef)
    const { overlayProps } = useOverlay({
        onClose: props.onClose,
        shouldCloseOnBlur: true,
        isDismissable: true,
        isOpen: false
    }, overlayRef)


    return (
        <FocusScope restoreFocus>
            <div {...overlayProps} ref={overlayRef}>
                <DismissButton onDismiss={props.onClose} /> 
                <ul
                    {...mergeProps(menuProps, props.domProps)}
                    ref={menuRef}
                >
                    {[...state.collection].map((item) => (
                        <MenuItem
                            key={item.key}
                            item={item}
                            state={state}
                            onAction={props.onAction}
                            onClose={props.onClose} 
                        />
          
                    ))}
                </ul>
                <DismissButton onDismiss={props.onClose} /> 

            </div>
        </FocusScope>
    )
}