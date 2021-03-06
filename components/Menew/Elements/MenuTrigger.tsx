import React from 'react'

import Overlay from '@/components/Popover/Overlay'
import { TriangleDownIcon } from '@radix-ui/react-icons'

import { MenuTriggerProps } from './interfaces'

import { styled } from 'stitches.config'


const StyledButton = styled('button', {
    background: 'red',
    border: '2px'
})

export const MenuTrigger = ({ 
    children, 
    alignment,
    direction,
    shouldFlip, 
    closeOnSelect,
    isOpen,
    defaultOpen,
    onOpenChange,
    ...props 
}: MenuTriggerProps) => (
    <Overlay.Root
        title=""
        subtitle=""
        placement="bottom"
        offset={5}
        crossOffset={0}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        shouldFlip={true}
        shouldCloseOnBlur={false}
        shouldUpdatePosition={true}
    >
        <Overlay.Trigger as={StyledButton} defaultOpen={true}>
            Open <TriangleDownIcon /> 
        </Overlay.Trigger>

        <Overlay.Dialog>
            {children}
        </Overlay.Dialog>
    </Overlay.Root>
)
  