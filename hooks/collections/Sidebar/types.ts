
import { HTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react'
import { VariantProps, CSS } from 'stitches.config'

import { ReusableView } from '@react-stately/virtualizer'
import { Node, KeyboardDelegate } from '@react-types/shared'

import { AriaLabelingProps } from '@/interfaces/Aria'
import { DOMProps, Expandable } from '@/interfaces/Shared'
import { MultipleSelection } from '@/interfaces/Selection'
import { CollectionBase } from '@/interfaces/Collections'
import { StyledSidebarItem } from '@/components/Sidebar/styles'

/// last updated @ 4:22PM friday 

export interface SidebarProps<T> extends CollectionBase<T>, Expandable, MultipleSelection {
    id: string; 
    shouldFocusWrap?: boolean; 
}

export interface SidebarAria {
    navProps: HTMLAttributes<HTMLDivElement>;
    listProps: HTMLAttributes<HTMLDivElement>; 
}

export interface SidebarAriaOptions<T> extends AriaSidebarProps<T> {
    layout?: KeyboardDelegate; 
}

////////

export interface AriaSidebarProps<T> extends DOMProps, AriaLabelingProps {
    id: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-current'?: string;
    shouldFocusWrap?: boolean;
}

export interface SidebarItemProps<T> extends HTMLAttributes<HTMLElement> {
    item: Node<T>;
    level?: 1 | 2 | 3 | 4 | 5 | 6; 
}


export interface SidebarItemAria {
    listItemProps: HTMLAttributes<HTMLDivElement>;
    listItemLinkProps: AnchorHTMLAttributes<HTMLAnchorElement>;
}

////////

export interface SidebarSectionProps<T> {
    header: ReusableView<Node<T>,unknown>;
    reusableView: ReusableView<Node<T>, unknown>;
    children?: ReactNode; 
}



