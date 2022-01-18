import React from 'react'

import { BlendingModeIcon } from '@radix-ui/react-icons'

import { MenuItem, MenuSection } from '@/components/Menew/interfaces'
import { Menu as MenuList, MenuTrigger, Section, menuItemWrapper } from '@/components/Menew' 
import { FocusStrategy } from '@/interfaces/Shared'

interface MenuControllerProps {
    id?: string;
    items: MenuSection[];
    selectionMode?: "single" | "multiple";
    defaultSelectedKeys?: Iterable<React.Key> | "all";
    selectedKeys?: Iterable<React.Key> | "all";
    disabledKeys?: Iterable<React.Key> | "all";
    onSelectionChange?: (selection: Iterable<React.Key> | "all") => void;
    onAction?: (key: React.Key) => void;
    shouldFocusWrap?: boolean;
    autoFocus?: boolean | FocusStrategy;
    isVirtualized?: boolean;
    disallowEmptySelection?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string; 
}

export interface MenuFieldProps extends MenuControllerProps {
    type: 'menu'; 
    name: string;
    description: string; 
}

interface MenuTriggerProps extends MenuControllerProps {
    name: string;
    description: string; 
}
const extractSelection = (val: 'all' | Iterable<React.Key>): string => {
    const updatedValue = typeof val === 'string' ? val : new Set(val).entries().next().value
    return !updatedValue ? '' : updatedValue[0]
}

const SectionedMenu = ({ 
    items, 
    name, 
    description,
    selectionMode = "single", 
    selectedKeys, 
    disabledKeys, 
    onAction,
    onSelectionChange,
    ...props
}: MenuTriggerProps) => (

    <MenuTrigger label={extractSelection(selectedKeys)} closeOnSelect={true}> 
        <MenuList 
            items={items} 
            onAction={onAction}
            selectionMode={selectionMode}
            selectedKeys={selectedKeys}
            onSelectionChange={onSelectionChange}
        >
            {(item: MenuSection) => (
                <Section 
                    key={item.name} 
                    items={item.children} 
                    title={item.name}
                >
                    {(item: MenuItem) => menuItemWrapper(item)}
                </Section>
            )}
        </MenuList>  
    </MenuTrigger>
)

export const MenuTriggerField = (props: MenuTriggerProps) => <SectionedMenu {...props} /> 

export const MenuWrapper = ({
    id,
    name = 'Menu',
    description = 'Menu Description',
    items,
    selectedKeys = new Set<React.Key>([]),
    disabledKeys = new Set<React.Key>([]),
    selectionMode = "single",
    onSelectionChange,
    onAction,
    autoFocus = false,
    isVirtualized = false,
    shouldFocusWrap = false,
    disallowEmptySelection = false,
}: MenuTriggerProps) => (
    <MenuTriggerField
        name={name}
        description={description}
        items={items}
        selectionMode={selectionMode}
        selectedKeys={selectedKeys} 
        onSelectionChange={onSelectionChange}
        onAction={onAction}
        disabledKeys={disabledKeys}
        autoFocus={autoFocus}
        shouldFocusWrap={shouldFocusWrap}
        isVirtualized={isVirtualized}
        disallowEmptySelection={disallowEmptySelection}
    />
)

const Menu = (props: MenuTriggerProps) => {
    return  <MenuWrapper {...props} /> 
}

export default Menu

export const ThemeSelectionMenu = () => {

    const themeSelectionItems: MenuSection[] = [
        { name: 'Colors', children: [
            { name: 'en-US', icon: <BlendingModeIcon />, shortcut: '' },
            { name: 'es-ES', icon: <BlendingModeIcon />, shortcut: '' },
            { name: 'ja-JP', icon: <BlendingModeIcon />, shortcut: '' }
        ]
    }]

    const [selectedKeys, setSelectedKeys] = React.useState<Set<React.Key>>(new Set([]))
   
    const handleSelectionChange = (updatedSelection) => setSelectedKeys(updatedSelection)

    return (
        <SectionedMenu
            items={themeSelectionItems}
            selectedKeys={selectedKeys}
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
        />
    )
}