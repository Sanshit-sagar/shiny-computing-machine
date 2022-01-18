import { InitBlankStateProps as BlankStateState } from './interfaces'

export const UNKNOWN_ERR = 'Encountered an unknown error'
export const INVALID_KEY = 'Specified key was for an invalid action. Valid actions are: Toggle(key), assign(key, value)'

export type ActionType =  {
    type: 'toggle', 
    payload: { 
        key: keyof BlankStateState; 
    } 
} | {
    type: 'assign', 
    payload: { 
        key: keyof BlankStateState; 
        value: BlankStateState[keyof BlankStateState]; 
    } 
};

export function blankStateReducer(state: BlankStateState, action: ActionType): BlankStateState  {
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