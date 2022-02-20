import { forwardRef, useContext, ReactNode, RefObject, cloneElement, Children } from 'react' 
import { styled } from 'stitches.config'

import { AccordionContext } from './AccordionContext'
import { Node } from '@react-types/shared'
import { StyledPanel } from './styles'

interface AccordionPanelProps<T> {
    item?: Node<T>;
    children: ReactNode; 
    index: number;
}

const AccordionPanel = <T extends object>(
    props: AccordionPanelProps<T>,
    ref: RefObject<HTMLElement>
) => {
    const { item, children, index } = props
    const { selectedKey, disabledKeys, size } = useContext(AccordionContext)

    const isSelected = selectedKey !== null && selectedKey === item.key 
    const isDisabled = disabledKeys.has(item.key)

    return (
        <StyledPanel
            id={`accordion-panel-${item.key}`}
            aria-labelledby={`accordion-header-${item.key}`}
            hidden={!isSelected}
            role="region"
            ref={ref}
            isFirst={index === 0}
            isLast={index === size - 1}
            isSelected={isSelected}
        >  
            {children}
        </StyledPanel>
    )
}

AccordionPanel.displayName = 'AccordionPanel'
const _AccordionPanel = forwardRef(AccordionPanel) as <T>(props: AccordionPanelProps<T> & {
    ref?: RefObject<HTMLElement>
}) => ReturnType<typeof AccordionPanel>

export { _AccordionPanel as AccordionPanel }