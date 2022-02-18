import { useState, forwardRef } from 'react'

import { useSingleSelectListState } from '@react-stately/list'
import { DOMRef } from '@/interfaces/Shared/Refs'
import { useDOMRef } from '@/utils/useRefs'

import { AccordionContext } from './AccordionContext'
import type { AccordionRootProps } from './types'
import AccordionItem from './AccordionItem'
import { ResizableContainer } from '@/components/Resizable'

// 'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details' 
// labelable && labelProps.has ^^^^
// id, 
// propRegex = /^(data-.*)$/

const AccordionRoot = <T extends object>(props: AccordionRootProps<T>, ref: DOMRef<HTMLDivElement>) => {

    const [activePanelDims, setActivePanelDims] = useState<Partial<DOMRect>>({ x: 0, y: 0, height: 0, width: 0 })
    const state = useSingleSelectListState<T>(props)
    const domRef = useDOMRef(ref)

    const contextValue = {
        selectedKey: state.selectedKey,
        selectedItem: state.selectedItem,
        disabledKeys: state.disabledKeys,
        setSelectedKey: state.setSelectedKey,
        size: state.collection.size,
        activePanelDims,
        setActivePanelDims
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ResizableContainer css={{ height: state.selectedKey !== null ? `${200 + activePanelDims.height}px` : '200px', width: '200px' }}>
                <p> hihi {activePanelDims.height}  </p> 
                <div
                    id={`accordion-group-${props.id}`} 
                    className="Accordion-group"
                    tabIndex={undefined}
                    ref={domRef} 
                    style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', gap: '3px' }}
                >
                    {[...state.collection].map((item) => (
                        <AccordionItem<T> key={item.key} item={item} />
                    ))}
                </div>
            </ResizableContainer>
        </AccordionContext.Provider>
    )
}

AccordionRoot.displayName = 'Accordion'

const _AccordionRoot = forwardRef(AccordionRoot) as <T>(props: AccordionRootProps<T> & {
    ref?: DOMRef<HTMLDivElement>
}) => ReturnType<typeof AccordionRoot>

const Accordion = _AccordionRoot
export default Accordion
