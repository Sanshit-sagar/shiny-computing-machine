import { MenuButton } from './MenuButton'
import { Item } from '@react-stately/collections'

export const MenuButtonInstance = () => (
    <MenuButton label="Actions" align="end" direction="right">
        <Item key="copy"> Copy </Item>
        <Item key="cut"> Cut </Item>
        <Item key="paste"> Paste </Item>
    </MenuButton>
)