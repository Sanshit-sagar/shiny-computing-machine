import React, {  forwardRef, ElementRef } from 'react';
import * as Radix from '@radix-ui/react-primitive';
import { styled } from '../../stitches.config';
import { BlankStateState } from './interfaces';

const BlankState = styled('div', {
    textAlign: 'center',
    backgroundColor: 'red',
    color: '$accentText',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    variants: {
        'background': {
            'transparent': {
                bc: 'transparent',
                borderColor: '$hiContrast'
            },
            'themed': {
                bc: '$accentBg',
                borderColor: '$accentBorder',
            },
            'panel': {
                bc: '$panel',
                borderColor: '$hiContrast'
            },
        },
        'border': {
            'dashed': {
                border: '1px dashed',
            },
            'bordered': {
                border: '1px solid',
            },
            'none': {
                border: 'none',
                borderColor: 'transparent',
            }
        },
        'radius': {
            '0': { br: 0 },
            '1': { br: '$1' },
            '2': { br: '$2' },
            '3': { br: '$4' },
            '4': { br: '$8' },
            '5': { br: '$10' },
            '6': { br: '25%' },
            '7': { br: '33%' },
            '8': { br: '42%' },
            '9': { br: '50%' },
        },
        'padding': {
            '0': { p: '1px' },
            '1': { p: '10px' },
            '2': { p: '20px' },
            '3': { p: '30px' },
            '4': { p: '40px' },
            '5': { p: '50px' },
        },
        'height': {
            '0': { height: '50px' },
            '1': { height: '100px' },
            '2': { height: '150px' },
            '3': { height: '200px' },
            '4': { height: '250px' },
            '5': { height: '300px' },
            '6': { height: '350px' },
            '7': { height: '400px' },
            '8': { height: '450px' },
            '9': { height: '500px' },
            '10': { height: '550px' },
        },
        'width': {
            '0': { width: '50px' },
            '1': { width: '100px' },
            '2': { width: '150px' },
            '3': { width: '200px' },
            '4': { width: '250px' },
            '5': { width: '300px' },
            '6': { width: '350px' },
            '7': { width: '400px' },
            '8': { width: '450px' },
            '9': { width: '500px' },
            '10': { width: '550px' }
        }
    },
    defaultVariants: {
        background: 'panel',
        border: 'bordered',
        radius: '1',
        padding: '1',
        height: '8',
        width: '8'
    }
});


const ExtendedBlankState = forwardRef<
    ElementRef<typeof BlankState>,
    Radix.ComponentPropsWithoutRef<typeof BlankState> & BlankStateState
>(({ 
    children, 
    isHovered, 
    isPressed, 
    isDisabled, 
    isFocused, 
    isLoading,
    dashed,
    bordered,
    transparent,
    ...otherProps
}, forwardedRef) => (
    <BlankState
        {...otherProps}
        background={transparent ? 'transparent' : 'themed'}
        border={dashed ? 'dashed' : bordered ? 'bordered' : 'none'}
        ref={forwardedRef}
    >
        {children}
    </BlankState>
));

export const StyledBlankState = ExtendedBlankState