import React, { MutableRefObject, useRef } from 'react';
import { styled } from '../../../stitches.config'

import { Node } from '@react-types/shared'
import { mergeProps } from '@react-aria/utils'
import { useTableCell } from '@react-aria/table'
import { useFocusRing } from '@react-aria/focus'
import { TableState } from '@react-stately/table'

export const StyledTd = styled('td', {
    cursor: 'default',
    minWidth: 175,
    maxWidth: 175,
    width: '100%',
    fontSize: '$2',
    bc: 'transparent',
    border: 'none',
    tableLayout: 'fixed',
    outline: 'none',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: '$2 $3',

    variants: {
        isFocusVisible: {
            true: {
                bc: '$successLighter',
                color: '$accentTextContrast',
                border: '0.1px solid $highlightMagenta'
            },
            false: null
        }
    },
    defaultVariants: {
        isFocusVisible: false
    }
}); 

interface TableCellProps {
    cell: Node<object>; 
    state: TableState<object>;
};

const TableCell = ({ cell, state }: TableCellProps) => {

    let ref: MutableRefObject<HTMLTableCellElement> = useRef<HTMLTableCellElement>()
    let { gridCellProps } = useTableCell({node: cell}, state, ref)
    let { isFocusVisible, focusProps } = useFocusRing()
  
    return (
        <StyledTd
            {...mergeProps(gridCellProps, focusProps)}
            isFocusVisible={isFocusVisible}
            ref={ref}
        >
            {cell.rendered}
        </StyledTd>
    );
}

export default TableCell; 