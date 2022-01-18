import { ReactNode, ElementType, Key } from 'react'


export interface AccordionDatum {
    title: string;
    content: ReactNode; 
    prefix?: ReactNode;
    icon?: ReactNode; 
}

export interface AccordionProps {
    items: AccordionDatum[];
    icon?: ReactNode;
}

export interface AccordionContext {
    element?: ElementType;
    activeEventKey?: Key;
    children?: ReactNode;
    onToggle?: (key: Key) => void;
    icon?: ReactNode; 
}


export type AccordionItemRequiredProps = Required<{
    item: AccordionDatum; 
    eventKey: Key;
}>
export type AccordionItemOptionalProps = Partial<{
    isOpen: boolean; 
    onClick: () => void; 
    element: ElementType;
    icon: ReactNode;
    children: ReactNode; 
}>

export type AccordionItemProps = AccordionItemRequiredProps & AccordionItemOptionalProps

// Partial<Pick<AccordionItemProps, 'eventKey' | 'children' | 'element'>>
export interface AccordionCollapseProps {
    element?: ElementType;
    eventKey: Key;
    children?: ReactNode;
}

// Partial<Pick<AccordionItemProps, 'onClick' | 'eventKey' | 'children' | 'element'>>
export interface AccordionToggleProps {
    element?: ElementType;
    eventKey: Key;
    onClick?: (key: Key) => void;
    children?: ReactNode;
}