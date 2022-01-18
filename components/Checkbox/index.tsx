import React, { useRef } from 'react' 

import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle'
import { useHover } from '@react-aria/interactions'
import { useFocusRing, useCheckbox } from 'react-aria'

import { 
    CheckboxRoot, 
    CheckboxIndicator,
    CheckboxControlGroup
} from './styles'

import { INDETERMINATE, CHECKED } from './interfaces'
import { CheckboxState } from './interfaces'

export const Checkbox = (props: CheckboxState) => {
    let state = useToggleState(props)

    let ref = useRef()
    let { inputProps } = useCheckbox(props, state, ref)
    let { isFocusVisible, focusProps } = useFocusRing()

    let { hoverProps, isHovered } = useHover({
        onHoverStart: (_e) => console.log(`Hovering checkbox`),
        onHoverEnd: (_e) => console.log(`done hovering`),
    }); 

    let isLoading: boolean      =   false
    let isFocusWithin: boolean  =   isFocusVisible
    let isPressed: boolean      =   props.defaultChecked || (!props.defaultChecked && props.checked===true)

    return (
        <CheckboxControlGroup
            label={props.label}
            labelPosition={props.labelPosition}
            hideLabel={props.hideLabel}
            {...hoverProps}
        >
            <VisuallyHidden>
                <input 
                    {...inputProps} 
                    {...focusProps} 
                    ref={ref}
                />
            </VisuallyHidden>
            <CheckboxRoot 
                {...props}
                isLoading={isLoading}
                isFocusWithin={isFocusWithin}
                isPressed={isPressed}
                isHovered={isHovered}
                disabled={props.isDisabled}
                required={props.isRequired}
                isReadOnly={props.isReadOnly}
                checked={props.checked}
                onCheckedChange={(checked: boolean) => props.onCheckedChange(checked)}
            >
                <CheckboxIndicator>
                    {
                        props.checked === INDETERMINATE ? <DividerHorizontalIcon />
                    :   props.isIndeterminate           ? <DividerHorizontalIcon /> 
                    :   props.checked === CHECKED       ? <CheckIcon />
                    :   null }
                </CheckboxIndicator>
            </CheckboxRoot>
        </CheckboxControlGroup> 
    );
}

// export const OrientedCheckboxControlGroup = ({ props, update }) => (
//     <CheckboxControlGroup
//         type={props.type}
//         dir={props.dir}
//         orientation={props.orientation}
//         labelPosition={props.labelPosition}
//         label={props.label}
//     >
       
//     </CheckboxControlGroup>
// );

