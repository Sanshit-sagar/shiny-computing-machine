import { useRef, Fragment } from 'react'

import { Node } from '@react-types/shared'
import { FocusRing } from '@react-aria/focus'

import { useInteractions } from '@/hooks/useInteractions'
import { useSidebarItem, SidebarItemProps } from '@/hooks/collections/Sidebar'

import { 
    StyledSidebarItem, 
    StyledSidebarAnchor
} from './styles'
import { SidebarItemLevel } from './types'                                                                                                                                                                                                                                                                                 
import { useSidebarContext } from './utils'

import {
    ChevronDownIcon,
    ChevronRightIcon
} from '@radix-ui/react-icons'

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
        <>
            <FocusRing>
                <StyledSidebarItem 
                    {...listItemProps} 
                    isSelected={isSelected} 
                    isDisabled={isDisabled} 
                    isExpanded={isExpanded}
                    hasChildNodes={hasChildNodes}
                    level={`${level}` as SidebarItemLevel}
                    onClick={(event) => toggleKey(key)}
                >
                    <StyledSidebarAnchor {...listItemLinkProps} ref={ref}>
                        {rendered} 
                    </StyledSidebarAnchor>

                    {hasChildNodes && (
                        <> {isExpanded ? (
                            <ChevronDownIcon /> 
                        ) : (
                            <ChevronRightIcon /> 
                    )} </> )}
                </StyledSidebarItem>
            </FocusRing>

            {expandChildNodes && (
                <>
                    {[...childNodes].map((node: Node<T>) => (
                        <Fragment key={node.key}>
                            <SidebarItem item={node} level={level + 1} />
                        </Fragment>
                    ))} 
                </>
            )}
        </>
    )
}

SidebarItem.displayName = 'SidebarItem'
export default SidebarItem