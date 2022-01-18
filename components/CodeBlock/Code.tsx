import React, { useState } from 'react' 

import { 
    Pre, 
    Line, 
    LineNo,  
    Header,
    Container,
    LineContent,
    CodeSnippetTitle 
} from './styles'
import { IconButton } from '@/components/IconButton'
import { calculateLinesToHighlight, hasTitle } from './utils'
import { CodeBlockProps, HighlightedCodeTextProps } from './types'

import Highlight, { Prism, defaultProps } from 'prism-react-renderer'

// @ts-ignore
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-swift');

export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
    const { codeString, language, highlightLine } = props

    return (
        <Highlight
            {...defaultProps}
            theme={{ plain: {}, styles: [] }}
            code={codeString}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, index) => {
                        const { className: lineClassName } = getLineProps({
                            className: highlightLine && highlightLine(index) ? 'highlight-line' : '',
                            key: index,
                            line,
                        })

                        return (
                            <Line
                                data-testid={highlightLine && highlightLine(index) ? 'highlight-line' : 'line'}
                                key={index}
                                className={lineClassName}
                            >
                                <LineNo data-testid="number-line">
                                    {index + 1}
                                </LineNo>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span
                                            data-testid="content-line"
                                            key={key}
                                            {...getTokenProps({ key, token })}
                                        />
                                    ))}
                                </LineContent>
                            </Line>
                        )
                    })}
                </Pre>
            )}
        </Highlight>
    )
}

const Code = ({ 
    codeString, 
    language, 
    metastring 
}: CodeBlockProps) => {
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = (isCopied: boolean) => setCopied(isCopied)

    const doHighlight = calculateLinesToHighlight(metastring)
    const title = hasTitle(metastring)

    return (
        <Container>
            {title ? (
                <Header>
                    <CodeSnippetTitle data-testid="codesnippet-title">
                        {title}
                    </CodeSnippetTitle>
                    <IconButton 
                        copied={copied} 
                        onChange={handleCopy} 
                        content={codeString} 
                    />
                </Header>
            ): null}

            <HighlightedCodeText
                codeString={codeString}
                language={language}
                highlightLine={doHighlight}
            />
        </Container>
    )
}

export default Code