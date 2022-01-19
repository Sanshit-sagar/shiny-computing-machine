import { Key, useState } from 'react'

import { Item, Section } from 'react-stately'

import Sidebar from './index'
import { ExampleBase } from '@/components/ExampleBase'
import { SliderIcon as SidebarIcon } from '@radix-ui/react-icons'
import { menuItemRenderer } from './renderers'

const TextInputIcon = () => <i className="bi bi-input-cursor"></i>
const TextAreaIcon = () => <i className="bi bi-textarea-t"></i>
const NumberFieldIcon = () =>  <i className="bi bi-123"></i>
const CheckboxIcon = () => <i className="bi bi-check2"></i>
const CheckboxItemIcon = () =>  <i className="bi bi-check2-square"></i>
const CheckboxListIcon = () =>  <i className="bi bi-ui-checks"></i>
const CheckboxGridIcon = () =>  <i className="bi bi-ui-checks-grid"></i>
const SwitchIcon = () =>  <i className="bi bi-toggle-on"></i>
const SwitchGroupIcon = () =>  <i className="bi bi-toggles"></i>
const RadioListIcon = () =>  <i className="bi bi-ui-radios"></i>
const RadioGridIcon = () =>  <i className="bi bi-ui-radios-grid"></i>
const SliderGroupIcon = () => <i className="bi bi-sliders"></i>
const TagIcon = () =>  <i className="bi bi-tag"></i>
const SearchIcon = () =>  <i className="bi bi-search"></i>
const ColorPaletteIcon = () =>  <i className="bi bi-palette"></i>
const ColorPickerIcon = () => <i className="bi bi-eyedropper"></i>

const withSection = [
    { name: 'Form Elements', children: [
        { name: 'Text Field', icon: <TextInputIcon /> },
        { name: 'Text Area', icon: <TextAreaIcon /> },
        { name: 'Number Field', icon: <NumberFieldIcon /> },
        { name: 'Checkbox', icon: <CheckboxIcon />, children: [
            { name: 'Checkbox Item', icon: <CheckboxItemIcon /> },
            { name: 'Checkbox List', icon: <CheckboxListIcon /> },
            { name: 'Checkbox Grid', icon: <CheckboxGridIcon /> },
        ]},
        { name: 'Radio', icon: <RadioListIcon />, children: [
            { name: 'Radio Item', icon: <RadioListIcon /> },
            { name: 'Radio Group', icon: <RadioGridIcon /> },
        ]},
        { name: 'Switch', icon: <SwitchIcon />, children: [
            { name: 'Switch Item', icon: <SwitchIcon /> },
            { name: 'Switch Group', icon: <SwitchGroupIcon /> },
        ]},
        {name: 'Range', icon: <SliderGroupIcon />, children: [
            {name: 'Single Thumb Slider', icon: <SliderGroupIcon /> },
            {name: 'Multi Thumb Slider', icon: <SliderGroupIcon /> },
        ]},
        { name: 'Tag', icon: <TagIcon />, children: [
            { name: 'Tag Item', icon: <TagIcon /> },
            { name: 'Tag Group' }
        ]},
        { name: 'Color', icon: <ColorPaletteIcon />, children: [
            { name: 'Color Slider', icon: <SliderGroupIcon />, },
            { name: 'Color Wheel',  }
        ]}
    ]},
    { name: 'DOM Elements', children: [
        { name: 'Tooltip', children: [
            { name: 'Tooltip' },
            { name: 'Tooltip Trigger' },
        ]},
        { name: 'Popover', children: [
            { name: 'Popover' },
            { name: 'Popver Trigger' },
        ]},
        { name: 'Dialog', children: [
            { name: 'Dialog' },
            { name: 'Alert' },
            { name: 'Dialog Trigger' },
        ]},
        { name: 'Overlay' },
    ]}
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
           items={withSection}
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
            component={<SidebarWithSections />}
            icon={<SidebarIcon />}
            controls={[]}
        />
    )
}

export default ExampleSidebar