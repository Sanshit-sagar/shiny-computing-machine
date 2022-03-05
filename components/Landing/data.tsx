
import { AccordionInstance } from '@/components/Accordion/examples'

import { AvatarInstance, AvatarPairInstance, AvatarStackInstance, BadgeGroupInstance } from '@/components/AvatarGroup/examples'
import { ButtonInstance } from '@/components/Button/examples'
import { BreadcrumbsInstance } from '@/components/Breadcrumbs/examples'
import { RangeCalendarInstance } from '@/components/Calendar/examples'
import { CarouselInstance } from '@/components/Carousel/examples'
import { PopoverInstance } from '@/components/HoverCard/examples'
import { ToggleableInstance } from '@/components/Toggleable/examples'
import { MenuButtonInstance } from '@/components/Menu/examples'
import { AriaAccordionInstance } from '@/components/AriaAccordion/examples'
import { AsyncInstance } from '@/components/Async/examples'
import { TableViewInstance } from '@/components/Table/examples'
import { SplitButtonInstance } from '@/components/SplitButton/examples'
import { AccessibleTabsInstance } from '@/components/Tab/examples'
import { InputInstance } from '@/components/TextField/examples'
import { TextInputInstance } from '@/components/TextInput/examples'
import { TooltipInstance } from '@/components/Tooltipped/examples'
import { DatePickerInstance } from '@/components/DatePicker/examples'
// import { AvatarInstance } from '@/components/Avatar/examples'
import { CheckboxInstance } from '@/components/Checkbox/examples'
import { CheckboxGroupInstance } from '@/components/CheckboxGroup/examples'
import { ColorSliderInstance } from '@/components/ColorSlider/examples'
import { ComboBoxInstance } from '@/components/ComboBox/examples'
import { CountUpInstance } from '@/components/CountUp/examples'
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
import { OrderedListInstance } from '@/components/OrderedList/examples'
import { ProgressBarInstance } from '@/components/ProgressBar/examples'
// import { PopoverInstance } from '@/components/Popover/examples'
import { RadioButtonInstance } from '@/components/RadioGroup/examples'
import { SearchInstance } from '@/components/Search/examples'
import { SearchBarInstance } from '@/components/Searchbar/examples'

import { SelectInstance } from '@/components/Select/examples'
import { SliderInstance } from '@/components/Slider/examples' 
import { SpinnerInstance } from '@/components/Spinner/examples'
import { SwitchInstance } from '@/components/Switch/examples'
import { StarRatingInstance } from '@/components/StarRating/examples'
import { TabsInstance } from '@/components/Tabs/examples'
import { TextAreaInstance } from '@/components/TextArea/examples'
import { PopperInstance } from '@/components/Popper/examples'

// import { TooltipInstance } from '@/components/Tooltip/examples'
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
    CollapseIcon,
    ListIcon,
    TableIcon
} from '@/components/Icons'

export const showcases: IShowcase[] = [{
        element: <AriaAccordionInstance />,
        name: 'Accordion',
        description: 'did it strike a-cord-in your heart?',
        icon: <CollapseIcon />
    }, {
        element: <AvatarStackInstance />,
        name: 'Avatar',
        description: '',
        icon: <AvatarIcon />   
    }, {
        element: <BreadcrumbsInstance />,
        name: 'Breadcrumbs',
        description: '',
        icon: <LinkIcon />
    }, {
        element: <ButtonInstance />,
        name: 'Button', 
        description: '',
        icon: <ButtonIcon />
    }, {
        element: <RangeCalendarInstance />,
        name: 'Calendar',
        description: '',
        icon: <MonthlyCalendarIcon />
    }, {
        element: <CheckboxGroupInstance />,
        name: 'Checkbox Group',
        description: '',
        icon: <CheckboxIcon /> 
    }, {
        element: <TextInputInstance />,
        name: 'Input',
        description: '',
        icon: <TextInputIcon />
    }, {
        element: <SwitchInstance />,
        name: 'Switch',
        description: '',
        icon: <SwitchIcon /> 
    }, {
        element: <TooltipInstance />,
        name: 'Tooltip',
        description: '',
        icon: <TooltipIcon />
    }, {
        element: <PopperInstance />,
        name: 'Popover',
        description: '',
        icon: <PopoverIcon />
    }
]

