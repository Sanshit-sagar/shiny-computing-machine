import { ComponentPropsWithoutRef } from 'react'
import { StyledRoot } from './styles'

type CodeInputRootProps = ComponentPropsWithoutRef<typeof StyledRoot>

const CodeInputRoot = ({ children, ...rest }: CodeInputRootProps) => {
    
    return (
        <StyledRoot data-code-input="root"> 
            {children}
        </StyledRoot>
    )
}

CodeInputRoot.displayName = 'CodeInputRoot'
export default CodeInputRoot