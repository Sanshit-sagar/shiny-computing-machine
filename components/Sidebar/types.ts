import { Key } from 'react'
import { SelectionManager } from '@react-stately/selection'
import { Node, Collection } from '@react-types/shared'


export type TreeState<T> = {
    collection: Collection<Node<T>>;
    disabledKeys: Set<Key>;
    expandedKeys: Set<Key>;
    selectionManager: SelectionManager;
    toggleKey: (key: Key) => void;
}

export type ISidebarContext<T> = TreeState<T> 
