import React, { useMemo, ReactNode } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useRangeCalendar } from '@react-aria/calendar'
import { useRangeCalendarState } from '@react-stately/calendar'

import { createCalendar } from '@internationalized/date'
import { DateValue } from '@react-types/calendar';

import { Flex } from '@/components/Flex'
import { CalendarBase } from './CalendarBase'
import { CustomRangeCalendarProps, RangeCalendarStateBase } from './interfaces'

import type { CellStyleProps } from './styles'

export function RangeCalendar<T extends DateValue>(props: CustomRangeCalendarProps<T> & CellStyleProps) {
    const { locale } = useLocale()
    const { visibleMonths = 1 } = props

    const visibleDuration = useMemo(() => ({ months: visibleMonths }), [visibleMonths])
    const state: RangeCalendarStateBase = useRangeCalendarState({ 
        locale, 
        visibleDuration, 
        createCalendar 
    })

    return (
        
            <CalendarBase 
                {...props}
                state={state}
                useCalendar={useRangeCalendar}
            /> 
    )
}