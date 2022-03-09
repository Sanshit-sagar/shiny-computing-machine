import { useState } from 'react'

import ActionList from './index'
import { ExternalLinkIcon, ExclamationTriangleIcon, CheckCircledIcon, PlusCircledIcon, GlobeIcon, AvatarIcon } from '@radix-ui/react-icons'


const ActionListWithPrefix = () => (
    <ActionList>
         <ActionList.Item>
            <ActionList.LeadingVisual> 
                <ExternalLinkIcon /> 
            </ActionList.LeadingVisual>
            github.com/primer
            <ActionList.TrailingVisual>⌘N</ActionList.TrailingVisual>
        </ActionList.Item>

        <ActionList.Item>
            <ActionList.LeadingVisual> 
                <AvatarIcon /> 
            </ActionList.LeadingVisual>
            <ActionList.TrailingVisual>⌘A</ActionList.TrailingVisual>
            @frankherbert485
        </ActionList.Item>

        <ActionList.Divider />

        <ActionList.Item variant="info"> 
            <ActionList.LeadingVisual> 
                <ExternalLinkIcon /> 
            </ActionList.LeadingVisual>
            github.com/primer
            <ActionList.TrailingVisual>⌘N</ActionList.TrailingVisual>
        </ActionList.Item>

        <ActionList.Item variant="warning"> 
            <ActionList.LeadingVisual> 
                <AvatarIcon /> 
            </ActionList.LeadingVisual>
            <ActionList.TrailingVisual>⌘A</ActionList.TrailingVisual>
            @frankherbert485
        </ActionList.Item>

        <ActionList.Item variant="danger"> 
            <ActionList.LeadingVisual> 
                <ExclamationTriangleIcon /> 
            </ActionList.LeadingVisual>
            <ActionList.TrailingVisual>⌘X</ActionList.TrailingVisual>
            4 vulnerabilities
        </ActionList.Item>

        <ActionList.Item variant="success"> 
            <ActionList.LeadingVisual> 
                <CheckCircledIcon /> 
            </ActionList.LeadingVisual>
            <ActionList.TrailingVisual>⌘S</ActionList.TrailingVisual>
            Build Passed
        </ActionList.Item>
    </ActionList>
)

type SelectableOption = {
    text: string;
    selected: boolean; 
}

const ActionListWithSections = () => {

    const [options, setOptions] = useState<SelectableOption[]>([
        { text: 'Status', selected: true },
        { text: 'Stage', selected: true },
        { text: 'Assignee', selected: true },
        { text: 'Team', selected: true },
        { text: 'Estimate', selected: false },
        { text: 'Due Date', selected: false }
    ])

    const visibleOptions = options.filter((option: SelectableOption) => option.selected)
    const hiddenOptions = options.filter((option: SelectableOption) => !option.selected)

    const toggle = (text: string) => {

        setOptions(
            options.map((option: SelectableOption) => {
                if (option.text === text) option.selected = !option.selected
                return option
            })
        )
    }

    return (
        <ActionList selectionVariant="multiple">
            <ActionList.Group title="Visible fields">
                {visibleOptions.map((option) => (
                    <ActionList.Item key={option.text} selected={true} onSelect={() => toggle(option.text)}>
                        {option.text}
                    </ActionList.Item>
                ))}
            </ActionList.Group> 

            <ActionList.Group title="Hidden fields" selectionVariant={hiddenOptions.length ? 'multiple' : false}>
                {hiddenOptions.map((option, index) => (
                    <ActionList.Item key={option.text} selected={false} onSelect={() => toggle(option.text)}>
                        {option.text}
                    </ActionList.Item>  
                ))}
                {hiddenOptions.length === 0 && (
                    <ActionList.Item disabled>
                        No hidden fields
                    </ActionList.Item>
                )}
            </ActionList.Group>
        </ActionList>
    )
}

const ActionListWithDescription = () => (
    <ActionList>
        <ActionList.Item>
            <ActionList.LeadingVisual> 
                <GlobeIcon /> 
            </ActionList.LeadingVisual>
            Open Current Codespace

            <ActionList.Description variant="block">
                Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.
            </ActionList.Description>  
        </ActionList.Item>

        <ActionList.Item>
            <ActionList.LeadingVisual> 
                <PlusCircledIcon /> 
            </ActionList.LeadingVisual>
            Create new Codespace

            <ActionList.Description variant="block">
                Create a brand new Codespace with a fresh image and checkout this branch." 
            </ActionList.Description>
          
        </ActionList.Item>
    </ActionList>
)

const ActionListInstance = () => <ActionListWithPrefix /> 


export {
    ActionListInstance 
}