import { Item } from '@react-stately/collections'
import { LeftSlot } from './styles'
import { useRouter } from 'next/router'


export const menuItemRenderer = (item) =>  {
    const router = useRouter()

    const handleNavigation = (_event) => {
        if(item?.href) {
            router.push(item.href)
        }
    }

    return (
        <Item 
            childItems={item.children} 
            textValue={item.name}
            key={item.name}
        >
            <LeftSlot onClick={handleNavigation}> 
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
}