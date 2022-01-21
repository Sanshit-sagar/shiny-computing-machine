import { Key, useState, MutableRefObject } from 'react'
import { useId } from '@react-aria/utils'

import { strEnum } from "@/interfaces/Guards"

import { StyledInputGroup, StyledInputItem } from './styles'

const PinCodeMode = strEnum([
    "numeric", 
    "tel", 
    "email", 
    "url", 
    "text", 
    "none", 
    "search", 
    "decimal"
])
type PinCodeModeType = keyof typeof PinCodeMode

interface PinCodeProps {
    id?: string | number | Key;
    fields: number;
    type?: 'text' | 'number' | 'password' | 'tel';
    pattern?: string; 
    placeholder?: string; 
    isValid?: boolean;
    isDisabled?: boolean; 
    filterKeyCodes?: number[];
    filterChars?: string[];
    filterCharsIsWhitelist?: boolean;
    forceUppercase?: boolean;
    autoFocus?: boolean;
    autoComplete?: string; 
    val: string; 
    inputMode?: PinCodeModeType;
    onChange: (value: string) => void; 
    touch?: (name: string) => void;
    untouch?: (name: string) => void;
    name: string; 
}

const LEFT_ARROW_KEY = '37'
const UP_ARROW_KEY = '39'
const RIGHT_ARROW_KEY = '38'
const DOWN_ARROW_KEY = '40'

const E_KEY = '69'
const BACKSPACE_KEY = '8'

const initPinCodeProps = (value: string, fields: number, forceUppercase: boolean) => {

    return {
        initValue: (forceUppercase) ? value.toUpperCase() : value,
        initInput: [...Array(Math.min(Number(fields), 32))].map((_v, i) => (
            value.length < i ? value[i] : ''
        )),
    }
}

const PinCode = ({
    id = useId(),
    fields = 4,
    type = 'text', 
    isDisabled = false, 
    filterKeyCodes = [189, 190],
    filterChars = ['-', '.'],
    filterCharsIsWhitelist = false,
    forceUppercase = false,
    autoComplete = 'off',
    autoFocus = true,
    isValid = true,
    val = '',
    pattern,
    placeholder,
    inputMode,
    ...props
}: PinCodeProps) => {
    const { initValue, initInput } = initPinCodeProps(val, fields, forceUppercase)

    const [input, setInput] = useState<string[]>(initInput)
    const [value, setValue] = useState<string>(initValue)
    let textInput = []

    const { touch, untouch, name, onChange, ...rest } = props

    const handleBlur = (event) => {
        return handleTouch(event.currentTarget.value)
    }

    const handleTouch = (value: string) => {
        if(touch && typeof touch === 'function' && untouch && typeof untouch === 'function') {
            if(value === '') {
                touch(name)
            } else {
                untouch(name)
            }
        }
    }

    const handleChange = (event) => {
        let value = event.currentTarget.value

        if(forceUppercase) {
            value = value.toUpperCase()
        }

        if(type === 'number') {
            value = value.replace(/[^\d]/g, '')
        }

        value = value.split('').filter((currChar) => {
            if(filterCharsIsWhitelist) {
                return filterChars.includes(currChar)
            }
            return !filterChars.includes(currChar)
        }).join('')

        let fullValue = value

        if(value != '') {
            const lInput = input.slice()
            if(value.length > 1) {
                value.split('').map((chart, i: number) => {
                    let datasetId = Number(event.currentTarget.dataset.id) + i
                    if(datasetId < fields) {
                        input[datasetId] = chart
                    }
                    return false
                })
            } else {
                input[Number(event.currentTarget.dataset.id)] = value
            }
        

            input.map((s,i) => {
                if(textInput[i]) {
                    textInput[i].value = s
                }
                return false
            })

            let newDatasetId = event.currentTarget.dataset.id
            let newTarget = textInput[
                newDatasetId < input.length ? Number(newDatasetId) + 1 : newDatasetId
            ]

            if(newTarget) {
                newTarget.focus()
                newTarget.select()
            }

            fullValue = input.join('')
            setValue(input.join(''))
            setInput(input)
        }

        if(onChange && typeof onChange === 'function' && fullValue?.length) {
            onChange(fullValue)
        }
        handleTouch(fullValue)
    }

    const handleKeyDown = (event) => {
        const target = Number(event.target.dataset.id)
        const nextTarget = textInput[target + 1]
        const prevTarget = textInput[target - 1]

        let lInput, lValue

        if(filterKeyCodes.length > 0) {
            filterKeyCodes.map((item) => {
                if(item === event.keyCode) {
                    event.preventDefault()
                    return true
                }
            })
        }

        switch(event.keyCode) {
            case BACKSPACE_KEY: 
                event.preventDefault()
                textInput[target].value = ''
                lInput = input.slice()
                lInput[target] = ''
                lValue = input.join('')

                setValue(lValue)
                setInput(lInput)
                if(textInput[target].value === '') {
                    if(prevTarget) {
                        prevTarget.focus()
                        prevTarget.select()
                    }
                }
                if(onChange && typeof onChange === 'function') {
                    onChange(lValue)
                }
                break
            case LEFT_ARROW_KEY:
                event.preventDefault();
                if (prevTarget) {
                    prevTarget.focus()
                    prevTarget.select()
                }
                break
            case RIGHT_ARROW_KEY:
                event.preventDefault()
                if (nextTarget) {
                    nextTarget.focus()
                    nextTarget.select()
                }
                break
            case UP_ARROW_KEY:
                event.preventDefault();
                break
            case DOWN_ARROW_KEY:
                event.preventDefault();
                break
            case E_KEY: 
                if(event.currentTarget.type === 'number') {
                    event.preventDefault()
                    break
                }
                break
            default:
                break
        }

        handleTouch(lValue)
    }

    return (
        <StyledInputGroup>
            {input.map((value: string, index: number) => (
                <StyledInputItem
                    ref={(ref) => {
                        textInput[index] = ref
                    }}
                    id={`id-${id}`}
                    data-id={index}
                    autoFocus={autoFocus && index===0}
                    value={value}
                    key={`pin-code-digit-${index}`}
                    type={type}
                    min={0}
                    max={9}
                    maxLength={input.length === index + 1 ? 1 : input.length}
                    autoComplete={autoComplete}
                    onFocus={(event) => event.currentTarget.select()}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={isDisabled}
                    valid={isValid}
                    invalid={!isValid}
                    pattern={pattern}
                    placeholder={placeholder}
                    inputMode={inputMode}
                />
            ))}
        </StyledInputGroup> 
    )
}


PinCode.displayName = "PinCode"
export default PinCode