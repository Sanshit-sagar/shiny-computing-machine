import React, { ReactElement } from 'react'

import { useTreeState } from '@react-stately/tree'

import SidebarItem from './SidebarItem'
import SidebarSection from './SidebarSection' 
import SidebarContext from './SidebarContext'

import { StyledSidebar, StyledTopArea, StyledBottomArea } from './styles'
import { SidebarProps } from '@/hooks/collections/Sidebar'

type SidebarComposition = { 
    header?: ReactElement; 
    footer?: ReactElement; 
}

type SidebarCompositionProps<T> = SidebarProps<T> & SidebarComposition

const SidebarRoot = <T extends object>(props: SidebarCompositionProps<T>) => {

    const state = useTreeState(props)

    const selectionManager = state.selectionManager 
    const focusedKey = selectionManager.focusedKey
    const collection = state.collection

    return (
        <SidebarContext.Provider value={state}>
            
               
                <StyledSidebar>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', gap: 0 }}>
                        {props.header && (
                            <StyledTopArea> 
                                {props.header} 
                            </StyledTopArea>
                        )}

                        {[...collection].map((item) => {
                            if (item.type === 'section') {
                                return (
                                    <SidebarSection
                                        key={item.key}
                                        item={item}
                                        state={state}
                                    />
                                )
                            }
                        
                            let sidebarItem = (
                                <SidebarItem key={item.key} item={item} />
                            )
                            
                            if (item.wrapper) {
                                sidebarItem = item.wrapper(sidebarItem);
                            }
                            return sidebarItem
                        })}
                    </div>
                
                    {props.footer && (
                        <StyledBottomArea> {props.footer} </StyledBottomArea> 
                    )}

                </StyledSidebar>
     
        </SidebarContext.Provider>
    )
}

SidebarRoot.displayName = 'SidebarRoot'
export default SidebarRoot