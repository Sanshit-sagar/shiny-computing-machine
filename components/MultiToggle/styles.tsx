import React from 'react'
import { styled } from '../../stitches.config'

const StyledSwitch = styled('div', {
    position: 'relative',
    display: 'inline-flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    gap: 0,
    height: '28px',
    width: 'fit-content',
    bc: '$accentBase',
    br: '$1',
    pt: '1px',
    border: '1px solid $accentBorder',
    $$shadow: '$colors$panelBg',
    boxShadow: 'inset 1px 1px 1px 1px $$shadow, 0 0.5px $$shadow'
})

const StyledSwitchRadio = styled('input', {
    display: 'none'
})

const StyledSwitchSelection = styled('span', {
    display: 'block',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '45px',
    height: '24px',
    my: '1.15px',
    mx: '1.25px',
    bc: '$accentBg',

    border: '1px solid $accentBorder',
    br: '$1',

    transition: 'left 0.3s ease-in-out'
})


export const Switch = StyledSwitch
export const SwitchSelection = StyledSwitchSelection
export const SwitchRadio = StyledSwitchRadio

export const StyledSwitchLabel = styled('label', {
    position: 'relative',
    zIndex: 2,
    float: 'left',
    width: '47.5px',
    lineHeight: 1.5,
    fontSize: '10px',
    color: '$accentText',
    textAlign: 'center',
    cursor: 'pointer',
    m: 0,
    display: 'inline-flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    height: '100%',
    borderRight: '0.25px solid $accentBg',
    borderTopColor: '$panelBase',

    '&:hover': {
        color: '$accentTextContrast'
    },

    variants: {
        checked: {
            true: {
                transition: '0.15 ease-out',
                color: '$accentTextContrast'
            },
            false: null
        }
    },
    defaultVariants: {
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