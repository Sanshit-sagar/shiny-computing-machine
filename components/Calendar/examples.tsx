import React, { useState } from 'react'
import { styled } from 'stitches.config'
import CalendarInstance from './dynExamples'
import StateFactory from '@/utils/StateFactory'

import { Card } from '@/components/Card'
import { ExampleBase } from '@/components/ExampleBase'

import { CalendarIcon } from '@radix-ui/react-icons'

const CalendarWrapper = styled('div', {
    height: '325px',
    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    flexGrow: '1 1 auto',
    flexShrink: '1 1 auto'
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

export const RangeCalendarInstance = () => {
    const [useRange, setUseRange] = useState<boolean>(true)
    const { state } = StateFactory(sharedStateInit)

    return (
        <CalendarWrapper>
            <CalendarInstance useRange={useRange} state={state} />
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

