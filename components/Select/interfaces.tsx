import React, { Key, ReactNode } from 'react'
import Selection from '@react-stately/selection'


export type ValidationState = 'valid' | 'invalid';
export type VariantType = 'nameOnly' | 'withDescription' | 'withAvatar'
export type FocusStrategy = 'first' | 'last';

export interface SelectableItem {
    textValue: string;
    id: string; 
    label: string;
    description: string;
    avatar: string; 
    icon?: React.ReactNode; 
}

export interface SelectableSection {
    title: string;
    index: number; 
    items: SelectableItem[]; 
}

export interface SelectState<T> {
    id?: string; 
    name: string; 
    label: string;
    items: T[];
    icon: ReactNode; 
    description?: string;
    errorMessage?: string;
    disabledKeys?: string[];
    showAvatar?: boolean;
    showDescription?: boolean; 
    variant?: VariantType; 
    height: '1' | '2'; 
    isLoading?: boolean;
    onLoadMore?: () => any;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean; 
    defaultOpen?: boolean;
    autoFocus?: boolean; 
    validationState?: ValidationState;
    placeholder?: string; 
    disallowEmptySelection?: boolean;
    defaultSelectedKey?: string;
    selectedKey?: string;
    focusStrategy: FocusStrategy;
    onSelectionChange?: (key: Key) => any; 
    excludeFromTabOrder?: boolean;
    children: CollectionChildren<SelectableSection>;  
};

// export type SelectStateKey = keyof SelectState;
// export type SelectStateValue = SelectState[keyof SelectState];

// export interface SelectInstanceProps {
//     state: SelectState;
//     update: (key: SelectStateKey, value: SelectStateValue) => void; 
// }


////////////////////////////////
//// From the React Aria API 
////////////////////////////

export interface ItemProps<T> {
    children: React.ReactNode | null;
    title: React.ReactNode | null;
    textValue: string;
    childItems: Iterable<T>;
    hasChildItems: boolean;
    'aria-label': string; 
}

type ItemElement<T> = React.ReactElement<ItemProps<T>>;
type ItemRenderer<T> = (item: T) => ItemElement<T>; 

export interface SectionProps<T> {
    children: ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>;
    title: React.ReactNode;
    items: Iterable<T>; 
    'aria-label': string; 
}

type SectionElement<T> = React.ReactElement<SectionProps<T>>;
type CollectionElement<T> = SectionElement<T> | ItemElement<T>

export type CollectionChildren<T> = 
                    | CollectionElement<T>
                    | CollectionElement<T>[]
                    | ((item: T) => CollectionElement<T>)


// export interface SelectState<T> {
//     isFocused: boolean;
//     selectedKey: Key;
//     selectedItem: Node<T>;
//     collection: Collection<Node<T>>;
//     disabledKeys: Set<Key>;
//     selectionManager: SelectionManager;
//     focusStrategy: FocusStrategy;
//     isOpen: boolean;
//     setFocused: (isFocused: boolean) => void;
//     setSelectedKey: (key) => void;
//     open: (focusStrategy: FocusStrategy | null) => void; 
//     toggle: (focusStrategy: FocusStrategy | null) => void; 
//     close: () => void;
// }