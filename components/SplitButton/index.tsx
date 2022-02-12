import { ReactNode, useState } from 'react' 
import {
    PopupList,
    StyledSplitButton,
    StyledPopupButton,
    StyledPopupListItem,
    StyledSplitButtonContainer
} from './styles'

import { 
    SaveIcon, 
    TrashIcon, 
    ScheduleIcon, 
    CaretDownIcon 
} from '@/components/Icons'

type PopupItem = { text: string; icon: ReactNode; }

const items: PopupItem[] = [
    { text: 'Schedule', icon: <ScheduleIcon /> },
    { text: 'Delete', icon: <TrashIcon /> },
    { text: 'Save', icon: <SaveIcon /> }
]

export const SplitButton = () => {
    const [selected, setSelected] = useState<number | undefined>(undefined)
    const [isVisible, setVisible] = useState<boolean>(false)
    
    const select = (index: number) => {
        alert('hihi')
        setSelected((prev) => (prev === undefined || prev !== index) ? index : undefined)
    }
    
    const toggle = () => setVisible((prev) => !prev) 

    return (
        <StyledSplitButtonContainer>
            <StyledSplitButton> Send {selected || '~'} </StyledSplitButton>

            <StyledPopupButton 
                aria-haspopup="true" 
                aria-expanded="false" 
                title="Open for more actions"
                onClick={toggle}
            > 
                <CaretDownIcon />

                <PopupList isVisible={isVisible}>
                    {items.map((item: PopupItem, index: number) => (
                        <StyledPopupListItem 
                            key={`popup-list-item-${index}`} 
                            id={index}
                            handleClick={select}
                            isSelected={selected && selected === index}
                        > 
                            {item.icon} 
                            {item.text} 
                        </StyledPopupListItem>
                    ))}
                </PopupList>

            </StyledPopupButton>
        </StyledSplitButtonContainer>
    )
}