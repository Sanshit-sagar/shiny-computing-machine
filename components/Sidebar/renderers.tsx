import { Item } from '@react-stately/collections'
import { LeftSlot } from './styles'


export const menuItemRenderer = (item) =>  (
    <Item 
        childItems={item.children} 
        textValue={item.name}
        key={item.name}
    >
        <LeftSlot>
            {item.icon && (
                <span 
                    aria-hidden="false" 
                    aria-label={`${item.name}-component-icon`}
                > 
                    {item.icon}
                </span>
            )}
            {item.name} 
        </LeftSlot>
    </Item>
)
