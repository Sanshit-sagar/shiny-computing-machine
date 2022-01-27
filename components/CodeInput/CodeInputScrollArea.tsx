import { ComponentProps } from 'react'
import { StyledScrollArea } from './styles'
import { CSS } from 'stitches.config' 

type ScrollAreaProps = ComponentProps<'div'> 

const CodeInputScrollArea = ({ 
    children, 
    onMouseDownCapture, 
    onDoubleClickCapture, 
    ...props 
}: ScrollAreaProps) => {

    const handleScroll = (event: React.UIEvent) => {
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.scrollTop = 0
        event.currentTarget.scrollLeft = 0
    }

    return (
        <StyledScrollArea 
            data-code-input='input-scroll-wrapper'
            onMouseDownCapture={onMouseDownCapture}
            onDoubleClickCapture={onDoubleClickCapture}
            onScroll={handleScroll}
        > 
            {children}
        </StyledScrollArea>
    )
}

CodeInputScrollArea.displayName = 'CodeInputScrollArea'
export default CodeInputScrollArea