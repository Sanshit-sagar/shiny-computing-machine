import { ReactNode, ReactElement, ElementType } from 'react' 

export type ValidExtensions = 'jsx' | 'css' | 'pdf' | 'html' | 'js' | 'json' | 'txt' | "file" | "folder" | 'doc' | 'md'

export type FolderNodeStruct = {
    type: "file";
    name:  `${string}.${ValidExtensions}`; 
}
export type FileNodeStruct = {
    type:  "folder";
    name: string; 
    descendents?: TreeStruct[]; 

}
export type TreeStruct = FolderNodeStruct | FileNodeStruct


export type FileProps = {
    name: `${string}.${ValidExtensions}`;
}

export type FolderProps = {
    name: string;
    children?: ReactNode; 
}

export type TreeProps = {
    data?: TreeStruct[];
    children?: ReactElement; 
    element?: ElementType; 
}

export type TreeRecursiveProps = {
    data?: TreeStruct[];
}
