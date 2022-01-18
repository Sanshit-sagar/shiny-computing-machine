
import { Item } from '../index'
import { iconMap } from '../data'
import type { MenuItem } from '../interfaces'
import { LeftSlot, Kbd } from '../styles'

export const menuItemRenderer = (item: MenuItem) =>  (
    <Item 
        childItems={item.children} 
        textValue={item.name}
        key={item.name}
    >
        <LeftSlot>
            {typeof item.icon === 'string' ? iconMap[item.icon] : <> {item.icon} </>} 
            {item.name} 
        </LeftSlot>

        {item.shortcut && (
            <Kbd> {item.shortcut} </Kbd>
        )}
    </Item>
)