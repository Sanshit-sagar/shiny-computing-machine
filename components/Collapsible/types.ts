import { HTMLAttributes, ReactNode } from 'react' 
import { Node } from '@react-types/shared'
import { CollectionBase } from '@/interfaces/Collections'
import { DOMProps, Expandable } from '@/interfaces/Shared'
import { TreeState } from '@react-stately/tree' 

export interface CollapsibleProps<T> extends DOMProps, Expandable, CollectionBase<T> {
    
}

export type CollapsibleItemProps<T> = {
    item: Node<T>;
    state: TreeState<T>;
}

export type CollapseTriggerProps<T> = {

}


export type CollapsibleAria = {
    collapsibleProps: HTMLAttributes<HTMLElement>;
}

export type CollapsibleItemAria = {
    buttonProps: HTMLAttributes<HTMLButtonElement>;
    regionProps: HTMLAttributes<HTMLElement>;
}


export type ICollapsibleContext<T> = {

}