import React, { ReactNode, MutableRefObject, useRef } from 'react'
import { styled } from '../../../stitches.config'

import { useTableHeaderRow } from '@react-aria/table'
import { TableState } from '@react-stately/table'
import { Node } from '@react-types/shared'


const StyledTr = styled('tr', {
    bc: 'transparent', 
    padding: 0, 
    margin: 0, 
    border: 'none', 
    br: '$2',
    color: '$accentText',
    height: 'fit-content'
});


interface TableHeaderRowProps {
    item: Node<object>,
    state: TableState<object>;
    children: ReactNode; 
}

const TableHeaderRow = ({ item, state, children }: TableHeaderRowProps) => {
    let headerRowRef: MutableRefObject<HTMLTableRowElement> = useRef<HTMLTableRowElement>()
    let { rowProps } = useTableHeaderRow({ node: item }, state, headerRowRef)
  
    return (
        <StyledTr
            {...rowProps} 
            ref={headerRowRef}
        >
            {children}
        </StyledTr>
    );
}

export default TableHeaderRow