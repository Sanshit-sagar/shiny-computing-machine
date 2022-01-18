import { Language as PrismLanguage } from 'prism-react-renderer'

export type Language = PrismLanguage

export type PreToCodeBlock = {
    live?: boolean;
    render?: boolean;
    className: string;
    codeString: string;
    language: Language;
    metastring: string;
} | undefined;

export type PrePropsType = {
    props: {
        live?: boolean;
        render?: boolean;
    };
    children: {
        props: {
            metastring: string;
            mdxType?: string;
            className?: string;
            children: string;
        };
    };
};

export interface CodeBlockProps {
    codeString: string;
    language: Language;
    metastring: string | null;
    live?: boolean;
    render?: boolean;
};

export interface HighlightedCodeTextProps {
    codeString: string;
    language: Language;
    highlightLine?: (index: number) => boolean;
};