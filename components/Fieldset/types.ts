import { ElementType, HTMLAttributes, ReactNode, LabelHTMLAttributes, ReactElement, JSXElementConstructor } from 'react' 
import { CSS, VariantProps } from 'stitches.config' 
import { DOMProps, ValidationState } from '@/interfaces/Shared'
import { AriaLabelingProps } from '@/interfaces/Aria'
import { FieldEnum } from './constants'
import {
    StyledFieldsetErrorMessage 
} from './styles'

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
    validationState: ValidationState;
    icon?: ReactNode | HTMLOrSVGElement;
}

export interface FieldAria {
    fieldProps: DOMProps & AriaLabelingProps;
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    descriptionProps: HTMLAttributes<HTMLElement>;
    errorMessageProps: HTMLAttributes<HTMLElement>;
    iconProps?: HTMLAttributes<HTMLSpanElement>;
} 

export interface IFieldsetContext extends FieldsetProps, FieldAria {
    // fieldType: FieldType;
}

export type FieldsetState = Required<FieldsetProps>
export default FieldsetState

export type FieldsetDescriptionProps = FieldsetComponentProps
export type FieldsetErrorMessageProps = FieldsetComponentProps & VariantProps<typeof StyledFieldsetErrorMessage>
export type FieldsetLabelProps = FieldsetComponentProps
export type FieldsetIconProps = FieldsetComponentProps


export type FieldsetRootNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetLabelNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetIconNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetDescriptionNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type FieldsetErrorMessageNode = ReactElement<{}, string | JSXElementConstructor<any>>