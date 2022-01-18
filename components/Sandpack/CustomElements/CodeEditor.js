import { useEffect } from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/ext-language_tools"

import { useActiveCode } from "@codesandbox/sandpack-react"
import { styled } from '../../../stitches.config'

const defaultCode = `
    import { Button } from '@/components/Button';

    export default function App() {
        return (
            <Button onPress={() => alert('hihii')}>
                hello there
            </Button> 
        )
    }
`;


const CodeEditor = () => {
    const { code, updateCode } = useActiveCode()

    useEffect(() => {
        updateCode(defaultCode)
    }, [])

    return (
            <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                name="blah2"
                highlightActiveLine={true}
                showPrintMargin={true}
                showGutter={true}
                defaultValue={code}
                onChange={updateCode}
                fontSize={12}
                height="100%"
                width="100%"
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
    );
}

export default CodeEditor



// interface IAceOptions {
//     enableBasicAutocompletion: boolean; 
//     enableLiveAutocompletion: boolean;
//     enableSnippets: boolean; 
//     showLineNumbers: boolean;
//     tabSize: number; 
// }