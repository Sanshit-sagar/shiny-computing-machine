import { forwardRef } from 'react'

import { useSingleSelectListState } from '@react-stately/list'
import { DOMRef } from '@/interfaces/Shared/Refs'
import { useDOMRef } from '@/utils/useRefs'

import { AccordionContext } from './AccordionContext'
import type { AccordionRootProps, IAccordionContext } from './types'
import AccordionItem from './AccordionItem'
import { StyledAccordion } from './styles'

// 'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details' 
// labelable && labelProps.has ^^^^
// id, 
// propRegex = /^(data-.*)$/

const AccordionRoot = <T extends object>(props: AccordionRootProps<T>, ref: DOMRef<HTMLDivElement>) => {
    const state = useSingleSelectListState<T>(props)
    const domRef = useDOMRef(ref)

    const contextValue: IAccordionContext<T> = {
        selectedKey: state.selectedKey,
        selectedItem: state.selectedItem,
        disabledKeys: state.disabledKeys,
        setSelectedKey: state.setSelectedKey,
        size: state.collection.size,
        collection: state.collection,
        selectionManager: state.selectionManager
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <StyledAccordion
                id={`accordion-group-${props.id}`} 
                className="accordion-group"
                tabIndex={undefined}
                ref={domRef} 
            >
                {[...state.collection].map((item, index) => (
                    <AccordionItem<T> key={item.key} item={item} index={index} />
                ))}
            </StyledAccordion>
        </AccordionContext.Provider>
    )
}

AccordionRoot.displayName = 'Accordion'

const _AccordionRoot = forwardRef(AccordionRoot) as <T>(props: AccordionRootProps<T> & {
    ref?: DOMRef<HTMLDivElement>
}) => ReturnType<typeof AccordionRoot>

const Accordion = _AccordionRoot
export default Accordion

