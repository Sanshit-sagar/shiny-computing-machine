import { ElementType, JSXElementConstructor, ReactNode } from 'react'
import { VariantProps } from 'stitches.config'

import { 
    HoverEvents, 
    FocusEvents, 
    KeyboardEvents, 
    PressEvents 
} from '@/interfaces/Interactions'
import { DOMProps } from '@/interfaces/Shared'
import { StyledButtonBase } from './variants'

interface ButtonEventHandlerProps extends PressEvents, HoverEvents, FocusEvents, KeyboardEvents {}

export interface ButtonAriaProps {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-expanded'?: boolean;   // trigger buttons
    'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid'| 'dialog'; // trigger buttons
    'aria-controls'?: string;
    'aria-pressed'?: boolean;    // toggle buttons
}

export interface ButtonAsLinkProps {
    elementType: 'a';
    href: string; 
    target?: string;
    rel?: string;
    type?: never; 
}

export interface ButtonAsButtonProps {
    elementType: 'button';
    href?: never;
    target?: never;
    rel?: never;
    type?: 'button' | 'reset' | 'submit'; 
}

export interface GenericButtonProps<T> {
    elementType?: T | JSXElementConstructor<any>; // 'input' or 'div' 
    href: never;
    target: never;
    rel: never;
    type: never;
}

export interface SharedButtonProps {
    autoFocus?: boolean;
    children?: ReactNode; 
    isDisabled?: boolean;
    isLoading?: boolean; 
    excludeFromTabOrder?: boolean; 
    prefix?: ReactNode | HTMLOrSVGElement;
    suffix?: ReactNode | HTMLOrSVGElement;
}

export interface ButtonBaseProps extends DOMProps, ButtonEventHandlerProps, ButtonAriaProps, SharedButtonProps {}
export type DiscriminatedButtonProps<T> = ButtonAsLinkProps | ButtonAsButtonProps | GenericButtonProps<T>

export type ButtonVariantProps =  VariantProps<typeof StyledButtonBase> 

export type AriaButtonProps<T extends ElementType> = ButtonBaseProps & DiscriminatedButtonProps<T> & ButtonVariantProps
export type DefaultButtonProps = ButtonAsButtonProps & SharedButtonProps & ButtonVariantProps


export type ButtonProps<T extends ElementType> = AriaButtonProps<T>