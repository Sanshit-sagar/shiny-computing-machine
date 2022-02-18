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
    value?: string;
    name?: string; 
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export interface SelectionBase<T, C = T> {
    isSelected?: T,
    defaultSelected?: T,
    onChange?: (value: C) => void
}

export interface ValidationBase {
    validationState?: ValidationState;
    isRequired?: boolean;
}
export interface Validation extends ValidationBase {}

export interface HelperTextProps {
    errorMessage?: string;
    description?: string;
}

export interface FieldsetProps extends ValidationBase, HelperTextProps {
    isDisabled?: boolean;
    showErrorIcon?: boolean;  
}