
export interface CheckboxReducerAction {
    type: 'toggle' | 'assign' | 'indeterminate_toggle',
    payload: {
        key: string;
        value?: string | true | false | 'indeterminate';
    }
};
