import { Key, useState, ReactNode } from 'react'

import { Item, Section } from 'react-stately'

import Sidebar from './index'
import { ExampleBase } from '@/components/ExampleBase'
import { DarkMode } from '@/components/DarkMode'
import { SearchAutocomplete } from '@/components/Search'
import Label from '@/components/ListBox/Label'

import { 
    SliderIcon as SidebarIcon,  
} from '@radix-ui/react-icons'
import { menuItemRenderer } from './renderers'

import { KeyIcon, KeyboardIcon } from '@/components/Icons'

const TextInputIcon = () => <i className="bi bi-input-cursor"></i>
const TextAreaIcon = () => <i className="bi bi-textarea-resize"></i>
const NumberFieldIcon = () =>  <i className="bi bi-123"></i>
const InlineEditIcon = () => <i className="bi bi-textarea-t"></i>

const CheckboxIcon = () => <i className="bi bi-check2"></i>
const SwitchIcon = () =>  <i className="bi bi-toggle-on"></i>

const SwitchGroupIcon = () =>  <i className="bi bi-toggles"></i>
const RadioListIcon = () =>  <i className="bi bi-ui-radios"></i>

const SliderGroupIcon = () => <i className="bi bi-sliders"></i>
const TagIcon = () =>  <i className="bi bi-tag"></i>
const TagsIcon = () => <i className="bi bi-tags"></i>
const SearchIcon = () =>  <i className="bi bi-search"></i>
const ColorPaletteIcon = () =>  <i className="bi bi-palette"></i>

const DialogIcon = () => <i className="bi bi-front"></i>
const PopoverIcon = () => <i className="bi bi-menu-up"></i>
const TooltipIcon = () => <i className="bi bi-chat-square"></i>

const SplitAreaIcon = () => <i className="bi bi-terminal-split"></i>
const ScrollAreaIcon = () => <i className="bi bi-arrows-fullscreen"></i>
const BlockquoteIcon = () => <i className="bi bi-blockquote-left"></i>
const BadgeIcon = () => <i className="bi bi-bookmark-fill"></i>
const AvatarIcon = () => <i className="bi bi-person-circle"></i>

const MonthlyCalendarIcon = () => <i className="bi bi-calendar2-event-fill"></i>
const RangeCalendarIcon = () => <i className="bi bi-calendar3-range-fill"></i>
const DatedCalendarIcon = () => <i className="bi bi-calendar-date-fill"></i>

const withSection = [
    { name: 'Components', children: [
        { name: 'Editables', icon: <TextInputIcon />, children: [
            { name: 'Text', icon: <TextInputIcon /> },
            { name: 'Number', icon: <NumberFieldIcon /> },
            { name: 'Date', icon: <DatedCalendarIcon /> },
            { name: 'Tag', icon: <TagsIcon /> },
            { name: 'PIN Code', icon: <KeyIcon />, href: '/demos/PinCode' },
            { name: 'Text Area', icon: <TextAreaIcon /> },
            { name: 'Inline Edit', icon: <InlineEditIcon /> } 
        ]},
        { name: 'Toggleables', icon: <SwitchGroupIcon />, children: [
            { name: 'Checkbox', icon: <CheckboxIcon /> },
            { name: 'Radio', icon: <RadioListIcon /> },
            { name: 'Switch', icon: <SwitchIcon /> }
        ]},
        { name: 'Rangeables', icon: <SliderGroupIcon />, children: [
            { name: 'Slider', icon: <SliderGroupIcon /> },
            { name: 'Color Slider', icon: <ColorPaletteIcon /> },
            { name: 'Range Calendar', icon: <RangeCalendarIcon /> }
        ]},
        { name: 'Floatables', icon: <TooltipIcon />, children: [
            { name: 'Tooltip', icon: <TooltipIcon /> },
            { name: 'Popover', icon: <PopoverIcon /> },
            { name: 'Dialog', icon: <DialogIcon /> },
            { name: 'Calendar', icon: <MonthlyCalendarIcon /> }
        ]},
        { name: 'Miscellenous', icon: <TooltipIcon />,  children: [
            { name: 'Scroll Area', icon: <ScrollAreaIcon /> },
            { name: 'Split Area', icon: <SplitAreaIcon /> },
            { name: 'Blockquote', icon: <BlockquoteIcon /> },
            { name: 'Avatar', icon: <AvatarIcon /> },
            { name: 'Tag', icon: <TagIcon /> },
            { name: 'Kbd', icon: <KeyboardIcon />, href: '/demos/Kbd' },
            { name: 'Badge', icon: <BadgeIcon /> }
        ]},
    ]}
]

type SearchableItem = { 
    name: string; 
    icon: ReactNode; 
}

const searchableItems: SearchableItem[] = [
    { name: 'Text', icon: <TextInputIcon /> },
    { name: 'Number', icon: <NumberFieldIcon /> },
    { name: 'Date', icon: <DatedCalendarIcon /> },
    { name: 'Tag', icon: <TagsIcon /> },
    { name: 'PIN Code', icon: <KeyIcon /> },
    { name: 'Text Area', icon: <TextAreaIcon /> },
    { name: 'Inline Edit', icon: <InlineEditIcon /> },
    { name: 'Checkbox', icon: <CheckboxIcon /> },
    { name: 'Radio', icon: <RadioListIcon /> },
    { name: 'Switch', icon: <SwitchIcon /> },
    { name: 'Slider', icon: <SliderGroupIcon /> },
    { name: 'Color Slider', icon: <ColorPaletteIcon /> },
    { name: 'Range Calendar', icon: <RangeCalendarIcon /> },
    { name: 'Tooltip', icon: <TooltipIcon /> },
    { name: 'Popover', icon: <PopoverIcon /> },
    { name: 'Dialog', icon: <DialogIcon /> },
    { name: 'Calendar', icon: <MonthlyCalendarIcon /> },
    { name: 'Scroll Area', icon: <ScrollAreaIcon /> },
    { name: 'Split Area', icon: <SplitAreaIcon /> },
    { name: 'Blockquote', icon: <BlockquoteIcon /> },
    { name: 'Avatar', icon: <AvatarIcon /> },
    { name: 'Tag', icon: <TagIcon /> },
    { name: 'Kbd', icon: <KeyboardIcon /> },
    { name: 'Badge', icon: <BadgeIcon /> }
]

const searchAutoCompleteRenderer = (item: SearchableItem) => (
    <Item key={item.name}>
        <div> {item.icon} </div>
        <div>
            <Label> {item.name} </Label>
        </div>
    </Item>
)

export const SearchWithoutSections = () => (
    <SearchAutocomplete 
        items={searchableItems} 
        allowsCustomValue={false}
    >
        {(item) => searchAutoCompleteRenderer(item)}
    </SearchAutocomplete>
)


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

const SidebarFooter = () => <DarkMode />

export const SidebarInstance = () => (
    <SidebarWithSections 
        header={<SearchWithoutSections />}
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