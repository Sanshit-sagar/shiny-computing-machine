import { createRef, useContext, useEffect, MutableRefObject } from 'react' 
import dynamic from 'next/dynamic'


import { SplitPaneProps } from '../interfaces'
import { StyledSplitPane } from './Styles'
import { useSplitPaneContext } from '../utils'

const DynamicSplitPane = dynamic<SplitPaneProps>(() => import('../SplitPane'))

const SplitPaneRight = ({ 
    children, 
    element: Component = 'div', 
    type = "column", 
    css, 
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

SplitPaneRight.displayName = 'SplitPaneBottom'
export default SplitPaneRight 