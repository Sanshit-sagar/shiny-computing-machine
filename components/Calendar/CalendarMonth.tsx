import React, { useState, useEffect } from 'react';

import { DOMProps, StyleProps} from '@react-types/shared';
import { CalendarPropsBase } from '@react-types/calendar';

import { useCalendarGrid } from '@react-aria/calendar';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { CalendarDate, endOfMonth, getWeeksInMonth, startOfWeek } from '@internationalized/date';

import { CalendarCell } from './CalendarCell';
import { HeaderCell, HeaderText } from './styles'

interface CalendarMonthProps extends CalendarPropsBase, DOMProps, StyleProps {
    state: CalendarState | RangeCalendarState,
    startDate: CalendarDate
}
import type { CellStyleProps } from './styles'
  
export function CalendarMonth(props: CalendarMonthProps & CellStyleProps) {
    const { state, startDate, padding = 4, ...otherProps } = props; 

    const [isRangeSelecting, setRangeSelecting] = useState<boolean>(false);
    const hasAnchorDate = 'anchorDate' in state && state.anchorDate != null;

    let { locale } = useLocale();
    let { gridProps } = useCalendarGrid({ 
        ...props, 
        endDate: endOfMonth(startDate) 
    }, state);
    
    const monthStart = startOfWeek(startDate, locale);
    const weeksInMonth = getWeeksInMonth(startDate, locale);
    const dayFormatter = useDateFormatter({ weekday: 'narrow' });
    const dayFormatterLong = useDateFormatter({ weekday: 'long' });
    
    if (hasAnchorDate && !isRangeSelecting) setRangeSelecting(true);
    
    useEffect(() => {
        if (!hasAnchorDate && isRangeSelecting) {
          let raf = requestAnimationFrame(() => setRangeSelecting(false));
          return () => cancelAnimationFrame(raf);
        }
    }, [hasAnchorDate, isRangeSelecting]);

    return (
        <table {...gridProps} style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ border: 0 }}>
                    {[...new Array(7).keys()].map((index) => {
                        let date = monthStart.add({ days: index });
                        let dateDay = date.toDate(state.timeZone);
                        let day = dayFormatter.format(dateDay);
                        let dayLong = dayFormatterLong.format(dateDay);

                        return (
                            <HeaderCell key={index}>
                                <VisuallyHidden> {dayLong} </VisuallyHidden>
                                <span aria-hidden="true"> {day} </span>
                            </HeaderCell>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
                    <tr key={weekIndex}>
                         {[...new Array(7).keys()].map((dayIndex) => (
                            <CalendarCell
                                key={dayIndex}
                                state={state}
                                date={monthStart.add({ 
                                    weeks: weekIndex, 
                                    days: dayIndex 
                                })}
                                currentMonth={startDate} 
                                padding={3}
                            />
                         ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

