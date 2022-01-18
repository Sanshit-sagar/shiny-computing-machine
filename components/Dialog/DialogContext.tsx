import { createContext } from 'react'
import { IDialogContext } from './types'

const DialogContext = createContext<IDialogContext>(
    null
)

export default DialogContext