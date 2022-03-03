import { Key, useState, ReactNode } from 'react' 
import { MenuButton } from './MenuButton'

import { Item, Section } from '@react-stately/collections'
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons' 

import MenuItem from './index'

type ActionableItem = {
    id: number;
    icon?: ReactNode | null;
    name: string; 
    kbd?: string | null; 
    childNodes?: ActionableItem[]; 
}

// childNodes: [{ id: 8, icon: <DotFilledIcon />, name: 'Open Workspace from File...', kbd: '' }]}]},
const items: ActionableItem[] = [
    { 
        id: 0,
        name: '',
        items: [
            { id: 1, icon: null, name: 'Undo',                  kbd: '↑⌘Z'  },
            { id: 2, icon: null, name: 'Redo',                  kbd: '⌘Z'   },
        ]
    }, { 
        id: 3, 
        name: '', 
        items: [
            { id: 4, icon: null, name: 'Cut',                   kbd: '⌘X'   },
            { id: 5, icon: null, name: 'Copy',                  kbd: '⌘C'   },
            { id: 6, icon: null, name: 'Paste',                 kbd: '⌘V'   },
            { id: 7, icon: null, name: 'Paste and Match Style', kbd: '↑⌘V'  },
            { id: 8, icon: null, name: 'Delete',                kbd: ''     },
            { id: 9, icon: null, name: 'Select All',            kbd: '⌘A'   }
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
            selectionMode="single"
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