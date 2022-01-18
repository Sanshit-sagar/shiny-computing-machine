import { createContext } from 'react'
import { IButtonContext } from './types' 


const ButtonContext = createContext<IButtonContext>(
    null
)

ButtonContext.displayName = "ButtonContext"
export default ButtonContext
