import { 
    Key,
    ReactNode, 
    ReactElement, 
    ElementType,
    JSXElementConstructor 
} from 'react'

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

// TODO: add press event props below (onPressUp, onPressDown, onPressChange(isPressed: boolean) => void) etc.. 
export interface AriaBreadcrumbItemProps {
    id?: string; 
    isCurrent?: boolean;
    isDisabled?: boolean;
    children: ReactNode | string; 
    elementType?: string;    // def = 'a'
    onPress?: () => void; 
    href?: string; 
};