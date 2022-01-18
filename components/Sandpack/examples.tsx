import { CodeIcon, Cross2Icon, EyeOpenIcon } from '@radix-ui/react-icons'


import { ExampleBase } from '@/components/ExampleBase'
import { SandpackState } from './interfaces'
import StateFactory from '@/utils/StateFactory'
import SandpackEditor from './index'

const init = (): SandpackState => {
    const initSandpackState: SandpackState = {
        theme: "monokai-pro",
        template: "react",
        showNavigator: true,
        showLineNumbers: true, 
        showInlineErrors: true,
        closableTabs: false,
        editorHeight: 400,
        editorWidthPercentage: 50,
        autorun: true,
        recompileMode: "delayed",
        recompileDelay: 1000
    }
    return initSandpackState
}


const ExampleSandpack = () => {
    const { state, update } = StateFactory<SandpackState>(init);

    const controls = [{
        type:'switch',
        name:'Show Line Numbers',
        value: state.showLineNumbers,
        icon: <EyeOpenIcon />,
        onChange:(val: boolean)=> update('showLineNumbers', val),
        isDisabled: false 
    },{
        type:'switch',
        name:'Show Navigator',
        value: state.showNavigator,
        icon: <EyeOpenIcon />,
        onChange:(val: boolean)=> update('showNavigator', val),
        isDisabled: false 
    },{
        type:'switch',
        name:'Closeable Tabs',
        value: state.closableTabs,
        icon: <Cross2Icon />,
        onChange:(val: boolean)=> update('closableTabs', val),
        isDisabled: false 
    }]

    return (
        <ExampleBase    
            heading={'Sandpack'}
            description={'Sandpack description here'}
            icon={<CodeIcon />}
            component={<SandpackEditor {...state} />}
            controls={[...controls]}
        />
    ); 
}

export default ExampleSandpack