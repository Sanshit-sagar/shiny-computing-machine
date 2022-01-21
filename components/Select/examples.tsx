import React from 'react'
import { Section, Item } from '@react-stately/collections'

import Fieldset from '@/components/Fieldset'
import Label from '@/components/ListBox/Label'
import Description from '@/components/ListBox/Description'

import { ExampleBase } from '@/components/ExampleBase' 
import { CaretDownIcon, ShareIcon } from '@/components/Icons'

import Select from './index'
import { StyledAvatar } from './styles'
import { people, socials, SocialMedium } from './constants'


export const SelectPeopleWithoutSections = () => (
    <Select items={people}>
        {(item) => (
            <Item textValue={item.name}>
                <StyledAvatar src={item.avatar} alt={item.name} />
                <div>
                    <Label> {item.name} </Label>
                    <Description> {item.username} </Description>
                </div>
            </Item>
        )}
    </Select>
)

export const SelectSocialsWithoutSections = () => (
    <Select items={socials}>
       {(item: SocialMedium) => (
           <Item textValue={item.name}>
               {item.icon}
               <div>
                   <Label> {item.name} </Label> 
                   <Description> {item.link} </Description> 
               </div>
           </Item>
       )}
    </Select>
)

export const SelectInstance = () => (
    <Fieldset.Root>
        <Fieldset.Icon> <ShareIcon /> </Fieldset.Icon>
        <Fieldset.Label> Social Mediums </Fieldset.Label> 

        <Select items={socials}>
           {(item: SocialMedium) => (
               <Item textValue={item.name}>
                   {item.icon}
                   <div>
                       <Label> {item.name} </Label> 
                       <Description> {item.link} </Description> 
                   </div>
               </Item>
           )}
        </Select>
    </Fieldset.Root>
)

const ExampleSelect = () => {

    return (
        <ExampleBase
            heading={'Select'}
            description={'Select description here'}
            icon={<CaretDownIcon />}
            component={<SelectInstance  />}
            controls={[]}
        /> 
    );
}

export default ExampleSelect 
