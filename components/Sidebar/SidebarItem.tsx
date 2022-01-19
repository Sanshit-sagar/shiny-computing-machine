import { useRef, Fragment } from 'react'

import { Node } from '@react-types/shared'
import { FocusRing } from '@react-aria/focus'

import { useSidebarContext } from './utils'
import { 
    StyledSidebarItem, 
    StyledSidebarAnchor,
    StyledItemContainer
} from './styles'

import { useInteractions } from '@/hooks/useInteractions'
import { useSidebarItem, SidebarItemProps } from '@/hooks/collections/Sidebar'

const SidebarItem = <T extends object>(props: SidebarItemProps<T>) => {
    const { item, level = 1, ...rest } = props
    const { 
        key, 
        rendered, 
        hasChildNodes, 
        childNodes 
    } = item
    const state = useSidebarContext<T>()
    const { 
        selectionManager, 
        expandedKeys, 
        disabledKeys, 
        toggleKey 
    } = state

    
    const isSelected = selectionManager.isSelected(key)
    const isDisabled = disabledKeys.has(key)
    const isExpanded = expandedKeys.has(key)
    const expandChildNodes = hasChildNodes && isExpanded 

    const ref = useRef<HTMLAnchorElement>()
    const { listItemProps, listItemLinkProps } = useSidebarItem<T>(props, state, ref)
    const { interactionProps, ...interactionStates } = useInteractions({ isDisabled }) 

    return (
        <StyledItemContainer>
            <StyledSidebarItem 
                {...listItemProps} 
                isSelected={isSelected} 
                isDisabled={isDisabled} 
                isExpanded={isExpanded}
                hasChildNodes={hasChildNodes}
                level={`${level}`}
                onClick={(event) => toggleKey(key)}
            >
                <FocusRing>
                    <StyledSidebarAnchor {...listItemLinkProps} ref={ref}>
                        {rendered} 
                    </StyledSidebarAnchor>
                </FocusRing>
            </StyledSidebarItem>

            {expandChildNodes && (
                <>
                    {[...childNodes].map((node: Node<T>, index: number) => (
                        <Fragment key={node.key}>
                            <SidebarItem 
                                item={node} 
                                level={level + 1}
                            />
                        </Fragment>
                    ))} 
                </>
            )}
        </StyledItemContainer>
    )
}

SidebarItem.displayName = 'SidebarItem'
export default SidebarItem