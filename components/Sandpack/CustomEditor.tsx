import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '../../stitches.config'
import { 
    SandpackProvider,
    SandpackTranspiledCode
} from '@codesandbox/sandpack-react'
import "@codesandbox/sandpack-react/dist/index.css"

import { SandpackState } from './interfaces'

import { Refresh } from './CustomElements/Refresh'
import { Preview } from './CustomElements/Preview'
import { OpenInCSB } from './CustomElements/OpenInCSB'

const DynamicCodeEditor = dynamic(() => import('./CustomElements/CodeEditor'))

const StyledWrapper = styled('div', {
    height: '90%',
    width: '45%',
    padding: '0',
    margin: '$1',
    bc: '$accentBase',
    border: '3px solid $accentBorder',
    br: '$2',
})

const CustomEditor = (props: SandpackState) => {
    const { theme, template, ...otherProps } = props;

    return (
        <SandpackProvider template="react">

            <StyledWrapper>
                <DynamicCodeEditor />
            </StyledWrapper>
            <StyledWrapper>
                <Preview /> 
            </StyledWrapper>

{/*             
            <Refresh />
            <OpenInCSB /> */}
        </SandpackProvider>
    );
} 

export default CustomEditor
