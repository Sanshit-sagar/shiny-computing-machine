

import { ElementType, forwardRef, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'


import { StyledButton } from './styles'
import { AriaButtonProps } from './types'
import { useFocusableRef } from '@/utils/useRefs'

import { Text } from '@/components/Text'
import { isTextOnly } from '../Buttons/utils'
import { FocusableRef } from '@/interfaces/Shared'

const AriaButton = <T extends ElementType = 'button'>(props: AriaButtonProps<T>, ref: FocusableRef<HTMLButtonElement>) => {

    const {
        elementType: Component = 'button',
        isDisabled,
        isLoading,
        autoFocus,
        children,
        ...rest
    } = props

    const buttonRef = useFocusableRef(ref)

    const isTextInput = isTextOnly(children) 

    const { buttonProps, isPressed } = useButton(props, buttonRef) 
    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true, isTextInput, autoFocus })

    const mergedProps = mergeProps(buttonProps, hoverProps, focusProps)
    const states = { isHovered, isFocused, isFocusVisible, isPressed, isDisabled, isLoading } 

    return (
        <StyledButton as={Component} {...mergedProps} {...states} ref={buttonRef}>
            {children}
        </StyledButton>
    )
}

const _AriaButton = forwardRef(AriaButton) as <T extends ElementType>(
    props: AriaButtonProps<T> & 
    { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement 
export { _AriaButton as Button }

