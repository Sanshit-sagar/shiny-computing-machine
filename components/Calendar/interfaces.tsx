import { Ref, ReactNode } from 'react';


import { CalendarAria } from '@react-aria/calendar'
import { CalendarState, RangeCalendarState, CalendarStateBase } from '@react-stately/calendar';

import { DOMProps, StyleProps } from '@react-types/shared'
import { CalendarDate, CalendarDateTime, ZonedDateTime } from '@internationalized/date'
import { ValueBase, RangeValue } from '@/interfaces/Shared'

import { CellStyleProps } from './styles'

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime

export type MappedDateValue<T> = 
    T extends ZonedDateTime ? ZonedDateTime :
    T extends CalendarDateTime ? CalendarDateTime :
    T extends CalendarDate ? CalendarDate :
    never

export interface CalendarPropsBase {
    timeZone?: string,
    minValue?: DateValue,
    maxValue?: DateValue,
    isDisabled?: boolean,
    isReadOnly?: boolean,
    autoFocus?: boolean
}

export interface CalendarProps<T extends DateValue> extends CalendarPropsBase, ValueBase<T, MappedDateValue<T>> {}
export interface RangeCalendarProps<T extends DateValue> extends CalendarPropsBase, ValueBase<RangeValue<T>, RangeValue<MappedDateValue<T>>> {}


export interface CustomCalendarProps<T extends DateValue> extends CalendarProps<T>, DOMProps, StyleProps {
   
    visibleMonths?: number; 
}
export interface CustomRangeCalendarProps<T extends DateValue> extends RangeCalendarProps<T>, DOMProps, StyleProps {
    
    visibleMonths?: number; 
}


export type CalendarStateType = CalendarState | RangeCalendarState;

export interface CalendarBaseProps<T extends CalendarStateType> extends CalendarPropsBase, DOMProps, StyleProps {
    state: T,
    useCalendar: (props: CalendarPropsBase, state: T, ref?: Ref<HTMLElement>) => CalendarAria,
    visibleMonths?: number
};

///////////////////////////////

export interface CustomCalendarState extends CalendarStateBase {
    value: CalendarDate;
    setValue(value: CalendarDate): void;
};

export interface RangeCalendarStateBase extends CalendarStateBase {
    value: RangeValue<DateValue>;
    setValue(value: RangeValue<DateValue>): void;
    highlightDate(date: CalendarDate): void;
    anchorDate: CalendarDate | null;
    setAnchorDate(date: CalendarDate | null): void;
    highlightedRange: RangeValue<CalendarDate>;
    isDragging: boolean;
    setDragging(isDragging: boolean): void;
}

// export interface CalendarStateBase {
//     isDisabled: boolean,
//     isReadOnly: boolean,
//     visibleRange: RangeValue<CalendarDate>,
//     timeZone: string,
//     focusedDate: CalendarDate,
//     setFocusedDate(value: CalendarDate): void,
//     focusNextDay(): void,
//     focusPreviousDay(): void,
//     focusNextRow(): void,
//     focusPreviousRow(): void,
//     focusNextPage(): void,
//     focusPreviousPage(): void,
//     focusPageStart(): void,
//     focusPageEnd(): void,
//     focusNextSection(): void,
//     focusPreviousSection(): void,
//     focusNextPage(): void,
//     focusPreviousPage(): void,
//     selectFocusedDate(): void,
//     selectDate(date: CalendarDate): void,
//     isFocused: boolean,
//     setFocused(value: boolean): void,
//     isInvalid(date: CalendarDate): boolean,
//     isSelected(date: CalendarDate): boolean,
//     isCellFocused(date: CalendarDate): boolean,
//     isCellDisabled(date: CalendarDate): boolean,
//     isPreviousVisibleRangeInvalid(): boolean,
//     isNextVisibleRangeInvalid(): boolean
//   }