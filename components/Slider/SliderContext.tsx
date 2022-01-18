import { createContext } from 'react'
import { ISliderContext } from './interfaces'

const SliderContext = createContext<ISliderContext | null>(
    null
)

export default SliderContext