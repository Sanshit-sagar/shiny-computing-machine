import { createContext } from 'react'
import { ITextInputContext } from './interfaces'

const TextInputContext = createContext<ITextInputContext>(
    null
)

export default TextInputContext