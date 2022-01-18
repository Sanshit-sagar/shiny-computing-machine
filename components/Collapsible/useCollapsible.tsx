import { RefObject } from 'react' 

import { TreeState } from '@react-stately/tree'
import { useSelectableList } from '@react-aria/selection'
import { CollapsibleProps, CollapsibleAria } from './types'

const useCollapsible = <
    T extends object
>(props: CollapsibleProps<T>, state: TreeState<T>, ref: RefObject<HTMLButtonElement>): CollapsibleAria => {

    const { listProps } = useSelectableList({ 
        ...props, 
        ...state, 
        allowsTabNavigation: true, 
        ref 
    })

    return {
        collapsibleProps: {
            ...listProps,
            tabIndex: undefined
        }
    }
}


export default useCollapsible

























