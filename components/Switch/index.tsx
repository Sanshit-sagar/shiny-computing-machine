import { useRef } from 'react'       

import { useLocale } from '@react-aria/i18n'
import { mergeProps } from '@react-aria/utils'
import { useSwitch } from '@react-aria/switch' 
import { useFocusRing } from '@react-aria/focus'

import { useToggleState } from '@react-stately/toggle'    
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useHover, usePress } from '@react-aria/interactions'

import { SwitchProps } from './types'   
import { Checkmark, Checker, CheckBg } from './styles'   

import { Flex } from '@/components/Flex'
import { getValidationStatesCss } from '@/interfaces/Shared/Validation'

export const Switch = ({
    isDisabled = false,
    isLoading = false,
    autoFocus = false,
    validationState,
    ...props
}: SwitchProps) => {
   
    const ref = useRef()
    const state = useToggleState(props)
    const { inputProps } = useSwitch(props, state, ref)

    const { direction } = useLocale() 
    const { isHovered, hoverProps } = useHover({ isDisabled })
    const { isPressed, pressProps } = usePress({ isDisabled })
    const { isFocusVisible, isFocused, focusProps } = useFocusRing({ within: true, isTextInput: false, autoFocus })

    const mergedProps = mergeProps(hoverProps, focusProps, pressProps)
    const validationStates = getValidationStatesCss(validationState)

    const variants = { 
        isChecked: state.isSelected, 
        isHovered, 
        isPressed, 
        isFocused,
        hasFocusRing: isFocusVisible, 
        isDisabled, 
        isLoading,
        direction,
        ...validationStates
    }

    return (
        <Flex>
            <Checker 
                {...mergedProps}
                isHovered={isHovered}
                isFocused={isFocusVisible}
                isPressed={isPressed}
                direction={direction}
            >
                <VisuallyHidden>
                    <input className="checkbox" type="checkbox" {...inputProps} />     
                </VisuallyHidden>

                <CheckBg
                    isChecked={state.isSelected}
                    isHovered={isHovered}
                    isFocused={isFocused}
                > 
                    <Checkmark 
                        className="checkmark"
                        isChecked={state.isSelected}
                        isHovered={isHovered}
                        isFocused={isFocused}
                    >
                        <svg viewBox="0 0 100 100">
                            <path d="M20,55 L40,75 L77,27" />
                        </svg>
                    </Checkmark>
                </CheckBg>
            </Checker>      
        </Flex>
    )
}