import { styled } from '../../../stitches.config'
import { SandpackPreview } from "@codesandbox/sandpack-react";

export const Preview = () => (
    <SandpackPreview 
        showRefreshButton={true} 
        showOpenInCodeSandbox={false} 
        showNavigator={true}
        showSandpackErrorOverlay={true}
        viewportOrientation={'landscape'}
        viewportSize={'auto'}
    />
);