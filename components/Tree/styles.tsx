import React, { forwardRef, ElementRef, ReactNode } from 'react'

import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { Flex } from '../Flex'
import { Text } from '../Text/Text'
import { ScrollArea } from '../ScrollArea'
import { stylesFactory } from '../../utils/StylesFactory'

import { animated } from '@react-spring/web'

export const Container = styled('div', {
    height: 'fit-content',
    margin: 0,
    padding: '$1 $2',
    border: '2px solid $accentBorder',
    lineHeight: 1.1,
    fontSize: '$2',
    bc: '$accentBg',
    us: 'none' 
})

export const TreeContainer = ({ children }: { children: ReactNode }) => (
    <Flex css={{ maxHeight: '350px', overflowY: 'hidden'}}>
        <ScrollArea>
            {children}
        </ScrollArea>
    </Flex>
);

export const TreeFrame = styled('div', {
    width: '650px',
    display: 'flex',
    flexDirection: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$1',
    position: 'relative',
    padding: '$2',
    textOverflow: 'ellipses',
    overflowX: 'hidden',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    color: '$accentText'
})

export const TreeNodeContents = styled('ul', {
    listStyle: 'none',
    width: '400px',
    display: 'flex', 
    fd: 'row', 
    jc: 'space-between', 
    ai: 'stretch',
    gap: '$1', 
    overflowX: 'hidden',
    overflowY: 'hidden',
    opacity: 0.75,
    '&:hover': {
       opacity: 1,
    },
    color: '$accentText'
});

export const TreeHeading = styled('span', {
    verticalAlign: 'middle',
}); 

export const TreeContent = styled(animated.div, {
    padding: '0px 0px 0px 14px',
    ml: '6px',
    borderLeft: '1px dashed $accentText',
    borderOpacity: 0.4,
    overflow: 'hidden',
    color: '$accentText'
}); 

export const toggle = {
    width: '1em',
    height: '1em',
    cursor: 'pointer',
    verticalAlign: 'middle',
    marginRight: 10,
}; 

const NodeEditorBase = styled('input', {
    fontSize: '11px',
    margin: 0,
    lineHeight: 1
});

type ExtendedNodeEditorProps = Radix.ComponentPropsWithoutRef<typeof NodeEditorBase> & { 
    children: ReactNode;
    placeholder: string; 
    value: string | number | readonly string[];
    isHovered: boolean;
    isFocusWithin: boolean; 
    onChange: (value: string | number | readonly string[]) => void; 
};

export const ExtendedNodeEditor = forwardRef<
    ElementRef<typeof NodeEditorBase>,
    ExtendedNodeEditorProps
>(({ 
    children, 
    placeholder, 
    value, 
    onChange, 
    isHovered,
    isFocusWithin,
    autoComplete,
    type,
    ...otherProps 
}, forwardedRef) => {
    let isDisabled = false;
    let isLoading = false;

    return (
        <NodeEditorBase
            {...otherProps}
            type={type}
            autoComplete={autoComplete}
            ref={forwardedRef}
            css={{
                ...stylesFactory({ isDisabled, isLoading, isFocusWithin, isHovered }),
                opacity: isFocusWithin || isHovered ? 1 : 0.5,
                padding: '0.2em',
                cursor: 'text',
                color: '$accentText'
            }}
        />
    );
});

ExtendedNodeEditor.displayName = 'MutableNode'
export const MutableNode = ExtendedNodeEditor 

export const ImmutableNode = styled('li', {
    fontSize: '$1',
    color: '$accentSolid', 
    '&:hover': {
        color: 'green'
    }
});