import { CSS, VariantProps } from '../../stitches.config'
import { StyledToggleButton } from './styles'

import { ToggleButtonProps } from '@/components/Button/types'
import { ValueBase } from '@/interfaces/Shared'


type CssProps = { css?: CSS };
type ComponentProps = React.ComponentProps<typeof StyledToggleButton>
type BtnVariantProps = VariantProps<typeof StyledToggleButton>
type ToggleProps = ComponentProps & BtnVariantProps & CssProps

type SelectionMode = 'none' | 'single' | 'multiple'
type SelectionBehavior = 'toggle' | 'replace'
type FocusStrategy = 'first' | 'last' 

export interface MultipleSelectionProps {
    selectionBehaviour?: SelectionBehavior;
    allowDuplicateSelectionEvents?: boolean;
    selectionMode?: SelectionMode;
    disallowEmptySelection?: boolean;
    selectedKeys?: 'all' | Iterable<React.Key>;
    defaultSelectedKeys?: 'all' | Iterable<React.Key>;
    onSelectionChange?: (value: Set<React.Key>) => void; 
    disabledKeys?: 'all' | Iterable<React.Key>;
}

export interface MultipleSelectionState {
    selectionMode?: SelectionMode;
    selectionBehavior?: SelectionBehavior;
    disallowEmptySelection?: boolean;
    selectedKeys?: Set<React.Key> | 'all';
    disabledKeys?: Set<React.Key>;
    isFocused?: boolean;
    focusedKey?: React.Key;
    childFocusStrategy?: FocusStrategy;
    setSelectionBehavior?: (selectionBehavior: SelectionBehavior) => void;
    setSelectedKeys?: (selectedKeys: Set<React.Key> | 'all') => void;
    setFocused?: (isFocused: boolean) => void;
    setFocusedKey?: (key: React.Key, child: FocusStrategy) => void; 
}