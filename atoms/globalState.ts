import { ReactNode } from 'react'
import { atom } from 'jotai' 


export interface HeaderContents { 
    icon: ReactNode; 
    heading: string; 
}


const headerContentFactory = (): HeaderContents => {
    return { 
        icon: null, 
        heading: '/' 
    }
}

export const activePageAtom = atom<HeaderContents>(headerContentFactory())
export const updateActivePageAtom = atom(
    null,
    (_get, set, update: HeaderContents) => {
        set(activePageAtom, { ...update })
    }
)

