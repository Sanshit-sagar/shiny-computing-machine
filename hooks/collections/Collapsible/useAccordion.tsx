import { RefObject } from 'react' 

import { TreeState } from '@react-stately/tree'
import { useSelectableList } from '@react-aria/selection'
import { AccordionProps, AccordionAria } from './types'

const useAccordion = <T extends object>(
    props: AccordionProps<T>, 
    state: TreeState<T>, 
    ref: RefObject<HTMLDivElement>
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


export default useAccordion

























