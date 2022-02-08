import React, { useMemo } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useCalendar } from '@react-aria/calendar'
import { useCalendarState } from '@react-stately/calendar'
import { createCalendar } from '@internationalized/date'

import { DateValue } from '@react-types/calendar'
import { CalendarBase } from './CalendarBase'


import { CustomCalendarProps, CustomCalendarState } from './interfaces'

import { CellStyleProps } from './styles'

export function Calendar<T extends DateValue>({ 
    visibleMonths = 1, 
    ...props 
}: CustomCalendarProps<T> & CellStyleProps) {

    const { locale } = useLocale()

    const visibleDuration = useMemo(() => ({ months: visibleMonths }), [visibleMonths])
    const state: CustomCalendarState = useCalendarState({ ...props, locale, visibleDuration, createCalendar })

    return <CalendarBase {...props} state={state} useCalendar={useCalendar} />
}

