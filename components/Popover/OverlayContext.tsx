import { createContext } from 'react'
import { IOverlayContext } from './interfaces'

const OverlayContext = createContext<IOverlayContext>(
    null
)

export default OverlayContext