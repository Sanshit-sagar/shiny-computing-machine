import React, { useState } from 'react';
import { styled } from '../../stitches.config'

const InlineInput = styled('input', {
    appearance: 'none',
    userSelect: 'none',
    boxSizing: 'border-box',

    br: '$1',
    border: '1px solid $accentBorder',
    bc: 'transparent',
    color: '$accentText',

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: '$1',

    mx: '$2',
    py: 0,
    px: '$3',

    outline: 'none',
    fontFamily: '$jetbrains',
    WebkitTapHighlightColor: 'transparent',

    fontVariantNumeric: 'tabular-nums',

    '::before': {
        boxSizing: 'border-box',
    },
    '::after': {
        content: "''",
        boxSizing: 'border-box',
    },
    '&::placeholder': {
        color: '$accentText',
        opacity: 0.6
    },
    '&:hover': {
        border: '1px solid $accentBorderHover'
    },

    variants: {
        'size': {
            '0': { height: '100px', width: '92.5%', fontSize: '$8' },
            '1': { height: '125px', width: '92.5%', fontSize: '$9' },
            '2': { height: '150px', width: '92.5%', fontSize: '$10' },
            '3': { height: '175px', width: '92.5%', fontSize: '$11' },
            '4': { height: '200px', width: '92.5%', fontSize: '$12' },
            '5': { height: '225px', width: '92.5%', fontSize: '$13' },
            '6': { height: '250px', width: '92.5%', fontSize: '$14' }
        },
        'fontSize': {
            '1': { fontSize: '$10' },
            '2': { fontSize: '$11' },
            '3': { fontSize: '$12' },
            '4': { fontSize: '$13' },
            '5': { fontSize: '$14' },
            '6': { fontSize: '$15' }
        },
        'radius': {
            '0': { br: 0 },
            '1': { br: '$1' },
            '2': { br: '$2' },
            '3': { br: '$3' },
            '4': { br: '$4' },
            '5': { br: '$5' },
            '6': { br: '$6' },
            '7': { br: '$7' },
            '8': { br: '$8' },
            '9': { br: '$9' }
        },
        'cursor': {
            'default': {
                cursor: 'default',
                '&:focus': {
                    cursor: 'text',
                },
            },
            'not-allowed': {
                cursor: 'not-allowed',
            },
            'idle': {
                cursor: 'pointer'
            },
            'none': {
                cursor: 'none',
            },
            'text': {
                cursor: 'text',
            },
        },
    },
    defaultVariants: {
        size: '3',
        radius: '2',
        fontSize: '3',
        cursor: 'text'
    }
});

export interface InlineEditProps {
    value: string; 
    setValue?: (value: string) => void; 
    multiline: boolean; 
    size: '1' | '2' | '3' | '4' | '5';
    radius: '1' | '2' | '3' | '4' | '5';
}


export const InlineEdit = ({ value, setValue, size, radius }: InlineEditProps) => {

    const [content, setContent] = useState<string>('');

    const onChange = (event) => {
        setContent(event.currentTarget.value); 
    }

    const onKeyDown = (event) => {
        if(event.key === 'Enter' || event.key === 'Escape')  {
            event.target.blur();
        }
    }

    const onBlur = (event) => {
        if(event.currentTarget.value.trim() === "") {
            setContent(value);
        } else {
            setValue(event.currentTarget.value); 
        }
    }

    return (
        <InlineInput
            type="text"
            aria-label="Field Name"
            value={content}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            size={size}
            radius={radius} 
            autoComplete="off"
            autoCorrect="off"
            placeholder="Start typing..."
            spellCheck="false"
        />
    )
}

