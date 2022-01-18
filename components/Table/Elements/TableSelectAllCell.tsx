import React, { MutableRefObject, useRef } from 'react'

import { GridNode } from '@react-types/grid'
import { TableState } from '@react-stately/table'
import { useCheckbox } from '@react-aria/checkbox'
import { useToggleState } from '@react-stately/toggle'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useTableColumnHeader, useTableSelectAllCheckbox } from '@react-aria/table'

import { Checkbox } from '@/components/Table/Elements/Checkbox'
import { useInteractions } from '@/hooks/useInteractions'

interface TableSelectAllCellProps {
    column: GridNode<object>;
    state: TableState<object>;
}

const TableSelectAllCell = ({ column, state }: TableSelectAllCellProps) => {

    let headerRef: MutableRefObject<HTMLTableCellElement> = useRef<HTMLTableCellElement>()
    let checkboxRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    let isSingleSelectionMode: boolean = state.selectionManager.selectionMode === 'single'

    let { checkboxProps } = useTableSelectAllCheckbox(state)
    let { columnHeaderProps } = useTableColumnHeader({ node: column }, state, headerRef)
    let { inputProps } = useCheckbox(checkboxProps, useToggleState(checkboxProps), checkboxRef)
  
    return (
        <th {...columnHeaderProps} ref={headerRef} style={{ border: 'none' }}>
            {isSingleSelectionMode ? (
                <VisuallyHidden> {inputProps['aria-label']} </VisuallyHidden>
            ) : (
                <input {...inputProps} ref={checkboxRef} />
            )}
        </th>
    );
}

export default TableSelectAllCell