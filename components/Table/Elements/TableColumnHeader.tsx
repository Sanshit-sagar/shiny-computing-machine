import React, { useRef, MutableRefObject } from 'react'
import { styled } from '../../../stitches.config'

import { mergeProps } from '@react-aria/utils'
import { TableState } from '@react-stately/table'
import { useTableColumnHeader } from '@react-aria/table'
import { useInteractions } from '@/hooks/useInteractions'
import SortIndicator from './SortIndicator'

interface TableColumnHeaderProps {
    column: any;
    state: TableState<object>; 
}

const StyledTh = styled('th', {
    minWidth: '150px',
    paddingLeft: '$3',
    paddingTop: '$1',
    paddingBottom: '$1',
    paddingRight: '$2',
    cursor: 'default',
    fontSize: '$2',
    fontWeight: 350,
    lineHeight: 1.25,
    lineSpacing: 1.25,
    border: 'none',
    textTransform: 'uppercase',
    bc: '$accentBgHover',

    variants: {
        colSpan: {
            1: { colspan: 1 },
            2: { colspan: 2},
            3: { colspan: 3 },
            4: { colspan: 4 },
            5: { colspan: 5 },
        },
        isFocused: {
            true: { 
                outline: 'none',
                textDecoration: 'underline',
                textDecorationColor: '$light1'
            },
            false: null,
        },
        isPressed: {
            true: { color: '$accentTextContrast', bc: '$light2' },
            false: { color: '$accentTextContrast', bc: 'transparent' }
        },
        isHovered: {
            true: { color: '$accentSolid', bc: 'transparent' },
            false: null
        },
        align: {
            'center': { textAlign: 'center' },
            'left': { textAlign: 'left' },
            'right': { textAlign: 'right' }
        }
    },
    defaultVariants: {
        colSpan: '1',
        isFocused: false,
        isPressed: false,
        isHovered: false,
        align: 'left'
    }
})

const getColspan = (cs?: number): '1' | '2' | '3' | '4' | '5' => (
       !cs || cs<=1  ? '1' 
    :   cs===2 ? '2' 
    :   cs===3 ? '3' 
    :   cs===4 ? '4' 
    :            '5'
)

const TableColumnHeader = ({ column, state }: TableColumnHeaderProps) => {

    let colHeaderRef: MutableRefObject<HTMLTableCellElement> = useRef<HTMLTableCellElement>()
    let { columnHeaderProps } = useTableColumnHeader({ node: column }, state, colHeaderRef)

    const { interactionProps, isHovered, isFocused, isPressed } = useInteractions({ isDisabled: false })
  
    return (
        <StyledTh
            {...mergeProps(columnHeaderProps, interactionProps)}
            colSpan={getColspan(column.colspan)}
            align={column.colspan > 1 ? 'center' : 'left'}
            isFocused={isFocused}
            isPressed={isPressed}
            isHovered={isHovered}
            ref={colHeaderRef}
        >
            <span style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 0 }}> 
                {column.rendered} 
                <SortIndicator
                    key={column.key}
                    visible={state.sortDescriptor?.column === column.key}
                    allowsSorting={column.props.allowsSorting}
                    direction={state.sortDescriptor?.direction ?? 'N/A'}
                />
            </span>
        </StyledTh>
    );
}

export default TableColumnHeader