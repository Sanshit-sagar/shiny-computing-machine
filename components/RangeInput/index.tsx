import { Flex } from '@/components/Flex'
import { Label } from '@/components/Label'
import {StyledRange} from './styles'


export const RangeInput = ({ min, max, step, disabled, value, onChange, label }) => {

    return (
        <Flex css={{ width: '100%', margin: '8px 0px' }}>
            <Label> {label} </Label>
            <StyledRange
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </Flex>
    )
}