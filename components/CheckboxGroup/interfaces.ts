import { ReactNode } from 'react'

import { AriaLabelingProps } from '@/interfaces/Aria'
import { FocusEvents, KeyboardEvents } from '@/interfaces/Events'
import { 
    DOMProps, 
    SelectionBase,  
    ReadableDOMProps, 
    FocusableDOMProps,
    ValidatableDOMProps, 
    LabelableDOMProps,
    ValueBase,
    Orientation
} from '@/interfaces/Shared'

export interface ToggleState {
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
    toggle: () => void; 
}

export interface CheckboxProps extends DOMProps, ReadableDOMProps, FocusableDOMProps, SelectionBase<boolean>, ValidatableDOMProps, FocusEvents, KeyboardEvents, AriaLabelingProps {
    value: string;
    name?: string;
    label?: ReactNode;
    children: ReactNode; 
    ['data-testid']?: string;
}

export interface CheckboxGroupProps extends DOMProps, ReadableDOMProps, LabelableDOMProps, ValueBase<string[]> {
    children: ReactNode;
    orientation?: Orientation;
}

export interface CheckboxGroupState {
    value: string;
    isDisabled: boolean;
    isReadOnly: boolean;
    isSelected: (value: string) => boolean;
    addValue: (value: string) => void;
    removeValue: (value: string) => void;
    setValue: (value: string[]) => void;
    toggleValue: (value: string) => void;
}