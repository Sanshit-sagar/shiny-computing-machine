import React, { useState } from 'react'
import { styled } from 'stitches.config'
import CalendarInstance from './dynExamples'
import StateFactory from '@/utils/StateFactory'

import { Flex } from '@/components/Flex'
import { MultiToggle } from '@/components/MultiToggle'
import { ExampleBase } from '@/components/ExampleBase'

import { CalendarIcon } from '@radix-ui/react-icons'

const CalendarWrapper = styled('div', {
    position: 'relative',

    height: '350px',
    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    flexGrow: '1 1 auto',
    flexShrink: '1 1 auto',

    py: '$3',
    px: '$2',

    bc: '$accentBase',
    border: '1.25px solid $accentBorder',
    color: '$accentText',
    br: '$2',
    outline: 'none'
})

const sharedStateInit = ()  => {
    const initCalendarState = {
        isDisabled: false,
        isReadOnly: false,
        autoFocus: false,
        padding: '4'
    };
    return initCalendarState;
};

const meridianValues:  { value: 'AM' | 'PM' }[] = [
    { value: 'AM' },
    { value: 'PM' }
]

const MeridianToggle = () => {
    const [isAm, setIsAm] = useState<boolean>(true)

    const handleChange = (value: 'AM' | 'PM') => (
        setIsAm(value === 'AM' ? true : false)
    )

    return (
        <MultiToggle 
            values={meridianValues} 
            selection={isAm ? 'AM' : 'PM'}
            onChange={handleChange}
        />
    )
}

export const RangeCalendarInstance = ({ useRange = true }: { useRange?: boolean }) => {
    const { state } = StateFactory(sharedStateInit)

    return (
        <CalendarWrapper>
            <CalendarInstance state={state} useRange={useRange} />
            <Flex css={{ position: 'absolute', bottom: '12.5px', right: '12.5px' }}>
                <MeridianToggle /> 
            </Flex>
        </CalendarWrapper>
    )
}

const ExampleCalendar = () => {

    return (
        <ExampleBase
            heading={'Calendar'}
            description={'Calendar Description here'}
            icon={<CalendarIcon />}
            component={<RangeCalendarInstance />}
            controls={[]}
        />
    )
}

export default ExampleCalendar

