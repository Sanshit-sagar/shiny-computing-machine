import { ReactNode } from 'react'

export interface IShowcase {
    element: ReactNode;
    name: string;
    description: string; 
    align?: 'start' | 'end' | 'center';
}