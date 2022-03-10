import { useRef } from 'react' 
import { styled } from 'stitches.config'
import { useLocale } from '@react-aria/i18n'
import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'

import { mergeProps } from '@react-aria/utils'

import { DateValue } from '@internationalized/date'
import { DatePickerProps, SpectrumDatePickerProps } from '@react-types/datepicker'

import { Input } from './Input'
import { TimeField } from './TimeField'
import { DatePickerField } from './DatePickerField'
import { DatePickerTrigger } from './DatePickerTrigger'
import { Calendar } from '@/components/Calendar'

import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { usePreventScroll } from '@react-aria/overlays'

const StyledContainer = styled('div', {
    d: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center',
    width: 'fit-content',
    height: 'fit-content',
    padding: '$2',
    margin: 0,
    border: '1px solid $accentBorder',
    bc: '$accentBg',
    br: '$2',

    variants: {
        isHovered: {
            true: {
                bc: '$accentBgHover',
                borderColor: '$accentBorderHover'
            },
            false: null
        },
        isFocused: {
            true: {
                bc: '$accentBgActive',
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false
    }
})


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
    const targetRef = useRef<HTMLDivElement>()
    const state = useDatePickerState(props)

    const { 
        groupProps, 
        labelProps, 
        fieldProps, 
        descriptionProps, 
        errorMessageProps, 
        buttonProps, 
        dialogProps
    } = useDatePicker(props, state, targetRef)

    const { value, setValue, isOpen, setOpen } = state
    const { hoverProps, isHovered} = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({
        within: true,
        isTextInput: true,
        autoFocus
    })

    const placeholder: DateValue = placeholderValue
    const timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null
    const timeMinValue = minValue && 'hour' in minValue ? minValue : null
    const timeMaxValue = maxValue && 'hour' in maxValue ? maxValue : null
    const timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' || state.granularity === 'millisecond' ? state.granularity : null
    const showTimeField = !!timeGranularity

    const visibleMonths = maxVisibleMonths; // TODO: fix w/ resize observer 

    usePreventScroll()

    return (
            <StyledContainer 
                {...mergeProps(groupProps, hoverProps, focusProps)}
                isHovered={isHovered}
                isFocused={isFocused || isFocusVisible}
            >
                <Input 
                    fieldProps={fieldProps}
                    autoFocus={false}
                    isDisabled={isDisabled}
                    validationState={state.validationState}
                >
                    <DatePickerField
                        {...fieldProps}
                        data-testid="date-field"
                        value={value}
                        onChange={setValue}
                        validationState={state.validationState}
                        isDisabled={isDisabled}
                        isReadOnly={isReadOnly}
                        isRequired={isRequired}
                        granularity={granularity}
                        hourCycle={hourCycle}
                        hideTimeZone={hideTimeZone}
                        placeholderValue={placeholderValue}
                    />
                </Input>
                <DatePickerTrigger
                    type="popover"
                    targetRef={targetRef}
                    placement={direction === 'rtl' ? 'right' : 'left'}
                    isOpen={isOpen}
                    onOpenChange={setOpen}
                >
                    <Calendar
                        autoFocus
                        value={state.dateValue}
                        onChange={state.setDateValue}
                        visibleMonths={visibleMonths}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
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
            </StyledContainer> 
    )
}


{/* <Field  */}
    // {...props}
    // ref={targetRef}
    // description={'description goes here'}
    // labelProps={labelProps}
    // descriptionProps={descriptionProps}
    // errorMessageProps={errorMessageProps}
    // validationState={state.validationState}
{/* ></Field> */}