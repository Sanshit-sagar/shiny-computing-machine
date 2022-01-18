import React, { forwardRef, ElementRef, ReactNode } from 'react'
import * as Radix from '@radix-ui/react-primitive'

import { styled } from '../../stitches.config'

export const PrismContainer = styled('div', {
    height: '700px',
    width: '100%',
    margin: 0,
    boxSizing: 'border-box',
    borderRadius: 0
});

export const Pre = styled('pre', {
    height: '100%',
    width: '100%',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    fontSize: '$1',
    textAlign: 'left',
    overflow: 'hidden',
    padding: 0,
    paddingTop: 10,
    margin: 0,
    float: 'left',
    borderRadius: 0
});

export const Line = styled('div', {
    display: 'table-row',
    fontSize: '$1',
    marginLeft: 0,
    paddingLeft: 0,
    textAlign: 'left'
});

export const StyledLineNumber = styled('span', {
    display: 'table-cell',
    textAlign: 'right',
    userSelect: 'none',
    opacity: 1,
    marginRight: '1em'
});

type ExtendedLineNumberProps = Radix.ComponentPropsWithoutRef<typeof StyledLineNumber> & { 
    hidden: boolean;
    children: ReactNode 
};

const ExtendedLineNumber = React.forwardRef<
    React.ElementRef<typeof StyledLineNumber>,
    ExtendedLineNumberProps
>(({ 
    hidden, 
    children, 
    ...otherProps 
}, forwardedRef) => (
    <StyledLineNumber
        {...otherProps} 
        ref={forwardedRef}
        css={{ 
            color: hidden ? 'transparent' : '$loContrast'
        }}
    >
        {children}
    </StyledLineNumber> 
));

ExtendedLineNumber.displayName='LineNumber'
export const LineNumber =  ExtendedLineNumber

export const LineContent = styled('span', {
    display: 'table-cell'
});