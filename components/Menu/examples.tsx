import { Key, useState } from 'react' 
import { MenuButton } from './MenuButton'
import { MenuSeparator } from './MenuSeparator'

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
    const [disabledKeys, setDisabledKeys] = useState<Set<string>>(new Set<string>('edit'))
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>())
    
    const handleSelectionChange = (selection) => setSelectedKeys(selection)

    return (
        <MenuButton label="Actions" selectedKeys={[]} onSelectionChange={handleSelectionChange}>
            <Section title="Section 1">
                <Item key="section1-item1">One</Item>
                <Item key="section1-item2">Two</Item>
                <Item key="section1-item3">Three</Item>
            </Section>
            <Section title="Section 2">
                <Item key="section2-item1">One</Item>
                <Item key="section2-item2">Two</Item>
                <Item key="section2-item3">Three</Item>
            </Section>
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