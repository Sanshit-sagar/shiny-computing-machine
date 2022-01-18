import { createContext } from 'react'
import { IProgressBarContext } from './types'

const ProgressBarContext = createContext<IProgressBarContext>(
    null
)

export default ProgressBarContext