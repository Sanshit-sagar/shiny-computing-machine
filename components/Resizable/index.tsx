import { useRef, ReactNode, CSSProperties } from 'react'
import { styled, CSS } from 'stitches.config'
import { useResizeObserver } from '@/hooks/useResizeObserver'

type ResizableContainerProps = { 
    className?: string; 
    children: ReactNode; 
    css?: CSS; 
}

const dims: CSSProperties = { 
    height: 'fit-content', 
    width: 'fit-content' 
}

export const ResizableContainer = ({ children, css, ...props }: ResizableContainerProps) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const rect = useResizeObserver(contentRef)

    return (
        <StyledResizableWrapper 
            {...props} 
            css={{  
                height: `${rect.height}px`,
                width: `${rect.width}px`,
                ...css
            }}
        >
            <div style={dims} ref={contentRef}>
                {children}
            </div>
        </StyledResizableWrapper>
    )
}

const StyledResizableWrapper = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    animation: 'all 300ms ease',
    overflow: 'hidden'
})
 