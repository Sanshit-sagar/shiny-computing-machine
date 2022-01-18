
import { styled } from '../../stitches.config'
import { ComboBox } from './index'
import { Item } from 'react-stately'

import { people } from '../Select/constants'
import { Label, Description } from '../ListBox'

const Avatar = styled('img', {
    height: 25,
    width: 25,
    marginRight: '$1',

})

export const ExampleComboBox1 = () => (
    <ComboBox label="Favourite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
    </ComboBox>
)

export const ExampleComboBox2 = () =>(
    <ComboBox label="Assignee" defaultItems={people}>
        {(item) => (
        <Item textValue={item.name}>
            <Avatar src={item.avatar} alt={item.name} />
            <div>
                <Label>{item.name}</Label>
                <Description>{item.username}</Description>
            </div>
        </Item>
        )}
    </ComboBox>
)
