import { createContext } from 'react'
import { IOptionContext } from './interfaces'

const OptionContext = createContext<IOptionContext>({
    labelProps: {},
    descriptionProps: {}
})


export default OptionContext