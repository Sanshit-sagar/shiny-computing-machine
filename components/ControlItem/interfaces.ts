import { ReactNode } from 'react'
import * as Radix from '@radix-ui/react-primitive'
import {
    Title,
    Description,
    ControlIcon as Icon
} from './styles'

export interface ControlItemProps {
    id: string | number; 
    icon: ReactNode | undefined;
    title: string;
    description: string;
    isDisabled: boolean;
    isRequired: boolean; 
    controlItem: ReactNode; 
}

export interface ExtendedInfoProps { 
    text?: string;
    isDisabled: boolean; 
    isRequired: boolean;
    isHovered: boolean;
    isFocused: boolean;
};

export interface IconProps extends ExtendedInfoProps { 
    icon: ReactNode | Element; 
}

export type ExtendedTitleProps = Radix.ComponentPropsWithoutRef<typeof Title> & ExtendedInfoProps
export type ExtendedDescriptionProps = Radix.ComponentPropsWithoutRef<typeof Description> & ExtendedInfoProps
export type ExtendedIconProps =  Radix.ComponentPropsWithoutRef<typeof Icon> & IconProps