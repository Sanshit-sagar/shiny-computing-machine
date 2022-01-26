
import { ReactNode } from 'react'
import { ValidationState } from '@/interfaces/Shared'
import { strEnum } from '@/interfaces/Guards'

const CheckedEnum = strEnum([
    'TRUE',
    'FALSE',
    'INDETERMINATE'
])
type CheckedType = keyof typeof CheckedEnum

export interface CheckboxProps {
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
