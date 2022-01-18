import { useRef } from 'react'
import { useTabPanel } from '@react-aria/tabs'

import { useTabContext } from './utils'
import { StyledTabsPanel } from './styles'


function TabsPanel<T extends object>(props) {
    const { state, activeIndex, tabsCount, dispatch } = useTabContext<T>()
   
    const ref = useRef<HTMLDivElement>()
    const { tabPanelProps } = useTabPanel(props, state, ref)

    return (
        <StyledTabsPanel {...tabPanelProps} ref={ref}>
            {state.selectedItem?.props.children}
        </StyledTabsPanel>
    )
}

export default TabsPanel