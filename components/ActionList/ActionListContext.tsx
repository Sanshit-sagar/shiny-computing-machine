import { createContext } from 'react' 

type ContextProps = {
    container?: string;
    listRole?: AriaRole; 
    selectionVariant?: 'single' | 'multiple';
    selectionAttribute?: 'aria-selected' | 'aria-checked'; 
    listLabelledBy?: string;
    afterSelect?: (...args: any[]) => unknown; 
}

const ActionListContainerContext = createContext<ContextProps>({
    
})


export {
    ActionListContainerContext
}

export type {
    ContextProps
}
