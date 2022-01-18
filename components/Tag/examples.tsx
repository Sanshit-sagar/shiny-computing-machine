import React, { useState } from 'react'

import { Tag as StyledTag } from './index'

import { 
    Pencil1Icon,
    GitHubLogoIcon, 
} from '@radix-ui/react-icons'

import { ExampleBase } from '../ExampleBase'

import { 
    TagState, 
    TagStateKeyType, 
    TagStateValueType, 
    ControllerProps 
} from './interfaces'

const tagStateFactory = (): TagState => {
    const initTagState: TagState = {
        isClickable: true,
        isDeletable: false,
        isEditable: true,
        isDisabled: false,
        isLoading: false, 
        size: 'sm',
        leftIcon: <GitHubLogoIcon />,
        rightIcon: undefined,
        children: 'Sample Tag',
        handleDelete: () => alert('deleting...')
    }
    return initTagState;
}

const TagInstance = ({ state, update }: ControllerProps) => (
    <StyledTag {...state} /> 
);


const ExampleTag = () => {
    const [state, setState] = useState<TagState>({
        ...tagStateFactory()
    });

    const update = (key: TagStateKeyType, value: TagStateValueType) => {
        setState({
            ...state,
            [key]: value
        });
    }

    let controls = [{ 
        type:'input', 
        name: 'Contents', 
        value: state.children, 
        onChange: (value: string) => update('children', value), 
        description: '', 
        label: 'Contents', 
        placeholder: 'Enter the tags contents here', 
        minLength: 1, 
        maxLength: 21, 
        icon: <Pencil1Icon />, 
    },{ 
        type:'switch', 
        name: 'Clickable', 
        value: state.isClickable, 
        onChange: (isChecked: boolean) => update('isClickable', isChecked) 
    },{ 
        type:'switch', 
        name: 'Deletable', 
        value: state.isDeletable, 
        onChange: (isChecked: boolean) => update('isDeletable', isChecked) 
    },{ 
        type:'switch', 
        name: 'Editable',
        value: state.isEditable, 
        onChange: (isChecked: boolean) => update('isEditable', isChecked) 
    },{ 
        type:'switch', 
        name: 'Disabled', 
        value: state.isDisabled, 
        onChange: (isChecked: boolean) => update('isDisabled', isChecked) 
    }, {
        type: 'switch',
        name: 'Loading',
        value: state.isLoading,
        onChange: (isLoading: boolean) => update('isLoading', isLoading)
    }];
        
    return (
        <ExampleBase
            icon={<GitHubLogoIcon />}
            heading={'Tags'}
            description={'Tags Description Placeholder'}
            component={<TagInstance state={state} update={update} />}
            controls={controls}
        />
    )
}

export default ExampleTag
