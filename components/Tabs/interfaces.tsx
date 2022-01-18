import { Key, ElementType } from "react";
import { Node, Collection } from '@react-types/shared'

import { SelectionManager } from '@react-stately/selection'
import { DOMProps, Orientation } from '@/interfaces/Shared'
import { AriaLabelingProps } from '@/interfaces/Aria'
import { CollectionChildren, ItemProps } from "../Select/interfaces"
import { Item } from '@react-stately/collections'


export interface TabListState<T> {
    selectedKey: Key;
    selectedItem: Node<T>;
    collection: Collection<Node<T>>;
    disabledKeys: Set<Key>;
    selectionManager: SelectionManager;
    setSelectedKey: (key: Key) => void; 
}

export interface AriaTabListProps<T> extends DOMProps, AriaLabelingProps {
    element?: ElementType;
    
    children: CollectionChildren<T>;
    items?: Iterable<T>;
    disabledKeys?: Iterable<Key>;
    selectedKey?: Key;
    defaultSelectedKey?: Key;
    onSelectionChange?: (key: Key) => void;
    keyboardActivation?: 'automatic' | 'manual'; // 'automatic'
    orientation?: Orientation;
    isDisabled?: boolean;
}

export interface TabProps<T> {
    key: Key; 
}

export interface TabPanelProps<T> {
    state: TabListState<T>;   
}

export type ITabsState<T> = {
    state: TabListState<T>;
    dispatch: (action: TabsAction<T>) => void;
    activeIndex: Key;
    orientation: Orientation;
    isDisabled: boolean; 
    tabsCount: number; 
}
export type ITabsContext<T> = ITabsState<T> & {
    dispatch: any;
}

export type NextAction = { type: 'next' }
export type PrevAction = { type: 'prev' }
export type JumpAction = { 
    type: 'jump'; 
    jumpToIndex: number; 
    jumpToKey: Key; 
} 
export type ToggleAction<T> = { 
    type: 'toggle'; 
    key: keyof ITabsState<T>; 
    value: ITabsState<T>[keyof ITabsState<T>]; 
}

export type TabsAction<T> = NextAction | PrevAction | JumpAction | ToggleAction<T>
