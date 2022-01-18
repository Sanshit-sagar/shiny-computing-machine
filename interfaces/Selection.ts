import { Key } from 'react'
import { 
    PressEvent, 
    LongPressEvent 
} from './Event'
import { 
    Selection as SharedSelection,
    FocusStrategy, 
    SelectionMode, 
    SelectionBehavior 
} from './Shared'

export type Selection = SharedSelection

export interface SelectionManager {
    selectionMode: SelectionMode;
    disallowEmptySelection: boolean;
    selectionBehavior: SelectionBehavior;
    isFocused: boolean;
    focusedKey: Key;
    childFocusStrategy: FocusStrategy;
    selectedKeys: Set<Key>;
    rawSelection: 'all' | Set<Key>;
    isEmpty: boolean;
    isSelectAll: boolean;
    firstSelectedKey: Key | null;
    lastSelectedKey: Key | null;
    setSelectionBehavior: (selectionBehavior: SelectionBehavior) => void;
    setFocused: (isFocused: boolean) => void;
    setFocusedKey: (key: Key, childFocusStrategy: FocusStrategy) => void;
    isSelected: (key: Key) => boolean;
    extendSelection: (toKey: Key) => void;
    toggleSelection: (key: Key) => void;
    replaceSelection: (key: Key) => void;
    setSelectedKeys: (keys: Iterable<Key>) => void;
    clearSelection: () => void; 
    selectAll: () => void;
    toggleSelectAll: () => void;
    select: (key: Key, e: PressEvent | LongPressEvent | PointerEvent) => void; 
    isSelectionEqual: (selection: Set<Key>) => void;
    canSelectItem: (item: Key) => void;
}

export type MultipleSelection = {
    selectionMode?: SelectionMode;
    disallowEmptySelection?: boolean;
    selectedKeys?: 'all' | Iterable<Key>;
    defaultSelectedKeys?: 'all' | Iterable<Key>;
    onSelectionChange?: (keys: Selection) => any;
    disabledKeys?: Iterable<Key>; 
}

