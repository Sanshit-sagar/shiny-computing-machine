
import { AccordionInstance } from '@/components/Accordion/examples'
import { ButtonsInstance } from '@/components/Buttons/examples'
import { BreadcrumbsInstance } from '@/components/Breadcrumbs/examples'
import { RangeCalendarInstance } from '@/components/Calendar/examples'
import { CarouselInstance } from '@/components/Carousel/examples'

import { ToggleableInstance } from '@/components/Toggleable/examples'
import { SelectorInstance } from '@/components/Selector/examples'
import { AvatarInstance } from '@/components/Avatar/examples'
import { CheckboxGroupInstance } from '@/components/CheckboxGroup/examples'
import { ColorSliderInstance } from '@/components/ColorSlider/examples'
import { ComboBoxInstance } from '@/components/ComboBox/examples'
import { DialogInstance } from '@/components/Dialog/examples'
import { InlineCodeInstance } from '@/components/InlineCode/examples'
import { InlineEditInstance } from '@/components/LinedEdit/examples'
import { KbdInstance } from '@/components/Kbd/KbdInstance'
import { LinkInstance } from '@/components/Link/examples'
import { ChipInstance } from '@/components/Chip/examples'
import { MenewInstance } from '@/components/Menew/examples'
import { MultiToggleInstance } from '@/components/MultiToggle/examples'
import { NumberFieldInstance } from '@/components/NumberField/examples'
import { CodeInputInstance } from '@/components/CodeInput/examples'
import { ProgressBarInstance } from '@/components/ProgressBar/examples'
import { PopoverInstance } from '@/components/Popover/examples'
import { RadioButtonInstance } from '@/components/RadioGroup/examples'
import { SearchInstance } from '@/components/Search/examples'
import { SelectInstance } from '@/components/Select/examples'
import { SliderInstance } from '@/components/Slider/examples' 
import { SpinnerInstance } from '@/components/Spinner/examples'
import { SwitchInstance } from '@/components/Switch/examples'
import { StarRatingInstance } from '@/components/StarRating/examples'
import { TabsInstance } from '@/components/Tabs/examples'
import { TextAreaInstance } from '@/components/TextArea/examples'
import { TextInputInstance } from '@/components/TextInput/examples'
import { TooltipInstance } from '@/components/Tooltip/examples'
import { TreeInstance } from '@/components/TreeView/examples'

import { ShapeInstances } from '@/components/Shape/examples'
import { IShowcase } from './types'

import { AvatarIcon } from '@radix-ui/react-icons'
import {
    KeyIcon,
    KeyboardIcon,
    ButtonIcon,
    CheckboxIcon,
    TextAreaIcon,
    TextInputIcon,
    NumberFieldIcon,
    MonthlyCalendarIcon,
    ColorPaletteIcon,
    DialogIcon,
    PopoverIcon,
    TooltipIcon,
    SwitchIcon,
    RadioListIcon,
    InlineCodeIcon,
    InlineEditIcon,
    MagnifyingGlassIcon,
    SliderGroupIcon,
    HourglassIcon, 
    HalfStarIcon,
    SelectIcon,
    DropdownMenuIcon,
    GuageIcon,
    TreeIcon, 
    TabsIcon,
    LinkIcon,
    CarouselIcon,
    ComboBoxIcon,
    CollapseIcon
} from '@/components/Icons'

