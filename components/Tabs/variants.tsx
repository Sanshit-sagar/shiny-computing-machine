import React from 'react' 
import { Card } from '@/components/Card'
import Tabs from './index'
import { TextInput } from '@/components/TextInput'
import { MultiToggle } from '@/components/MultiToggle'
import { 
    BorderLeftIcon, 
    BorderRightIcon, 
    BorderTopIcon, 
    BorderAllIcon, 
    BorderNoneIcon, 
    BorderBottomIcon, 
    ValueIcon 
} from '@radix-ui/react-icons'
import { StyledShowcaseContainer } from './styles'

export const BasicTabs = () => (
    
        <Tabs.Group<typeof Tabs.Item> aria-label="basicTabsExample" disabledKeys={[]}>
            <Tabs.Item key="item1" title="Bob Builter"> 
                Est consectetur aliqua incididunt culpa nisi nisi nulla nostrud officia laborum dolor consectetur id duis. 
                Voluptate sunt laborum ea laborum aute. Nisi est velit laborum et aliqua. 
                Proident commodo velit irure exercitation mollit commodo eu veniam reprehenderit ipsum veniam pariatur.
            </Tabs.Item>
            <Tabs.Item key="item2" title="Tom Doe"> 
                Eu est occaecat minim dolore non reprehenderit pariatur reprehenderit non deserunt laboris.
                Eiusmod sit anim pariatur exercitation nisi ipsum consectetur. 
                Ut aute elit ullamco Lorem sint esse veniam dolore cupidatat eu in dolor sunt. 
                Excepteur consequat laboris ea aliqua ex cillum sint in nostrud tempor pariatur non proident. 
                Amet aliquip voluptate cillum esse elit exercitation aute.
            </Tabs.Item> 
            <Tabs.Item key="item3" title="Thomas Ingym"> 
                Laboris consequat Lorem dolor dolore. 
                Duis dolore et sint deserunt et non consectetur commodo irure. 
                Irure enim eu sunt tempor aliquip Lorem cupidatat exercitation laborum ea proident aliqua ad fugiat.
            </Tabs.Item>
        </Tabs.Group>
   
)

export const BasicPolymorphicTabs = () => {

    return (
        <Card.Wrapper>
            <Card.Header> Tabs Demo </Card.Header>

            <Tabs.Group<typeof Tabs.Item> 
                element={Card.Header} 
                aria-label="History of Ancient Rome" 
                disabledKeys={['Emp']}
            >
                <Tabs.Item key="FoR" title="Founding of Rome">
                    Arma virumque cano, Troiae qui primus ab oris.
                </Tabs.Item>
                <Tabs.Item key="MaR" title="Monarchy and Republic">
                    Senatus Populusque Romanus.
                </Tabs.Item>
                <Tabs.Item key="Emp" title="Empire">
                    Alea jacta est.
                </Tabs.Item>
            </Tabs.Group>
        </Card.Wrapper>
    )
}

export const FocusableContentTabs = () =>{

    const [selected, setSelected] = React.useState('left')

    return (
        <Card.Wrapper>
            <Card.Header> Tabs Demo </Card.Header>
            <Tabs.Group<typeof Tabs.Item>  element={Card.Body} aria-label="Notes app">
                <Tabs.Item key="item1" title="Jane Doe">
                    <TextInput type="text" label="Leave a note for Jane" />
                </Tabs.Item>
                <Tabs.Item key="item2" title="John Doe">
                    <MultiToggle
                        values={[
                            { icon: <BorderLeftIcon />, value: 'left' },
                            { icon: <BorderRightIcon />, value: 'right' },
                            { icon: <BorderTopIcon />, value: 'top' },
                            { icon: <BorderBottomIcon />, value: 'bottom' },
                            { icon: <BorderAllIcon />, value: 'all' },
                            { icon: <BorderNoneIcon />, value: 'none' },
                        ]} 
                        onChange={(updatedSelection) => setSelected(updatedSelection)}
                        selection={selected}
                    />
                </Tabs.Item>
                <Tabs.Item key="item3" title="Joe Bloggs">
                    Alea jacta est.
                </Tabs.Item>
            </Tabs.Group>
        </Card.Wrapper>
    )
}
