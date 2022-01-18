import { ReactNode, ReactElement } from 'react'

import {
    DOMProps,
    ReadableDOMProps,
    FocusableDOMProps,
    ValidatableDOMProps,
    LabelableDOMProps,
    ValidationState,
    Orientation,
    SelectionBase,
    ControllableState
} from '@/interfaces/Shared'

import { FocusEvents, KeyboardEvents } from '@/interfaces/Events'
import { AriaLabelingProps, AriaValidationProps } from '@/interfaces/Aria'

/////////////// TYPES FOR GROUP -> ///////////////
/////////////// passed in by user OR init with default values ///////////////

export type RadioGroupProps = {
    label?: string;
    name?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean; 
    validationState?: ValidationState;
    orientation?: Orientation; 
    ['data-testid']?: string;
} & ControllableState<string, 'value'>

export type AriaRadioGroupProps = RadioGroupProps & AriaLabelingProps & {
    children?: ReactNode; 
}

/////////////// TYPES FOR STATE & CONTEXT ///////////////

export interface RadioGroupState {
    name: string; 
    selectedValue: string | null;
    lastFocusedValue: string | null; 
    isDisabled: boolean;
    isReadOnly: boolean;
    setSelectedValue: (value: string | null) => void;
    setLastFocusedValue: (value: string | null) => void;
}

export interface RadioGroupContext extends RadioGroupState {}

/////////////// TYPES FOR ITEM /////////////// 

export interface RadioItemProps extends DOMProps, ReadableDOMProps, LabelableDOMProps, FocusableDOMProps, SelectionBase<boolean>, ValidatableDOMProps, FocusEvents, KeyboardEvents, AriaLabelingProps, AriaValidationProps {
    value: string;
    name?: string;
    ['data-testid']?: string;
    children?: ReactNode; 
}

export type RadioItemNode = ReactElement<{ children: ReactNode }>

/////////////// TYPES FOR LABEL ///////////


type LabelFromChildren = { children: ReactNode | string; label?: never; value?: never; }
type LabelFromLabelProp ={ children?: never;  value?: never; label: string;  }
type LabelFromValueProp = { children?: never;  value: string; label?: never; }
export type RadioGroupLabelProps = LabelFromChildren | LabelFromLabelProp | LabelFromValueProp

export type RadioLabelNode = ReactElement<{ children: ReactNode }>