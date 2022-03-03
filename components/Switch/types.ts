import { 
    DOMProps, 
    SelectionBase,
    FocusableDOMProps,  
    ValidationState
} from '@/interfaces/Shared'
import { CSS } from 'stitches.config'

export interface SwitchAriaProps {
    'aria-label': string;
    'aria-labelledby': string;
    'aria-describedby': string;
    'role': string;
}

export interface ToggleState extends SelectionBase<boolean> {}

export interface SwitchOwnProps {
    css?: CSS; 
}

export interface SwitchProps extends DOMProps, ToggleState, SwitchOwnProps, Partial<SwitchAriaProps> {
    isDisabled?: boolean;
    isLoading?: boolean;
    isRequired?: boolean; 
    validationState?: ValidationState;
}

export interface ISwitchContext extends SwitchProps {
    
}
// excludeFromTabOrder, autoFocus, 