import { createContext } from 'react'
import { IChipContext } from './types'

const ChipContext = createContext<IChipContext | null>(
    null
)

ChipContext.displayName = 'ChipContext'
export default ChipContext