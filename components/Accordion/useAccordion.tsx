import React, { HTMLAttributes, RefObject } from 'react' 

import { Node } from '@react-types/shared'

import { useButton } from '@react-aria/button'
import { TreeState } from '@react-stately/tree'
import { mergeProps, useId } from '@react-aria/utils'
import { 
    useSelectableItem, 
    useSelectableList 
} from '@react-aria/selection'

type AccordionProps<T> = {
    item: Node<T>
}
type AccordionAria = {
    accordionProps: HTMLAttributes<HTMLElement>;
}
type AccordionItemAria = {
    buttonProps: HTMLAttributes<HTMLButtonElement>;
    accordionItemProps: HTMLAttributes<HTMLElement>;
}

export const useAccordion = <T extends object>(
    props: AccordionProps<T>, 
    state: TreeState<T>, 
    ref: RefObject<HTMLButtonElement>
): AccordionAria => {

    const { listProps } = useSelectableList({ 
        ...props, 
        ...state, 
        allowsTabNavigation: true, 
        ref 
    })

    return {
        accordionProps: {
            ...listProps,
            tabIndex: undefined
        }
    }
}