import { forwardRef, useContext, ReactNode, RefObject } from 'react' 
import { AccordionContext } from './AccordionContext'
import { Node } from '@react-types/shared'

interface AccordionPanelProps<T> {
    item?: Node<T>;
    children: ReactNode; 
}

const AccordionPanel = <T extends object>(
    props: AccordionPanelProps<T>,
    ref: RefObject<HTMLElement>
) => {
    const { item, children } = props
    const { selectedKey, setActivePanelDims, disabledKeys } = useContext(AccordionContext)

    const isSelected = selectedKey !== null && selectedKey === item.key 
    const isDisabled = disabledKeys.has(item.key)

    return (
        <section
            id={`accordion-panel-${item.key}`}
            aria-labelledby={`accordion-header-${item.key}`}
            hidden={!isSelected}
            role="region"
            ref={ref}
            style={{ height: item.key === 'item-3' ? '70px' : '30px', width: 'fit-content', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', wordBreak: 'break-word', maxWidth: '250px', overflow: 'hidden', background: 'orange' }}
            onMouseEnter={(event) => {
                if(isSelected && !isDisabled) {
                    setActivePanelDims(event.currentTarget.getBoundingClientRect())
                }
            }}
        >
           
            {children} 
        </section>
    )
}

AccordionPanel.displayName = 'AccordionPanel'
const _AccordionPanel = forwardRef(AccordionPanel) as <T>(props: AccordionPanelProps<T> & {
    ref?: RefObject<HTMLElement>
}) => ReturnType<typeof AccordionPanel>

export { _AccordionPanel as AccordionPanel }