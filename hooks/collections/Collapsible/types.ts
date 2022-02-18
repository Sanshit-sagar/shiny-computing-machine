import { HTMLAttributes, Key } from 'react' 
import { Node } from '@react-types/shared'
import { CollectionBase, Expandable } from '@react-types/shared'

export interface AccordionProps<T> extends CollectionBase<T>, Expandable {
    
}

export type AccordionItemProps<T> = {
    item: Node<T>;
}

export type AccordionAria = {
    accordionProps: HTMLAttributes<HTMLElement>;
}

export type AccordionItemAria = {
    buttonProps: HTMLAttributes<HTMLButtonElement>;
    regionProps: HTMLAttributes<HTMLElement>;
}