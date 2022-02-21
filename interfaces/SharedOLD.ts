import { Key } from 'react'


export type variant = 'a' | 'b'

export type Density = 'compact' | 'regular' | 'spacious'
export type Orientation = 'horizontal' | 'vertical'
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL'
export type ValidationState = 'valid' | 'invalid'

export type Alignment = 'start' | 'end'
export type LabelPosition = 'top' | 'side'

export type FocusStrategy = 'first' | 'last'
export type SelectionBehavior = 'replace' | 'toggle'
export type SelectionMode = 'none' | 'single' | 'multiple'
export type Selection = 'all' | Set<Key>

export type Axis = 'top' | 'left' | 'bottom' | 'right'
export type PlacementAxis = Axis | 'center'

export type PointerType = 'mouse' | 'pen' | 'touch' | 'virtual' | 'keyboard'

export interface DOMProps {
    id?: string;
}

export interface FocusableDOMProps {
    autoFocus?: boolean; 
    excludeFromTabOrder?: boolean;
}

export interface ReadableDOMProps {
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
}

export interface LabelableDOMProps {
    label?: string; 
    description?: string;
    errorMessage?: string; 
}

export interface InteractionProps {
    isHovered?: boolean;
    isPressed?: boolean;
    isFocused?: boolean;
}

export interface ValidatableDOMProps {
    validationState?: ValidationState;
}

export interface OpenableDOMProps {
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

////////////////

export interface RangeValue<T> {
    start: T;
    end: T; 
}

export interface ValueBase<T, C = T> {
    value?: T,
    defaultValue?: T,
    onChange?: (value: C) => void
}

export interface SelectionBase<T, C = T> {
    isSelected?: T,
    defaultSelected?: T,
    onChange?: (value: C) => void
}


export type Expandable = {
    expandedKeys?: Iterable<Key>;
    defaultExpandedKeys?: Iterable<Key>;
    onExpandedChange?: (keys: Set<Key>) => void; 
}

/////////////// METHOD 1 - Interfaces, String Literals, Extract from Mapped Type

type NameableStateVariable<Key extends string, ControlType> = { data: { [key in Key]: ControlType; } }
type NameableSetStateAction<Key extends string, ControlType> = { data: { [key in Key]: (value: ControlType) => void; } }
export type Extractor<Type> = Type extends { data: object } ? Type['data'] : {}

type DefaultPrefixedStr<Str extends string> = `default${Capitalize<Str>}`
type OnChangeOreoedStr<Str extends string> = `on${Capitalize<Str>}Change`
type MappedControlledState<N extends string, T> = NameableStateVariable<N, T> & NameableSetStateAction<OnChangeOreoedStr<N>, T> 
type MappedUnControlledState<N extends string, T> = NameableStateVariable<DefaultPrefixedStr<N>, T> 

export type UnControlledState<N extends string, T> = Extractor<MappedUnControlledState<N, T>>
export type ControlledState<N extends string, T> = Extractor<MappedControlledState<N, T>>
export type ControllableState<T = string, N extends string = 'value'> = (
        Partial<UnControlledState<N,T>> & ControlledState<N, T> 
    |   UnControlledState<N, T> & Partial<ControlledState<N, T>>
)

/** USAGE 1: ControllableState<DATA_TYPE, 'keyName'> -> Type = DATA_TYPE, key = 'keyName' 
const valueControllerState: ControllableState<boolean, 'selected'> = {
    selected: false,
    defaultSelected: false,
    onSelectedChange: (value: boolean) => console.log('hi')
} */

/**  USAGE 2: ControllableState<DATA_TYPE> -> key = "value" 
const valueControllerState: ControllableState<boolean> = {
    value: false,
    defaultValue: false,
    onValueChange: (value: boolean) => console.log('hi')
} */

// USAGE 3: ControllableState -> Key = "value", Type = string   
const valueControllerState: ControllableState = {
    value: 'false',
    defaultValue: 'false',
    onValueChange: (value: string) => console.log('hi')
} 

////////////////////////// Method 2 - Intersection Mapped Types & String Literals


type Evaluator<T, C = T> = { // DOES THIS WORK?
    [Property in keyof T]: C; 
}
type Setter<T, C = void> = {
    [Property in keyof T as `on${Capitalize<string & Property>}Change`]: (value: C) => void;
};

interface SetterInput { 
    selection: string 
}
type OnValueChanger = Evaluator<SetterInput, boolean> | Setter<SetterInput, boolean>

const selectionControllerState = { // FIX THIS
    selected: false,
    defaultSelected: false,
    onSelectedChange: (selected: boolean) => console.log('hi')
}