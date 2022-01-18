import React, { useState, useCallback, useEffect, ChangeEvent } from 'react'

import { 
    Status,
    Container,
    TextArea as StyledTextArea 
} from './styles'

import { RestrictedContentState } from './interfaces'
import type { RestrictedInputProps } from './interfaces'

const getStatus = (wc: number, limit: number, disabled: boolean) => {
    if(wc >= limit - 1) return 'redline'
    if(limit === 0 || disabled) return 'disabled'
    if(wc === 0) return 'idle'
    return 'easy'
}

export const RestrictedCharsInput = ({ rows, cols, value, limit, ...props }: RestrictedInputProps) => {
    const [content, setContent] = useState<string>(value.slice(0,limit));

    const setFormattedContent = useCallback((text: string) => {
        setContent(text.slice(0,limit));
    }, [limit, setContent]);

    return (
        <Container>
            <Status> {content.length}/{limit} </Status>
            <StyledTextArea 
                rows={rows} 
                cols={cols} 
                value={content} 
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    setFormattedContent(event.currentTarget.value)
                }}
            />
        </Container>
    );
}

export const RestrictedWordsInput = ({ rows, cols, value, limit, ...props }: RestrictedInputProps) => {
    const [{content, wordCount}, setContent] = useState<RestrictedContentState>({
        content: value,
        wordCount: 0
    }); 

    const setFormattedContent = useCallback((text: string) => {
        let words = text.split(' ').filter(Boolean) 
        if(words.length > limit) {
            setContent({
                content: words.slice(0,limit).join(' '),
                wordCount: limit
            });
        } else {
            setContent({
                content: text,
                wordCount: words.length
            });
        }
    }, [limit, setContent]);

    useEffect(() => {
        setFormattedContent(content)
    }, []); 

    return (
        <Container>
            <Status state={getStatus(wordCount, limit, false)}> 
                {wordCount}/{limit} 
            </Status>
            <StyledTextArea 
                rows={rows} 
                cols={cols} 
                value={content} 
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    setFormattedContent(event.currentTarget.value);
                }}
            />
        </Container>
    );
}