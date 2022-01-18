import React, { useMemo, useContext, createContext, ReactNode, HTMLAttributes } from 'react'
import { mergeProps } from '@react-aria/utils'

type SlotStyleProps = {
    end?: HTMLAttributes<HTMLElement>,
    icon?: HTMLAttributes<HTMLElement>,
    description?: HTMLAttributes<HTMLElement>,
    text?: HTMLAttributes<HTMLElement>,
    keyboard?: HTMLAttributes<HTMLElement> 
}

interface SlotProviderProps {
    slots: SlotStyleProps;
    children: ReactNode; 
}

let SlotContext = createContext(null)

export const SlotProvider = ({ slots = {}, children }: SlotProviderProps) => {
    const parentSlots = useContext(SlotContext) || {}

    const value = useMemo(() => Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce((o, p) => ({
            ...o,
            [p]: mergeProps(parentSlots[p] || {}, slots[p] || {})
    }), {}), [parentSlots, slots])

    return <SlotContext.Provider value={value}> {children} </SlotContext.Provider>
}

export const ClearSlots = (props) => {
    let {children, ...otherProps} = props;
    let content = children;

    if (React.Children.toArray(children).length <= 1) {
      if (typeof children === 'function') { 
        content = React.cloneElement(React.Children.only(children), otherProps);
      }
    }

    return (
        <SlotContext.Provider value={{ }}>
            {content}
        </SlotContext.Provider>
    );
}