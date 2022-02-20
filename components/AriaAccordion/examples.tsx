import { useState } from 'react' 
import Accordion from "./Accordion"
import { panel1Content, panel2Content } from './constants'
import { Item } from '@react-stately/collections'


type AccordionItem = {
    id: number;
    name: string; 
    description: string;
}

export const AriaAccordionInstance = () => {
    const [animals, setAnimals] = useState<AccordionItem[]>([
        { id: 1, name: 'Aardvark', description: 'Description here' },
        { id: 2, name: 'Kangaroo', description: 'Description here' },
        { id: 3, name: 'Snake', description: panel2Content }
    ])

    return (
        <Accordion.Root items={animals} defaultSelectedKey={'1'}>
            {(item) => (
                <Accordion.Item 
                    key={`item-${item.id}`} 
                    title={item.name}
                > 
                    <div>
                        <label> {item.name} </label>
                        <span> {item.description} </span> 
                    </div>
                </Accordion.Item>
            )}
        </Accordion.Root>
    )
}