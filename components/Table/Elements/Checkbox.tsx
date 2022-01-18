import React from 'react'; 
import { styled } from '@stitches/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
    all: 'unset',
    width: 15,
    height: 15,
    display: 'flex',
    ai: 'center',
    jc: 'center',
    border: '1px solid',
    br: '$2',
    padding: 0,
    margin: 0,

    variants: {
        isHovered: {
            true: {
                bc: '$accentBgHover',
                color: '$accentText',
                borderColor: '$accentBorderHover',
            },
            false: null
        },
        isFocused: {
            true: {
                bc: '$accentSolidActive',
                color: '$accentText',
                borderColor: '$accentFocusRing',
            },
            false: null
        },
        isPressed: {
            true: {
                bc: '$accentSolidActive',
                color: '$accentTextContrast',
                borderColor: '$accentFocusRing',
            },
            false: null
        },
        isDisabled: {
            true: {
                bc: '$disabledSolidActive',
                color: '$disabledText',
                borderColor: '$disabledBorder',
            },
            false: null 
        },
        isSelected: {
            true: {
                bc: '$accentLine',
                color: '$accentText',
                borderColor: '$accentBorder',
            },
            false: null
        },
        isVisible: {
            true: {
               visibility: 'visible',
            },
            false: {
                visibility: 'hidden',
            }   
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isDisabled: false,
        isSelected: false,
        isVisible: false
    }
})

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox> & Partial<{
    checked: boolean;
    isFocused: boolean;
    isPressed: boolean;
    isHovered: boolean; 
    isDisabled: boolean;
}>; 

const ExtendedCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ 
    checked, 
    isHovered,
    isFocused, 
    isPressed,
    isDisabled, 
}, forwardedRef) => {

    return (
        <StyledCheckbox
            ref={forwardedRef} 
            isVisible={true}
            isSelected={checked}
            isHovered={isHovered}
            isFocused={isFocused}
            isPressed={isPressed} 
            isDisabled={isDisabled}
        />
    )
}); 

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
    color: 'red'
})

export const Checkbox = ExtendedCheckbox
export const CheckboxIndicator = StyledIndicator

