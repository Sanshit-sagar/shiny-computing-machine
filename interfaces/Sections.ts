import { ReactNode, ReactElement } from 'react' 
import { ItemElement, ItemRenderer } from './Items'

export type SectionProps<T> = {
    title: ReactNode;
    items?: Iterable<T>;
    children: ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>; 
    'aria-label': string; 
}

export type SectionElement<T> = ReactElement<SectionProps<T>>