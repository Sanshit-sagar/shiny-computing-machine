import { createContext, useContext } from 'react'

type ISelectContext = {
    value: string;
    updateValue?: (updatedValue: string) => void;  
    visible: boolean; 
    disableAll?: boolean; 
}
const defaultContext: ISelectContext = {
    visible: false,
    value: ''
}

const SelectContext = createContext(defaultContext)

const useSelectContext = () => useContext(SelectContext)

export {
    SelectContext,
    useSelectContext
}