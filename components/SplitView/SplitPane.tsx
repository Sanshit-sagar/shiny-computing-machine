import { useState, useEffect, useRef, MutableRefObject } from 'react' 
import { StyledSplitPaneView } from './PositionedPanes/Styles'
import { SplitPaneContext } from './SplitPaneContext'
import { MousePosition, SplitPaneProps } from './interfaces'

const locate = (pos: MutableRefObject<number>) => pos?.current ?? null

const clamp = (event, axis: 'x' | 'y') => (
        axis === 'x' 
    ?   Math.max(Math.min(event?.clientX ?? 400, 600), 200)  
    :   Math.max(Math.min(event?.clientY ?? 400, 600), 200)
)

const SplitPane = ({ 
    element: Component = 'div',
    type, 
    children, 
    outer = false, 
    css = {}, 
    ...props 
}: SplitPaneProps) => {

    const [clientWidth, setClientWidth] = useState<MousePosition>(null)
    const [clientHeight, setClientHeight] = useState<MousePosition>(null)
    const yDividerPos: MutableRefObject<MousePosition> = useRef<MousePosition>(null)
    const xDividerPos: MutableRefObject<MousePosition> = useRef<MousePosition>(null)

    const onMouseHoldDown = (event) => {
        yDividerPos.current = clamp(event, 'y')
        xDividerPos.current = clamp(event, 'x')
    }

    const onMouseHoldUp = (_event) => {
        yDividerPos.current = null
        xDividerPos.current = null
    }

    const onMouseHoldMove = (event) => {
        if (!locate(yDividerPos) && !locate(xDividerPos)) return
    
        setClientHeight(clientHeight + clamp(event, 'y') - locate(yDividerPos))
        setClientWidth(clientWidth + clamp(event, 'x') - locate(xDividerPos))

        yDividerPos.current = clamp(event, 'y')
        xDividerPos.current = clamp(event, 'x')
    }

    useEffect(() => {
        document.addEventListener("mouseup", onMouseHoldUp)
        document.addEventListener("mousemove", onMouseHoldMove)

        return () => {
            document.removeEventListener("mouseup", onMouseHoldUp)
            document.removeEventListener("mousemove", onMouseHoldMove)
        }
    }, [onMouseHoldUp, onMouseHoldMove])

    return (
        <Component {...props}>
            <SplitPaneContext.Provider
                value={{
                    clientWidth,
                    clientHeight,
                    xDividerPos,
                    yDividerPos,
                    setClientWidth,
                    setClientHeight,
                    onMouseHoldDown,
                    onMouseHoldMove,
                    onMouseHoldUp
                }}
            > 
                <StyledSplitPaneView type={type} outer={outer} css={{ ...css }}> 
                    {children}  
                </StyledSplitPaneView>
            </SplitPaneContext.Provider>
        </Component>
    )
}

SplitPane.displayName = "SplitPane"
export default SplitPane 