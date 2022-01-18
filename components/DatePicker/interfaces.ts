
import { ValidationState } from '@/interfaces/Shared'
import { Granularity } from '@react-types/datepicker'
import { Time, DateValue, ZonedDateTime, CalendarDateTime, DateFormatter} from '@internationalized/date'


import {
    AriaLabelingProps,
    DOMProps,
    FocusableProps,
    HelpTextProps,
    InputBase,
    LabelableProps,
    RangeValue,
    StyleProps,
    Validation,
    ValueBase
} from '@react-types/shared';


export type FieldOptions = Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'>;

export interface DateSegment {
    type: Intl.DateTimeFormatPartTypes,
    text: string,
    value?: number,
    minValue?: number,
    maxValue?: number,
    isPlaceholder: boolean,
    isEditable: boolean
};

export interface DatePickerFieldState {
    value: DateValue,
    dateValue: Date,
    setValue: (value: CalendarDateTime) => void,
    segments: DateSegment[],
    dateFormatter: DateFormatter,
    validationState: ValidationState,
    granularity: Granularity,
    increment: (type: Intl.DateTimeFormatPartTypes) => void,
    decrement: (type: Intl.DateTimeFormatPartTypes) => void,
    incrementPage: (type: Intl.DateTimeFormatPartTypes) => void,
    decrementPage: (type: Intl.DateTimeFormatPartTypes) => void,
    setSegment: (type: Intl.DateTimeFormatPartTypes, value: number) => void,
    confirmPlaceholder: (type?: Intl.DateTimeFormatPartTypes) => void,
    clearSegment: (type?: Intl.DateTimeFormatPartTypes) => void,
    getFormatOptions(fieldOptions: FieldOptions): Intl.DateTimeFormatOptions
};


////////////////////////////////////

type TimeValue = CalendarDateTime | Time | ZonedDateTime;
type MappedTimeValue<T> =
  T extends ZonedDateTime ? ZonedDateTime :
  T extends CalendarDateTime ? CalendarDateTime :
  T extends Time ? Time :
  never;

interface DatePickerBase<T extends DateValue> extends InputBase,Validation,FocusableProps,LabelableProps,HelpTextProps {
    minValue?: DateValue,
    maxValue?: DateValue,
    placeholderValue?: T,
    hourCycle?: 12 | 24,
    granularity?: Granularity,
    hideTimeZone?: boolean
}
interface AriaDatePickerBase<T extends DateValue> extends AriaLabelingProps, DOMProps {};

export interface TimePickerProps<T extends TimeValue> extends InputBase, Validation, FocusableProps, LabelableProps, ValueBase<T, MappedTimeValue<T>> {
    hourCycle?: 12 | 24,
    granularity?: 'hour' | 'minute' | 'second' | 'millisecond',
    hideTimeZone?: boolean,
    placeholderValue?: T,
    minValue?: TimeValue,
    maxValue?: TimeValue
}

export interface DatePickerProps<T extends DateValue> extends DatePickerBase<T> {
    showFormatHelperText?: boolean;
    maxVisibleMonths?: number;
}