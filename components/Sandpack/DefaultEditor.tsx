import { Sandpack } from "@codesandbox/sandpack-react"
import "@codesandbox/sandpack-react/dist/index.css"

import { SandpackState } from './interfaces'

const DefaultEditor = (props: SandpackState) => {
    const { theme, template, ...otherProps } = props

    return (
        <Sandpack 
            template={template} 
            theme={theme}
            options={{
                ...otherProps
            }}
        /> 
    );
}

export default DefaultEditor