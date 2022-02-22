import { useState } from 'react' 
import { MenuButton } from './MenuButton'

import { Item, Section } from '@react-stately/collections'

type ActionableItem = {
    id: number;
    key: string;
    title: string; 
    kbd?: string; 
}

const actionableItems: ActionableItem[] = [
    { id: 0, key: 'edit', title: 'Edit' },
    { id: 1, key: 'share', title: 'Share' },
    { id: 2, key: 'delete', title: 'Delete' },
    { id: 3, key: 'report', title: 'Report' }
]

export const MenuButtonInstance = () => {
    const [disabledKeys, setDisabledKeys] = useState<Set<string>>(new Set<string>(['edit']))
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>([]))
    
    const handleSelectionChange = (selection) => setSelectedKeys(selection)

    return (
        <>
            <MenuButton 
                label="Actions" 
                selectedKeys={selectedKeys} 
                onSelectionChange={handleSelectionChange}
                disabledKeys={disabledKeys}
                onAction={alert}
            >
                <Item key="one">One</Item>
                <Item key="two">Two</Item>
                <Item key="three">Three</Item>
            </MenuButton>
            <p>{[...selectedKeys].length}</p> 
        </>
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