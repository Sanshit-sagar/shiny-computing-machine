import { ElementType, forwardRef, ReactElement } from 'react'
import { VariantProps } from 'stitches.config'

import { useButton } from '@react-aria/button' 
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { Text } from '@/components/Text'
import { FocusableRef, useFocusableRef } from '@/utils/useRefs'

import { isTextOnly } from './utils'
import { AriaButtonProps } from './types'
import { InlineFlex, StyledButton } from './styles'
import { Spinner } from '@/components/Spinner'


const shapeMap = {
    'sharp': '0000',
    'rounded': '0001',
    'oval': '0010',
    'circular': '0011',
    'alt_bltr': '0111'
}

const sizeMap = {
    'xs': '00',
    's': '01',
    'm': '10',
    'l': '11',
}
const spinnerSizeMap = {
    'xs': 1,
    's': 1,
    'm': 2,
    'l': 2
}

const AriaButton = <T extends ElementType = 'button'>(props: AriaButtonProps<T>, ref: FocusableRef<HTMLButtonElement>) => {

    const {
        elementType: Component = 'button',
        isDisabled,
        isLoading,
        autoFocus,
        children,
        shape,
        size,
        ...rest
    } = props

    const buttonRef = useFocusableRef(ref)

    const isTextInput = isTextOnly(children) 

    const { buttonProps, isPressed } = useButton(props, buttonRef) 
    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true, isTextInput, autoFocus })

    const codifiedVariant = `${shapeMap[shape]}${sizeMap[size]}` as unknown as VariantProps<typeof StyledButton>['code']
    
    const showOnlySpinner = isLoading && shape === 'circular' 

    return (
        <span {...focusProps}>
            <StyledButton 
                as={Component} 
                {...hoverProps}
                {...buttonProps}
                code={codifiedVariant} 
                isHovered={isHovered}
                isPressed={isPressed}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isFocusVisible={isFocused || isFocusVisible}
                ref={buttonRef}
            >
                {showOnlySpinner ? (
                    <Spinner size={spinnerSizeMap[size]} />
                ) : (
                    <InlineFlex size={size} isLoading={isLoading}> 
                        {isTextInput ? <Text> {children} </Text> : children} 
                        {isLoading && <Spinner size={spinnerSizeMap[size]} />} 
                    </InlineFlex>
                )}
            </StyledButton>
        </span>
    )
}

const _AriaButton = forwardRef(AriaButton) as <T extends ElementType>(
    props: AriaButtonProps<T> & 
    { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement 
export { _AriaButton as AriaButton }

