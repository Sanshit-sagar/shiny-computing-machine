import { createContext, useContext, ReactNode } from 'react'
import { useCodeInput } from './useCodeInput'

const CODE_INPUT_LENGTH = 6

export type ICodeInputContext = {
    length: number;
    selection: ReturnType<typeof useCodeInput> | null;
}

export const CodeInputContextFactory = (initLength: number): ICodeInputContext => {
    const codeInputContextInit: ICodeInputContext = {
        length: initLength,
        selection: null
    }
    return codeInputContextInit
}

export const CodeInputContext = createContext<ICodeInputContext>(CodeInputContextFactory(CODE_INPUT_LENGTH))

export const useCodeInputContext = (): ICodeInputContext => {
    const codeInputContext = useContext(CodeInputContext)

    if(!codeInputContext) {
        throw new Error(`Illegal access from outside code input component tree`)
    }

    return codeInputContext
}

CodeInputContext.displayName = 'CodeInputContext'
export default CodeInputContext