
import { 
    ClipboardCopyIcon, 
    PauseIcon, 
    StarIcon,
    BackpackIcon,
    BookmarkIcon,
    TextAlignLeftIcon, 
    TextAlignRightIcon, 
    TextAlignCenterIcon
} from '@radix-ui/react-icons'

import type { MenuSection } from './interfaces'

export const iconMap = {
    'Copy': <ClipboardCopyIcon />,
    'Cut': <PauseIcon />,
    'Paste': <StarIcon />,
    'AlignLeft': <TextAlignLeftIcon />,
    'AlignCenter': <TextAlignCenterIcon />,
    'AlignRight': <TextAlignRightIcon />,
    'Blower': <BackpackIcon />,
    'Book': <BookmarkIcon />,
}


export const actionsAndAlignments: MenuSection[] = [
    {name: 'Actions', children: [
      {name: 'Copy', icon: 'Copy', shortcut: '⌘C'},
      {name: 'Cut', icon: 'Cut', shortcut: '⌘X'},
      {name: 'Paste', icon: 'Paste', shortcut: '⌘V'}
    ]},
    {name: 'Alignment', children: [
      {name: 'Left', icon: 'AlignLeft', shortcut: '⌘L'},
      {name: 'Center', icon: 'AlignCenter', shortcut: '⌘C'},
      {name: 'Right', icon: 'AlignRight', shortcut: '⌘R'}
    ]}
]