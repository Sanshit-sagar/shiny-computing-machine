

type SandpackPredefinedThemes = "light" | "dark" | "sandpack-dark" | "github-light" | "monokai-pro" | "night-owl" | "aqua-blue"
export type SandpackPredefinedTemplates = "react" | "vue" | "vanilla" | "vanilla-ts" | "vue" | "vue3"
export type SandpackStatus = "initial" | "idle" | "running" | "timeout" | "done"
export type SandpackInitMode = "lazy" | "user-visible" | "immediate"
export type ViewportSizePreset = "iPhone X" | "Pixel 2" | "iPad" | "Moto G4" | "Surface Duo"

export interface SandpackState {
    theme?: SandpackPredefinedThemes;                 // def = "light"
    template?: SandpackPredefinedTemplates;           // def = "vanilla"
    showNavigator?: boolean;                // def = false
    showLineNumbers?: boolean;              // def = false
    showInlineErrors?: boolean;             // def = false
    closableTabs?: boolean;                  // def = false
    autorun?: boolean;                       // def = true
    recompileMode?: "delayed" | "immediate"; // def = immediate
    recompileDelay?: number;                 // n/a since recompile mode def = "immediate"
    editorWidthPercentage?: number;          // def = 50 
    editorHeight?: number;                   // def = 350
}

export interface CodeEditorProps {
    closeableTabs?: boolean;
    customStyle?: React.CSSProperties; 
    initMode?: SandpackInitMode;
    showInlineErrors?: boolean;
    showLineNumbers?: boolean;
    showRunButton?: boolean;
    showTabs?: boolean;
    wrapContent?: boolean;
}

export interface CodeViewerProps {
    code: string;
    // decorators?: Decorators;
    initMode?: SandpackInitMode; 
    showLineNumbers?: boolean;
    showTabs?: boolean;
    wrapContent?: boolean;
}

export interface PreviewProps {
    showNavigator?​: boolean;
    showOpenInCodeSandbox?: boolean;
    showRefreshButton?: boolean;
    showSandpackErrorOverlay?: boolean;
    viewportOrientation?: "portrait" | "landscape";
    viewportSize?: ViewportSizePreset | "auto" | { height: number; width: number; };
}

export interface ClientOptions {
    externalResources?: string[];
    bundlerURL?: string;
    width?: string;
    height?: string;
    skipEval?: boolean;
    showOpenInCodeSandbox?: boolean;
    showErrorScreen?: boolean;
    showLoadingScreen?: boolean;
}

export interface SandboxInfo {
    files: { 
        [path: string]: { 
            code: string 
        } 
    };
    dependencies?: { 
        [dependencyName: string]: string 
    };
    entry?: string;
    template?: string;
}
 