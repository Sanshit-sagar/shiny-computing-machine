import { Key, Dispatch, SetStateAction } from "react";

import { Node, Collection } from '@react-types/shared'
import { SelectionManager } from '@react-stately/selection'
import { CollectionChildren } from '@/interfaces/Collections'

export interface AccordionRootProps<T> {
    id?: string; 
    items?: Iterable<T>; 
    children: CollectionChildren<T>; 
    disabledKeys?: Iterable<Key>;
    selectedKey?: Key | null;
    defaultSelectedKey?: Key;
    onSelectionChange?: (key: Key) => any; 
    filter?: (nodes: Iterable<Node<T>>) => Iterable<Node<T>>
}

export interface AccordionState<T> {
    selectedKey?: Key;
    selectedItem?: Node<T>;
    collection?: Collection<Node<T>>;
    disabledKeys?: Set<Key>;
    selectionManager?: SelectionManager;
    setSelectedKey?: (key: Key) => void;
}

export interface IAccordionContext<T> extends AccordionState<T>, Pick<Collection<Node<T>>, 'size'> {
    activePanelDims?: DOMRect;
    setActivePanelDims?: Dispatch<SetStateAction<Partial<DOMRect>>>; 
}

export interface IAccordionItemContext<T> extends Node<T> {
    key: Key;
    isSelected: boolean; // change to isExpanded
    isDisabled: boolean;

}