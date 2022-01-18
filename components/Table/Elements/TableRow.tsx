import React, { useRef, ReactNode, MutableRefObject } from 'react';
import { styled } from '../../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { Node } from '@react-types/shared' 
import { mergeProps } from '@react-aria/utils'
import { useTableRow } from '@react-aria/table'
import { TableState } from '@react-stately/table'

import { useInteractions } from '@/hooks/useInteractions'

const StyledTr = styled('tr', {
    fontSize: '$1',
    fontWeight: 300,
    lineHeight: 1,
    padding: 0,
    margin: 0,
    outline: 'none',
    borderBottom: '0.1px solid',
    borderBottomColor: '$accentBorder',
    '&:last-child': { borderBottom: 'none' },
   
    variants: {
        isSelected: {
            true: {
                '&:nth-child(odd)': { bc: '$successDefault', color: '$dark1' },
                '&:nth-child(even)': { bc: '$successDefault', color: '$dark1' },
                color: '$accentTextContrast'
            },
            false: null,
        },
        isHovered: {
            true: {
                '&:nth-child(odd)': {  bc: '$successLighter' },
                '&:nth-child(even)': {  bc: '$successLighter' },
                color: '$accentTextContrast'
            },
            false: null
        },
        isPressed: {
            true: {
                '&:nth-child(odd)': { bc: '$successLight' },
                '&:nth-child(even)': { bc: '$successLight' }
            },
            false: null,
        },
        isFocused: {
            true: {
                '&:nth-child(odd)': { border: '0.1px solid', borderTopColor: '$highlightMagenta',  borderBottomColor: '$highlightMagenta' },
                '&:nth-child(even)': { border: '0.1px solid', borderTopColor: '$highlightMagenta', borderBottomColor: '$highlightMagenta' },
            },
            false: null
        },
        idle: {
            true: {
                '&:nth-child(odd)': { bc: 'transparent' },
                '&:nth-child(even)': { bc: 'transparent'  },
            },
            false: null
        }
    },
    compoundVariants: [
        {
            isSelected: true,
            isFocused: true,
            css: {
                backgroundColor: 'red'
            }
        },
        {
            isSelected: true,
            isHovered: true,
            css: {
                backgroundColor: 'yellow'
            }
        }
    ],
    defaultVariants: {
        isSelected: false,
        isHovered: false,
        isFocused: false,
        isPressed: false,
        idle: true
    }
});

type TrProps = React.ComponentProps<typeof StyledTr> & { 
    children: React.ReactNode;
    forwardedRef: MutableRefObject<HTMLTableRowElement> 
}; 

const ExtendedTr = React.forwardRef<HTMLTableRowElement, TrProps>(
    ({ children, forwardedRef, isSelected, isHovered, isFocused, isPressed, ...otherProps }) => (
    <StyledTr 
        {...otherProps} 
        isSelected={isSelected}
        isHovered={isHovered}
        isPressed={isPressed}
        isFocused={isFocused}
        idle={!isSelected && !isHovered && !isPressed && !isFocused ? true : false} 
        ref={forwardedRef}
    >
        {children}
    </StyledTr>
)); 

interface TableRowProps {
    item: Node<object>,
    children: ReactNode,
    state: TableState<object>,
    onAction: () => void 
}

function TableRow({ item, children, state, onAction }: TableRowProps) {
    
    const tableRowRef: MutableRefObject<HTMLTableRowElement> = useRef<HTMLTableRowElement>()
    const isSelected = state.selectionManager.isSelected(item.key)

    const { rowProps } = useTableRow({ node: item }, state, tableRowRef)
    const { interactionProps, isPressed, isHovered, isFocused } = useInteractions({ isDisabled: false })
  
    return (
        <ExtendedTr
            {...mergeProps(rowProps, interactionProps)}
            forwardedRef={tableRowRef}
            isHovered={isHovered}
            isPressed={isPressed}
            isFocused={isFocused}
            isSelected={isSelected}
        >
            {children}
        </ExtendedTr>
    );
}

export default TableRow;

