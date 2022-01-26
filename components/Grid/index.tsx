import { styled, CSS } from '../../stitches.config'
import React, { HTMLAttributes } from 'react'

type Alignements =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'left'
  | 'right'
  | 'stretch'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'

interface Props extends HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    children: React.ReactNode | React.ReactNodeArray;
    gap?: number | string;
    columnGap?: number | string;
    rowGap?: number | string;
    columns?: string;
    rows?: string;
    flow?: 'row' | 'column' | 'row dense' | 'column dense';
    alignContent?: Alignements;
    alignItems?: Alignements;
    justifyContent?: Alignements;
    justifyItems?: Alignements;
    'data-testid'?: string;
    css?: CSS;
}

const StyledGrid = styled('div', {
    display: 'grid',
    height: 'inherit',
});

export const Grid = (props: Props) => {
    const {
        as = 'div',
        gap = 'none',
        rowGap = 'none',
        columnGap = 'none',
        columns,
        rows,
        flow = 'row',
        alignContent,
        alignItems,
        justifyContent,
        justifyItems,
        ...rest
    } = props

    const sanitizedGap = typeof gap === 'number' ? `${gap}px` : gap
    const sanitizedRowGap = typeof rowGap === 'number' ? `${rowGap}px` : rowGap
    const sanitizedColumnGap = typeof columnGap === 'number' ? `${columnGap}px` : columnGap
    const sanitizedColumns = columns || 'none'
    const sanitizedRows = rows || 'none'

    return (
        <StyledGrid
            as={as}
            {...rest}
            css={{
                gap: sanitizedGap,
                columnGap: sanitizedColumnGap,
                rowGap: sanitizedRowGap,
                gridAutoFlow: flow,
                gridTemplateColumns: sanitizedColumns,
                gridTemplateRows: sanitizedRows,
                alignContent,
                alignItems,
                justifyContent,
                justifyItems,
            }}
        >
            {props.children}
        </StyledGrid>
    )
}