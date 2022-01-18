import { useEffect, createRef, MutableRefObject } from 'react' 
import dynamic from 'next/dynamic'

import { useSplitPaneContext } from '../utils'
import { StyledSplitPane } from './Styles'
import { SplitPaneProps } from '../interfaces'

const DynamicSplitPane = dynamic<SplitPaneProps>(() => import('../SplitPane'))

export const SplitPaneTop = ({ 
    children, 
    type = "column", 
    element: Component = 'div', 
    ...props 
}: SplitPaneProps) => {

    const ref: MutableRefObject<HTMLDivElement> = createRef<HTMLDivElement>()
    const { clientWidth, clientHeight, setClientHeight, setClientWidth } = useSplitPaneContext()
        
    useEffect(() => {
        if (!clientWidth) {
            setClientWidth(ref.current.clientWidth)
            return
        }
        ref.current.style.minWidth = clientWidth + "px"
        ref.current.style.maxWidth = clientWidth + "px"
    }, [clientWidth])

    useEffect(() => {
        if (!clientHeight) {
            setClientHeight(ref.current.clientHeight)
            return
        }
        ref.current.style.minHeight = clientHeight + "px"
        ref.current.style.maxHeight = clientHeight + "px"
    }, [clientHeight])

    return (
        <StyledSplitPane {...props} ref={ref}>
            <DynamicSplitPane type={type} element={Component}>
                {children}
            </DynamicSplitPane> 
        </StyledSplitPane>
    )
}

SplitPaneTop.displayName = 'SplitPaneTop'
export default SplitPaneTop
