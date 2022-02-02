import React, { ReactNode } from 'react'

import {
    PropsVal, 
    ColoredPropsVal as ValidatablePropVal,
    PropsKey, 
    Container,
    InlineSlot
} from './styles'

import { ScrollArea } from '@/components/ScrollArea'

type SlotProps = { 
    children: boolean | string | ReactNode;
};

const stateOf = (toggleable: boolean) => (toggleable === true) ? 'valid' : 'invalid'

const Slot = ({ children }: SlotProps) => {

    if(typeof children === 'string') return (children.length > 10) ? (
        <PropsVal> {`<> ${children.substring(0,2)}... </>`} </PropsVal>
    ): (
        <PropsVal> {children} </PropsVal>
    )

    if(typeof children === 'boolean') return (
        <ValidatablePropVal state={stateOf(children)}> 
            {children.toString()} 
        </ValidatablePropVal>
    )

    if(typeof children === 'function') return (
        <PropsVal> Func() </PropsVal>
    )

    return (
        <ValidatablePropVal state={''}> 
            {children?.toString() ?? `<> NULL </>`} 
        </ValidatablePropVal>
    );
};

export const PropsList = ({ children, ...props }: { children: React.ReactNode; }) => (
   
        <Container>
            <ScrollArea>
                {Object.keys(props).map((val: string) => (
                    <InlineSlot> 
                        <PropsKey>{val}</PropsKey>
                        <Slot>{props[val]}</Slot>
                    </InlineSlot>
                ))}
            </ScrollArea>
        </Container>
    
);

