import { Key, createContext } from 'react'

export interface Quote {
    id: Key;
    author: string;
    quote: string;
}

export interface IQuoteContext {
    activeQuote: Key; 
    setActiveQuote: (key: Key) => void;
    quotes: Quote[];
}

export const QuoteContext = createContext<IQuoteContext | null>(
    null
)

export default QuoteContext