import { useEffect, useContext, createRef, MutableRefObject } from 'react' 
import dynamic from 'next/dynamic'

import { SplitPaneContext } from '../SplitPaneContext'
import { StyledSplitPane } from './Styles'
import { SplitPaneProps } from '../interfaces'
import { useSplitPaneContext } from '../utils'
const DynamicSplitPane = dynamic<SplitPaneProps>(() => import('../SplitPane'))



export const SplitPaneLeft = ({ 
    children, 
    element: Component = 'div', 
    type = 'column', 
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
            <DynamicSplitPane element={Component} type={type}>
                {children}
            </DynamicSplitPane>
        </StyledSplitPane>
    )
}

SplitPaneLeft.displayName = 'SplitPaneLeft'
export default SplitPaneLeft 
