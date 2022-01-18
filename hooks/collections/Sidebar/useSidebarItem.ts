

import { RefObject, AnchorHTMLAttributes } from 'react'
import { TreeState } from '@react-stately/tree'
import { useSelectableItem } from '@react-aria/selection'

import { SidebarItemProps, SidebarItemAria } from './types'

// type Booleanish = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-selected'>['aria-selected']
// const page: Booleanish = "true"
// boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"

const useSidebarItem = <T extends object>(props: SidebarItemProps<T>, state: TreeState<T>, ref: RefObject<HTMLAnchorElement>): SidebarItemAria => {

    const { 
        item, 
        'aria-current': ariaCurrent
    } = props

    const key = item.key
    const selectionManager = state.selectionManager
    const isDisabled = state.disabledKeys.has(key)
    const isSelected = selectionManager.isSelected(key)

    const { itemProps } = useSelectableItem({ selectionManager, key, ref })

    return {
        listItemProps: {
            role: 'listitem'
        },
        listItemLinkProps: {
            role: 'link',
            target: '_self',
            'aria-disabled': isDisabled,
            'aria-selected': isSelected ? (ariaCurrent || "page") : undefined,
            ...itemProps
        }
    }
}

export default useSidebarItem 