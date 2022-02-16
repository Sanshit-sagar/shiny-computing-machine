import { ReactNode, useState } from 'react' 
import {
    GuiSplitButton,
    GuiMainButton,
    GuiPopupButton, 
    GuiPopupList,
    GuiPopupItem,
} from './styles'

import { 
    SaveIcon, 
    TrashIcon, 
    ScheduleIcon, 
    CaretDownIcon 
} from '@/components/Icons'

import { useHover } from '@react-aria/interactions'

type PopupItem = { text: string; icon: ReactNode; }

const items: PopupItem[] = [
    { text: 'Schedule', icon: <ScheduleIcon /> },
    { text: 'Delete', icon: <TrashIcon /> },
    { text: 'Save', icon: <SaveIcon /> }
]

export const SplitButton = () => {
    const [selected, setSelected] = useState<number | undefined>(undefined)
    const [isVisible, setVisible] = useState<boolean>(false)
    const { hoverProps, isHovered } = useHover({ isDisabled: false })
    
    const select = (index: number) => {
        setSelected((prev) => (prev === undefined || prev !== index) ? index : undefined)
    }
    
    const toggle = () => setVisible((prev) => !prev) 

    return (
        <GuiSplitButton {...hoverProps}>
            <GuiMainButton> Send </GuiMainButton>

            <GuiPopupButton 
                aria-haspopup="true" 
                aria-expanded="false" 
                title="Open for more actions"
                onClick={toggle}
            > 
                <CaretDownIcon />

                <GuiPopupList isVisible={isHovered}>
                    {items.map((item: PopupItem, index: number) => (
                        <GuiPopupItem 
                            key={`popup-list-item-${index}`} 
                            id={index}
                            handleClick={select}
                            isSelected={selected && selected === index}
                        > 
                            {item.icon} 
                            {item.text} 
                        </GuiPopupItem>
                    ))}
                </GuiPopupList>

            </GuiPopupButton>
        </GuiSplitButton>
    )
}