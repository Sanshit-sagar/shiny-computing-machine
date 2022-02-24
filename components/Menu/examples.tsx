import { Key, useState, ReactNode } from 'react' 
import { MenuButton } from './MenuButton'

import { Item, Section } from '@react-stately/collections'

import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons' 

import MenuItem from './index'

type ActionableItem = {
    id: number;
    key?: Key;
    textValue: string; 
    icon: ReactNode | null;
    title: string; 
    kbd?: string | null; 
}

const newItemsMenu: ActionableItem[] = [
    { id: 0, textValue: 'newTab', icon: <CheckIcon />, title: 'New Tab', kbd: '⌘ T' },
    { id: 1, textValue: 'newWindow', icon: <CheckIcon />, title: 'New Window', kbd: '⌘ W' },
    { id: 2, textValue: 'newPrivateWindow', icon: <DotFilledIcon />, title: 'New Private Window', kbd: '⌘ I' }
]

export const MenuButtonInstance = () => {
    const [disabledKeys, setDisabledKeys] = useState<Set<Key>>(new Set<Key>(['cut']))
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set<Key>([]))
    
    const handleSelectionChange = (selection) => setSelectedKeys(selection)

    return (
        <MenuButton 
            label="New" 
            selectionMode="multiple"
            selectedKeys={selectedKeys} 
            onSelectionChange={handleSelectionChange}
            disabledKeys={disabledKeys}
            items={newItemsMenu}
        >
            
                {(item) => (
                    <MenuItem.Root textValue={item.textValue} key={item.key}>
                        <MenuItem.Indicator> {item.icon} </MenuItem.Indicator> 
                        <MenuItem.Title> {item.title} </MenuItem.Title>
                        <MenuItem.Shortcut> {item.kbd} </MenuItem.Shortcut>
                    </MenuItem.Root>
                )}
        </MenuButton>
    )
}


// selectionMode="multiple" 
// selectedKeys={selectedKeys}
// disabledKeys={disabledKeys} 
// onSelectionChange={handleSelectionChange}
// disallowEmptySelection={true}
// closeOnSelect={true}
// shouldFocusWrap={false}
// isVirtualized={false}