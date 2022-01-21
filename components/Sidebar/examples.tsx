import { Key, useState } from 'react'

import { Item, Section } from 'react-stately'

import Sidebar from './index'
import { ExampleBase } from '@/components/ExampleBase'
import { DarkMode } from '@/components/DarkMode'
import { Flex } from '@/components/Flex'
import PButton from '@/components/Button'

import { 
    SliderIcon as SidebarIcon, 
    HomeIcon 
} from '@radix-ui/react-icons'
import { menuItemRenderer } from './renderers'

import { KeyIcon, KeyboardIcon } from '@/components/Icons'

const TextInputIcon = () => <i className="bi bi-input-cursor"></i>
const TextAreaIcon = () => <i className="bi bi-textarea-resize"></i>
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
const TagsIcon = () => <i className="bi bi-tags"></i>
const SearchIcon = () =>  <i className="bi bi-search"></i>
const ColorPaletteIcon = () =>  <i className="bi bi-palette"></i>
const ColorPickerIcon = () => <i className="bi bi-eyedropper"></i>

const DialogIcon = () => <i className="bi bi-front"></i>
const PopoverIcon = () => <i className="bi bi-menu-up"></i>
const TooltipIcon = () => <i className="bi bi-chat-square"></i>
const AlertIcon = () => <i className="bi bi-exclamation-square-fill"></i>
const TriggerIcon = () => <i className="bi bi-mouse2-fill"></i>

const MonthlyCalendarIcon = () => <i className="bi bi-calendar2-event-fill"></i>
const RangeCalendarIcon = () => <i className="bi bi-calendar3-range-fill"></i>
const DateInputIcon = () => <i className="bi bi-input-cursor"></i>
const DatedCalendarIcon = () => <i className="bi bi-calendar-date-fill"></i>

const withSection = [
    { name: 'Components', children: [
        { name: 'Text Field', icon: <TextInputIcon /> },
        { name: 'Number Field', icon: <NumberFieldIcon /> },
        { name: 'Text Area', icon: <TextAreaIcon /> },
        { name: 'Checkbox Item', icon: <CheckboxItemIcon /> },
        { name: 'Checkbox List', icon: <CheckboxListIcon /> },
        { name: 'Checkbox Grid', icon: <CheckboxGridIcon /> },
        { name: 'Radio Item', icon: <RadioListIcon /> },
        { name: 'Radio Group', icon: <RadioGridIcon /> },
        { name: 'Switch Item', icon: <SwitchIcon /> },
        { name: 'Switch Group', icon: <SwitchGroupIcon /> },
        { name: 'Single Slider', icon: <SliderGroupIcon /> },
        { name: 'Range Slider', icon: <SliderGroupIcon /> },
        { name: 'Tag Item', icon: <TagIcon /> },
        { name: 'Tag Group', icon: <TagsIcon /> },
        { name: 'PIN Code', icon: <KeyIcon />, href: '/demos/PinCode' },
        { name: 'Keyboard', icon: <KeyboardIcon />, href: '/demos/Kbd' },
        { name: 'Color Slider', icon: <SliderGroupIcon /> },
        { name: 'Tooltip', icon: <TooltipIcon /> },
        { name: 'Popover', icon: <PopoverIcon /> },
        { name: 'Dialog', icon: <DialogIcon /> },
        { name: 'Calendar', icon: <MonthlyCalendarIcon /> },
        { name: 'Range Calendar', icon: <RangeCalendarIcon /> },
    ]}
];

export const SidebarWithSections = ({ header = null, footer = null }) => {
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
            header={header}
            footer={footer}
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

const SidebarFooter = () => (
    
        <DarkMode />
    
)

export const SidebarInstance = () => (
    <SidebarWithSections 
        footer={<SidebarFooter />}
    />
)

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


// { name: 'Selectors', children: [
    // { name: 'Dropdown Menu' },
    // { name: 'Search / Autocomplete' },
    // { name: 'Picker' },
    // { name: 'ComboBox' },
    // { name: 'ListBox' },
    // { name: 'Multi Toggle' },
    // { name: 'Tabs' },
// ]}, 
// { name: 'Collapsible', children: [
    // { name: 'Accordion' },
    // { name: 'Sidebar' },
    // { name: 'Tree' },
// ]}