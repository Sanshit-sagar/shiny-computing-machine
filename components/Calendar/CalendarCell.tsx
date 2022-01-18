import React, { useRef, useMemo, MutableRefObject } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useDateFormatter, useLocale } from '@react-aria/i18n'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { AriaCalendarCellProps, useCalendarCell } from '@react-aria/calendar'

import { 
    isToday,
    isSameDay, 
    isEqualDay, 
    isSameMonth,
    getDayOfWeek,
    CalendarDate,  
} from '@internationalized/date'
import { useInteractions } from '@/hooks/useInteractions'

import { Cell, CellWrapper } from './styles'
import type { CellStyleProps } from './styles'

interface CalendarCellProps extends AriaCalendarCellProps {
    state: CalendarState | RangeCalendarState,
    currentMonth: CalendarDate
}

export function CalendarCell(props: CalendarCellProps & CellStyleProps) {

    const { state, currentMonth, padding, ...rest } = props

    const ref: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>()

    const isDisabled = !isSameMonth(props.date, currentMonth)
    let { cellProps, buttonProps, isPressed } = useCalendarCell({ ...props,  isDisabled }, state, ref)

    let dateFormatter = useDateFormatter({
        day: 'numeric',
        timeZone: state.timeZone,
        calendar: currentMonth.calendar.identifier
    })

    const { locale } = useLocale()

    const highlightedRange = 'highlightedRange' in state && state.highlightedRange
    const isSelected = state.isSelected(props.date) || (state.value === props.date)
    const isSelectionStart = highlightedRange && isSameDay(props.date, highlightedRange.start)
    const isSelectionEnd = highlightedRange && isSameDay(props.date, highlightedRange.end)

    const dayOfWeek = getDayOfWeek(props.date, locale)
    const isRangeStart = isSelected && (dayOfWeek === 0 || props.date.day === 1)
    const isRangeEnd = isSelected && (
        dayOfWeek === 6 || props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth)
    )

    let date = props.date
    const lastDate: MutableRefObject<CalendarDate> = useRef<CalendarDate>(null)
    if (lastDate.current && isEqualDay(date, lastDate.current)) {
        date = lastDate.current
    }
    lastDate.current = date

    const nativeDate = useMemo(() => date.toDate(state.timeZone), [date, state.timeZone])
    const formatted = useMemo(() => dateFormatter.format(nativeDate), [dateFormatter, nativeDate])

    const { interactionProps, isHovered, isFocused } = useInteractions({
        isDisabled
    })

    const isVisible = !isDisabled
    const isFirstDayOfWeek = dayOfWeek === 0
    const isLastDayOfWeek = dayOfWeek === 6
    const isCellToday = isToday(props.date, state.timeZone)

    
    return (
        <CellWrapper {...cellProps}>
            <Cell 
                {...mergeProps(buttonProps, interactionProps)} 
                padding={padding}
                isDisabled={isDisabled}
                isHovered={isHovered}
                isFocused={isFocused}
                isPressed={isPressed}
                isVisible={isVisible}
                isSelected={isSelected}
                isSelectionStart={isSelectionStart}
                isSelectionEnd={isSelectionEnd}
                isRangeStart={isRangeStart}
                isRangeEnd={isRangeEnd}
                isToday={isCellToday}
                isFirstDayOfWeek={isFirstDayOfWeek}
                isLastDayOfWeek={isLastDayOfWeek}
                ref={ref}
            >
                {formatted}
            </Cell>
        </CellWrapper>
    )
}

