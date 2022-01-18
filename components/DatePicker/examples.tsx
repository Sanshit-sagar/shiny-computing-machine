
// import { TimeField } from './TimeField'
import { DatePicker } from './DatePicker'
// import { DatePickerField } from './DatePickerField'
import { ExampleBase } from '@/components/ExampleBase'
import StateFactory from '@/utils/StateFactory'

import { CalendarIcon } from '@radix-ui/react-icons'
import { DatePickerProps } from './interfaces' 
import { DateValue, CalendarDate } from '@internationalized/date'

const init = (): DatePickerProps<DateValue> => {
    const today = new Date(); 

    const datePickerState: DatePickerProps<DateValue> = {
        autoFocus: false,
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        minValue: null,
        maxValue: null,
        hourCycle: 24,
        maxVisibleMonths: 1,
        hideTimeZone: false,
        granularity: "day",
        label: "Select a date",
        placeholderValue: new CalendarDate(today.getFullYear(), today.getMonth(), today.getDay())
    }
    return datePickerState
}

const DatePickerInstance = ({ props }: { props: DatePickerProps<DateValue> }) => (
    <DatePicker<DateValue> {...props} />
);

const ExampleDatePicker = () => {
    const { state } = StateFactory<DatePickerProps<DateValue>>(init)

    return (
        <ExampleBase
            heading={'DatePicker'}
            description={'DatePicker description here'}
            icon={<CalendarIcon />}
            component={<DatePickerInstance props={state} />}
            controls={[]}
        />
    )
}

export default ExampleDatePicker