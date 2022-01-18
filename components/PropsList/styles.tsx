
import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import React from 'react'

import { Flex } from '../Flex'

export const Container = styled(Flex, {
    height: 'fit-content',
    maxHeight: '500px', 
    width: 'fit-content', 
    p: '$2',
    pt: '$3',
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    gap: '$2', 
    fw: 'wrap',
    border: '1px solid transparent',
    br: '$1',
    oy: 'hidden',
    bc: '$loContrast'
})

export const PropsKey = styled('span', {
    display: 'inline-flex', 
    fontSize: '$1', 
    fontWeight: 200,
    fontFamily: '$raleway',
    fontStyle: 'normal',
    fontVariant: 'tabular-nums',
    color: '$accentText',
    m: 0
});

export const PropsVal = styled('span', {
    width: '100%',
    display: 'inline-flex', 
    jc: 'flex-end',
    ai: 'inherit',
    fontSize: '$1', 
    fontFamily: '$mono',
    fontWeight: 400,
    fontVariantNumeric: 'tabular-nums',
    color: '$accentTextContrast',
    m: 0,
    textTransform: 'capitalize'
});

const getColor = (state: string) => (
    state==='valid' ? 'green' : state==='invalid' ? 'red' : '$accentTextContrast'
); 

type PropsValProps = {
    state: 'valid' | 'invalid' | '';
    children: string;
}
type ExtendedProps = Radix.ComponentPropsWithoutRef<typeof PropsVal> & PropsValProps; 

const ExtendedPropsVal = React.forwardRef<
    React.ElementRef<typeof PropsVal>,
    ExtendedProps
>(({ state, children, ...otherProps }, forwardedRef) => (
    <PropsVal 
        {...otherProps}
        ref={forwardedRef}
        css={{ color: getColor(state) }}
    >
        {children}
    </PropsVal>
));

ExtendedPropsVal.displayName = 'ValidatablePropsValue'
export const ColoredPropsVal = ExtendedPropsVal

export const InlineSlot = styled('div', {
    width: '100%',
    display: 'flex', 
    fd: 'row',
    jc: 'flex-start',
    ai: 'space-between',
    gap: '$1',
    p: 0, 
    m:0
}); 