import React, { MutableRefObject, createRef, useEffect } from 'react'

import dynamic from 'next/dynamic'
import { StyledSplitPane } from './Styles'
import { SplitPaneProps } from '../interfaces'
import { useSplitPaneContext } from '../utils'
const DynamicSplitPane = dynamic<SplitPaneProps>(() => import('../SplitPane'))

export const SplitPaneBottom = ({ 
    children, 
    element: Component = 'div', 
    type = 'row', 
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

SplitPaneBottom.displayName = 'SplitPaneBottom'
export default SplitPaneBottom
