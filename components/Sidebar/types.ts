import { Key } from 'react'
import { SelectionManager } from '@react-stately/selection'
import { Node, Collection } from '@react-types/shared'

import { VariantProps } from 'stitches.config'
import { StyledSidebarItem } from './styles'


export type TreeState<T> = {
    collection: Collection<Node<T>>;
    disabledKeys: Set<Key>;
    expandedKeys: Set<Key>;
    selectionManager: SelectionManager;
    toggleKey: (key: Key) => void;
}

export type ISidebarContext<T> = TreeState<T> 

export type SidebarItemVariants = VariantProps<typeof StyledSidebarItem>
export type SidebarItemLevel = Omit<SidebarItemVariants, 'isSelected' | 'isDisabled' | 'isExpanded' | 'hasChildNodes'>