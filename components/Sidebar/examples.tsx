import { Key, useState } from 'react'

import { Item, Section } from 'react-stately'

import Sidebar from './index'
import { ExampleBase } from '@/components/ExampleBase'
import { SliderIcon as SidebarIcon, RocketIcon } from '@radix-ui/react-icons'
import { menuItemRenderer } from './renderers'

type FlatItem = { name: string; }

const flatItems: FlatItem[] = [
    {name: 'Aardvark'},
    {name: 'Kangaroo', children: [
        { name: 'Roo1' },
        { name: 'Roo2' },
    ]},
    {name: 'Snake'},
    {name: 'Bob the builder'},
    {name: 'Thomas '},
    {name: 'the engine'}
]
const withSection = [
    {name: 'People', children: [
        {name: 'Some more peeps', children: [
            {name: 'Aardvark2'},
            {name: 'Kangaroo2'},
        ]},
        {name: 'Danni'},
        {name: 'Devon'},
        {name: 'Animals', children: [
            {name: 'Aardvark'},
            {name: 'Kangaroo'},
            {name: 'Snake'}
        ]},
    ]},
]

export const StaticSidebarWithSections = () => {
    const [selected, setSelected] = useState<Iterable<Key>>(['foo1'])

    const handleSelectionChange = (selection: 'all' | Iterable<Key>) => (
        setSelected(selection)
    )

    return (
        <Sidebar.Root 
            id="sidebarStaticExample-sections"
            onSelectionChange={handleSelectionChange}
        >
            <Section title="Section 1">
                <Item>Foo 1</Item>
                <Item>Bar 1</Item>
            </Section>
            <Section title="Section 2">
                <Item>Foo 2</Item>
                <Item>
                    <Item>Bar 2</Item>
                    <Item>Bar 2</Item>    
                </Item>
            </Section>
        </Sidebar.Root>
    )
}

export const SidebarWithSections = () => {
    const [selected, setSelected] = useState<Iterable<Key>>(['Kangaroo'])

    const handleSelectionChange = (selection: 'all' | Iterable<Key>) => (
        setSelected(selection)
    )

    return (
        <Sidebar.Root
            id="sidebarProgrammaticExample-sections"
            items={withSection} 
            selectedKeys={selected}
            onSelectionChange={handleSelectionChange}
        >
            {(item) => (
                <Section 
                    key={item.name} 
                    items={item.children} 
                    title={item.name}
                >
                    {(item) => menuItemRenderer(item)}
                </Section>
           )}
         </Sidebar.Root>
    )
}

export const SidebarInstance = () => {
    const [selected, setSelected] = useState<Iterable<Key>>(['Kangaroo'])

    const handleSelectionChange = (selection: 'all' | Iterable<Key>) => (
        setSelected(selection)
    )

    return (
       <Sidebar.Root 
           id="sidebarProgrammaticExample-items" 
           items={flatItems}
           selectedKeys={selected}
           onSelectionChange={handleSelectionChange}
       >
            {(item) => menuItemRenderer(item)}
       </Sidebar.Root>
    )
}

const ExampleSidebar = () => {


    return (
        <ExampleBase 
            heading={'Sidebar'}
            description=""
            component={<SidebarInstance />}
            icon={<SidebarIcon />}
            controls={[]}
        />
    )
}

export default ExampleSidebar