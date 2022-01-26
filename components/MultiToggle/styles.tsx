import React from 'react'
import { styled } from '../../stitches.config'

const sharedFontStyles = {
    fontFamily: '$jetbrains',
    fontSize: '11px',
    fontWeight: 'light',
    fontStyle: 'normal',
    textAlign: 'center',
    cursor: 'pointer',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    lineHeight: 1,
    // lineSpacing: 'normal'
}

const StyledSwitch = styled('div', {
    position: 'relative',
    display: 'inline-flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    gap: 0,
    
    width: 'fit-content',
    bc: '$accentBase',
    br: '$2',
    p: 0,
    border: '1px solid $accentBorder',
    $$shadow: '$colors$panelBg',
    boxShadow: 'inset 1px 1px 1px 1px $$shadow, 0 0.5px $$shadow',

    variants: {
        size: {
            1: { height: '28px' },
            2: { height: '30px' },
        }
    },
    defaultVariants: {
        size: '2'
    }
})

const StyledSwitchRadio = styled('input', {
    display: 'none'
})

const StyledSwitchSelection = styled('span', {
    display: 'block',
    position: 'absolute',
    
    top: 0,
    left: 0,

    my: '1.15px',
    mx: '1.25px',
    
    border: '1px solid $accentBorder',
    br: '$2',
    transition: 'left 0.3s ease-in-out',

    zIndex: 100,
    cursor: 'pointer',

    bc: '$accentBorder',
    opacity: 1,

    '&:hover': {
        bc: '$accentTextContrast',
        color: '$dark1'
    },
    '&:active': {
        bc: '$accentTextContrast',
        color: '$light1',
        borderColor: '$accentFocusRing'
    },

    variants: {
        isHovered: {
            true: {
                color: '$accentTextContrast',
                bc: '$accentBgHover',
                borderColor: '$accentBorderHover'
            }
        },
        isFocused: {
            true: {
                color: '$accentTextContrast',
                bc: '$accentBgActive',
                borderColor: '$accentFocusRing'
            }
        },
        size: {
            1: { height: '24px', width: '41px' },
            2: { height: '24px', width: '44px' },
            3: { height: '26px', width: '47px' },
            4: { height: '26px', width: '50px' },
        },
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        size: '3'
    }
})


export const Switch = StyledSwitch
export const SwitchSelection = StyledSwitchSelection
export const SwitchRadio = StyledSwitchRadio

export const StyledSwitchLabel = styled('label', {
    position: 'relative',
    float: 'left',
   
    bc: 'transparent',
    
    ...sharedFontStyles,
    m: 0,
    p: 0,

    display: 'inline-flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    height: '100%',
    borderRight: '0.25px solid $accentBg',
    borderTopColor: '$panelBase',

    zIndex: 0,

    variants: {
        size: {
            1: { width: '44px' },
            2: { width: '47px' },
            3: { width: '50px' },
            4: { width: '53px' },
        },
        checked: {
            true: {
                transition: '0.3 ease-out',
                color: '$dark1'
            },
            false: null
        }
    },
    defaultVariants: {
        size: '3',
        checked: false
    }
});

type SwitchProps = React.ComponentProps<typeof StyledSwitchLabel> & {
    children: React.ReactNode;
    onClick: (value: string) => void;
}

const ExtendedLabel = React.forwardRef<HTMLLabelElement, SwitchProps>(
    ({ onClick, checked, children, ...otherProps }, forwardedRef) => (
        <StyledSwitchLabel 
            {...otherProps}
            checked={checked}
            onClick={onClick} 
            ref={forwardedRef}
        >
            {children}
        </StyledSwitchLabel>
    )
);

export const SwitchLabel = ExtendedLabel