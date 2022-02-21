import { Key, ReactNode } from 'react'

import { Node } from '@react-types/shared'
import { TreeState } from '@react-stately/tree'

import { DOMProps } from "@/interfaces/Shared"
import { CollectionChildren } from "@/interfaces/Collections"
import { Selection } from '@react-types/shared'

export type FocusStrategy = 'first' | 'last'
export interface MenuTriggerState {
    focusStrategy: FocusStrategy;
    isOpen: boolean;
    open: (focusStrategy: FocusStrategy | null) => void;
    toggle: (focusStrategy: FocusStrategy | null) => void;
    close: () => void;
}

export type MenuTriggerType = 'press' | 'longpress'
export interface MenuTriggerAriaProps {
    type: 'menu' | 'listbox';
    isDisabled?: boolean;
    menuTriggerType: MenuTriggerType; 
}

export type Alignment = 'start' | 'end';
export type Direction = 'bottom' | 'right' | 'top' | 'left' | 'start' | 'end';
export interface MenuTriggerProps {
    trigger?: MenuTriggerType;
    align?: Alignment;
    direction?: Direction;
    closeOnSelect?: boolean;
    shouldFlip?: boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpen?: (isOpen: boolean) => void; 
}

export type MenuButtonProps = MenuTriggerProps & { 
    label: string; 
    children: ReactNode;
    isDisabled?: boolean;
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export interface AriaOptions {
    'aria-label': string; 
    'aria-labelledBy': string;
    'aria-describedby': string;
    'aria-details': string; 
}

export type SelectionMode = 'none' | 'single' | 'multiple';
export interface AriaMenuOptions<T> extends DOMProps, Partial<AriaOptions> {
    onClose: () => void
    // keyboardDelegate: KeyboardDelegate;
    children: CollectionChildren<T>;
    isVirtualized?: boolean;
    autoFocus?: boolean | FocusStrategy;
    shouldFocusWrap?: boolean;
    onAction?: (key: Key) => void;
    items?: Iterable<T>;
    disabledKeys?: Iterable<Key>;
    selectionMode?: SelectionMode;
    disallowEmptySelection?: boolean;
    selectedKeys?: Iterable<any> | 'all';
    defaultSelectedKeys?: Iterable<any> | 'all';
    onSelectionChange?: (keys: Selection) => any;
}

export type MenuItemProps<T> = {
    key: Key; 
    item: Node<T>;
    state: TreeState<T>;
    isDisabled?: boolean;
    isSelected?: boolean;
    closeOnSelect?: boolean;
    isVirtualized?: boolean;
    onAction?: (key: Key) => void;
    onClose?: () => void;
}


export type MenuSectionProps<T> = {
    section: Node<T>;
    state: TreeState<T>;
    onAction: (key: Key) => void; 
}

export interface MenuPopupProps {
    autoFocus?: boolean | FocusStrategy;
    onClose?: () => void; 
}