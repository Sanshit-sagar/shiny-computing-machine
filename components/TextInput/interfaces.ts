import { InputHTMLAttributes, ReactNode, ElementType, ReactEventHandler, FormEventHandler, HTMLInputTypeAttribute } from 'react'
import { ClipboardEvents, CompositionEvents, FormEvents } from '@/interfaces/Events'
import { DOMProps, FocusableDOMProps, ReadableDOMProps } from '@/interfaces/Shared'
import { AriaLabelingProps, AriaValidationProps} from '@/interfaces/Aria'
import { ValidationState } from '@/interfaces/Shared'

export interface AriaTextFieldOptions extends Omit<TextFieldHTMLProps, 'onChange'>, DOMProps, 
FocusableDOMProps, ReadableDOMProps, AriaLabelingProps, AriaValidationProps, 
Partial<ClipboardEvents>, Partial<CompositionEvents>, Partial<FormEvents> {
    
    name?: string;
    label?: ReactNode;
    placeholder?: string; 
    description?: ReactNode;
    errorMessage?: ReactNode;
    autoFocus?: boolean;
    validationState?: ValidationState;
    onSelect?: ReactEventHandler<HTMLInputElement>;
    pattern?: string;
    maxLength?: number;
    minLength?: number; 
    inputElementType?: "input" | "textarea";
    autoComplete?: string;
    autoCorrect?: string;
    autoCapitalize?: string; // "on" | "off"
    // spellCheck?: Booleanish; // "true" | "false"
    'active-ariadescendent'?: string; 
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    ['data-testid']?: string;
    // type: HTMLInputTypeAttribute; // 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | 'hidden';
    inputMode?: 'none' | 'text' | 'search' | 'url' | 'tel' | 'email' | 'numeric' | 'decimal';
   
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void; 
}

type TextFieldHTMLProps = InputHTMLAttributes<HTMLInputElement>

export type TextInputProps = AriaTextFieldOptions & TextFieldHTMLProps

type Nullable<T> = T | null | undefined

export interface ITextInputContext extends Nullable<Partial<TextInputProps>> { }

// "number" | "hidden" | "color" | 
// "button" | "checkbox" | "radio" | 
// "text" | "reset" | "search" | "time"
// "image" | "email" | 
// "password" | "url" | "tel" 
// | (string & {}) | "date" | 
// ... 5 more ... 
// | "week"