import { useState, Fragment } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer'

import { reactCounterSample } from './constants'
import { themes, themeIndicies } from './themes'
import { CustomPrismHighlighterProps } from './interfaces'

const sharedStyles = {
    width: '100%',
    height: '700px',
    margin: 0,
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    fontSize: '12px',
    lineHeight: 1.20,
    border: '1px solid $accentBorder',
    borderRadius: 0
};

const getEditorStyles = (theme: PrismTheme) => { return {...theme.plain, ...sharedStyles }};

const HighlightedContent = ({ code, theme }: CustomPrismHighlighterProps & { theme: PrismTheme; }) => (
    <Highlight 
        {...defaultProps} 
        theme={theme} 
        code={code} 
        language={'jsx'}
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Fragment>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}> 
                        {line.map((token, key) => 
                            <span 
                                key={key}
                                {...getTokenProps({ token, key })} 
                            />
                        )}
                    </div>
                ))}
            </Fragment>
        )}
    </Highlight>
);


export const CustomEditor = (props) => {
    const [code, setCode] = useState<string>(`${reactCounterSample}`.trim())
    const [theme, setTheme] = useState<PrismTheme>(themes[themeIndicies[props.theme]])
    
    const onValueChange = (code: string) => setCode(code)

    const highlight = (code: string) => (
        <HighlightedContent code={code} theme={theme} />
    );

    return (
        <Editor 
            value={code}
            onValueChange={onValueChange}
            highlight={highlight}
            padding={15}
            style={{
                ...getEditorStyles(theme)
            }}
        />
    ); 
}
