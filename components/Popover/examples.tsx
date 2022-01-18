import React from 'react'

import { ExampleBase } from '@/components/ExampleBase'
import { HeadingIcon } from '@radix-ui/react-icons'
import { PopoverWithCalendar } from './samples'

export const PopoverInstance = () => <PopoverWithCalendar /> 

const ExamplePopover = () => {

    return (
        <ExampleBase
            heading={'Popvoer'}
            description={'Description'}
            icon={<HeadingIcon />}
            component={<PopoverInstance />}
            controls={[]}
        /> 
    );
}

export default ExamplePopover