import { useRef, Key, cloneElement, useEffect } from 'react' 
import { styled, CSS } from 'stitches.config'

import { Node } from '@react-types/shared'
import { useAccordionContext } from './utils'

import { AccordionIcon } from './AccordionIcon'
import { AccordionHeader } from './AccordionHeader'
import { AccordionPanel } from './AccordionPanel'

import { useResizeObserver } from '@/hooks/useResizeObserver'

import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import { ResizableContainer } from '@/components/Resizable'

interface AccordionItemProps<T> {
    key: Key;
    item: Node<T>; 
}

const AccordionItem = <T extends object>({ item }: AccordionItemProps<T>) => {

    const { selectedKey, setSelectedKey, activePanelDims, disabledKeys } = useAccordionContext()
   
    const isSelected = selectedKey !== null && selectedKey === item.key
    const isDisabled = disabledKeys.has(item.key)

    const { title, children, openIcon = <PlusIcon />, closeIcon = <MinusIcon /> } = item.props

    return (
        <ResizableContainer 
            css={{ 
                ...accordionContainerCss, 
                x: activePanelDims.x, 
                y: activePanelDims.y,
                height: isSelected ? `${50 + activePanelDims.height}px` : `50px`,
            }}
        >
            <AccordionHeader item={item}> 
                {title} 
                <AccordionIcon 
                    opened={openIcon} 
                    closed={closeIcon}
                    isSelected={isSelected}
                    isDisabled={isDisabled} 
                />
            </AccordionHeader>
            {isSelected && (
                <AccordionPanel item={item}> 
                    {cloneElement(children)}
                </AccordionPanel> 
            )}
        </ResizableContainer>
    )
}

export default AccordionItem
AccordionItem.displayName = 'AccordionItem'


const accordionContainerCss: CSS = {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap',
    margin: 0,

    width: '300px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '0em',

    border: '1px solid $black3',
    borderRadius: '$2',

    transition: '0.3s',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}