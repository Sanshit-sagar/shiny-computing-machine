import { ElementType, ReactNode, forwardRef, ReactElement } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button' 
import { FocusRing } from '@react-aria/focus'

import { Text } from '@/components/Text'
import { useInteractions } from '@/hooks/useInteractions'
import { FocusableRef, useFocusableRef } from '@/utils/useRefs'

import { isTextOnly } from './utils'
import { AriaButtonProps } from './types'
import { AccessibleButtonBase as StyledButton } from './styles'


const AriaButton = <T extends ElementType = 'button'>(props: AriaButtonProps<T>, ref: FocusableRef<HTMLElement>) => {

    const {
        elementType: Component = 'button',
        isDisabled,
        isLoading,
        autoFocus,
        children,
        code,
        variant,
        ...rest
    } = props

    const buttonRef = useFocusableRef(ref)
    const { buttonProps } = useButton(props, buttonRef) 
    const { interactionProps, ...interactionStates } = useInteractions({ isDisabled, isLoading })

    const mergedProps = mergeProps(buttonProps, interactionStates) 

    return (
        <FocusRing autoFocus={autoFocus}>
            <Component {...mergedProps} ref={buttonRef}>
                <StyledButton code={code} variant={variant}>
                    {isTextOnly(children) ? (
                        <Text> {children} </Text>
                    ) : (
                        <> {children} </>
                    )}
                </StyledButton>
            </Component>
        </FocusRing>
    )
}

const _AriaButton = forwardRef(AriaButton) as <T extends ElementType>(
    props: AriaButtonProps<T> & 
    { ref: FocusableRef<HTMLElement> }
) => ReactElement 
export { _AriaButton as AriaButton }

