import { Item, Section } from '@react-stately/collections'

// import { Menu } from './Menu'
// import { MenuItem } from './MenuItem'
// import { MenuSection } from './MenuSection '

import { MenuPopup } from './MenuPopup'
import { MenuButton } from './MenuButton'
import { MenuSeparator } from './MenuSeparator'
import { MenuButtonArrow } from './MenuButtonArrow'

import { MenuItemTitle } from './MenuItemTitle'
import { MenuItemShortcut } from './MenuItemShortcut'
import { MenuItemIndicator } from './MenuItemIndicator'


const MenuItem = {
    Root: Item,
    Title: MenuItemTitle,
    Shortcut: MenuItemShortcut,
    Indicator: MenuItemIndicator
}

export default MenuItem