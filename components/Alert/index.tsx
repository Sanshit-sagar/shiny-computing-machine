import React from 'react';

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogButton,
    AlertDialogActionsRow
} from './styles'

import { Flex } from '../Flex'
import { Text } from '../Text/Text'

import {
    ActionType,
    AlertProps
} from './interfaces'

export const Alert = ({
    trigger,
    title,
    description = '',
    content,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    handleCancel,
    handleConfirm
}: AlertProps) => (
    <AlertDialog props={[]}>
        <AlertDialogTrigger asChild>
            <AlertDialogButton>
                {trigger}
            </AlertDialogButton>
        </AlertDialogTrigger>
        <AlertDialogContent>

            <AlertDialogTitle> 
                {title} 
            </AlertDialogTitle>
            <AlertDialogDescription> 
                <Text size='2'> {description} </Text>
            </AlertDialogDescription>

            <Flex css={{ width: '100%', height: '100%', padding: '1rem', margin: '1rem', display: 'flex', flexDirection: 'column', jc: 'flex-start', ai: 'stretch', flexWrap: 'wrap' }}>
                <Text> {content} </Text> 
            </Flex>

            <AlertDialogActionsRow>
                <AlertDialogCancel asChild>
                    <AlertDialogButton 
                        variant='cancel'
                        onClick={handleCancel}
                    >
                        {cancelText}
                    </AlertDialogButton>
                </AlertDialogCancel>
                
                <AlertDialogAction asChild>
                    <AlertDialogButton 
                        variant='confirm' 
                        onClick={handleConfirm}
                    >
                        {confirmText}
                    </AlertDialogButton>
                </AlertDialogAction>
            </AlertDialogActionsRow> 

        </AlertDialogContent>
    </AlertDialog>
);