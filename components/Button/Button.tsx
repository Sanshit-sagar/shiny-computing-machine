import { ElementType, forwardRef, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { AriaButtonProps } from './types'
import { StyledButtonBase, prefixStyles, suffixStyles, buttonFontStyles } from './variants'

import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { useFocusableRef } from '@/utils/useRefs'
import { FocusableRef } from '@/interfaces/Shared'
import { isTextOnly } from '@/components/Buttons/utils'


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
        <StyledButtonBase as={Component} {...mergedProps} {...states} {...rest} role="button" ref={buttonRef}>
            {PrefixIcon && (
                <Box as="span" data-component="prefix" css={prefixStyles}>
                    {PrefixIcon} 
                </Box>
            )}

            <Text as="span" data-component="text" css={buttonFontStyles}>
                {children}
            </Text>

            {SuffixIcon && (
                <Box as="span" data-component="suffix" css={suffixStyles}>
                    {SuffixIcon} 
                </Box>
            )}
        </StyledButtonBase>
    )
}

const _AriaButton = forwardRef(AriaButton) as <T extends ElementType>(
    props: AriaButtonProps<T> & 
    { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement 
export { _AriaButton as Button }

