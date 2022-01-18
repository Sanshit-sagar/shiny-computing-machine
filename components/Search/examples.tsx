import React from 'react'

import { SearchAutocomplete } from './index'
import { Item, Section } from '@react-stately/collections'

import { ExampleBase } from '@/components/ExampleBase'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const SearchInstance = () => (
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