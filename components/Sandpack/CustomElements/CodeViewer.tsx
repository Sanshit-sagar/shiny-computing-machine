import { useSandpack } from "@codesandbox/sandpack-react"

import { styled } from '../../../stitches.config'


export const SimpleCodeViewer = () => {
    const { sandpack } = useSandpack()
    const { files, activePath } = sandpack

    const code = files[activePath].code

    return (
        <pre> {code} </pre>
    );
}