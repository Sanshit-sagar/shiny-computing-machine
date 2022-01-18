import { PrismTheme, Language } from 'prism-react-renderer'
import type { PrismThemeName } from './themes'

export type ValidationState = 'valid' | 'invalid' | undefined


export type RequiredHighlighterProps = {
    id: string; 
    theme: PrismThemeName;
    language: Language;
    code: string;
}

interface AdditionalCodeState {
    isTyping: boolean;
    showLines: boolean; 
    autoFocus: boolean; 
    isHovered: boolean; 
    isLoading: boolean;
    isEditable: boolean;
    isDisabled: boolean;
    error?: string | null; 
    opened: boolean;
    onOpen: (isOpen: boolean) => void;
    onFocus: (ev: FocusEvent) => void;
    onBlur: (ev: FocusEvent) => void;
    isFocused: boolean;
    onFocusChange: (isFocused: boolean) => void;
    onOpenChange: (isOpen: boolean) => void;
    onLanguageChange: (language: Language) => void; 
    onThemeChange: (theme: PrismTheme) => void;
    validationState: ValidationState;
};

interface AdditionalCodeProps {
    isReadOnly: boolean;
    isDisabled: boolean;
    isVisible: boolean;
    showLines: boolean; 
    autoFocus: boolean; 
    isFocused: boolean;
    isHovered: boolean; 
    isTyping: boolean;
    isLoading: boolean;
    onOpen: (isOpen: boolean) => void;
};

export type CodeState = Partial<AdditionalCodeState> & RequiredHighlighterProps
export type CodeProps = Partial<AdditionalCodeProps> & RequiredHighlighterProps

export type CodeReducerAction = {
    
}

// export const MarkupLanguages: Language = ["markup", "bash", "clike" | "c" | "cpp" 
// | "css" | "javascript" | "jsx" | "coffeescript" | "actionscript" 
// | "css-extr" | "diff" | "git" | "go" | "graphql" | "handlebars" | "json"

export interface CustomPrismHighlighterProps { 
    code: string; 
    language?: Language; 
}; 