import { RefObject } from 'react' 

import { useButton } from '@react-aria/button'
import { TreeState } from '@react-stately/tree'
import { mergeProps, useId } from '@react-aria/utils'
import { useSelectableItem } from '@react-aria/selection'

import { CollapsibleItemProps, CollapsibleItemAria } from './types'

const useCollapsibleItem = <T extends object>(
    props: CollapsibleItemProps<T>, 
    state: TreeState<T>, 
    ref: RefObject<HTMLButtonElement>
): CollapsibleItemAria=> {

    const { item, ...rest } = props
    
    const buttonId = useId()
    const regionId = useId()

    const key = item.key
    const isDisabled = state.disabledKeys.has(key)
    const isExpanded = state.expandedKeys.has(key)
    const selectionManager = state.selectionManager

    const { itemProps } = useSelectableItem({ selectionManager, key, ref })

    const { buttonProps } = useButton(mergeProps(itemProps as any, {
        id: buttonId,
        elementType: 'button',
        isDisabled,
        onPress: state.toggleKey(item.key)
    }), ref)

    
    return ({ 
        buttonProps: {
            ...buttonProps,
            'aria-expanded': isExpanded,
            'aria-controls': isExpanded ? regionId : undefined
        },
        regionProps: {
            id: regionId,
            role: 'region',
            'aria-labelledby': buttonId
        }
    })
}

export default useCollapsibleItem