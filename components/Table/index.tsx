import React from 'react'
import {   
    Row, 
    Cell, 
    Column, 
    TableBody, 
    TableHeader 
} from '@react-stately/table'

import { useAsyncList } from  '@react-stately/data'
import { Table as AriaTable } from './AriaTable'

import { TableScrollView } from './ScrollView'
import { TableContainer } from './styles'
import { ColumnHeader } from './interfaces'


const columnHeaders: ColumnHeader[]  = [
    { key: 'name', value: 'Name' },
    { key: 'model', value: 'Model' },
    { key: 'manufacturer', value: 'Manufacturer' },
    { key: 'starship_class', value: 'StarshipClass' },
    { key: 'cost_in_credits', value: 'Cost', type: 'data' },
    { key: 'length', value: 'Length', type: 'data'  },
    { key: 'max_atmosphering_speed', value: 'Max Speed', type: 'data' },
    { key: 'crew', value: 'Crew', type: 'data' },
    { key: 'passengers', value: 'Passengers', type: 'data' },
    { key: 'consumables', value: 'Consumables', type: 'data' },
    { key: 'hyperdrive_rating', value: 'HyperdriveRating', type: 'data' },
    { key: 'created', value: 'Created', type: 'date' },
    { key: 'edited', value: 'Edited', type: 'date' }
];

function ExampleTable(props) {
    let list = useAsyncList({
        async load({ signal, filterText }) {
            let res = await fetch(
                `https://swapi.dev/api/starships/?search=${filterText}`, 
                {signal}
            );

            let json = await res.json();
            return {
                items: json.results
            };
        },
        async sort({ items, sortDescriptor }) {
          return {
            items: items.sort((a, b) => {
              let first = a[sortDescriptor.column];
              let second = b[sortDescriptor.column];
              let cmp =
                (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
              if (sortDescriptor.direction === 'descending') {
                cmp *= -1;
              }
              return cmp;
            })
          };
        }
    });

    return (
        <AriaTable 
            aria-label="Example table with client side sorting"
            selectionMode="multiple"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
            {...props} 
        >
            <TableHeader>
                {columnHeaders.map((header) => (
                    <Column key={header.key} allowsSorting>
                        {header.value} 
                    </Column>
                ))}
            </TableHeader>
            <TableBody items={list.items}>
                {(item) => (
                    <Row key={item.name}>
                        {(columnKey) => <Cell>{item[columnKey]}</Cell>}
                    </Row>
                )}
            </TableBody>
        </AriaTable>
    );
}

const TableInstance = () => (
    <TableContainer>
        <TableScrollView content={<ExampleTable />} />
    </TableContainer>
);

export default TableInstance

