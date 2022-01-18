import { 
    ReactNode, 
    ReactElement, 
    ReactEventHandler, 
    ClipboardEventHandler, 
    JSXElementConstructor 
} from 'react'

export type FocusStrategy = 'first' | 'last'
export type InputMode = 'search' | 'url' | 'text' | 'number'

export type ValidationColor = 'red' | 'green' | 'none';
export type ValidationState = 'valid' | 'invalid';

export type SearchableItem = {
    id: string; 
    avatar: string;
    label: string;
    description: string; 
}
export type SearchableSection = {
    index: number;
    title: string;
    items: SearchableItem[]; 
}

export type MenuTriggerAction = 'focus' | 'manual' | 'input'

export type SearchFieldProps = {
    children: CollectionChildren<SearchableSection>; 
} & Partial<{
        hideLabel: boolean;         // CUSTOM
        items: SearchableSection[]; // CUSTOM
        id: string;
        label: string;
        icon: JSX.Element;
        placeholder: string;
        description: ReactNode;
        errorMessage: ReactNode;
        isLoading: boolean;
        isRequired: boolean;
        isDisabled: boolean;
        autoFocus: boolean;
        defaultOpen: boolean; 
        allowsCustomValues: boolean;
        disallowEmptySelection: boolean;
        excludeFromTabOrder: boolean;
        focusStrategy:  FocusStrategy;
        menuTrigger: MenuTriggerAction;
        type: 'search';
        inputMode: 'search';
        maxLength: number; 
        autoComplete: string; 
        value: string;
        onChange: (value: string) => void; 
        defaultValue: string; 
        validationState: ValidationState;
        onLoadMore: () => void;
        onSubmit: (value: string) => void;
        onSelect: (event: ReactEventHandler<HTMLInputElement>) => void;
        onCopy: (event: ClipboardEventHandler<HTMLInputElement>) => void;
        onPaste: (event: ClipboardEventHandler<HTMLInputElement>) => void; 
        onClear: () => void; 
        selectedKey: string; 
        'aria-autocomplete': 'list'; // 'list' | 'inline' | 'both' | 'none'
        'aria-describedby': string;
        'aria-label': string; 
        'aria-labelledby': string;
        'aria-details': string; 
        'aria-errormessage': string; 
        'aria-haspopup': 'true'; // 'false' | 'true' | 'menu' | 'listbox' | 'grid' | 'tree' | 'dialog' 
        'aria-activedescendent': string;
 }>;

export type SearchFieldPropsKey = keyof SearchFieldProps;
export type SearchFieldPropsValue = SearchFieldProps[keyof SearchFieldProps];



type ItemProps<T> = ThisType<T>;
type CollectionElement<T> = ReactElement<ItemProps<T>, string | JSXElementConstructor<any>>;
type CollectionChildren<T> = CollectionElement<T>[]; 

// Type 'SearchableSection[]' is not assignable to type 'CollectionElement<SearchableSection>[]'.
// Type 'SearchableSection' is not assignable to type 'CollectionElement<SearchableSection>'.
//   Type 'SearchableSection' is missing the following properties from type 'ReactElement<ItemProps<SearchableSection>, string | JSXElementConstructor<any>>': type, props, key