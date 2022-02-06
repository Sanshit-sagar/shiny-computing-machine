import { forwardRef, useRef, ElementRef, ComponentPropsWithoutRef } from 'react' 

import { useId } from '@react-aria/utils'
import { useLocale } from '@react-aria/i18n'
import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { useCheckbox } from '@react-aria/checkbox'
import { useToggleState } from '@react-stately/toggle' 
import { VisuallyHidden } from '@react-aria/visually-hidden'

import { flattenChildren } from '@/utils/flattenChildren'
import { isElementOfType } from '@/interfaces/Guards'

import {  
    ScopedProps, 
    CheckboxProps,
    ICheckboxContext 
} from './types' 
import { 
    DEFAULT_NAME, 
    DEFAULT_ROOT_TAG 
} from './constants'
import { StyledLabel } from './styles' 

import CheckboxOn from './CheckboxOn'
import CheckboxOff from './CheckboxOff'
import CheckboxLabel from './CheckboxLabel'
import CheckboxIndeterminate from './CheckboxIndeterminate'

import { CheckboxProvider } from './CheckboxContext'

const noop = (_event) => {}

type CheckboxRootElement = ElementRef<typeof DEFAULT_ROOT_TAG>
interface CheckboxRootProps extends CheckboxProps {}

const CHECKBOX_ROOT_NAME = `${DEFAULT_NAME}Root`

const CheckboxRoot = forwardRef<CheckboxRootElement, CheckboxRootProps>(({
    __scopeCheckbox, 
    id = useId(),
    name,
    value,
    children, 
    isIndeterminate, 
    isDisabled = false, 
    isReadOnly = false, 
    autoFocus = false,
    validationState = 'valid',
    onChange = noop,
    ...props 
}: ScopedProps<CheckboxProps>) => {
    
    const state = useToggleState(props)
    const ref = useRef<HTMLInputElement>()
    const { inputProps } = useCheckbox(props, state, ref)

    const { isFocusVisible, focusProps } = useFocusRing({ autoFocus })
    const { isHovered, hoverProps } = useHover({ isDisabled })

    const { direction } = useLocale() 

    const flattenedChildren = flattenChildren(children)
    const shownLabel = flattenedChildren.filter((child) => isElementOfType(child, CheckboxLabel))?.[0] ?? null
    const showWhenOn = flattenedChildren.filter((child) => isElementOfType(child, CheckboxOn))?.[0]
    const showWhenOff = flattenedChildren.filter((child) => isElementOfType(child, CheckboxOff))?.[0]
    const showWhenIndeterminate = flattenedChildren.filter((child) => isElementOfType(child, CheckboxIndeterminate))?.[0] ?? null
    
    const hasLabel = shownLabel !== null
    const hasIndeterminate = showWhenIndeterminate !== null

    const contextValue: ICheckboxContext = {
        isOn: state.isSelected,
        isOff: !state.isSelected,
        isIndeterminate: isIndeterminate || hasIndeterminate,
        isLabelled: hasLabel,
        isDisabled,
        isReadOnly,
        validationState,
        onChange,
        name,
        value: value || `${id}-checkbox`,
        isHovered,
        isFocusVisible
    }

    return (
        <CheckboxProvider scope={__scopeCheckbox} {...contextValue}>
            <StyledLabel direction={direction}>
                <VisuallyHidden>
                    <input {...inputProps} {...hoverProps} {...focusProps} ref={ref} />
                </VisuallyHidden>

                {hasIndeterminate ? (
                    <> {showWhenIndeterminate} </>
                ) : (
                    <> {showWhenOn} {showWhenOff} </>
                )}

                {hasLabel && (
                    <> {shownLabel} </>
                )}
            </StyledLabel>
        </CheckboxProvider>
    )
})

CheckboxRoot.displayName = CHECKBOX_ROOT_NAME 
export default CheckboxRoot