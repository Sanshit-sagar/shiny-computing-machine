import { useContext } from 'react'
import { IProgressBarContext } from './types'
import ProgressBarContext from './ProgressBarContext'


export const useProgressBarContext = () => {
    const progressBarContext = useContext<IProgressBarContext>(ProgressBarContext)

    if(!progressBarContext) 
        throw new Error(`Illegal access`)

    return progressBarContext    
}