import { RefObject } from 'react' 

import { useId } from '@react-aria/utils'
import { TreeState } from '@react-stately/tree'
import { useSelectableCollection } from '@react-aria/selection'

import { SidebarAriaOptions, SidebarAria } from './types'

const useSidebar = <T extends object>({ 
    id, 
    'aria-label': ariaLabel, 
    'aria-labelledby': ariaLabelledBy, 
    shouldFocusWrap = false, 
    layout
}: SidebarAriaOptions<T>,  state: TreeState<T>,  ref: RefObject<HTMLElement>): SidebarAria => {
    const sidebarId = useId(id)
    const selectionManager = state.selectionManager

    const ariaLabelStr = ariaLabel ? id : null
    const ariaLabelledByStr = ariaLabelledBy || ariaLabelStr

    const { collectionProps } = useSelectableCollection({
        ref,
        selectionManager,
        keyboardDelegate: layout,
        shouldFocusWrap
    })

    return {
        navProps: { 
            id: sidebarId,
            role: 'navigation'
        },
        listProps: {
            'aria-labelledby': ariaLabelledByStr,
            role: 'list',
            ...collectionProps
        }
    }
}


export default useSidebar