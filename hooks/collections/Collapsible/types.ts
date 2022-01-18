import { HTMLAttributes } from 'react' 
import { Node } from '@react-types/shared'

export type CollapsibleProps<T> = {
    item: Node<T>
}

export type CollapsibleAria = {
    collapsibleProps: HTMLAttributes<HTMLElement>;
}

export type CollapsibleItemAria = {
    buttonProps: HTMLAttributes<HTMLButtonElement>;
    regionProps: HTMLAttributes<HTMLElement>;
}

export type CollapsibleItemProps<T> = {
    item: Node<T>;
}