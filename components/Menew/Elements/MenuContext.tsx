import React, { HTMLAttributes, MutableRefObject, useContext, Context, createContext } from 'react'
import { FocusStrategy } from '@react-types/shared'

export interface MenuContextValue extends HTMLAttributes<HTMLElement> {
    onClose?: () => void;
    closeOnSelect?: boolean;
    shouldFocusWrap?: boolean;
    autoFocus?: boolean | FocusStrategy; 
    ref?: MutableRefObject<HTMLUListElement>;
}

export const MenuContext: Context<MenuContextValue> = createContext<MenuContextValue>({
    
})

export const useMenuContext = (): MenuContextValue => {
    return useContext(MenuContext);
}