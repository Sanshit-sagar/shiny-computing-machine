import { useRef, ElementRef, forwardRef } from 'react'       

import { useLocale } from '@react-aria/i18n'
import { mergeProps } from '@react-aria/utils'
import { useSwitch } from '@react-aria/switch' 
import { useFocusRing } from '@react-aria/focus'

import { useToggleState } from '@react-stately/toggle'    
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useHover, usePress } from '@react-aria/interactions'

import { SwitchProps } from './types'   
import { 
    Checker, 
    CheckBg,
    Checkmark
} from './styles'   
import InnerContent from './InnerContent'

import { getValidationStatesCss } from '@/interfaces/Shared/Validation'

import { 
    SpeakerOffIcon,
    SpeakerLoudIcon 
} from '@radix-ui/react-icons'


type SwitchRootElem = ElementRef<typeof DEFAULT_TAG>
type SwitchRootProps = SwitchProps

const SwitchRoot  = forwardRef<SwitchRootElem, SwitchRootProps>(({
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
        <Checker {...mergedProps} {...variants}>
            <VisuallyHidden>
                <input className="checkbox" type="checkbox" {...inputProps} />     
            </VisuallyHidden>

            <CheckBg {...variants}> 
                <InnerContent isChecked={state.isSelected}> 
                    {state.isSelected ? (
                        <SpeakerLoudIcon />
                    ) : (
                        <SpeakerOffIcon />
                    )} 
                </InnerContent>
            
                <Checkmark className="checkmark" {...variants}>
                    <svg viewBox="0 0 100 100">
                        <path d="M20,55 L40,75 L77,27" />
                    </svg>
                </Checkmark>
            </CheckBg>
        </Checker>     
    )
})

SwitchRoot.displayName = 'SwitchRoot'
export default SwitchRoot