export const showcases: IShowcase[] = [{
        element: <AccordionInstance />,
        name: 'Accordion',
        description: 'did it strike a-cord-in your heart?',
        icon: <CollapseIcon />
    }, {
        element: <AvatarInstance />,
        name: 'Avatar',
        description: '',
        icon: <AvatarIcon />
    }, {
        element: <BreadcrumbsInstance />,
        name: 'Breadcrumbs',
        description: 'soft flaky crumbles',
        icon: <TabsIcon /> 
    }, {
        element: <ButtonsInstance />,
        name: 'Buttons',
        description: '',
        icon: <ButtonIcon /> 
    },{
        element: <RangeCalendarInstance />,
        name: 'Calendar',
        description: 'every night is a date with this one',
        align: 'start',
        icon: <MonthlyCalendarIcon />
    }, {
        element: <CarouselInstance />,
        name: 'Carousel',
        description: 'really cares to sell itself',
        icon: <CarouselIcon />  
    }, {
        element: <CheckboxGroupInstance />,
        name: 'Checkbox Group',
        description: 'checks all the boxes',
        icon: <CheckboxIcon />
    }, {
        element: <ChipInstance />,
        name: 'Chip',
        description: '',
        icon: <ButtonIcon />  
    }, {
        element: <ColorSliderInstance />,
        name: 'Color Slider',
        description: '',
        icon: <ColorPaletteIcon />
    }, {
        element: <ComboBoxInstance />,
        name: 'Combo Box', 
        description: '',
        icon: <ComboBoxIcon />
    }, {
        element: <DialogInstance defaultOpen={false} />,
        name: 'Dialog',
        description: '',
        icon: <DialogIcon /> 
    }, {
        element: <InlineCodeInstance />,
        name: 'Inline Code', 
        description: '',
        icon: <InlineCodeIcon /> 
    }, {
        element: <InlineEditInstance />,
        name: 'Inline Edit',
        description: ``,
        icon: <InlineEditIcon /> 
    }, {
        element: <KbdInstance />,
        name: 'Kbd',
        description: '',
        icon: <KeyboardIcon />
     }, {
        element: <LinkInstance />,
        name: 'Link',
        description: '',
        icon: <LinkIcon />
     }, {
        element: <MenewInstance />,
        name: 'Menu',
        description: 'much better than the old one',
        align: 'start',
        icon: <DropdownMenuIcon />
    }, {
        element: <NumberFieldInstance />,
        name: 'NumberField',
        description: '',
        icon: <NumberFieldIcon />
    }, {
        element: <MultiToggleInstance />,
        name: 'MultiToggle',
        description: 'cause one toggle wasnt enough',
        icon: <TabsIcon />
    }, {
        element: <CodeInputInstance />,
        name: 'Pin Code',
        description: '',
        icon: <KeyIcon />
    }, {
        element: <PopoverInstance />,
        name: 'Popover',
        description: '',
        icon: <PopoverIcon /> 
    }, {
        element: <ProgressBarInstance />,
        name: 'ProgressBar',
        description: '',
        icon: <GuageIcon />
    }, {
        element: <RadioButtonInstance />,
        name: 'Radio Group',
        description: 'WANTED for killing the video star',
        icon: <RadioListIcon /> 
    }, {
        element: <SearchInstance />,
        name: 'Search',
        description: '',
        icon: <MagnifyingGlassIcon />
    }, {
        element: <SelectorInstance />,
        name: 'Select',
        description: '',
        icon: <SelectIcon />
    }, {
        element: <SliderInstance />,
        name: 'Slider',
        description: '',
        icon: <SliderGroupIcon /> 
    }, {
        element: <SpinnerInstance />,
        name: 'Spinner',
        description: '',
        icon: <HourglassIcon />,
    }, {
        element: <StarRatingInstance />,
        name: 'Star Rating',
        description: `Killed on video by the Radio back in '52`,
        icon: <HalfStarIcon />,
    }, {
        element: <SwitchInstance />,
        name: 'Switch',
        description: '',
        icon: <SwitchIcon /> 
    }, {
        element: <TabsInstance />,
        name: 'Tabs',
        description: '',
        icon: <TabsIcon />
    }, {
        element: <TextAreaInstance />,
        name: 'Text Area',
        description: '',
        icon: <TextAreaIcon />
    }, {
        element: <TextInputInstance />,
        name: 'Text Input',
        description: 'text goes in, poo comes out',
        icon: <TextInputIcon /> 
    },{
        element: <TooltipInstance />,
        name: 'Tooltip',
        description: 'Cooltip: hover the button for a tooltip',
        icon: <TooltipIcon /> 
    }, {
        element: <TreeInstance />,
        name: 'Tree',
        description: '',
        icon: <TreeIcon />
    }
]

