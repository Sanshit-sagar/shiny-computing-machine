import { createContext } from 'react' 

type ContextProps = {
    container?: string;
    listRole?: AriaRole; 
    selectionVariant?: 'single' | 'multiple';
    selectionAttribute?: 'aria-selected' | 'aria-checked'; 
    listLabelledBy?: string;
    afterSelect?: (...args: any[]) => unknown; 
}

export const ActionListContainerContext = createContext<ContextProps>({
    
})


