import React from 'react'

import { ButtonProps } from './types'
import PButton, { Button } from './index'

import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'
import { ButtonIcon, RocketIcon, ChevronDownIcon } from '@radix-ui/react-icons' 

import { TooltipTrigger } from '@/components/Tooltip'

export function init<T extends object>(): ButtonProps<{}> {
    const initButtonProps: ButtonProps<{}> = {
        shape: 'quad',
        elementType: 'button',
        isLoading: false,
        isRequired: false,
        isDisabled: false,
        isReadOnly: false,
        autoFocus: false,
        showIconsWhenLoading: false,
        excludeFromTabOrder: false,
        validationStatus: 'valid',
        tooltip: "this is de data",
        'aria-label': '',
        'aria-labelledby': '', 
        'aria-describedby': '',
        'aria-details': '',
        onPress: (_event) => {}
    }
    return initButtonProps
}

export const PButtonInstance =<T extends object>() => (
    <PButton.Root radius="3"> 

        <TooltipTrigger delay={0} content={'LAUNCH!'}>
            <PButton.Prefix variant="primary" radius="1"> 
                <RocketIcon /> 
            </PButton.Prefix>
        </TooltipTrigger>

        <PButton.Base variant="primary" css={{ fontFamily: '$plexsans', textTransform: 'capitalize' }}> 
            launch 
        </PButton.Base> 
    
        <PButton.Suffix variant="outlined" radius="round"> 
            <ChevronDownIcon /> 
        </PButton.Suffix>
    
    </PButton.Root>
)



export const ButtonInstance =<T extends object>() => {
    const { state } = StateFactory<ButtonProps<{}>>(init)

    return (
        <Button variant="primary" {...state}> 
            Launch! 
        </Button>
    ) 
}

const ExampleButton = () => {

    return (
        <ExampleBase
            icon={<ButtonIcon />}
            heading={'Button'}
            description={'Button description here'}
            component={<PButtonInstance />}
            controls={[]}
        />
    );
}

export default ExampleButton

