import { ElementType, forwardRef, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { useFocusableRef } from '@/utils/useRefs'
import { FocusableRef } from '@/interfaces/Shared'
import { isTextOnly } from '@/components/Buttons/utils'

import { AriaButtonProps } from './types'
import { 
    StyledButton,
    buttonSuffixStyles, 
    buttonPrefixStyles,
    buttonTextStyles 
} from './styles'

const AriaButton = <T extends ElementType = 'button'>(
    props: AriaButtonProps<T>, 
    ref: FocusableRef<HTMLButtonElement>
) => {
    const {
        elementType: Component = 'button',
        isDisabled,
        isLoading,
        autoFocus,
        children,
        prefix: PrefixIcon = null,
        suffix: SuffixIcon = null,
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
        <StyledButton {...mergedProps} {...states} {...rest} role="button" ref={buttonRef}>
            {PrefixIcon && (
                <Flex css={buttonPrefixStyles}>
                    {PrefixIcon} 
                </Flex>
            )}

            <Text as="span" css={buttonTextStyles}>
                {children}
            </Text>

            {SuffixIcon && (
                <Flex css={buttonSuffixStyles}>
                    {SuffixIcon} 
                </Flex>
            )}
        </StyledButton>
    )
}

const _AriaButton = forwardRef(AriaButton) as <T extends ElementType>(
    props: AriaButtonProps<T> & 
    { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement 
export { _AriaButton as Button }

