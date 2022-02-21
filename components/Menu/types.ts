import { Key, ReactNode, MutableRefObject, HTMLAttributes } from 'react'

import { DOMProps } from '@/interfaces/Shared'
import { TreeState } from '@react-stately/tree'
import { Node, Selection } from '@react-types/shared'
import { CollectionChildren } from "@/interfaces/Collections"

export type Alignment = 'start' | 'end';
export type FocusStrategy = 'first' | 'last';
export type MenuTriggerType = 'press' | 'longpress';
export type SelectionMode = 'none' | 'single' | 'multiple';
export type Direction = 'bottom' | 'right' | 'top' | 'left' | 'start' | 'end';


export interface MenuTriggerState {
    focusStrategy: FocusStrategy;
    isOpen: boolean;
    open: (focusStrategy: FocusStrategy | null) => void;
    toggle: (focusStrategy: FocusStrategy | null) => void;
    close: () => void;
}

export interface MenuTriggerAriaProps {
    type: 'menu' | 'listbox';
    isDisabled?: boolean;
    menuTriggerType: MenuTriggerType; 
}

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
    'aria-label'?: string; 
    'aria-labelledBy'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string; 
}

export interface MenuProps<T> extends DOMProps, AriaOptions {
    // keyboardDelegate: KeyboardDelegate;
    children: CollectionChildren<T>;
    onAction?: (key: Key) => void;
    onClose?: () => void
    items?: Iterable<T>;
    disabledKeys?: Iterable<Key>;
    selectionMode?: SelectionMode;
    disallowEmptySelection?: boolean;
    selectedKeys?: Iterable<any> | 'all';
    defaultSelectedKeys?: Iterable<any> | 'all';
    onSelectionChange?: (keys: Selection) => any;
    isVirtualized?: boolean;
    autoFocus?: boolean | FocusStrategy;
    shouldFocusWrap?: boolean;
}

export type MenuItemProps<T> = {
    item: Node<T>;
    state: TreeState<T>;
    isVirtualized?: boolean; 
    onAction?: (key: Key) => void;
}

export type MenuSectionProps<T> = {
    item: Node<T>;
    state: TreeState<T>;
    onAction: (key: Key) => void; 
}

export interface MenuPopupProps {
    autoFocus?: boolean | FocusStrategy;
    onClose?: () => void; 
}

export interface IMenuContext extends HTMLAttributes<HTMLElement> {
    onClose?: () => void,
    closeOnSelect?: boolean,
    shouldFocusWrap?: boolean,
    autoFocus?: boolean | FocusStrategy,
    ref?: MutableRefObject<HTMLUListElement>
}
