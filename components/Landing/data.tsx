
import { AccordionInstance } from '@/components/Accordion/examples'
import { BreadcrumbsInstance } from '@/components/Breadcrumbs/examples'
import { RangeCalendarInstance } from '@/components/Calendar/examples'
import { CarouselInstance } from '@/components/Carousel/examples'
import { CheckboxGroupInstance } from '@/components/CheckboxGroup/examples'
import { InlineEditInstance } from '@/components/LinedEdit/examples'
import { KbdInstance } from '@/components/Kbd/examples'
import { LinkInstance } from '@/components/Link/examples'
import { MenewInstance } from '@/components/Menew/examples'
import { MultiToggleInstance } from '@/components/MultiToggle/examples'
import { NumberFieldInstance } from '@/components/NumberField/examples'
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


import { IShowcase } from './types'

const showcases: IShowcase[] = [{
        element: <AccordionInstance />,
        name: 'Accordion',
        description: 'did it strike a-cord-in your heart?'
    },{
        element: <BreadcrumbsInstance />,
        name: 'Breadcrumbs',
        description: 'soft flaky crumbles'
    }, {
        element: <RangeCalendarInstance />,
        name: 'Calendar',
        description: 'every night is a date with this one',
        align: 'start'
    }, {
        element: <CarouselInstance />,
        name: 'Carousel',
        description: 'not like the one at the circus' 
    }, {
        element: <CheckboxGroupInstance />,
        name: 'Checkbox Group',
        description: 'this one checks all the boxes'
    }, {
        element: <InlineEditInstance />,
        name: 'Inline Edit',
        description: ``
    }, {
        element: <KbdInstance />,
        name: 'Kbd',
        description: '',
     }, {
        element: <LinkInstance />,
        name: 'Link',
        description: ''
     }, {
        element: <MenewInstance />,
        name: 'Menu',
        description: 'much better than the old one'
    }, {
        element: <NumberFieldInstance />,
        name: 'NumberField',
        description: ''
    }, {
        element: <MultiToggleInstance />,
        name: 'MultiToggle',
        description: 'cause one toggle wasnt enough'
    }, {
        element: <PopoverInstance />,
        name: 'Popover',
        description: ''
    }, {
        element: <ProgressBarInstance />,
        name: 'ProgressBar',
        description: ''
    }, {
        element: <RadioButtonInstance />,
        name: 'Radio Group',
        description: 'WANTED for killing the video star'
    }, {
        element: <SearchInstance />,
        name: 'Search',
        description: '' 
    }, {
        element: <SelectInstance />,
        name: 'Select',
        description: ''
    }, {
        element: <SliderInstance />,
        name: 'Slider',
        description: ''
    }, {
        element: <SpinnerInstance />,
        name: 'Spinner',
        description: '' 
    }, {
        element: <StarRatingInstance />,
        name: 'Star Rating',
        description: `Killed on video by the Radio back in '52`
    }, {
        element: <SwitchInstance />,
        name: 'Switch',
        description: ''
    }, {
        element: <TabsInstance />,
        name: 'Tabs',
        description: '',
    }, {
        element: <TextAreaInstance />,
        name: 'Text Area',
        description: ''
    }, {
        element: <TextInputInstance />,
        name: 'Text Input',
        description: 'text goes in, poo comes out'  
    },{
        element: <TooltipInstance />,
        name: 'Tooltip',
        description: 'Cooltip: hover the button for a tooltip'
    }, {
        element: <TreeInstance />,
        name: 'Tree',
        description: ''
    }
]

export default showcases