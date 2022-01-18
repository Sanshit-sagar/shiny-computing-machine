import React, { ReactNode } from 'react'
import { CollectionBase, CollectionChildren } from '@react-types/shared' 
import { OverlayProps } from '@/components/Popover/interfaces' 

export type MenuSection = {
    name: string;
    children: MenuItem[];
}

export type MenuItem = {
    icon?: string | React.ReactNode; 
    name?: string;
    children?: (typeof React.Children)[];
    shortcut?: string;
}

export interface MenuProps<T> extends CollectionBase<T> {
    children: CollectionChildren<T>;
    items: Iterable<T>;
    disabledKeys: Set<React.Key>;
}

type DefaultOverlayProps = Partial<Omit<OverlayProps, 'children'>>
export interface MenuTriggerProps extends DefaultOverlayProps {
    children: ReactNode; 
}