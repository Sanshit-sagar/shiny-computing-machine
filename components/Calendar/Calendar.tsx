import React, { useMemo } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useCalendar } from '@react-aria/calendar'
import { useCalendarState } from '@react-stately/calendar'
import { createCalendar } from '@internationalized/date'

import { DateValue } from '@react-types/calendar'
import { CalendarBase } from './CalendarBase'
import { CustomCalendarProps, CustomCalendarState } from './interfaces'

import { CellStyleProps } from './styles'

export function Calendar<T extends DateValue>(props: CustomCalendarProps<T> & CellStyleProps) {

    let { locale } = useLocale();
    const { visibleMonths = 1, padding = '5' } = props; 

    let visibleDuration = useMemo(() => ({  
        months: visibleMonths 
    }), [visibleMonths]); 
  
    let state: CustomCalendarState = useCalendarState({
        ...props,
        locale,
        visibleDuration,
        createCalendar
    });

    return (    
        <CalendarBase
            {...props}
            state={state}
            useCalendar={useCalendar}
        />
    );
}

