import React, { useRef } from 'react'

import {
      useTable,    
      useTableRowGroup
} from '@react-aria/table'

import { useTableState } from '@react-stately/table'

import TableRow from './Elements/TableRow'
import TableCell from './Elements/TableCell'
import TableHeaderRow from './Elements/TableHeaderRow'
import TableCheckboxCell from './Elements/TableCheckboxCell'
import TableColumnHeader from './Elements/TableColumnHeader'  
import TableSelectAllCell from './Elements/TableSelectAllCell'

export function Table(props) {
    let { selectionMode, selectionBehavior, onAction } = props;
    let state = useTableState({
      ...props,
      showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace'
    });
  
    let ref = useRef();
    let { collection } = state;
    let { gridProps } = useTable(props, state, ref);
  
    return (
      <table {...gridProps} ref={ref} style={{ borderCollapse: 'collapse', border: 'none' }}>
        <TableRowGroup type="thead">
          {collection.headerRows.map((headerRow) => (
            <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
              {[...headerRow.childNodes].map((column) => column.props.isSelectionCell ? (
                    <TableSelectAllCell key={column.key} column={column} state={state} /> 
                ) : (
                    <TableColumnHeader key={column.key} column={column} state={state} />
                )
              )}
            </TableHeaderRow>
          ))}
        </TableRowGroup>

        <TableRowGroup type="tbody">
          {[...collection.body.childNodes].map((row) => (
            <TableRow key={row.key} item={row} state={state} onAction={onAction}>
                {[...row.childNodes].map((cell) => cell.props.isSelectionCell ? (
                    <TableCheckboxCell key={cell.key} cell={cell} state={state} />
                ) : (
                    <TableCell key={cell.key} cell={cell} state={state} />
                ))}
            </TableRow>
          ))}
        </TableRowGroup>
      </table>
    );
}


function TableRowGroup({ type: Element, style = {}, children }) {
    let {rowGroupProps} = useTableRowGroup();
    return (
      <Element {...rowGroupProps} style={style}>
        {children}
      </Element>
    );
}



