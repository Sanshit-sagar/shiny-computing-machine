import { HTMLAttributes, MutableRefObject, ReactElement, ElementType, JSXElementConstructor, ReactNode } from 'react'

import { CSS, VariantProps } from 'stitches.config'
import { Nullable } from '@/interfaces/Guards'
import { OverlayTriggerState } from '@react-stately/overlays'
import { StyledContent } from './styles'

export type CloseType = 'x' | 'cancel' | 'confirm' 
export type UnInitCloseType = CloseType | 'na'

export type DialogVariant = Pick<VariantProps<typeof StyledContent>, 'variant'>


export type DialogProps = {
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: boolean;
    children: ReactNode;
    title?: string | ReactNode; 
    subtitle?: string | ReactNode; 
    trigger?: ReactNode | string; 
    css?: CSS; 
    variant?: DialogVariant; 
    onAction?: (mutation: CloseType) => void;
}

type StylableDialogSubComponent = { 
    children?: ReactNode; 
    css?: CSS;
    element?: ElementType<any>; 
}

export type DialogTitleProps = StylableDialogSubComponent & { titleProps?: HTMLAttributes<HTMLElement>; }
export type DialogSubtitleProps = StylableDialogSubComponent 
export type DialogBodyProps = StylableDialogSubComponent & { titleProps?: HTMLAttributes<HTMLElement>; }
export type DialogTriggerProps = StylableDialogSubComponent
export type DialogOverlayProps = StylableDialogSubComponent
export type DialogCloseButtonProps = StylableDialogSubComponent

export type IDialogContext = Nullable<{
    titleProps: HTMLAttributes<HTMLElement>;
    openButtonRef: MutableRefObject<HTMLButtonElement>;
    openButtonProps: HTMLAttributes<HTMLButtonElement>;
    state: OverlayTriggerState;
    children: ReactNode;
    title: string | ReactNode; 
    subtitle: string | ReactNode; 
    trigger: ReactNode | string; 
    variant: 'success' | 'danger' | 'warning' | 'primary' | 'secondary' | 'info';
    onAction: (mutation: CloseType) => void; 
    onClose: () => void;
    isOpen: boolean;
    isDismissible: boolean;
}>

export type DialogBodyNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type DialogTitleNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type DialogSubtitleNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type DialogOverlayNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type DialogTriggerNode = ReactElement<{}, string | JSXElementConstructor<any>>
export type DialogActionNode = ReactElement<{}, string | JSXElementConstructor<any>>


export type DialogActionProps = {
    children: ReactNode;
    element?: ElementType<any>;
    onAction?: (event) => void;
    variant?: 'close' | 'cancel' | 'confirm' | 'submit';
    intent?: 'success' | 'danger' | 'warning' | 'primary' | 'secondary';
    css?: CSS; 
}