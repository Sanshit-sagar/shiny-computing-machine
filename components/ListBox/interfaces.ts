import { ReactNode, RefObject, HTMLAttributes } from 'react'
import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'
import type { AriaListBoxOptions } from '@react-aria/listbox'

export interface ListBoxProps extends AriaListBoxOptions<unknown> {
    listBoxRef?: RefObject<HTMLUListElement>;
    state: ListState<unknown>; 
}

export interface IOptionContext {
    labelProps: HTMLAttributes<HTMLElement>;
    descriptionProps: HTMLAttributes<HTMLElement>;
}

export interface OptionProps {
    item: Node<unknown>;
    state: ListState<unknown>; 
}

export type LabelProps = {
    children: ReactNode;
}

export interface DescriptionProps {
    children: ReactNode;
}

export interface SectionProps {
    state: ListState<unknown>;
    section: Node<unknown>; 
}

// export interface AriaListBoxOptions<T> {
//     isVirtualized: boolean;
//     keyboardDelegate: KeyboardDelegate;
//     shouldUseVirtualFocus: boolean;
//     shouldSelectOnPressUp: boolean;
//     shouldFocusOnHover: boolean;
//     label: ReactNode;
//     autoFocus: boolean | FocusStrategy;
//     shouldFocusWrap: boolean;
//     items: Iterable<T>;
//     disabledKeys: Key;
//     selectionMode: SelectionMode;
//     disallowEmptySelection: boolean;
//     selectedKeys: 'all' | Iterable<Key>;
//     defaultSelectedKeys: 'all' | Iterable<Key>;
//     onSelectionChange: (keys: Selection) => any;
//     onFocus: (e: FocusEvent) => void;
//     onBlur: (e: FocusEvent) => void;
//     onFocusChange: (isFocused: boolean) => void;
//     id: string;
//     'aria-label': string;
//     'aria-labelledby': string;
//     'aria-describedby': string;
//     'aria-details': string; 
// }


// const slideUpAndFade = keyframes({
    // '0%': { 
        // opacity: 0, 
        // transform: 'translateY(2px)' 
    // },
    // '100%': { 
        // opacity: 1, 
        // transform: 'translateY(0)' 
    // },
//   });
  
// const slideRightAndFade = keyframes({
    // '0%': { 
        // opacity: 0, 
        // transform: 'translateX(-2px)' 
    // },
    // '100%': { 
        // opacity: 1, 
        // transform: 'translateX(0)' 
    // },
//   });
  
// const slideDownAndFade = keyframes({
    // '0%': { 
        // opacity: 0, 
        // transform: 'translateY(-2px)' 
    // },
    // '100%': { 
        // opacity: 1, 
        // transform: 'translateY(0)' 
    // },
//   });
  
// const slideLeftAndFade = keyframes({
    // '0%': { 
        // opacity: 0, 
        // transform: 'translateX(2px)' 
    // },
    // '100%': { 
        // opacity: 1, 
        // transform: 'translateX(0)' 
    // },
// });