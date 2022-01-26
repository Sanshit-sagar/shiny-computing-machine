import React from 'react'

import { SearchAutocomplete } from './index'
import { Item, Section } from '@react-stately/collections'
import Label from '@/components/ListBox/Label'
import Description from '@/components/ListBox/Description'

import { ExampleBase } from '@/components/ExampleBase'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import {
    ButtonIcon,
    InputIcon,
    MixIcon
} from '@radix-ui/react-icons'

export const SearchWithSections = () => (
    <SearchAutocomplete label="Search" allowsCustomValue>
         <Section title="Companies">
          <Item>Chatterbridge</Item>
          <Item>Tagchat</Item>
          <Item>Yambee</Item>
          <Item>Photobug</Item>
          <Item>Livepath</Item>
        </Section>
        <Section title="People">
          <Item>Theodor Dawber</Item>
          <Item>Dwight Stollenberg</Item>
          <Item>Maddalena Prettjohn</Item>
          <Item>Maureen Fassan</Item>
          <Item>Abbie Binyon</Item>
        </Section>
    </SearchAutocomplete>
)

const items = [
    { icon: <ButtonIcon />, name: 'Button', tags: 'action button, cancel button, icon button' },
    { icon: <InputIcon />, name: 'Text Field', tags: 'search field, text field, url field, email field, telephone field' },
    { icon: <ButtonIcon />, name: 'Text Area', tags: 'text area' },  
    { icon: <ButtonIcon />, name: 'Number Field', tags: 'percentage, currency, SI Units'}, 
    { icon: <ButtonIcon />, name: 'PIN Code', tags: 'string, patterns, numbers' },
    { icon: <MagnifyingGlassIcon />, name: 'Search AutoComplete', tags: 'list box, combo box' }, 
    { icon: <ButtonIcon />, name: 'Flex', tags: 'layout' },
    { icon: <ButtonIcon />, name: 'Grid', tags: 'layout' }, 
    { icon: <ButtonIcon />, name: 'Select', tags: 'layout' }, 
    { icon: <ButtonIcon />,  name: 'List Box', tags: 'layout' }, 
    { icon: <MixIcon />, name: 'Combo Box', tags: 'layout' }
]

export const SearchWithoutSections = () => (
    <SearchAutocomplete items={items} allowsCustomValue={false}>
        {(item) => (
            <Item key={item.name}>
                <div> {item.icon} </div>
                <div>
                    <Label> {item.name} </Label>
                    <Description> {item.tags} </Description> 
                </div>
            </Item>
        )}
    </SearchAutocomplete>
)

export const SearchInstance = () => <SearchWithoutSections /> 

const ExampleSearch = () => (
    <ExampleBase
        heading={'Search Autocomplete'}
        description={'Search description here'}
        icon={<MagnifyingGlassIcon />}
        component={<SearchInstance />}
        controls={[]}
    /> 
)

export default ExampleSearch 