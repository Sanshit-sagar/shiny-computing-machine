import React, {  useReducer } from 'react'

import { Language } from 'prism-react-renderer'

import { ExampleBase } from '../ExampleBase'
import { reactCounterSample } from './constants'

import { CustomReader as Reader } from './Reader'
import { CustomEditor as Editor } from './Editor'
import { prismThemeSelections } from './themes'
import { CodeState } from './interfaces'
import { codeReducer } from './state'

import { 
    MixIcon,
    CodeIcon,
    Pencil1Icon,
    LockClosedIcon
} from '@radix-ui/react-icons'

const exampleCode: string = `${reactCounterSample}`.trim()

export const NewTabsIcon = () => <i className='bx bx-window-open'></i>
export const NewWindowIcon = () => <i className='bx bxs-window-alt'></i>
export const PrivateWindowIcon = () => <i className='bx bx-capsule'></i>


let initCodeState: CodeState = {
    id: 'sampleTest',
    theme: 'oceanicNext',
    language: 'jsx',    
    code: exampleCode,
    showLines: false,
    error: null,
    isEditable: false,
    isTyping: false,
    isLoading: false,
    isDisabled: false,
};
    
const ToggledMutabilityEditor = ({ props }) => (<>{
    props.isEditable ? <Editor {...props} /> :  <Reader {...props} /> 
}</>)

const LineNumbersIcon = () => <i className='bx bx-list-ol'></i>

const ExampleCode = () => {
    const [state, dispatch] = useReducer(codeReducer, initCodeState)

    const handleToggle = (keyForItemToToggle: string, _val: boolean) => {
        dispatch({
            type: 'toggle',
            payload: {
                key: keyForItemToToggle
            }
        })
    }

    const handleAssign = (key: string, value: any) => {
        dispatch({
            type: 'assign',
            payload: {
                key,
                value
            }
        })
    }

    const controls = [{
            type:'switch', 
            name: 'Is Disabled',
            icon:<LockClosedIcon />,
            value:state.isDisabled,
            onChange: (val: boolean) => handleToggle('isDisabled', val),
        }, {
            type: 'switch',
            name: 'Line Numbers', 
            icon: <LineNumbersIcon />,
            value: state.showLines,
            onChange: (val: boolean) => handleToggle('showLines', val),
            isDisabled: state.isEditable || state.isDisabled
        },  {
            type: 'switch',
            name: 'Edit Mode', 
            icon: <Pencil1Icon />,
            value: state.isEditable,
            onChange: (val: boolean) => handleToggle('isEditable', val),
            isDisabled: state.isDisabled
        },
    ];

    return (
        <ExampleBase
            icon={<CodeIcon />}
            heading={'Code'}
            description={'Uses Prismjs to allow read only + editable code blocks'}
            status={(state.isDisabled ? 'disabled' : !state.isEditable ? 'editing' : 'locked')}
            component={<ToggledMutabilityEditor props={state} />}
            controls={controls}
        />
    );
}

export default ExampleCode


// const intentMap = {
//     'success':  state.isEditable && state.isTyping,   
//     'idle':     (state.isEditable && !state.isTyping || !state.isEditable && !(state.isHovered || state.isFocused)),
//     'disabled': state.isDisabled,
//     'error':    state.error !== null,
//     'loading':  state.isLoading
// };
