import React from 'react'

import Highlight, { defaultProps, Language, PrismTheme } from "prism-react-renderer"

import { themes, themeIndicies } from './themes'

import { 
    Pre, 
    Line, 
    LineNumber,
    LineContent,
    PrismContainer
} from './styles'

interface CustomPrismHighlighterProps { 
    code: string; 
    language: Language;
    theme: string; 
    showLines: boolean;
}; 

type ReaderProps = Omit<CustomPrismHighlighterProps, 'theme'> & { 
    theme: PrismTheme 
}; 

export const Reader = ({ 
    code, 
    language, 
    theme, 
    showLines = true 
}: ReaderProps) => (
    <PrismContainer>
        <Highlight 
            {...defaultProps} 
            theme={theme} 
            code={code} 
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}> 
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <>
                                <LineNumber hidden={showLines}> 
                                    {i + 1} 
                                </LineNumber>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span 
                                            key={key} 
                                            {...getTokenProps({ token, key })} 
                                        />
                                    ))}
                                </LineContent>
                            </>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    </PrismContainer>
);

const getThemeIndexByName = (themeName: string): number => themeIndicies[themeName]
const getThemeAtIndex = (index: number): PrismTheme => themes[index];
const getThemeFromName = (themeName: string): PrismTheme => getThemeAtIndex(getThemeIndexByName(themeName))


export const CustomReader = (props: CustomPrismHighlighterProps) => (
    <Reader 
        {...props} 
        theme={getThemeFromName(props.theme)}
    />
);