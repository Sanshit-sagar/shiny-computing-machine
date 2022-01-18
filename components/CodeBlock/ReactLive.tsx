import React from 'react' 
import { styled } from '../../stitches.config'

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { CodeBlockProps } from './types'
import { PrismTheme } from 'prism-react-renderer'

const LiveCodeBlock = ({ codeString, live, render }: CodeBlockProps) => {

    const scope = {
        styled,
        React
    }

    const customTheme = {
        styles: [],
        plain: {}
    } as PrismTheme

    if (live) return (
        <LiveProvider theme={customTheme} code={codeString} scope={scope} noInline={true}>
            <StyledLiveCodeWrapper>
                <StyledPreviewWrapper withEditor>
                    <LivePreview />
                    <StyledErrorWrapper>
                        <LiveError />
                    </StyledErrorWrapper>
                </StyledPreviewWrapper>
                <StyledEditorWrapper>
                    <LiveEditor />
                </StyledEditorWrapper>
            </StyledLiveCodeWrapper>
        </LiveProvider>
    )
    
    if (render) return (
        <LiveProvider code={codeString} scope={scope} noInline={true}>
            <StyledLiveCodeWrapper>
                <StyledPreviewWrapper>
                    <LivePreview />
                </StyledPreviewWrapper>
            </StyledLiveCodeWrapper>
        </LiveProvider>
    )
    
    return null
}

export default LiveCodeBlock

const StyledLiveCodeWrapper = styled('div', {
    width: '750px',
    height: '500px',
    position: 'relative',
    backdropFilter: 'blur(72px)',
    d: 'flex',
    jc: 'center',
    ai: 'center',
    mb: '32px',
    br: '$2',
    ox: 'hidden',
    oy: 'hidden',
})

const StyledEditorWrapper = styled('div', {
    flex: '50 1 0%',
    height: '100%',
    maxHeight: '600px',
    overflow: 'auto',
    margin: '0',
    'textarea:focus': {
        outline: 'none',
    },
    'pre, textarea': {
        backgroundColor: '$accentBg',
        fontFamily: '$hack',
        fontSize: '$3',
        lineHeight: '$2'
    }
})

const StyledPreviewWrapper = styled('div', {
    maxHeight: '600px',
    flex: '50 1 0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$accentSolid',
    overflow: 'hidden',

    '@media (max-width: 750px)': {
        br: '0px !important',
    },
    variants: {
        withEditor: {
            true: {
                minHeight: '600px',
            },
            false: {
                minHeight: '300px',
            },
        },
    },
})

const StyledErrorWrapper = styled('div', {
    color: '$dangerText',
    maxWidth: '300px',

    pre: {
        padding: '$5',
        marginBottom: 0,
    },
})