export type ValidationState = 'valid' | 'invalid' 

export interface RangeValue<T> {
    start: T;
    end: T; 
}

export interface ValueBase<T, C = T> {
    value?: T,
    defaultValue?: T,
    onChange?: (value: C) => void
}

export interface InputBase {
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export interface SelectionBase<T, C = T> {
    isSelected?: T,
    defaultSelected?: T,
    onChange?: (value: C) => void
}

export interface Validation {
    validationState?: ValidationState;
    isRequired?: boolean;
}

export interface HelperTextProps {
    errorMessage?: string;
    description?: string;
}

export interface FieldsetProps extends Validation, HelperTextProps {
    isDisabled?: boolean;
    showErrorIcon?: boolean;  
}