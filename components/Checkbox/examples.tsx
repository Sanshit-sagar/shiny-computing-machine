import React, { useReducer } from 'react'

import { CheckboxState } from './interfaces'
import { ExampleBase } from '../ExampleBase'
import { CheckboxIcon } from '@radix-ui/react-icons'
import { Checkbox as StyledCheckbox } from './index'
import { ToggleableItem } from '../ToggleGroup/interfaces'
import {
    ThickArrowLeftIcon,
    ThickArrowUpIcon,
    ThickArrowRightIcon,
    DividerHorizontalIcon,
    DotFilledIcon,
    LockClosedIcon,
    EyeOpenIcon,
    Pencil1Icon
} from '@radix-ui/react-icons'

let initCheckboxState: CheckboxState = {
    id: 'exampleCheckbox',
    label: 'Checkbox',
    labelPosition: 'top',
    checked: true,
    isDisabled: false,
    isRequired: false,
    isIndeterminate: false,
    autoFocus: false,
    isReadOnly: false,
    excludeFromTabOrder: false,
    onCheckedChange: (_checked) => alert('wowowow')
};

const CheckboxInstance = ({ props }: { props: CheckboxState; }) => (  
    <StyledCheckbox {...props} />
);

type ReducerAction = {
    type: 'toggle' | 'assign' | 'indeterminate_toggle',
    payload: {
        key: string;
        value?: string | true | false | 'indeterminate';
    }
};

function checkboxReducer(state: CheckboxState, action: ReducerAction):CheckboxState  {
    let mutatedState;
    switch(action.type) {
        case 'toggle': 
            mutatedState = {
                ...state,
                [action.payload.key]: !state[action.payload.key]
            }
            break
        case 'indeterminate_toggle': 
            if(state.isDisabled || state.isReadOnly) return state;

            let prevIndet = state.isIndeterminate === true
            let prevCheck = state[action.payload.key] 
            // let prevCheck = !action.payload.value
            
            mutatedState = {
                ...state,
                [action.payload.key]: prevIndet 
                        ? prevCheck==='indeterminate' ? false : 'indeterminate'
                        : !prevCheck
            }
            break
        case 'assign': 
            mutatedState = {
                ...state,
                [action.payload.key]: action.payload.value
            }
            break
        default:
            throw new Error('Invalid action')
    }
    return mutatedState; 
}

const alignments: ToggleableItem[] = [{ 
    index: 1, 
    label: 'left', 
    description: 'justify-start', 
    children: <ThickArrowLeftIcon /> 
}, { 
    index: 2, 
    label: 'top', 
    description: 'justify-center', 
    children: <ThickArrowUpIcon /> 
}, { 
    index: 3, 
    label: 'right', 
    description: 'justify-right', 
    children: <ThickArrowRightIcon /> 
}];

const labelPositionSections = [{ 
    index: 0, 
    title: 'LabelPos', 
    items: [...alignments]
}];

const ExampleCheckbox = () => {
    const [state, dispatch] = useReducer(checkboxReducer, initCheckboxState)

    // typeof key === boolean
    const dispatchToggle = (key: keyof CheckboxState) => {
        dispatch({
            type: 'toggle',
            payload: { 
                key: key 
            }
        });
    }

    // typeof key === boolean || string
    const dispatchAssign = (key: keyof CheckboxState, updatedValue: string) => {
        dispatch({
            type: 'assign',
            payload: {
                key: key,
                value: updatedValue
            }
        });
    }

    const onCheckedChange = (checked: boolean) => {
        dispatch({
            type: 'indeterminate_toggle',
            payload: {
                key: 'checked',
                value: checked
            }
        })
    }

    const controls = [{
        type: 'input',
        label: 'Label',
        value: state.label,
        autoComplete: 'off',
        onChange: (value: string) => dispatchAssign('label', value),
    }, {
        type: 'toggles',
        name: 'labelPosition',
        rovingFocus: true,
        loop: true,
        dir: 'ltr',
        orientation: 'horizontal',
        sectionOrientation: 'horizontal',
        disabled: false,
        label: 'Label Position',
        value: state.labelPosition,
        onValueChange: (value: string) => dispatchAssign('labelPosition', value),
        sections: [...labelPositionSections]
    }, { 
        type: 'switch', 
        name: 'Indeterminate', 
        value: state.isIndeterminate, 
        onChange: (_val) => {
            if(!state.checked) dispatchToggle('checked');
            dispatchToggle('isIndeterminate')
        },
        icon: <DividerHorizontalIcon /> 
    },  { 
        type: 'switch',
        name: 'Disabled', 
        value: state.isDisabled, 
        onChange: (_val) => dispatchToggle('isDisabled'),
        isDisabled: state.isRequired || state.isReadOnly || state.autoFocus,
        icon: <LockClosedIcon />
    }, { 
        type: 'switch', 
        name: 'Required',
        value: state.isRequired, 
        onChange: (_val) => dispatchToggle('isRequired'),
        isDisabled: state.isDisabled,
        icon: <DotFilledIcon />
    }, { 
        type: 'switch',
        name: 'Auto Focus', 
        value: state.autoFocus, 
        onChange: (_val) => dispatchToggle('autoFocus'),
        isDisabled: state.isDisabled,
        icon: <EyeOpenIcon />
    }, { 
        type: 'switch',
        name: 'Read Only', 
        value: state.isReadOnly, 
        onChange: (_val) => dispatchToggle('isReadOnly'), 
        isDisabled: state.isDisabled,
        icon: <Pencil1Icon />
    }];

    let mutableState: CheckboxState = {
        ...state,
        onCheckedChange
    }

    return (
       <ExampleBase
            icon={<CheckboxIcon />}
            heading={'Checkbox'}
            description={'Select/Mark individual items from a list of item(s)'}
            component={
                <CheckboxInstance 
                    props={mutableState}
                />
            }
            controls={controls}
        />
    )
}

export default ExampleCheckbox