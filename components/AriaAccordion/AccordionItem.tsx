import { Key, cloneElement, Children } from 'react' 

import { Node } from '@react-types/shared'
import { useAccordionContext } from './utils'

import { AccordionIcon } from './AccordionIcon'
import { AccordionHeader } from './AccordionHeader'
import { AccordionPanel } from './AccordionPanel'
import { StyledAccordionItem } from './styles'
import { findByType } from '../Article/utils'

interface AccordionItemProps<T> {
    key: Key;
    item: Node<T>; 
    index: number; 
}

const AccordionItem = <T extends object>({ item, index }: AccordionItemProps<T>) => {

    const { selectedKey, disabledKeys } = useAccordionContext()
  
    const contextValue = {
        isSelected: selectedKey !== null && selectedKey === item.key,
        isDisabled: disabledKeys.has(item.key),
        title: item.props.title,
        content: findByType(item.props.children, AccordionHeader)
    }

    return (
        <StyledAccordionItem>
            <AccordionHeader item={item} index={index}> 
                {item.props.title} 
                <AccordionIcon item={item} />
            </AccordionHeader>
            {contextValue.isSelected && (
                <AccordionPanel item={item} index={index}> 
                    {cloneElement(contextValue.content)}
                </AccordionPanel> 
            )}
        </StyledAccordionItem>
    )
}

export default AccordionItem
AccordionItem.displayName = 'AccordionItem'