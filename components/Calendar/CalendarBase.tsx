import React, {Fragment, MutableRefObject, useRef } from 'react'

import { CalendarDate } from '@internationalized/date'
import { useDateFormatter, useLocale } from '@react-aria/i18n'

import PButton from '@/components/Button'
import { Subheading } from '@/components/Typography'
import { CalendarMonth } from './CalendarMonth'
import { Controls, Container } from './styles'
import type { CellStyleProps } from './styles'

import { CalendarStateType, CalendarBaseProps } from './interfaces'
import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons'

const NavIcon = ({ dir } : { dir: 'ltr' | 'rtl' }) => (
    dir === 'rtl' ? <TriangleLeftIcon /> : <TriangleRightIcon />
); 

type MonthHeaderProps = {
    state: CalendarStateType;
    month: CalendarDate;
    index: number; 
}

const MonthHeading = ({ state, month, index  }: MonthHeaderProps) => {
    let monthDateFormatter = useDateFormatter({
        month: 'long',
        year: 'numeric',
        era: month.calendar.identifier !== 'gregory' ? 'long' : undefined,
        calendar: month.calendar.identifier
    });

    const monthStr = monthDateFormatter.format(
        month.add({ months: index }).toDate(state.timeZone)
    );

    return (
        <Subheading css={{ fontFamily: '$jetbrains', fontSize: '$5', mt: 0, mb: '$3', p: 0 }}> 
            {monthStr} 
        </Subheading>
    )
}

const NavButton = ({ navProps, dir }) => (
    <button {...navProps} onClick={() => navProps.onPress()}>
        <NavIcon dir={dir} />  
    </button>    
)

export function CalendarBase<T extends CalendarStateType>(props: CalendarBaseProps<T> & CellStyleProps) {
    let  { state,  useCalendar, visibleMonths = 1, padding, ...otherProps } = props; 

    const { direction } = useLocale();

    const currentMonth = state.visibleRange.start;
   
    const ref: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();

    let {
        calendarProps, 
        prevButtonProps, 
        nextButtonProps
    } = useCalendar(props, state, ref)

    let titles = [];
    let calendars = [];

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
                        
                        <PButton.Root variant="primary" radius="y=x-n">
                            <PButton.Prefix {...prevButtonProps}>
                                <TriangleLeftIcon /> 
                            </PButton.Prefix>
                            <PButton.Suffix {...nextButtonProps}>
                                <TriangleRightIcon />
                            </PButton.Suffix>
                        </PButton.Root>
                    
                    </Controls>
                }
            </Fragment>
        );

        let d = currentMonth.add({ months: i });
        calendars.push(
            <CalendarMonth
                {...props}
                key={`${d.year}-${d.month}-${d.day}`}
                state={state}
                startDate={d} 
                padding={padding}
            />
        );
    }

    return (
        <Container {...calendarProps} ref={ref}>
            <> {titles} </>
            <> {calendars} </>
        </Container>
    );
}