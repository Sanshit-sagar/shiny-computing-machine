import { createContext } from 'react'
import { IBlockquoteContext } from './interfaces'


const BlockquoteContext = createContext<IBlockquoteContext | null>(
    null
); 

export default BlockquoteContext