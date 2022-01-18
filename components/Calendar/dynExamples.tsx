import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { 
    CustomCalendarProps, 
    CustomRangeCalendarProps
} from './interfaces'
import { RangeValue } from '@/interfaces/Shared'

import { Calendar } from './Calendar'
import { CalendarDate } from '@internationalized/date'

type SharedCalendarProps = CustomRangeCalendarProps<CalendarDate> | CustomRangeCalendarProps<CalendarDate>
type DefaultSharedCalendarProps = Exclude<SharedCalendarProps, 'value' | 'defaultValue' | 'onChange'>;

const DynamicRangeCalendar = dynamic(
    () => import('./RangeCalendar').then((mod) => mod.RangeCalendar),
    { ssr: false }
);


const dayInMs = 24*60*60*1000;
const getCalendarDate = (date: Date) => new CalendarDate(date.getFullYear(), date.getMonth(), date.getDate())
const getToday = () => getCalendarDate(new Date())
const getMonthAgo = () => getCalendarDate(new Date(Date.now() - 30 * dayInMs)); 

const rangeFactory = () => { 
    return { 
        start: getToday(),
        end: getMonthAgo() 
    };
};

export const RangeCalendarInstance=(props: CustomRangeCalendarProps<CalendarDate>) => <DynamicRangeCalendar {...props} />
export const DefaultCalendarInstance=(props: CustomCalendarProps<CalendarDate>) => <Calendar {...props} />


const CalendarInstance = ({ useRange, state }: { useRange: boolean; state: DefaultSharedCalendarProps; }) => {
    const [rangeSelection, setRangeSelection] = useState<RangeValue<CalendarDate>>(rangeFactory())
    const [daySelection, setDaySelection] = useState<CalendarDate>(rangeSelection.end)

    const handleChangeDay = (value: CalendarDate) => setDaySelection(value)
    const handleChangeRange = (value: RangeValue<CalendarDate>) => setRangeSelection({ ...value })
    
    const dayProps: CustomCalendarProps<CalendarDate> = {
        padding: state.padding,
        value: daySelection,
        onChange: handleChangeDay
    }

    const rangeProps: CustomRangeCalendarProps<CalendarDate> = {
        ...state,
        value: rangeSelection,
        onChange: handleChangeRange
    }

    return useRange 
        ? <RangeCalendarInstance {...rangeProps} />
        : <DefaultCalendarInstance {...dayProps} />;
}

export default CalendarInstance