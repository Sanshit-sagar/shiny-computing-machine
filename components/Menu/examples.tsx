import { useState } from 'react' 
import { MenuButton } from './MenuButton'
import { MenuSeparator } from './MenuSeparator'

import { Item } from '@react-stately/collections'

type ActionableItem = {
    id: number;
    key: string;
    title: string; 
    kbd?: string; 
}

const actionableItems: ActionableItem[] = [
    { id: 0, key: 'edit', title: 'Edit', kbd: 'e' },
    { id: 1, key: 'share', title: 'Share', kbd: 's' },
    { id: 2, key: 'delete', title: 'Delete' },
    { id: 3, key: 'report', title: 'Report', kbd: 'r' }
]

export const MenuButtonInstance = () => {
    const [selectedKeys, setSelectedKeys] = useState<Iterable<any>>(['share'])
    
    const handleSelectionChange = (selection) => {
        alert('changed!!')
        setSelectedKeys(selection)
    }

    return (
        <MenuButton 
            label="Actions" 
            items={actionableItems} 
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            disabledKeys={['edit']} 
            disallowEmptySelection={false}
            closeOnSelect={true}
            onAction={(key) => console.log(key)} 
        >
            {(item: ActionableItem) => (
                <Item key={item.key} title={item.title}>
                    <div>
                        <label> {item.title} </label>
                        {item.kbd && (
                            <kbd> {item.kbd} </kbd>
                        )}
                    </div>
                </Item>
            )}
        </MenuButton>
    )
}