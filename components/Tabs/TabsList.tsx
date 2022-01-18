import React, { useRef, useReducer } from 'react'

import { useTabList } from '@react-aria/tabs'
import { useTabListState } from '@react-stately/tabs'

import Tab from './Tab'
import TabsPanel from './TabsPanel'
import TabsContext from './TabsContext'
import { AriaTabListProps } from './interfaces'
import { tabsReducer } from './store'
import { StyledTabsList, StyledTabsListContainer } from './styles'


function TabsList<T extends object>(props: AriaTabListProps<T>) {
    const {  element: Component = 'div', ...rest } = props

    const ref = useRef<HTMLDivElement>()
    const tabsListState = useTabListState(props)
    const { tabListProps } = useTabList(props, tabsListState, ref)

    const initState = { 
        state: tabsListState, 
        activeIndex: tabsListState.selectedKey,
        tabsCount: tabsListState.collection.size,
        orientation: props.orientation,
        isDisabled: props.isDisabled
    }

    const [state, dispatch] = useReducer(tabsReducer, initState)

    return (
        <TabsContext.Provider value={{ ...initState, dispatch }}>
            <Component {...rest}>
                <StyledTabsListContainer orientation={props.orientation}>
                    <StyledTabsList {...tabListProps} ref={ref} orientation={props.orientation}>
                        {[...tabsListState.collection].map((item, index) => (
                            <Tab key={index} index={index} itemKey={item.key}> 
                                {item.rendered} 
                            </Tab>
                        ))}
                    </StyledTabsList>
                        
                    <TabsPanel key={tabsListState.selectedItem?.key} />
                </StyledTabsListContainer>
            </Component>
        </TabsContext.Provider>
    );
}

export default TabsList