import { RefObject } from 'react' 

import { useButton } from '@react-aria/button'
import { TreeState } from '@react-stately/tree'
import { mergeProps, useId } from '@react-aria/utils'
import { useSelectableItem } from '@react-aria/selection'

import { AccordionItemProps, AccordionItemAria } from './types'

const useAccordionItem = <T extends object>(
    props: AccordionItemProps<T>, 
    state: TreeState<T>, 
    ref: RefObject<HTMLButtonElement>
): AccordionItemAria=> {

    const { item, ...rest } = props
    
    const sharedId = useId()
    const headerId = `accordion-header-${sharedId}`
    const regionId = `accordion-panel-${sharedId}` 
   

    const key = item.key
    const isDisabled = state.disabledKeys.has(key)
    const isExpanded = state.expandedKeys.has(key)
    const selectionManager = state.selectionManager

    const { itemProps } = useSelectableItem({ selectionManager, key, ref })

    const { buttonProps } = useButton(mergeProps(itemProps as any, {
        id: headerId,
        elementType: 'button',
        isDisabled,
        onPress: state.toggleKey(item.key)
    }), ref)

    
    return ({ 
        buttonProps: {
            ...buttonProps,
            'aria-expanded': isExpanded.toString(),
            'aria-controls': isExpanded ? regionId : undefined
        },
        regionProps: {
            id: regionId,
            role: 'region',
            'aria-labelledby': headerId
        }
    })
}


export default useAccordionItem