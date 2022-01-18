import React from 'react' 
import { styled } from '../../stitches.config'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as Radix from '@radix-ui/react-primitive'

import { Flex } from '../Flex'
import { Label } from '../Shared'
import { stylesFactory } from '../../utils/StylesFactory'

import {
    CheckboxRootProps,
    CheckboxControlGroupProps
} from './interfaces'


const StyledRoot = styled(CheckboxPrimitive.Root, {
    height: 25,
    width: 25,
    br: '$1',
    display: 'flex',
    flexShrink: 0,
    jc: 'center',
    ai: 'center',
    gap: 0,
    mr: '$2',
});

const ExtendedRoot = React.forwardRef<
    React.ElementRef<typeof StyledRoot>,
    Radix.ComponentPropsWithoutRef<typeof StyledRoot> & CheckboxRootProps
>(({ 
    isLoading, 
    isHovered, 
    isFocusWithin, 
    isDisabled, 
    isPressed, 
    isReadOnly,
    checked, 
    onCheckedChange, 
    ...otherProps 
}, forwardedRef) => {
    let disabled = isDisabled;

    return (
        <StyledRoot  
            {...otherProps} 
            ref={forwardedRef} 
            css={{
                ...stylesFactory({ disabled, isHovered, isPressed, isLoading, isFocusWithin }),
                transition: `ease-in-out duration 150ms`
            }}
        /> 
    ); 
});

const ControlGroup = styled(Flex, {
    width: 150,
    height: 150,
    display: 'flex',
    fontSize: '$1',
});


const isUp = (pos: 'top' | 'left' | 'right') => pos==='top'
const isR = (pos: 'top' | 'left' | 'right') => pos==='right'

const ExtendedLabelledControlGroup = React.forwardRef<
    React.ElementRef<typeof ControlGroup>,
    Radix.ComponentPropsWithoutRef<typeof ControlGroup> & CheckboxControlGroupProps
>(({ labelPosition, label, hideLabel = false, children, ...otherProps }, forwardedRef) => (
    <ControlGroup
        {...otherProps}
        ref={forwardedRef}
        css={{
            fd:  isUp(labelPosition)  ?     'column'     :     isR(labelPosition) ? 'row-reverse' : 'row',
            jc:  isUp(labelPosition)  ?     'flex-start' :     'space-between',
            ai:  isUp(labelPosition)  ?     'flex-start' :     'center',
            gap: isUp(labelPosition)  ?     '$3'         :      0,
            mt:  isUp(labelPosition)  ?     '$5'         :      0,
            ml:  isUp(labelPosition)  ?     '$5'         :      0
        }}
    >
        <> {!hideLabel ? <Label> { label?.length ? label : 'Checkbox' } </Label>  : null} </>
     <Flex 
        css={{ 
            ml: labelPosition==='top' ? '$5' : 0 , 
        }}
    > 
        {children} 
    </Flex>
    </ControlGroup> 
))

export const CheckboxRoot = ExtendedRoot
export const CheckboxIndicator = CheckboxPrimitive.Indicator
export const CheckboxControlGroup = ExtendedLabelledControlGroup
