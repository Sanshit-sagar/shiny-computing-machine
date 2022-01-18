import { useContext } from 'react'

import {CardContext} from './CardContext'
import {CardState} from './interfaces'

export const useCardContext = () => {
    const cardContext = useContext<CardState>(CardContext) 

    if(!cardContext)
        throw new Error(`Outside of Card context tree`)

    return cardContext
}