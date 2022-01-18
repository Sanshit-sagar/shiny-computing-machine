import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { AccordionProps, AccordionItemProps } from './interfaces'

import {
    AccordionList,
    AccordionListItem,
    AccordionTitle,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    AccordionPanelContent 
} from './styles'

import { ChevronUpIcon } from '@radix-ui/react-icons'

const AnimatedChevron = ({ isOpen }: { isOpen: boolean; }) => (
    <AccordionIcon className={`${isOpen ? 'active' : ''}`}>
        <ChevronUpIcon />
    </AccordionIcon>
)

const AccordionItem = ({ data, isOpen, onClick }: AccordionItemProps) => {
    const [height, setHeight] = useState<number>(0)
    const ref: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>()

    useEffect(() => {
        if(isOpen) {
            const contentEl = ref.current as HTMLDivElement
            setHeight(contentEl.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <AccordionListItem> 
            <AccordionButton onClick={onClick}> 
                <AccordionTitle> 
                    {data.icon && data.icon}
                    {data.title} 
                </AccordionTitle>
                <AnimatedChevron isOpen={isOpen} />
            </AccordionButton>

            <AccordionPanel height={height} isOpen={isOpen}> 
                <AccordionPanelContent ref={ref}> 
                    {data.content} 
                </AccordionPanelContent> 
            </AccordionPanel>
        </AccordionListItem>
    );
}

export const Accordion = ({ items }: AccordionProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)
    
    const handleClick = (index: number) => (
        setSelectedIndex(selectedIndex !== index ? index : -1)
    )

    return (
        <AccordionList>
            {items.map((item, index: number) => (
                <AccordionItem
                    key={`accordion-item-${index}`}
                    data={item}
                    isOpen={index === selectedIndex}
                    onClick={() => handleClick(index)}
                />
            ))}
        </AccordionList>
    )
}