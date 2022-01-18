import { ReactNode, ElementType, JSXElementConstructor } from 'react'
import type { IntlNumberFormatAllOptions } from '../../interfaces/IntlNumberFormat'

import { 
    DOMProps, 
    ValidationState,
    ReadableDOMProps, 
    FocusableDOMProps, 
    LabelableDOMProps, 
    ControllableState,
} from '@/interfaces/Shared'
import { FocusEvents, KeyboardEvents, PressEvents } from '@/interfaces/Events'
import { AriaLabelingProps, AriaValidationProps } from '@/interfaces/Aria'


// export interface NumberFieldAria {
//     inputProps: HTMLAttributes<HTMLInputElement>;
//     labelProps: HTMLAttributes<HTMLLabelElement>;
//     groupProps: HTMLAttributes<HTMLElement>;
//     incrementButtonProps: Partial<AriaButtonProps>;
//     decrementButtonProps: Partial<AriaButtonProps>;
//     errorMessageProps: HTMLAttributes<HTMLDivElement>;  
//     descriptionProps: HTMLAttributes<HTMLDivElement>;
// }

export interface TooltipIconProps { 
    props: React.HTMLAttributes<HTMLButtonElement>; 
    ref: React.RefObject<HTMLButtonElement>;
    isDisabled: boolean; 
    isReadOnly: boolean;
    type: 'increment' | 'decrement';
    children: ReactNode; 
}

export interface AriaNumberFieldProps extends DOMProps, ReadableDOMProps, LabelableDOMProps, FocusableDOMProps, 
FocusEvents, PressEvents, KeyboardEvents, AriaLabelingProps, AriaValidationProps {
    rel?: string; 
    href?: string;
    target?: string; 
    elementType?: ElementType;
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void; 
    children: ReactNode;
    isLoading?: boolean;             
    placeholder?: string; 
    step?: number;
    minValue?: number;
    maxValue?: number;
    formatOptions?: Intl.NumberFormatOptions;
    incrementAriaLabel?: string; 
    decrementAriaLabel?: string; 
}
export type NumberFieldProps = AriaNumberFieldProps

export interface MessageProps {
    props: any; 
    message: string; 
    state: ValidationState;
}

export interface AriaButtonProps extends DOMProps, ReadableDOMProps, PressEvents, KeyboardEvents, FocusEvents {
    rel: string; 
    href: string;
    target: string; 
    children: ReactNode;
    placeholder: string; 
    excludeFromTabOrder: false; 
    elementType: JSXElementConstructor<any>;
}


type FormatOptions = Partial<IntlNumberFormatAllOptions>

export type NumberFieldState = Partial<{
    label: string;
    defaultValue: number;
    value: number;
    min: number;
    max: number;
    step: number;
    isRequired: boolean;
    isDisabled: boolean; 
    isReadOnly: boolean;
    formatOptions: FormatOptions; 
}>