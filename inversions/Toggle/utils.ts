import { useRef, useEffect, useContext } from 'react'
import ToggleContext from './ToggleContext'

export const useEffectAfterMount = (cb: () => void, dependencies) => {
    const justMounted = useRef<boolean>(true) 
    
    useEffect(() => {
        if(!justMounted.current) {
            return cb()
        }
        justMounted.current = false
    }, [dependencies])
}

export const useToggleContext = () => {
    const toggleContext = useContext(ToggleContext)

    if(!toggleContext) 
        throw new Error(`Illegal access from outside context`)

    return toggleContext
}


