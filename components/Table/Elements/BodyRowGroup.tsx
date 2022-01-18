import React, { forwardRef } from 'react';
import { styled } from '../../../stitches.config'

import { useTableRowGroup } from '@react-aria/table'
import { mergeProps } from '@react-aria/utils'

const StyledRowGroup = styled('tbody', {
    display: 'block', 
    overflow: 'auto',
    bc: 'red',
    color: 'green',  
    padding: 0,
    margin: 0
});

type RowGroupProps = React.ComponentProps<typeof StyledRowGroup>;

const BodyRowGroup = forwardRef<HTMLTableSectionElement, RowGroupProps>(
    (_props, forwardedRef) => {

    let { children, ...props } = _props; 
    let { rowGroupProps } = useTableRowGroup();

    return (
        <StyledRowGroup 
            {...mergeProps(props, rowGroupProps)}
            ref={forwardedRef} 
        >
            {children}
        </StyledRowGroup>
    );
});

export default BodyRowGroup;