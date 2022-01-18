import { styled } from '../../stitches.config'
import React, { HTMLAttributes, ReactNode } from 'react'
import { DotFilledIcon, LockClosedIcon } from '@radix-ui/react-icons'

import { Text } from '@/components/Text/Text'
import { Flex } from '@/components/Flex'

export type ValidationColor = 'red' | 'green' | 'none'

export type TextMessageProps = {
    children: React.ReactNode;
} & Partial <{ 
    color?: ValidationColor;
    size?: '$1' | '$2' | '$2'; 
    align?: 'start' | 'end'; 
    props?: HTMLAttributes<HTMLElement>; 
}>; 

export type LabelProps = { 
    text: string; 
} & Partial<{
    isRequired: boolean;
    isDisabled: boolean;
    isLoading: boolean; 
    isReadOnly: boolean;
    icon: ReactNode;
    hideLabel: boolean;
    labelProps: HTMLAttributes<HTMLLabelElement>; 
}>; 

export const Wrapper = styled('div', {
    display: 'inline-flex',
    flexDirection: 'column', 
    position: 'relative',
});


export const Label = styled('label', {
    display: 'flex',
    flexDirection: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$1',
    textAlign: 'left',
    fontSize: '$1',
    fontWeight: 250,
    ml: '$1',
    mb: '$1',
    color: '$accentText',
    textTransform: 'uppercase'
});

export const DecoratedLabel = ({ 
    hideLabel = false,
    labelProps,
    icon = null, 
    text, 
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    isLoading = false, 
}: LabelProps) => (
    <> 
        {!hideLabel ? 
        <Label {...labelProps}> 
            <> {icon || null} </>
            
            <Text css={{ color: '$accentText' }}> 
                {text} 
            </Text>

            {isRequired && <DotFilledIcon />}
            {isDisabled && <LockClosedIcon />}
        </Label> : null}
    </>
);


export const TextMessage = ({ 
    children, 
    color = 'none', 
    size = '$1',
    align = 'start',
    props
}: TextMessageProps) => (
    <Flex 
        {...props} 
        style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: align==='end' ? 'flex-end' : 'flex-start',
            alignItems: 'center',
            color: '$accentText',
            fontSize: '11px',
            margin: '$1',
        }}
    >
        {children}
    </Flex>
)
