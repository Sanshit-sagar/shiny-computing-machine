import { ElementType, ReactNode, JSXElementConstructor, ReactElement } from 'react'

import { CSS, VariantProps } from 'stitches.config'
import { Nullable } from '@/interfaces/Guards'
import { 
    DOMProps, 
    ReadableDOMProps,
    InteractionProps, 
    ValidationState, 
    FocusableDOMProps 
} from '@/interfaces/Shared'
import { 
    PressEvents, 
    HoverEvents, 
    FocusEvents 
} from '@/interfaces/Events'
import { 
    StyledBase, 
    StyledSuffix,
    StyledPrefix 
} from './styles'

export type AriaProps = {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    // 'aria-controls'?: string;
    // 'aria-pressed'?: boolean; 
    // 'aria-expanded'?: boolean;
    // 'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "listbox" | "tree";
}

export interface BaseButtonProps extends DOMProps, ReadableDOMProps, FocusableDOMProps, 
InteractionProps, HoverEvents, FocusEvents, AriaProps {
    type?: 'button' | 'reset' | 'submit'; 
    elementType?: ElementType<any>;
    isLoading?: boolean; 
    children?: ReactNode; 
    validationStatus?: ValidationState;
    showIconsWhenLoading?: boolean;
    tooltip?: ReactNode | string;
    css?: CSS;
    onPress?: (event) => void; 
}

export type RadiusVariants = { radius?: "y=x" | "y=x-n" } & Pick<VariantProps<typeof StyledPrefix>, 'radius'>
export type ButtonVariants = VariantProps<typeof StyledBase> & RadiusVariants

export interface RegularButtonProps extends BaseButtonProps {
    variant?: ButtonVariants;
    prefix?: ReactNode | HTMLOrSVGElement;
    suffix?: ReactNode | HTMLOrSVGElement; 
    base?: ReactNode | HTMLOrSVGElement; 
} 

export type ButtonPrefixNode   = ReactElement<{}, string | JSXElementConstructor<any>>
export type ButtonSuffixNode   = ReactElement<{}, string | JSXElementConstructor<any>>
export type ButtonBaseNode     = ReactElement<{}, string | JSXElementConstructor<any>>
export type ButtonRootNode     = ReactElement<{}, string | JSXElementConstructor<any>>

export type GenericButtonProps<T> = RegularButtonProps & T
export type ButtonProps<T> = GenericButtonProps<T> & ButtonVariants
export type IButtonContext = Nullable<ButtonProps<ElementType<unknown>>>

export type ButtonImplProps<T> = ButtonProps<T>

//////////

export type ButtonPrefixProps = VariantProps<typeof StyledPrefix> & BaseButtonProps
export type ButtonSuffixProps = VariantProps<typeof StyledSuffix> & BaseButtonProps
export type ButtonBaseProps = VariantProps<typeof StyledBase> & BaseButtonProps

////////////

///////////////

export type UnionToIntersection<Union> = (
    Union extends unknown 
    ? (distributedUnion: Union) => void 
    : never
)  extends (
    (mergedIntersection: infer Intersection) => void
)   ? Intersection 
    : never;