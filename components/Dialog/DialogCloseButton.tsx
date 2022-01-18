import React, { useRef, cloneElement } from 'react'

import { useButton } from '@react-aria/button'
import { Cross2Icon } from '@radix-ui/react-icons'

import { useDialogContext } from './utils'
import { StyledCloseButton } from './styles'
import { DialogCloseButtonProps } from './types'

import { flattenChildren } from '@/utils/flattenChildren'


const DialogCloseButton = ({ children, css, element: Component = 'div', ...props }: DialogCloseButtonProps) => {
    const { state, variant, onAction } = useDialogContext()
    const closeButtonRef = useRef<HTMLButtonElement>()

    const handlePress = () => {
        onAction('x')
        state.close() 
    }
    
    const { buttonProps } = useButton({ 
        onPress: () => handlePress()
    },  closeButtonRef)

    return (
        <Component {...props}>
            {children ? (
                cloneElement(flattenChildren(children)[0], {
                    onPress: handlePress()
                }) 
            ) : (
                <StyledCloseButton {...buttonProps}  ref={closeButtonRef}>
                    <Cross2Icon />
                </StyledCloseButton> 
            )}
        </Component>
    )
}

DialogCloseButton.displayName = 'DialogCloseButton'
export default DialogCloseButton 
