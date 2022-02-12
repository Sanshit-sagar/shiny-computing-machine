import { 
    DOMProps, 
    SelectionBase,
    ReadableDOMProps, 
    LabelableDOMProps, 
    FocusableDOMProps,  
    ValidationState
} from '@/interfaces/Shared'
import { CheckBg, Checker, Checkmark } from './styles'


export interface SwitchProps extends DOMProps, ReadableDOMProps, FocusableDOMProps, LabelableDOMProps, SelectionBase<boolean> {
    isDisabled?: boolean;
    isLoading?: boolean;
    validationState?: ValidationState;
}
