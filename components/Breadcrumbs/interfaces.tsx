import { 
    Key,
    ReactNode, 
    ReactElement, 
    ElementType,
    JSXElementConstructor 
} from 'react'
import { strEnum } from '@/interfaces/Guards'

export type BreadcrumbElement = ReactElement<any, string | JSXElementConstructor<any>>

type ItemProps<T> = {
    children: ReactNode;
    title: ReactNode; 
    textValue: string; 
    childItems: Iterable<T>; 
    hasChildItems: boolean; 
}

export interface AriaBreadcrumbProps {
    id?: string;
    children: ReactElement<ItemProps<string>>[];
    isDisabled?: boolean;
    onPress?: (key: Key) => void;
    element?: ElementType;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string; 
}


export const Separators = strEnum([ 'CHEVRON' , 'ARROW', 'TRIANGLE', 'CARET', 'THICK_ARROW', 'SLASH' ])
export type Separator = keyof typeof Separators


export interface AriaBreadcrumbItemProps {
    id?: string; 
    isCurrent?: boolean;
    isDisabled?: boolean;
    children: ReactNode | string; 
    elementType?: string;    // def = 'a'
    onPress?: () => void; 
    href?: string; 
    icon?: Separator;
    element: ElementType<any>;
};