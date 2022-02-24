import { Key, useState, ReactNode } from 'react' 
import { MenuButton } from './MenuButton'

import { Item, Section } from '@react-stately/collections'

import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons' 

import MenuItem from './index'

type ActionableItem = {
    id: number;
    name: string; 
    icon: ReactNode | null;
    kbd?: string | null; 
    items?: ActionableItem[]; 
}

const items: ActionableItem[] = [
    { 
        id: 0,
        name: '',
        items: [
            { id: 1, icon: <CheckIcon />, name: 'New Window', kbd: '⌘ W' },
            { id: 2, icon: <DotFilledIcon />, name: 'New Private Window', kbd: '⌘ I' },
            { id: 3, icon: <CheckIcon />, name: 'New Tab', kbd: '⌘ T', childNodes: [
                { id: 8, icon: <DotFilledIcon />, name: 'Open Workspace from File...', kbd: '' }
            ]},
        ]
    },
    { 
        id: 4, 
        name: 'Section two', 
        items: [
            { id: 5, icon: <CheckIcon />, name: 'item5', kbd: '⌘ d' },
            { id: 6, icon: <DotFilledIcon />, name: 'item6', kbd: '⌘ a' },
            { id: 7, icon: <CheckIcon />, name: 'item7', kbd: '⌘ f'  },
        ]
    }
]

export const MenuButtonInstance = () => {
    const [disabledKeys, setDisabledKeys] = useState<Set<Key>>(new Set<Key>([]))
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set<Key>([]))
    
    const handleSelectionChange = (selection) => setSelectedKeys(selection)

    return (
        <MenuButton 
            label="Options" 
            selectionMode="multiple"
            selectedKeys={selectedKeys} 
            onSelectionChange={handleSelectionChange}
            disabledKeys={disabledKeys}
            items={items}
        >
            {(section) => (
                <Section key={section.name} title={section.name} items={section.items}>
                    {(item) => (
                        <Item key={item.name} textValue={item.name} childItems={item.childNodes}>
                            <MenuItem.Indicator> {item.icon} </MenuItem.Indicator> 
                            <MenuItem.Title> {item.name} </MenuItem.Title>
                            <MenuItem.Shortcut> {item.kbd} </MenuItem.Shortcut>
                        </Item>
                    )}
                </Section>
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