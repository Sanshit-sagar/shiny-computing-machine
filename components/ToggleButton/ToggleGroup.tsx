import React, { useRef, Ref } from 'react'

import { useMultipleSelectionState } from '@react-stately/selection'
import { useFocus } from '@react-aria/interactions'
import { Item } from '@react-stately/collections'
import { mergeProps } from '@react-aria/utils'

import { MultipleSelectionState, MultipleSelectionProps } from './interfaces'

const ToggleGroup = ({ selectionMode = 'none', ...props }: MultipleSelectionProps) => {

    const ref: Ref<HTMLButtonElement> = useRef<HTMLButtonElement>()
    const state: MultipleSelectionState = useMultipleSelectionState({ 
        ...props, 
        selectionMode: 'none' 
    })
   

    return (

    )
}