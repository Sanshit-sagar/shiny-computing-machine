import { 
    DOMProps, 
    SelectionBase,
    ReadableDOMProps, 
    LabelableDOMProps, 
    FocusableDOMProps,  
} from '@/interfaces/Shared'

export interface SwitchProps extends DOMProps, ReadableDOMProps, FocusableDOMProps, LabelableDOMProps, SelectionBase<boolean> {
    isDisabled?: boolean;
}
