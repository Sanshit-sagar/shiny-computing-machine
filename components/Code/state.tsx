
import {
    CodeState 
} from './interfaces'

const UNKNOWN_ERR = 'Encountered an unknown error'
const INVALID_KEY = 'Specified key was for an invalid action. Valid actions are: >toggle,assign<'

// let initProps: CodeState = {
//     id: 'sampleTest',
//     theme: initPrismTheme,
//     language: 'jsx',    
//     code: exampleCode,
//     showLines: false,
//     isEditable: false,
//     isTyping: false,
//     isLoading: false,
//     isDisabled: false,
//     error: null
// };
interface ReducerPayload {
    key: string;
    value?: string | CodeStateSubset; 
}

interface ReducerActionBase {
    type: string; 
    payload: ReducerPayload | null;
}
type CodeStateSubset = Partial<CodeState>;

export interface ToggleAction extends ReducerActionBase {
    type: 'toggle', payload: { key: string; }
}

export interface AssignAction extends ReducerActionBase {
    type: 'assign', payload: { key: string; value: CodeStateSubset; }
}

export interface ResetAction extends ReducerActionBase {
    type: 'reset', payload: null
}

export type CodeReducerAction = ToggleAction | AssignAction | ResetAction;

export function codeReducer(state: CodeState, action: CodeReducerAction):CodeState  {
    try {
        switch(action.type) {
            case 'toggle': 
                return {
                    ...state,
                    [action.payload.key]: !state[action.payload.key]
                };
            case 'assign': 
                return {
                    ...state,
                    [action.payload.key]: action.payload.value
                };
            default:
                throw new Error(INVALID_KEY)
        }
    } catch (error) {
        throw new Error(UNKNOWN_ERR)
    }
}