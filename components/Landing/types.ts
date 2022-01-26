import { ReactNode, ReactElement, JSXElementConstructor } from 'react'

export interface IShowcase {
    element: ReactElement<{}, string | JSXElementConstructor<any>>;
    name: string;
    description: string; 
    align?: 'start' | 'end' | 'center';
    icon?: ReactNode;
}