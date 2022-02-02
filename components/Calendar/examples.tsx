import React, { useState } from 'react'
import { styled } from 'stitches.config'
import CalendarInstance from './dynExamples'
import StateFactory from '@/utils/StateFactory'

import { Flex } from '@/components/Flex'
import { MultiToggle } from '@/components/MultiToggle'
import { ExampleBase } from '@/components/ExampleBase'

import { CalendarIcon } from '@radix-ui/react-icons'

const CalendarWrapper = styled('div', {
    height: '340px',
    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    flexGrow: '1 1 auto',
    flexShrink: '1 1 auto',

    bc: '$white1',
    border: '1px solid $white2',
    color: '$black1',
    br: '$4',
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
            <Flex css={{ position: 'relative', bottom: '10px', right: '10px', fd: 'row', jc: 'flex-end', ai: 'center', mb: '$2' }}>
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

