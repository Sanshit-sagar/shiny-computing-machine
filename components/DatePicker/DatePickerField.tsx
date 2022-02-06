import React, { MutableRefObject, useRef } from 'react' 
import { styled } from 'stitches.config'

import { useLocale } from '@react-aria/i18n'
import { useDateField } from '@react-aria/datepicker'
import { useDatePickerFieldState } from '@react-stately/datepicker'

import { createCalendar } from '@internationalized/date'
import { DateValue, SpectrumDatePickerProps } from '@react-types/datepicker'

import { DateSegment, DatePickerFieldState } from './interfaces'
import { DatePickerSegment } from './DatePickerSegment'

const StyledField = styled('div', {
    d: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'stretch',
    bc: '$accentBase',
    width: 'fit-content',
    height: 'fit-content',
    padding: '$1',
    margin: 0,
    border: '1px solid $accentBorder',
    br: '$2'
})

interface DatePickerFieldProps<T extends DateValue> extends SpectrumDatePickerProps<T>  {
    inputClassName?: string,
    hideValidationIcon?: boolean,
}


export function DatePickerField<T extends DateValue>(props: DatePickerFieldProps<T>) {
    const { isDisabled, isRequired, isReadOnly, inputClassName, ...otherProps } = props
    const { locale } = useLocale()

    const ref: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>()
    const state: DatePickerFieldState = useDatePickerFieldState({ ...props, locale, createCalendar })
    const { fieldProps } = useDateField(props, state, ref)

    return (
        <StyledField {...fieldProps} ref={ref}>
            {state.segments.map((segment: DateSegment, i: number) => (
                <DatePickerSegment
                    key={i}
                    segment={segment}
                    state={state}
                    isDisabled={isDisabled}
                    isRequired={isRequired}
                    isReadOnly={isReadOnly}
                /> 
            ))}
        </StyledField>
    )
}