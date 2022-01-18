
import { ReactNode } from 'react'

export const INDETERMINATE: string = 'indeterminate'
export const CHECKED: boolean = true
export const UNCHECKED: boolean = false
export type ValidationState = 'valid' | 'invalid' | undefined

export interface CheckboxState {
    id: string;                                 // ** 
    checked: true | false | 'indeterminate';    // **
    onCheckedChange: (checked: true | false | 'indeterminate') => void; 
    defaultChecked?: boolean;                   // def = false
    label?: string;                             // def = undefined
    isDisabled: boolean;                         // def = false
    isRequired: boolean;                         // def = false
    labelPosition?: 'top' | 'left' | 'right';   // def = left
    hideLabel?: boolean;                        // def = false
    isIndeterminate?: boolean;                  // def = false
    autoFocus?: boolean;                        // def = false
    isReadOnly?: boolean;                       // def = false
    excludeFromTabOrder?: boolean;              // def = false
    validationState?: ValidationState;          // def = undefined
}

interface ControlGroupProps {
    labelPosition: 'right' | 'left' | 'top';
    label: string;
    hideLabel?: boolean;
    children: ReactNode;
};

interface RootProps {  
    isDisabled: boolean;
    isRequired: boolean;
    isLoading: boolean;
    isHovered: boolean;
    isPressed: boolean;
    isFocusWithin: boolean;
    isReadOnly: boolean;
    checked: boolean | "indeterminate"; 
    onCheckedChange: (checked: boolean) => void;
}

interface LabelProps {
    label: string;
    pos: 'top' | 'left' | 'right';
    hide: boolean; 
};

export type CheckboxControlGroupProps = ControlGroupProps
export type CheckboxRootProps = RootProps
export type CheckboxLabelProps = LabelProps

// export interface ToggleState {
//     isSelected: boolean;
//     setSelected: (isSelected: boolean) => void;
//     toggle: () => void; 
// }

// export interface CheckboxProps {
//     id: string; 
//     name?: string;
//     value?: string;
//     defaultChecked?: boolean;
//     children?: React.ReactNode; 
//     isChecked?: true | false | 'indeterminate';
//     onCheckedChange?: (checked: true | false | 'indeterminate') => void;
//     autoFocus?: boolean;
//     isFocused?: boolean;
//     isDisabled?: boolean;
//     isReadOnly?: boolean;
//     isRequired?: boolean;
//     isIndeterminate?: boolean;
//     excludeFromTabOrder?: boolean;
//     validationState?: ValidationState; 
//     onKeyUp?: (e: KeyboardEvent) => void;
//     onKeyDown?: (e: KeyboardEvent) => void;
//     onBlur?: (e: React.FocusEvent<Element, Element>) => void;
//     onFocus?: (e: React.FocusEvent<Element, Element>) => void;
//     onFocusChange?: (isFocused: boolean) => void; 
//     'aria-label'?: string; 
//     'aria-details'?: string;
//     'aria-controls'?: string; 
//     'aria-labelledBy'?: string;
//     'aria-describedBy'?: string; 
//     'aria-errormessage'?: string; 
// };
