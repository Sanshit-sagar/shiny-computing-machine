import { ReactNode, ReactElement } from 'react'

export type ItemProps<T> = {
    children: ReactNode; 
    title?: ReactNode; 
    textValue?: string;
    childItems?: Iterable<T>;
    hasChildItems?: boolean;
    'aria-label'?: string; 
}

export type ItemElement<T> = ReactElement<ItemProps<T>>
export type ItemRenderer<T> = (item: T) => ItemElement<T>




