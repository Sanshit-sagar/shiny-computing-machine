import React, { useState, useCallback, useMemo, useEffect, cloneElement, forwardRef, ReactNode } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { SelectContext } from './SelectContext'
import SelectDropdown from './SelectDropdown'

import {
    StyledSelect,
    StyledValue,
    StyledIcon
} from './styles'


type SelectRootProps = {
    children: ReactNode;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    icon?: ReactNode | HTMLOrSVGElement;
    placeholder?: string; 
}

const SelectRoot = ({
    children,
    value: customValue,
    disabled = false,
    onChange,
    icon: Icon = <ChevronDownIcon />,
    placeholder = "Choose One"
}: SelectRootProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        if(customValue === undefined) return
        setValue(customValue)
    }, [customValue])

    const updateVisible = useCallback((next) => {
        setVisible(next)
    }, [setVisible])

    const updateValue = useCallback((next) => {
        setValue(next)
        if(typeof onChange === 'function') {
            onChange(next)
        }
        setVisible(false)
    }, [onChange])

    const handleClick = (event) => {
        event.preventDefault()
        if(disabled) return
        setVisible((prev) => !prev)
    }

    const initialValue = useMemo(() => ({
        value,
        visible,
        updateValue,
        updateVisible,
        disabled
    }), [visible, updateVisible, visible, updateVisible, disabled])

    const pickChildByProps = (children: ReactNode, key: string, value: string) => {
        const target = []

        const withoutPropChildren = React.Children.map(children, (item) => {
            if(!React.isValidElement(item)) return null 
            if(!item.props) return item
            if(item.props[key] === value) {
                target.push(item)
                return null 
            }
            return item
        })

        const targetChildren = target.length >= 0 ? target : undefined 

        return [withoutPropChildren, targetChildren]
    }

    const selectedChild = useMemo(() => {
        const [, optionChildren] = pickChildByProps(children, "value", value)

        return React.Children.map(optionChildren, (child) => {
            if(!React.isValidElement(child)) return null
            const el = cloneElement(child, { preventAllEvents: true })
            return el
        })
    }, [value, children])

    return (
        <SelectContext.Provider value={initialValue}>
            <StyledSelect 
                isDisabled={disabled}
                onClick={handleClick} 
            >
                <StyledValue isPlaceholder={!value}>
                   
                    {!value ? placeholder : selectedChild}
                   
                </StyledValue>
                <StyledIcon visible={visible}>
                    {Icon}
                </StyledIcon>

                <SelectDropdown visible={visible}>
                    {children}
                </SelectDropdown>
            </StyledSelect>
        </SelectContext.Provider>
    )
}

SelectRoot.displayName = 'SelectRoot'
export default SelectRoot 