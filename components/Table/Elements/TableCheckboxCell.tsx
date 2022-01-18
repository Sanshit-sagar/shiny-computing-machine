import React, { Fragment, MutableRefObject, useRef } from 'react'

import { Node } from '@react-types/shared' 
import { TableState } from '@react-stately/table'

import { useCheckbox } from '@react-aria/checkbox'
import { useToggleState } from '@react-stately/toggle'
import { useTableCell, useTableSelectionCheckbox } from '@react-aria/table'

interface CheckboxCellProps {
    cell: Node<object>;  
    state: TableState<object>;
};

const TableCheckboxCell = ({ cell, state }: CheckboxCellProps) => {
    let ref: MutableRefObject<HTMLTableDataCellElement> = useRef<HTMLTableDataCellElement>()
    let inputRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let checkboxState = useToggleState({ 
        defaultSelected: false, isDisabled: false, isRequired: false, autoFocus: false 
    });

    let { gridCellProps } = useTableCell({ node: cell }, state, ref)
    let { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey }, state)
    let { inputProps } = useCheckbox(checkboxProps, checkboxState, inputRef)
  
    return (
        <td {...gridCellProps} ref={ref} style={{ border: 'none'}}>
            <input {...inputProps} ref={inputRef} /> 
        </td>
    );
}
export default TableCheckboxCell