import { CSS, VariantProps } from 'stitches.config' 

import { 
    ElementType, 
    ReactNode, 
    ReactElement, 
    JSXElementConstructor,
    HTMLAttributes, 
    LabelHTMLAttributes, 
} from 'react' 

import { AriaLabelingProps } from '@/interfaces/Aria'
import { DOMProps, ValidationState } from '@/interfaces/Shared'

import {
    StyledFieldsetIcon,
    StyledFieldsetField,
    StyledFieldsetLabel,
    StyledFieldsetDescription,
    StyledFieldsetErrorMessage,
    StyledFieldsetSuccessMessage
} from './styles'
import { FieldEnum } from './constants'

export type FieldType = keyof typeof FieldEnum

interface FieldsetCompositionItemProps {
    children: ReactNode | string;
    element: ElementType;
    css: CSS; 
    test: string;
}
type FieldsetComponentProps = Partial<FieldsetCompositionItemProps>

export interface FieldsetProps extends DOMProps, AriaLabelingProps, FieldsetComponentProps {   
    labelElementType?: ElementType; 
    label?: ReactNode;
    description?: ReactNode;
    errorMessage?: ReactNode; 
    successMessage?: ReactNode; 
    validationState?: ValidationState | 'none';
    icon?: ReactNode | HTMLOrSVGElement;
}

export interface FieldAria {
    fieldProps: DOMProps & AriaLabelingProps;
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    descriptionProps: HTMLAttributes<HTMLElement>;
    errorMessageProps: HTMLAttributes<HTMLElement>;
    successMessageProps?: HTMLAttributes<HTMLElement>;
    iconProps?: HTMLAttributes<HTMLSpanElement>;
} 

export interface IFieldsetContext extends FieldsetProps, FieldAria {
    // fieldType: FieldType;
}

export type FieldsetState = Required<FieldsetProps>
export default FieldsetState

export type FieldsetLabelProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetLabel>
export type FieldsetIconProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetIcon>
export type FieldsetFieldProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetField>
export type FieldsetDescriptionProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetDescription>
export type FieldsetErrorMessageProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetErrorMessage>
export type FieldsetSuccessMessageProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetSuccessMessage>


export type FieldsetRootNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetLabelNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetFieldNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetIconNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetDescriptionNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetErrorMessageNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetSuccessMessageNode = ReactElement<{}, string | JSXElementConstructor<any>>