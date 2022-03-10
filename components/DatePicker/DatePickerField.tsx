import React, { useRef } from 'react' 
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
    ai: 'center',
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    margin: 0
})

interface DatePickerFieldProps<T extends DateValue> extends SpectrumDatePickerProps<T>  {
    inputClassName?: string;
    hideValidationIcon?: boolean;
}

export const DatePickerField = <T extends DateValue>(props: DatePickerFieldProps<T>) => {
    const segmentStates = { isDisabled: props.isDisabled, isRequired: props.isRequired, isReadOnly: props.isReadOnly }
    
    const ref = useRef<HTMLDivElement>()
    const { locale } = useLocale()
    const state: DatePickerFieldState = useDatePickerFieldState({ ...props, locale, createCalendar })
        
    const { fieldProps } = useDateField(props, state, ref)

    return (
        <StyledField {...fieldProps} ref={ref}>
            {state.segments.map((segment: DateSegment, index) => (
                <DatePickerSegment 
                    key={`segment-${index}`} 
                    segment={segment} 
                    state={state} 
                    {...segmentStates} 
                />
            ))}
        </StyledField>
    )
}