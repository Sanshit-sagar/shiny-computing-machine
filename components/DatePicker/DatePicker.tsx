import { useRef, MutableRefObject } from 'react' 

import { useLocale } from '@react-aria/i18n'
import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'

import { mergeProps } from '@react-aria/utils'

import { DateValue } from '@internationalized/date'
import { DatePickerProps, SpectrumDatePickerProps } from '@react-types/datepicker'

import { useInteractions } from '@/hooks/useInteractions'

import { Input } from './Input'
import { TimeField } from './TimeField'
import { DatePickerField } from './DatePickerField'
import { DatePickerTrigger } from './DatePickerTrigger'
import { Calendar } from '@/components/Calendar'

const useInteractiveDatePicker = ({ isDisabled, props, state }) => {
    const dialogRef: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>()
    const interactionProps = useInteractions({ isDisabled })

    const { groupProps, ...fieldAndOtherProps } = useDatePicker(props, state, dialogRef);
    const { labelProps, fieldProps, descriptionProps, errorMessageProps, ...dialogAndOtherProps } = fieldAndOtherProps
    const { dialogProps, buttonProps } = dialogAndOtherProps;

    return {
        groupProps,
        inputProps: mergeProps(fieldAndOtherProps, interactionProps),
        buttonProps,
        dialogProps,
        dialogRef,
    };
}

export function DatePicker<T extends DateValue>(props: SpectrumDatePickerProps<T>) {
    const {
        autoFocus = false,
        isDisabled = false,
        isReadOnly = false,
        isRequired = false,
        minValue,
        maxValue,
        placeholderValue,
        hourCycle,
        hideTimeZone,
        granularity,
        maxVisibleMonths = 1,
    } = props;

    const { direction } = useLocale()
    const state = useDatePickerState({ hourCycle, minValue, maxValue, granularity, placeholderValue })

    const placeholder: DateValue = placeholderValue
    const timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null
    const timeMinValue = minValue && 'hour' in minValue ? minValue : null
    const timeMaxValue = maxValue && 'hour' in maxValue ? maxValue : null
    const timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null
    const showTimeField = !!timeGranularity

    const visibleMonths = maxVisibleMonths; // TODO: fix w/ resize observer 

    const { dialogRef, groupProps, inputProps, dialogProps, buttonProps } = useInteractiveDatePicker({
        isDisabled,
        state,
        props
    })

    return (
        <div 
            {...groupProps} 
            style={{ 
                width: '100%', 
                height: '100%', 
                display: 'block',
                border: 'none'
            }}
        >
            <DatePickerField
                data-testid="date-field"
                value={state.value}
                onChange={state.setValue}
                validationState={state.validationState}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                granularity={granularity}
                hourCycle={hourCycle}
                hideTimeZone={hideTimeZone}
                placeholderValue={placeholderValue}
            />
       
            <DatePickerTrigger
                targetRef={dialogRef}
                dir={direction}
                defaultOpen={false}
                label={`${state.dateValue}`}
            >
                <Calendar
                    autoFocus={false}
                    value={state.dateValue}
                    onChange={state.setDateValue}
                    visibleMonths={visibleMonths}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    padding={8}
                />   

                {showTimeField && (
                    <TimeField
                        label="Time"
                        value={state.timeValue}
                        onChange={state.setTimeValue}
                        placeholderValue={timePlaceholder}
                        granularity={timeGranularity}
                        minValue={timeMinValue}
                        maxValue={timeMaxValue}
                        hourCycle={props.hourCycle}
                        hideTimeZone={props.hideTimeZone}
                    />
                )}
            </DatePickerTrigger>
        </div>

    )
}