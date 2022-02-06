import { createContext } from 'react'
import { ITextFieldContext } from './types'

const TextFieldContext = createContext<ITextFieldContext | null>(
    null
)

export default TextFieldContext