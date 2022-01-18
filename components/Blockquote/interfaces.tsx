import React, { Key, ReactNode } from 'react'
import { CSS, VariantProps } from '../../stitches.config'
import { StyledBlockquote } from './Styles'

type BlockquoteHTMLProps = React.ComponentProps<typeof StyledBlockquote>
type BlockquoteVariantProps = VariantProps<typeof StyledBlockquote>
type BlockquoteCSSProps = { css?: CSS }

type BlockquoteOwnProps = { 
    element?: React.ElementType; 
    children?: ReactNode; 
    quote: Quote; 
}

export type BlockquoteProps = BlockquoteHTMLProps & BlockquoteVariantProps & BlockquoteOwnProps & BlockquoteCSSProps


export interface Quote {
    id: Key;
    quote: string;
    author?: string;
}

export interface IBlockquoteContext {
    activeQuote: Quote;
    setActiveQuote: (quote: Quote) => void; 
    quotes: Quote[]; 
    setQuotes: (quotes: Quote[]) => void;
}
