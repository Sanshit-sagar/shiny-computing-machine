import React from 'react';
import { styled, keyframes } from '../../stitches.config'

import { Flex } from '../Flex'
import { blackA } from '@radix-ui/colors'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes({
    '0%': { 
        opacity: 0 
    },
    '100%': { 
        opacity: 1 
    },
})

const contentShow = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translate(-50%, -48%) scale(.96)' 
    },
    '100%': { 
        opacity: 1, 
        transform: 'translate(-50%, -50%) scale(1)' 
    },
})

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
})

function Root({ 
    children, 
    ...props 
}: { 
    children: React.ReactNode; 
    props: any[] | any | undefined | null; 
}) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay  />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
    backgroundColor: 'white', 
    border: 'black',
    text: '$funkyText',
    br: '$1',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    padding: 25,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'transform',
    },
    '&:focus': { 
        border: '1px solid $border3' 
    },
})

const StyledTitle = styled(AlertDialogPrimitive.Title, {
    margin: 0,
    color: '$accent',
    fontSize: 17,
    fontWeight: 500,
})

const StyledDescription = styled(AlertDialogPrimitive.Description, {
    marginBottom: 20,
    color: '$funkyText',
    fontSize: 15,
    lineHeight: 1.5,
});

const AlertButton = styled('button', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    borderRadius: '$1',
    padding: '$1 $2',
    ml: '$1', 
    mr: '$1',
  
    variants: {
        variant: {
            cancel: {
                backgroundColor: 'white',
                color: 'red',
                border: '1px solid red',
                '&:hover': {
                    backgroundColor: 'gainsboro',
                },
                '&:focus': {
                    borderWidth: '2px'
                }
            },
            confirm: {
                backgroundColor: 'white',
                color: 'green',
                borderColor: 'green',
                '&:hover': { 
                    backgroundColor: 'gainsboro'
                },
                '&:focus': { 
                    boxShadow: `0 0 0 2px black` 
                },
            },
            green: {
                backgroundColor: 'green',
                color: 'white',
                '&:hover': { 
                    backgroundColor: 'turquoise' 
                },
                '&:focus': { 
                    backgroundColor: `0 0 0 2px emerald` 
                },
            },
            accent: {
                backgroundColor: 'white',
                color: 'black',
                '&:hover': { 
                    backgroundColor: 'gainsboro' 
                },
                '&:focus': { 
                    boxShadow: `2px 2px 2px 2px black` 
                },
            },
        },
    },
    defaultVariants: {
        variant: 'accent',
    },
})

const StyledActions = styled(Flex, {
    fd: 'row',
    jc: 'flex-end',
    ai: 'center',
    gap: '$1',
})


export const AlertDialog = Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger
export const AlertDialogContent = StyledContent
export const AlertDialogTitle = StyledTitle
export const AlertDialogDescription = StyledDescription
export const AlertDialogAction = AlertDialogPrimitive.Action
export const AlertDialogCancel = AlertDialogPrimitive.Cancel
export const AlertDialogButton = AlertButton
export const AlertDialogActionsRow = StyledActions
