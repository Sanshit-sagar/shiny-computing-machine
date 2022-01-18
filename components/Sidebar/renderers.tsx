import { Item } from '@react-stately/collections'
import { LeftSlot } from './styles'
import { RocketIcon } from '@radix-ui/react-icons'

export const menuItemRenderer = (item) =>  (
    <Item 
        childItems={item.children} 
        textValue={item.name}
        key={item.name}
    >
        <LeftSlot>
            <RocketIcon />
            {item.name} 
        </LeftSlot>
    </Item>
)
