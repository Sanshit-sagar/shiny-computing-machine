import React, { useRef, MutableRefObject } from 'react'

import { useLocale } from '@react-aria/i18n'
import { useDateField } from '@react-aria/datepicker'
import { useTimeFieldState } from '@react-stately/datepicker'
import { SpectrumTimePickerProps, TimeValue } from '@react-types/datepicker'

import { createCalendar } from '@internationalized/date'

import { Input } from './Input'
import { DatePickerSegment } from './DatePickerSegment'

export function TimeField<T extends TimeValue>(props: SpectrumTimePickerProps<T>)  {

    const { autoFocus, isDisabled, isReadOnly, isRequired } = props;
    
    const { locale } = useLocale()
    const ref: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>()
    const state = useTimeFieldState({ ...props, locale, createCalendar })

    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = useDateField(props, state, ref);

    return (
        <Input
            fieldProps={fieldProps}
            isDisabled={isDisabled}
            autoFocus={autoFocus}
            validationState={state.validationState}
            inputRef={ref}
        >
            {state.segments.map((segment, index) => (
                <DatePickerSegment
                    key={index} 
                    state={state} 
                    segment={segment}
                    isDisabled={isDisabled}
                    isRequired={isRequired}
                    isReadOnly={isReadOnly}
                />
            ))}
        </Input>
    )
}