import { CSS, VariantProps } from 'stitches.config'
import { ElementType, ReactNode } from 'react'
import { StyledCardWrapper } from './styles'
import type { Scope } from '@/hooks/createContextScope'

export interface CardComposition {
    Header?: React.FC<{ className?: string }>;
    Body?: React.FC<{ className?: string }>;
    Heading?: React.FC<{ className?: string }>;
    Description?: React.FC<{ className?: string }>;
}


export interface CardProps extends CardComposition, VariantProps<typeof StyledCardWrapper> {
    element?: ElementType;
    children?: ReactNode;
    title?: string; 
    subtitle?: string; 
    className?: string;
    css?: CSS;
}

export type ICardContext = {
    
}

export type ScopedProps<P> = P & { 
    __scopeCard?: Scope; 
}
