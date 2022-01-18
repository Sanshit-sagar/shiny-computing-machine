import { useRef } from 'react'

import { useOption } from 'react-aria'

import OptionContext from './OptionContext'
import { StyledListItem, StyledItemContent } from './styles'
import { OptionProps } from './interfaces'

import { CheckIcon } from '@radix-ui/react-icons' 

function Option({ item, state }: OptionProps) {
    const ref = useRef<HTMLLIElement>(null)
    
    const {
       optionProps,
       labelProps,
       descriptionProps,
       isSelected,
       isFocused
    } = useOption({ key: item.key, }, state, ref)


    return (
        <StyledListItem {...optionProps} ref={ref} isFocused={isFocused} isSelected={isSelected}>
            <StyledItemContent>
                <OptionContext.Provider value={{ labelProps, descriptionProps }}>
                    {item.rendered} 
                </OptionContext.Provider>
            </StyledItemContent>
            {isSelected && (
                <CheckIcon aria-hidden="true" style={{ height: 18, width: 18 }} />
            )}
        </StyledListItem>
    )
}

Option.displayName = 'ListBoxOption'
export default Option