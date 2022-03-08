import { useContext } from 'react'

import { ItemProps } from './Item'
import { GroupContext, GroupProps } from './Group'
import { ListContext, ListProps } from './List'

import { CheckIcon } from '@radix-ui/react-icons'

const SELECTION_ERR_STR = 'For Item to be selected, ActionList or ActionList.Group needs to have a selectionVariant defined'

type SelectionVariant = ListProps['selectionVariant'] | GroupProps['selectionVariant']

interface SelectionProps { 
    selected: boolean; 
}

const Selection = ({ selected }: SelectionProps) => {
    const { selectionVariant: listSelected } = useContext(ListContext)
    const { selectionVariant: groupSelected } = useContext(GroupContext)

    let selectionVariant: SelectionVariant = groupSelected !== undefined ? groupSelected : listSelected
    
    if(!selectionVariant) {
        if(!selected) {
            throw new Error(SELECTION_ERR_STR)
        } else {
            return null
        }
    }

    if(selectionVariant === 'single') return (
        <LeadingVisualContainer> 
            {selected && <CheckIcon />} 
        </LeadingVisualContainer>
    )
    
    return (
        <LeadingVisualContainer
            css={{
                rect: {
                    fill: selected ? '$accentText' : '$accentBase',
                    stroke: selected ? '$accentText' : '$accentBase',
                    shapeRendering: 'auto'
                },
                path: {
                    fill: '$accentTextContrast',
                    boxShadow: '$small',
                    opacity: selected ? 1 : 0
                }
            }}
        >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="12" height="12" rx="4" />
                <path
                    fillRule="evenodd"
                    strokeWidth="0"
                    d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
                />
            </svg>
        </LeadingVisualContainer>
    )
}
Selection.displayName = 'Selection'

export {
    Selection
}

export type {
    SelectionProps
}