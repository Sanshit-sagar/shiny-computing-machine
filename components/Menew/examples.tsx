import React, { useState, Key } from 'react'
import { DropdownMenuIcon } from '@radix-ui/react-icons'

import type { Selection } from '@/interfaces/Selection'
import { ExampleBase } from '@/components/ExampleBase'

import { actionsAndAlignments } from './data'
import { Menu, MenuTrigger, Section } from './index'
import type { MenuSection } from './interfaces'
import { menuItemRenderer } from './Elements/renderer'

export const TriggerMenuExample = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
 
    const handleAction = (key: Key) => console.log(`Action by item with key: ${key}`)
    const handleSelectionChange = (keys: Selection) => setSelectedKeys(keys)

    return (
        <MenuTrigger>
            <Menu 
                items={actionsAndAlignments} 
                onAction={handleAction}
                selectionMode='multiple'
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
            >
                {(item: MenuSection) => (
                    <Section 
                        key={item.name} 
                        items={item.children} 
                        title={item.name}
                    >
                        {(item) => menuItemRenderer(item)}
                    </Section>
                )}
            </Menu>       
        </MenuTrigger>
    )
}

export const MenewInstance = () => <TriggerMenuExample />

const ExampleMenew = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    const controls = [{
        type: 'switch',
        value: isDisabled,
        onChange: (val: boolean) => setIsDisabled(val),
        title: 'Disabled',
        description: 'Disable the menu',
        isDisabled: false
    }]

    return (
        <ExampleBase
            heading={'Menu'}
            description={'Menu description'}
            icon={<DropdownMenuIcon />}
            component={<MenewInstance />}
            controls={controls}
        />
    );
}

export default ExampleMenew