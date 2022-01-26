import { ReactNode, ReactElement, JSXElementConstructor } from 'react'

import { DOMProps, FocusableDOMProps, ReadableDOMProps } from '@/interfaces/Shared'
import { AriaLabelingProps, AriaValidationProps} from '@/interfaces/Aria'
import { ValidationState } from '@/interfaces/Shared'


import { 
    KeyboardEvents, 
    FocusEvents, 
    ClipboardEvents,
    CompositionEvents, 
    FormEvents, 
    SelectEvents 
} from '@/interfaces/Interactions'

import { strEnum } from '@/interfaces/Guards'

const AutoCapitalizeEnum = strEnum([
    'none',
    'sentances',
    'words',
    'characters',
    'on',
    'off',
    'default',
    'invalid'
])

type MappedAutoCapitalizeState = Omit<keyof typeof AutoCapitalizeEnum, 'on' | 'off' | 'default' | 'invalid'>
type AutoCapitalizeStateMappingType = {
    [ac in keyof typeof AutoCapitalizeEnum]: MappedAutoCapitalizeState
}

const autoCapitalizeMappings: AutoCapitalizeStateMappingType = {
    'default': 'sentances',
    'off': 'none',
    'none': 'none',
    'on': 'sentances',
    'sentances': 'sentances',
    'characters': 'characters',
    'words': 'words',
    'invalid': 'sentances'
}

const getMappedAutoCompleteState = (unsanitizedValue: keyof typeof AutoCapitalizeEnum): MappedAutoCapitalizeState => {
    return autoCapitalizeMappings[unsanitizedValue]
} 

export interface TextFieldAriaProps {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-errormessage'?: string;
    'active-ariadescendent'?: string; 
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
}

interface AriaTextFieldBase extends KeyboardEvents, ClipboardEvents, CompositionEvents, FormEvents, FocusEvents, SelectEvents {}

export type DefaultElementType = 'input'


interface AriaTextFieldOptions extends AriaTextFieldBase, TextFieldAriaProps {
    children?: string | ReactNode | ReactElement; 
    id?: string; 
    inputElementType?: DefaultElementType; // 'input' or 'textarea'

    isReadOnly?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean; 
    validationState?: ValidationState;

    label?: ReactNode;
    description?: ReactNode;
    errorMessage?: ReactNode;

    autoFocus?: boolean;
    excludeFromTabOrder?: boolean; 

    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void; 

    placeholder?: string;
    name?: string;
  
    pattern?: string;
    maxLength?: number;
    minLength?: number; 

    autoComplete?: string;
    autoCorrect?: string;
    autoCapitalize?: keyof typeof AutoCapitalizeEnum;

    type?:               'text' | 'url' | 'tel' | 'email' | 'search' | 'password' | string; 
    inputMode?: 'none' | 'text' | 'url' | 'tel' | 'email' | 'search' | 'numeric' | 'decimal';

    spellCheck?: boolean | 'true' | 'false'; 
    ['data-testid']?: string;
}

export interface TextInputProps extends AriaTextFieldOptions {}

export interface ITextInputContext extends AriaTextFieldOptions {}

///////////////////////////////////////////////////////////////

export type InputPrefixNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type InputSuffixNode = ReactElement<{}, string | JSXElementConstructor<any>>
// export type ReactNodeCandidate = React.ReactChild | React.ReactFragment | React.ReactPortal