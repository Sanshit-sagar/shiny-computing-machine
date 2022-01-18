import React, { useMemo, useRef, ReactElement } from 'react'


import { Node } from '@react-types/shared'
import { useCollator } from '@react-aria/i18n'
import { useTreeState } from '@react-stately/tree'
import { ListLayout } from '@react-stately/layout'
import { ReusableView } from '@react-stately/virtualizer'
import { Virtualizer, VirtualizerItem } from '@react-aria/virtualizer'

import SidebarItem from './SidebarItem'
import SidebarSection from './SidebarSection' 
import SidebarContext from './SidebarContext'
import { StyledSidebar } from './styles'
import { useSidebar, SidebarProps } from '@/hooks/collections/Sidebar'

type View<T> = ReusableView<Node<T>, object> 

const SidebarRoot =<T extends object>(props: SidebarProps<T>) => {
    
    const ref = useRef() 

    const state = useTreeState(props)
    const collator = useCollator({
        usage: 'search',
        sensitivity: 'base'
    })
    const layout = useMemo(() => new ListLayout({
        rowHeight: 40, 
        collator
    }), [collator])

    const { navProps, listProps } = useSidebar({ ...props, layout }, state, ref)

    layout.collection = state.collection
    layout.disabledKeys = state.disabledKeys 

    const renderWrapper = (
        parent: View<T>, 
        reusableView: View<T>, 
        children: View<T>[], 
        renderChildren: (views: View<T>[]) => ReactElement[]
    ) => {
        if(reusableView.viewType === 'section') {
            return (
                <SidebarSection
                    key={reusableView.key}
                    reusableView={reusableView}
                    header={children.find((c) => c.viewType === 'header')}
                >
                    {renderChildren(children.filter((child) =>
                         child.viewType === 'header'
                    ))}
                </SidebarSection>
            )
        } 

        return (
            <VirtualizerItem 
                key={reusableView.key}
                reusableView={reusableView}
                parent={parent}
            />
        )
    }

    const selectionManager = state.selectionManager 
    const focusedKey = selectionManager.focusedKey
    const collection = state.collection


    return (
        <nav {...navProps} style={{ display: 'flex', width: 'inherit', height: 'inherit'}}>
            <SidebarContext.Provider value={state}>
                <StyledSidebar>
                    <Virtualizer 
                        {...listProps} 
                        ref={ref}
                        focusedKey={focusedKey}
                        collection={collection}
                        renderWrapper={renderWrapper}
                        layout={layout}
                    >
                        {(type, item: Node<object>) => {
                            if(type === 'item') return (
                                <SidebarItem item={item} /> 
                            )
                        }}
                    </Virtualizer>
                </StyledSidebar>
            </SidebarContext.Provider>
        </nav>
    )
}

SidebarRoot.displayName = 'SidebarRoot'
export default SidebarRoot