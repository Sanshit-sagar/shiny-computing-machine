import { useContext } from 'react'
import { IChipContext } from './types'
import ChipContext from './ChipContext'

export const useChipContext = () => {
    const chipContext = useContext<IChipContext>(ChipContext)

    if(!chipContext) {
        throw new Error(`Invalid usage`)
    }

    return chipContext 
}

