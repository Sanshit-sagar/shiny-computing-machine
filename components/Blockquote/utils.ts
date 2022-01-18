import { useContext } from 'react'
import BlockquoteContext from './BlockquoteContext'
import { IBlockquoteContext } from './interfaces'

export const useBlockquoteContext = (): IBlockquoteContext => {
    const blockquoteContext = useContext(BlockquoteContext)

    if(!blockquoteContext) {
        throw new Error(`Invalid scope, must be a child of an instance of the blockquote component`)
    }
    
    return blockquoteContext
}