
import { ReactNode, InputHTMLAttributes } from 'react'
import { VariantProps } from 'stitches.config'
import { ValidationState } from '@/interfaces/Shared'
import { FocusEvents, KeyboardEvents } from '@/interfaces/Interactions'
import { Scope } from '@/hooks/createContextScope'
import { StyledOn, StyledOff } from './styles' 

export interface CheckboxAriaProps {
    'aria-label'?: string; 
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string; 
    'aria-errormessage'?: string;
}

export interface CheckboxProps extends KeyboardEvents, FocusEvents, CheckboxAriaProps {
    id?: string; 
    children?: ReactNode; 
    isSelected?: boolean;
    defaultSelected?: boolean;
    isIndeterminate?: boolean; 
    onChange?: (isSelected: boolean) => void;
    value?: string;
    name?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean; 
    validationState?: ValidationState;
    isRequired?: boolean;
    autoFocus?: boolean;
    excludeFromTabOrder?: boolean;
}

export type ToggleState = {
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
    toggle: () => void; 
}

export interface CheckboxAria {
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export type ScopedProps<P> = P & {
    __scopeCheckbox?: Scope; 
}

export interface ICheckboxContext {
    name: string; 
    value: string;
    isOn: boolean;
    isOff: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isIndeterminate: boolean;
    isLabelled: boolean; 
    validationState: ValidationState;
    onChange: (isSelected: boolean) => void; 
    isHovered: boolean; 
    isFocusVisible: boolean;
}

export type CheckboxOnVariants = VariantProps<typeof StyledOn>
export type CheckboxOffVariants = VariantProps<typeof StyledOff>

