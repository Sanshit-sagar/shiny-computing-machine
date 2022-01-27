import { RefObject } from 'react' 

import CodeInputRoot from './CodeInputRoot'
import CodeInputField from './CodeInputField'
import CodeInputSegment from './CodeInputSegment'
import CodeInputScrollArea from './CodeInputScrollArea'
import CodeInputContext from './CodeInputContext'

import { StyledAbsolute } from './styles'
import { useCodeInput } from './useCodeInput'
import type { 
    RenderSegmentFn, 
    CodeInputFieldProps 
} from './types'

type CodeInputProps = CodeInputFieldProps & {
    length?: number;
    inputRef: RefObject<HTMLInputElement>;
    renderSegment: RenderSegmentFn;
}

const CodeInput = ({ length = 6, inputRef, renderSegment, ...rest }: CodeInputProps) => {

    const selection = useCodeInput(inputRef)

    const selectSegment = (event) => {
        if(event.button != 0 || event.ctrlKey) return 
        if(event.shiftKey || event.metaKey) return 
        if(!(event.currentTarget instanceof HTMLElement)) return 
        if(!(inputRef.current instanceof HTMLInputElement)) return

        event.stopPropagation()
        event.preventDefault()

        const { left, width } = event.currentTarget.getBoundingClientRect()
        const eventX = event.client - left 
        const index = Math.floor((eventX / width) * length)
        
        if(document.activeElement !== inputRef.current) {
            inputRef.current?.focus()
        }

        inputRef.current?.setSelectionRange(index, index + 1)
    }

    const selectField = (_event) => inputRef.current?.setSelectionRange(0, length)

    
    return (
        <CodeInputContext.Provider value={{ length, selection }}> 
            <CodeInputRoot>
                <StyledAbsolute aria-hidden="true">
                    <CodeInputSegment children={renderSegment} />
                </StyledAbsolute>
                <CodeInputScrollArea onMouseDownCapture={selectSegment} onDoubleClickCapture={selectField}>
                    <CodeInputField {...rest} ref={inputRef} /> 
                </CodeInputScrollArea>
            </CodeInputRoot>
        </CodeInputContext.Provider>
    )
}

CodeInput.displayName = 'CodeInput'
export default CodeInput