import React, {Fragment, useRef } from 'react'

import { CalendarDate } from '@internationalized/date'
import { useDateFormatter, useLocale } from '@react-aria/i18n'

import { Subheading } from '@/components/Typography'
import { CalendarMonth } from './CalendarMonth'
import { Controls, Container } from './styles'
import type { CellStyleProps } from './styles'

import { CalendarStateType, CalendarBaseProps } from './interfaces'
import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons'


type MonthHeaderProps = {
    state: CalendarStateType;
    month: CalendarDate;
    index: number; 
}

const MonthHeading = ({ state, month, index }: MonthHeaderProps) => {
    let monthDateFormatter = useDateFormatter({
        month: 'long',
        year: 'numeric',
        era: month.calendar.identifier !== 'gregory' ? 'long' : undefined,
        calendar: month.calendar.identifier
    })

    const monthStr = monthDateFormatter.format(
        month.add({ months: index }).toDate(state.timeZone)
    )

    return (
        <Subheading css={{ fontFamily: '$jetbrains', fontSize: '$5', mt: 0, mb: '$3', p: 0 }}> 
            {monthStr} 
        </Subheading>
    )
}

export function CalendarBase<T extends CalendarStateType>(props: CalendarBaseProps<T> & CellStyleProps) {
    
    const { direction } = useLocale()
    const ref = useRef<HTMLDivElement>()
    const { state, useCalendar, visibleMonths = 1, ...rest } = props    

    const {
        calendarProps, 
        prevButtonProps, 
        nextButtonProps
    } = useCalendar(props, state, ref)
    

    let titles = []
    let calendars = []
    let currentMonth = state.visibleRange.start

    for (let i = 0; i < visibleMonths; i++) {
        titles.push(
            <Fragment key={i}>
                {i === 0 && 
                    <Controls>
                        <MonthHeading 
                            index={i} 
                            state={state} 
                            month={state.visibleRange.start} 
                        />
                        
                        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', marginRight: '5px', marginBottom: '5px', float: 'right' }}>
                            <button {...prevButtonProps} onClick={() => prevButtonProps.onPress()}>
                                <TriangleLeftIcon /> 
                            </button>
                            <button {...nextButtonProps} onClick={() => nextButtonProps.onPress()}>
                                <TriangleRightIcon />
                            </button>
                        </span>
                    </Controls>
                }
            </Fragment>
        )

        let d = currentMonth.add({ months: i })
        calendars.push(
            <CalendarMonth
                {...props}
                key={`${d.year}-${d.month}-${d.day}`}
                state={state}
                startDate={d} 
            />
        )
    }

    return (
        <Container {...calendarProps} ref={ref}>
            <> {titles} </>
            <> {calendars} </>
        </Container>
    )
}