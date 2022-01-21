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
        <OptionContext.Provider value={{ labelProps, descriptionProps }}>
            <StyledListItem {...optionProps} ref={ref} isFocused={isFocused} isSelected={isSelected}>
                
                <StyledItemContent>
                    {item.rendered} 
                </StyledItemContent>

                {isSelected && (
                    <CheckIcon aria-hidden="true" />
                )}
            </StyledListItem>
        </OptionContext.Provider>
    )
}

Option.displayName = 'ListBoxOption'
export default Option