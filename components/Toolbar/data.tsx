
import {
    FontBoldIcon,
    FontItalicIcon,
    StrikethroughIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
    TextAlignCenterIcon,
    TextAlignJustifyIcon,  
    TextIcon,
    PilcrowIcon,
    HeadingIcon,
    UnderlineIcon,
    FontFamilyIcon,
    LetterCaseUppercaseIcon,
    LetterCaseLowercaseIcon
} from '@radix-ui/react-icons'

import { 
    ToggleItem,  
    ToggleGroupChild,
    ToggleGroupParent
} from './interfaces'


export const toggleGroup1Items: Array<ToggleItem> = [
    { name: 'Bold', icon: <FontBoldIcon /> },
    { name: 'Italic', icon: <FontItalicIcon /> },
    { name: 'Strikethrough', icon: <StrikethroughIcon /> },
    { name: 'Underline', icon: <UnderlineIcon /> }
];

export const toggleGroup2Items: Array<ToggleItem> = [
    { name: 'AlignLeft', icon: <TextAlignLeftIcon /> },
    { name: 'AlignCenter', icon: <TextAlignCenterIcon /> },
    { name: 'AlignRight', icon: <TextAlignRightIcon /> },
    { name: 'AlignJustify', icon: <TextAlignJustifyIcon /> },
];

export const toggleGroup3Items: Array<ToggleItem> = [
    { name: 'Text', icon: <TextIcon /> },
    { name: 'Paragraph', icon: <PilcrowIcon /> },
    { name: 'Heading', icon: <HeadingIcon /> },
    { name: 'FontFamily', icon: <FontFamilyIcon /> },
    { name: 'Uppercase', icon: <LetterCaseUppercaseIcon /> },
    { name: 'Lowercase', icon: <LetterCaseLowercaseIcon /> }
];

export const toggleGroup1: ToggleGroupChild = {
    name: 'toggleGroup1',
    showLabel: true,
    orientation: 'horizontal',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
    overflowY: 'hidden',
    overflowX: 'hidden',
    children: [...toggleGroup1Items],
};

export const toggleGroup2: ToggleGroupChild = {
    name: 'toggleGroup2',
    showLabel: true,
    orientation: 'horizontal',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
    overflowY: 'hidden',
    overflowX: 'hidden',
    children: [...toggleGroup2Items],
};

export const toggleGroup3: ToggleGroupChild = {
    name: 'toggleGroup2',
    showLabel: true,
    orientation: 'horizontal',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
    overflowY: 'hidden',
    overflowX: 'hidden',
    children: [...toggleGroup3Items],
};

export const toolbarData: ToggleGroupParent = {
    name: 'toggleGroups',
    showLabel: false,
    orientation: 'horizontal',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'flex-start',
    overflowY: 'hidden',
    overflowX: 'hidden',
    children: [{
        ...toggleGroup1
    }, {
        ...toggleGroup2
    }, {
        ...toggleGroup3
    }]
}