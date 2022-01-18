import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import { styled } from '../../stitches.config'
import { InlineEditProps } from './Inline'

const MultilineTextArea = styled('textarea', {
    resize: 'none',
    userSelect: 'none',
    appearance: 'none',
    overflow: 'hidden',

    bc: 'transparent',
    color: '$accentText',

    outline: 'none',
    fontFamily: '$jetbrains',
    fontStyle: 'bold',
    fontWeight: 700,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    WebkitTapHighlightColor: 'transparent',

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: '$1',
    
    px: '$4',
    pt: '$5',
    pb: '$7',

    border: '1px solid transparent',

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
        border: '1px solid $accentBorderHover',
    },
    variants: {
        'size': {
             '0': { height: '140px', width: '600px', fontSize: '$8' },
             '1': { height: '150px', width: '600px', fontSize: '$9' },
             '2': { height: '160px', width: '600px', fontSize: '$10' },
             '3': { height: '170px', width: '600px', fontSize: '$11' },
             '4': { height: '180px', width: '600px', fontSize: '$12' },
             '5': { height: '190px', width: '400px', fontSize: '$13' },
             '6': { height: '200px', width: '400px', fontSize: '$14' },
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
                    cursor: 'text'
                },
            },
            'not-allowed': {
                cursor: 'not-allowed'
            },
            'idle': {
                cursor: 'pointer'
            },
            'none': {
                cursor: 'none'
            },
            'text': {
                cursor: 'text'
            },
        }
    },
    defaultVariants: {
        size: '3',
        radius: '2',
        fontSize: '3',
        cursor: 'text'
    }
});

export const MultilineEdit = ({ value, setValue, size, radius }: InlineEditProps) => {

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

    const onInput = (target) => {
        if (target.scrollHeight > 33) {
          target.style.height = "5px";
          target.style.height = target.scrollHeight - 16 + "px";
        }
    };
    

    const textAreaRef: MutableRefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(); 

    useEffect(() => {
        onInput(textAreaRef.current);
    }, [onInput, textAreaRef]); 

    return (
        <MultilineTextArea
            rows={1}
            aria-label="Field Name"
            value={content}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onInput={(event) => onInput(event.currentTarget)}
            ref={textAreaRef}
            size={size}
            radius={radius} 
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder="Start typing..."
        />
    )
}

