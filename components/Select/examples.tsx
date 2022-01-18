import React from 'react'
import { Section, Item } from 'react-stately'

import { Select } from '@/components/Select/index'
import { ExampleBase } from '@/components/ExampleBase' 

import Label from '@/components/ListBox/Label'
import Description from '@/components/ListBox/Description'

import { StyledAvatar } from './styles'

import { people } from '@/components/Select/constants'
import { CaretSortIcon } from '@radix-ui/react-icons'


export const SelectWithoutSections = () => (
    <Select label="Reviewer" items={people}>
        {(item) => (
            <Item textValue={item.name}>
                {/* <StyledAvatar src={item.avatar} alt={item.name} /> */}
                <div>
                    <Label> {item.name} </Label>
                    <Description> {item.username} </Description>
                </div>
            </Item>
        )}
    </Select>
)

export const SelectInstance = () => <SelectWithoutSections /> 

const ExampleSelect = () => {

    return (
        <ExampleBase
            heading={'Select'}
            description={'Select description here'}
            icon={<CaretSortIcon />}
            component={
                <SelectInstance  />
            }
            controls={[]}
        /> 
    );
}

export default ExampleSelect 
