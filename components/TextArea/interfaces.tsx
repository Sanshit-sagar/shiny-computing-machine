import { ReactNode } from 'react'
import { InputProps } from '../TextInput/interfaces'
import { TextAreaProps as StyledTextAreaProps } from './styles'
import { 
    DOMProps, 
    ValidationState,
    LabelableDOMProps, 
    ReadableDOMProps, 
    FocusableDOMProps 
} from '@/interfaces/Shared'

export enum RestrictedTypeEnum {
    WORDS = 'words',
    CHARS = 'chars'
};

type RestrictionType = 'words' | 'chars'


export interface RestrictedContentState {
    content: string; 
    wordCount: number;
}

export type RestrictedInputProps = {
    rows?: number;
    cols?: number;
    value: string;
    limit: number; 
} & StyledTextAreaProps & { 
    props: Partial<InputProps>; 
} & { 
    icon?: ReactNode | null; 
}

export interface TextAreaProps extends DOMProps, LabelableDOMProps, ReadableDOMProps, FocusableDOMProps, StyledTextAreaProps {
    defaultValue: string;
    value: string;
    onChange: (value: string) => void; 
    icon: React.ReactNode; 
    limit?: number;
    restriction?: RestrictionType;
    validationState: ValidationState
}